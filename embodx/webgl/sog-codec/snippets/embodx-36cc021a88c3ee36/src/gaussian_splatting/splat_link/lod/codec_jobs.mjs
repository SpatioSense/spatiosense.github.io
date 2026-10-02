// Bounded transfer/lifetime contract; no ECS access. Each worker processes one
// job and is terminated even after success to release its WASM memory high water.
export const CODEC_BYTE_ALLOWANCE = 128 * 1024 * 1024;

export function reservationFor(files) {
  let input = 0,
    output = 0,
    largest = 0;
  for (const file of files) {
    const bytes = file.width * file.height * 4;
    input += file.bytes.byteLength;
    output += bytes;
    largest = Math.max(largest, bytes);
  }
  // Input/output handoff copies plus a conservative working envelope for the
  // largest serially decoded image. This is not measured browser-process RSS.
  return 4 * 1024 * 1024 + 4 * input + 2 * output + 8 * largest;
}

export class CodecJobs {
  constructor(createWorker, byteAllowance = CODEC_BYTE_ALLOWANCE) {
    this.createWorker = createWorker;
    this.byteAllowance = byteAllowance;
    this.active = null;
    this.stats = {
      started: 0,
      completed: 0,
      failed: 0,
      decodeMs: 0,
      reservedBytes: 0,
      peakReservedBytes: 0,
    };
  }
  busy() {
    return this.active !== null;
  }
  start(identity, files, limits) {
    if (this.busy()) throw Error("SOG codec busy");
    if (!Array.isArray(files) || files.length === 0 || files.length > 7)
      throw Error("SOG codec texture count");
    const names = new Set();
    let output = 0;
    for (const file of files) {
      if (
        typeof file.name !== "string" ||
        names.has(file.name) ||
        !(file.bytes instanceof ArrayBuffer) ||
        file.bytes.byteLength === 0 ||
        !Number.isSafeInteger(file.width) ||
        !Number.isSafeInteger(file.height) ||
        file.width <= 0 ||
        file.height <= 0 ||
        file.width > limits.maxDimension ||
        file.height > limits.maxDimension
      )
        throw Error("invalid SOG codec input");
      names.add(file.name);
      output += file.width * file.height * 4;
    }
    const reserved = reservationFor(files);
    if (
      !Number.isSafeInteger(limits.maxOutputBytes) ||
      output > limits.maxOutputBytes ||
      !Number.isSafeInteger(limits.reservedPeakBytes) ||
      reserved > limits.reservedPeakBytes ||
      limits.reservedPeakBytes > this.byteAllowance
    )
      throw Error("SOG codec byte allowance exceeded");
    const worker = this.createWorker();
    this.stats.started++;
    this.stats.reservedBytes = reserved;
    this.stats.peakReservedBytes = Math.max(
      this.stats.peakReservedBytes,
      reserved,
    );
    return new Promise((resolve, reject) => {
      const job = { identity, worker, reject, finish: null };
      this.active = job;
      const finish = (error, textures) => {
        if (this.active !== job) return;
        this.active = null;
        clearTimeout(job.timer);
        this.stats.reservedBytes = 0;
        if (error) this.stats.failed++;
        else this.stats.completed++;
        worker.onmessage = null;
        worker.onerror = null;
        worker.onmessageerror = null;
        worker.terminate();
        if (error) reject(Error(error));
        else resolve(textures);
      };
      job.finish = finish;
      job.timer = setTimeout(() => finish("SOG codec timed out"), 60000);
      worker.onmessage = ({ data }) => {
        if (
          data?.identity?.job !== identity.job ||
          data?.identity?.scene !== identity.scene ||
          data?.identity?.source !== identity.source
        )
          return;
        if (data.error) {
          finish(
            data.kind === "boot"
              ? `SOG codec worker failed: ${data.error}`
              : `SOG codec: ${data.error}`,
          );
          return;
        }
        const textures = data.textures;
        if (!Array.isArray(textures) || textures.length !== files.length) {
          finish("invalid SOG codec result count");
          return;
        }
        const unique = new Set();
        for (const result of textures) {
          if (!result || typeof result !== "object") {
            finish("invalid SOG codec result shape");
            return;
          }
          const expected = files.find((file) => file.name === result.name);
          if (
            !expected ||
            unique.has(result.name) ||
            result.width !== expected.width ||
            result.height !== expected.height ||
            !(result.pixels instanceof ArrayBuffer) ||
            result.pixels.byteLength !== result.width * result.height * 4
          ) {
            finish("invalid SOG codec result shape");
            return;
          }
          unique.add(result.name);
        }
        if (Number.isFinite(data.decodeMs) && data.decodeMs >= 0)
          this.stats.decodeMs += data.decodeMs;
        finish(null, textures);
      };
      worker.onerror = (event) => {
        event.preventDefault?.();
        finish(`SOG codec worker failed: ${event.message ?? "unknown error"}`);
      };
      worker.onmessageerror = () => finish("SOG codec message decode failed");
      try {
        worker.postMessage(
          {
            identity,
            files,
            maxDimension: limits.maxDimension,
            maxOutputBytes: limits.maxOutputBytes,
          },
          files.map((file) => file.bytes),
        );
      } catch (error) {
        finish(`SOG codec transfer failed: ${error}`);
      }
    });
  }
  cancel(id) {
    if (this.active?.identity.job === id)
      this.active.finish("SOG codec cancelled");
  }
  close() {
    this.active?.finish("SOG codec closed");
  }
}

let pool;
let unavailable = "";
export function codec_requested() {
  return (
    typeof location !== "undefined" &&
    new URLSearchParams(location.search).get("sog_decode") === "worker"
  );
}
export function codec_unavailable_reason() {
  return (
    unavailable ||
    (typeof Worker === "undefined" ? "module workers are unavailable" : "")
  );
}
export function codec_busy() {
  return pool?.busy() ?? false;
}
export function codec_start(identity, files, limits, version) {
  if (!pool) {
    pool = new CodecJobs(() => {
      try {
        const url = new URL("sog-decode-worker.mjs", document.baseURI);
        url.searchParams.set("v", version);
        return new Worker(url, {
          type: "module",
          name: "SOG exact codec",
        });
      } catch (error) {
        unavailable = String(error);
        throw error;
      }
    });
    window.__EMBODX_SOG_CODEC__ = pool.stats;
    window.addEventListener("pagehide", () => pool.close(), { once: true });
  }
  return pool.start(identity, files, limits).catch((error) => {
    if (
      error.message.includes("worker failed") ||
      error.message.includes("timed out")
    )
      unavailable = error.message;
    throw error;
  });
}
export function codec_cancel(id) {
  pool?.cancel(id);
}
