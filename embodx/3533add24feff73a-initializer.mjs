export default function initializer(options = {}) {
  let startedAt = 0;
  let raf = null;
  let resizeHandler = null;
  const mountRoot = options.mountRoot ?? document.body;
  const embedded = Boolean(options.embedded ?? options.mountRoot);

  const ui = {
    root: null,
    pct: null,
    bar: null,
    bytes: null,
    state: null,
    sub: null,
    pulse: null,
  };

  function humanBytes(n) {
    if (!Number.isFinite(n)) return "";
    const units = ["B", "KB", "MB", "GB"];
    let i = 0;
    let v = n;
    while (v >= 1024 && i < units.length - 1) {
      v /= 1024;
      i++;
    }
    return `${v.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
  }

  function clamp01(x) {
    return Math.max(0, Math.min(1, x));
  }

  function setProgress(value01, labelOverride) {
    const value = Math.round(clamp01(value01) * 100);
    if (ui.pct) ui.pct.textContent = labelOverride ?? `${value}%`;
    if (ui.bar) ui.bar.style.setProperty("--p", `${value}%`);
    if (ui.root) ui.root.style.setProperty("--p", `${value}%`);
  }

  function setState(title, subtitle) {
    if (ui.state) ui.state.textContent = title;
    if (ui.sub) ui.sub.textContent = subtitle ?? "";
  }

  function setBytes(current, total) {
    if (!ui.bytes) return;
    if (!total) {
      ui.bytes.textContent = `${humanBytes(current)} downloaded`;
    } else {
      ui.bytes.textContent = `${humanBytes(current)} / ${humanBytes(total)}`;
    }
  }

  function mount() {
    // Inject styles once
    if (!document.getElementById("trunk-init-style")) {
      const style = document.createElement("style");
      style.id = "trunk-init-style";
      style.textContent = `
:root {
  --bg0:#070A13;
  --bg1:#0B1024;
  --txt: rgba(255,255,255,.92);
  --mut: rgba(255,255,255,.65);
  --mut2: rgba(255,255,255,.45);
  --glass: rgba(255,255,255,.08);
  --glass2: rgba(255,255,255,.12);
  --stroke: rgba(255,255,255,.14);
  --good: #42FFB7;
  --bad:  #FF4D6D;
  --p: 0%;
}

#trunk-init {
  position: absolute; inset: 0;
  z-index: 999999;
  display: grid; place-items: center;
  background: radial-gradient(1200px 800px at 20% 10%, rgba(120,90,255,.20), transparent 60%),
              radial-gradient(900px 600px at 80% 30%, rgba(20,220,255,.14), transparent 55%),
              radial-gradient(1000px 800px at 40% 90%, rgba(66,255,183,.12), transparent 60%),
              linear-gradient(180deg, var(--bg0), var(--bg1));
  overflow: hidden;
}

#trunk-init .aurora {
  position: absolute; inset: -40%;
  background: conic-gradient(from 180deg, rgba(120,90,255,.0), rgba(120,90,255,.14), rgba(20,220,255,.12), rgba(66,255,183,.10), rgba(120,90,255,.0));
  filter: blur(30px);
  animation: aurora-spin 12s linear infinite;
  opacity: .9;
}

@keyframes aurora-spin { to { transform: rotate(360deg); } }

#trunk-init canvas.particles {
  position: absolute; inset: 0;
  opacity: .55;
}

#trunk-init .card {
  position: relative;
  width: min(520px, 92vw);
  border-radius: 22px;
  padding: 18px 18px 16px;
  background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.06));
  border: 1px solid var(--stroke);
  box-shadow: 0 20px 60px rgba(0,0,0,.45);
  backdrop-filter: blur(14px);
}

#trunk-init .top {
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; margin-bottom: 12px;
}

#trunk-init .brand {
  display: flex; align-items: center; gap: 10px;
  min-width: 0;
}

#trunk-init .logo {
  width: 34px; height: 34px; border-radius: 10px;
  background: radial-gradient(12px 12px at 30% 30%, rgba(255,255,255,.35), transparent 55%),
              linear-gradient(135deg, rgba(120,90,255,.95), rgba(20,220,255,.85));
  box-shadow: 0 10px 30px rgba(0,0,0,.28);
  position: relative;
  overflow: hidden;
}
#trunk-init .logo::after{
  content:"";
  position:absolute; inset:-40%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.28), transparent);
  transform: rotate(20deg);
  animation: shimmer 2.2s ease-in-out infinite;
}
@keyframes shimmer { 0%{ transform: translateX(-30%) rotate(20deg);} 100%{ transform: translateX(60%) rotate(20deg);} }

#trunk-init .titleWrap { min-width: 0; }
#trunk-init .title {
  font: 600 14px/1.2 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: var(--txt);
  letter-spacing: .2px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
#trunk-init .subtitle {
  font: 500 12px/1.2 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: var(--mut2);
  margin-top: 2px;
}

#trunk-init .pill {
  font: 700 12px/1 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: rgba(255,255,255,.92);
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.12);
}

#trunk-init .progress {
  margin-top: 12px;
  height: 12px;
  border-radius: 999px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.12);
  overflow: hidden;
  position: relative;
}

#trunk-init .progress::before{
  content:"";
  position:absolute; inset:0;
  background: radial-gradient(400px 50px at var(--p) 50%, rgba(255,255,255,.22), transparent 60%);
  opacity:.9;
  pointer-events:none;
}

#trunk-init .bar {
  height: 100%;
  width: var(--p);
  border-radius: 999px;
  background: linear-gradient(90deg,
    rgba(120,90,255,.95),
    rgba(20,220,255,.85),
    rgba(66,255,183,.85)
  );
  position: relative;
  transition: width 180ms ease;
}

#trunk-init .bar::after{
  content:"";
  position:absolute; inset:-40%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.24), transparent);
  transform: translateX(-60%);
  animation: bar-shimmer 1.4s ease-in-out infinite;
}
@keyframes bar-shimmer {
  0%{ transform: translateX(-60%); }
  100%{ transform: translateX(60%); }
}

#trunk-init .meta {
  margin-top: 10px;
  display:flex; justify-content: space-between; align-items:center;
  font: 500 12px/1.2 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: var(--mut);
  gap: 10px;
}

#trunk-init .hint { color: var(--mut2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
#trunk-init .bytes { color: var(--mut); font-variant-numeric: tabular-nums; }

#trunk-init .pulse {
  position:absolute;
  inset: -2px;
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,.10);
  box-shadow: 0 0 0 0 rgba(120,90,255,.18);
  animation: pulse 2.2s ease-in-out infinite;
  pointer-events:none;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(120,90,255,.14); }
  50%     { box-shadow: 0 0 0 18px rgba(120,90,255,.00); }
}

#trunk-init.ok .bar { background: linear-gradient(90deg, rgba(66,255,183,.95), rgba(20,220,255,.85)); }
#trunk-init.fail .bar { background: linear-gradient(90deg, rgba(255,77,109,.95), rgba(255,180,120,.85)); }

#trunk-init.fade {
  animation: fadeOut .35s ease forwards;
}
@keyframes fadeOut {
  to { opacity: 0; transform: translateY(4px); }
}
      `;
      document.head.appendChild(style);
    }

    const root = document.createElement("div");
    root.id = "trunk-init";
    root.innerHTML = `
      <div class="aurora"></div>
      <canvas class="particles" id="trunk-init-particles"></canvas>

      <div class="card" role="status" aria-live="polite">
        <div class="pulse" id="trunk-init-pulse"></div>

        <div class="top">
          <div class="brand">
            <div class="logo" aria-hidden="true"></div>
            <div class="titleWrap">
              <div class="title" id="trunk-init-state">Loading…</div>
              <div class="subtitle" id="trunk-init-sub">Fetching SpatioSense bundle</div>
            </div>
          </div>
          <div class="pill" id="trunk-init-pct">0%</div>
        </div>

        <div class="progress" aria-label="Loading progress">
          <div class="bar" id="trunk-init-bar"></div>
        </div>

        <div class="meta">
          <div class="bytes" id="trunk-init-bytes"></div>
          <div class="hint" id="trunk-init-hint">Preparing renderer…</div>
        </div>
      </div>
    `;
    mountRoot.prepend(root);

    if (embedded && mountRoot instanceof HTMLElement) {
      const computedPosition = window.getComputedStyle(mountRoot).position;
      if (computedPosition === "static") {
        mountRoot.style.position = "relative";
      }
    }

    ui.root = root;
    ui.pct = root.querySelector("#trunk-init-pct");
    ui.bar = root.querySelector("#trunk-init-bar");
    ui.bytes = root.querySelector("#trunk-init-bytes");
    ui.state = root.querySelector("#trunk-init-state");
    ui.sub = root.querySelector("#trunk-init-sub");
    ui.pulse = root.querySelector("#trunk-init-pulse");

    startParticles();
  }

  function unmountSoon(ok) {
    if (!ui.root) return;
    ui.root.classList.add(ok ? "ok" : "fail");
    // Let user see 100%/state briefly, then fade out
    setTimeout(
      () => {
        ui.root.classList.add("fade");
        setTimeout(() => {
          stopParticles();
          ui.root?.remove();
          ui.root = null;
        }, 380);
      },
      ok ? 600 : 2000,
    );
  }

  // Simple particles background (no deps)
  let p = [];
  let ctx, canvas;
  function startParticles() {
    canvas = ui.root?.querySelector("#trunk-init-particles");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    resizeHandler = () => {
      const rect =
        mountRoot instanceof HTMLElement
          ? mountRoot.getBoundingClientRect()
          : { width: window.innerWidth, height: window.innerHeight };
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler, { passive: true });

    const count = Math.min(
      90,
      Math.floor(
        (canvas.width * canvas.height) / (devicePixelRatio ** 2 * 22000),
      ),
    );
    p = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.8 + Math.random() * 2.2,
      vx: (Math.random() - 0.5) * 0.03,
      vy: (Math.random() - 0.5) * 0.03,
      a: 0.2 + Math.random() * 0.35,
    }));

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // subtle vignette
      ctx.fillStyle = "rgba(0,0,0,0.10)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const pt of p) {
        pt.x += pt.vx;
        pt.y += pt.vy;
        if (pt.x < -0.05) pt.x = 1.05;
        if (pt.x > 1.05) pt.x = -0.05;
        if (pt.y < -0.05) pt.y = 1.05;
        if (pt.y > 1.05) pt.y = -0.05;

        const X = pt.x * canvas.width;
        const Y = pt.y * canvas.height;
        ctx.beginPath();
        ctx.arc(X, Y, pt.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${pt.a})`;
        ctx.fill();
      }
    };
    loop();
  }

  function stopParticles() {
    if (raf) cancelAnimationFrame(raf);
    raf = null;
    if (resizeHandler) {
      window.removeEventListener("resize", resizeHandler);
      resizeHandler = null;
    }
  }

  return {
    onStart: () => {
      startedAt = performance.now();
      mount();
      setProgress(0);
      setState("Loading…", "Fetching SpatioSense bundle");
      setBytes(0, 0);
    },

    onProgress: ({ current, total }) => {
      setBytes(current, total);
      if (total) {
        setProgress(current / total);
        setState("Loading…", "Downloading SpatioSense Runtime");
      } else {
        // unknown total => keep bar moving “optimistically”
        const t = (performance.now() - startedAt) / 3000;
        const pseudo = 0.15 + 0.35 * (0.5 + 0.5 * Math.sin(t * Math.PI * 2));
        setProgress(pseudo, "…");
        setState("Loading…", `${humanBytes(current)} downloaded`);
      }
    },

    onComplete: () => {
      // download done, now initialization
      setProgress(0.98, "98%");
      setState("Initializing…", "Compiling & starting runtime");
    },

    onSuccess: (_wasm) => {
      setProgress(1, "100%");
      setState("Ready!", "Launching");
      unmountSoon(true);
    },

    onFailure: (error) => {
      setProgress(1, "!");
      setState("Failed", String(error?.message ?? error ?? "Unknown error"));
      if (ui.root) ui.root.classList.add("fail");
      unmountSoon(false);
    },
  };
}
