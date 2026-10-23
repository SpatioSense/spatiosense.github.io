// Native touch targets must exist before the gesture: focusing a hidden input
// from Bevy's next animation frame cannot reliably open a phone's keyboard.
let nextFontFamily = 0;
export function createTextInputBridge(window, canvas, wake) {
	const document = window.document;
	const root = document.createElement("div");
	root.dataset.embodxTextInputs = "";
	root.style.cssText =
		"position:absolute;inset:0;pointer-events:none;z-index:1";
	canvas.after(root);
	const fields = new Map();
	const fonts = new Map();
	let events = [];
	let disposed = false;
	let retiring = false;
	const send = (event) => {
		if (!disposed) {
			events.push(event);
			if (!retiring) wake();
		}
	};
	const styleFocus = (state) => {
		const active = document.activeElement === state.input;
		state.input.style.opacity = active ? "1" : "0";
	};
	const create = (field) => {
		const input = document.createElement("input");
		input.type = "text";
		input.autocomplete = "off";
		input.autocapitalize = "off";
		input.spellcheck = false;
		input.setAttribute("autocorrect", "off");
		input.enterKeyHint = "done";
		input.style.cssText =
			"position:fixed;box-sizing:border-box;margin:0;padding:0;border:0;border-radius:0;outline:0;pointer-events:auto;touch-action:auto;user-select:text;-webkit-user-select:text;-webkit-touch-callout:default;font-family:sans-serif;opacity:0";
		const state = { input, field, composing: false, dirty: false };
		const publish = () => {
			// Bevy limits Unicode scalar values; HTML maxlength counts UTF-16 units.
			const limit = state.field.maxCharacters;
			if (limit != null && Array.from(input.value).length > limit)
				input.value = Array.from(input.value).slice(0, limit).join("");
			state.dirty = true;
			send({ id: field.id, kind: "input", value: input.value });
		};
		input.addEventListener("focus", () => {
			styleFocus(state);
			send({ id: field.id, kind: "focus" });
		});
		input.addEventListener("blur", () => {
			if (state.composing) {
				state.composing = false;
				publish();
			}
			styleFocus(state);
			send({ id: field.id, kind: "blur" });
		});
		input.addEventListener("compositionstart", () => {
			state.composing = true;
		});
		input.addEventListener("compositionend", () => {
			state.composing = false;
			publish();
		});
		input.addEventListener("input", (event) => {
			if (!state.composing && !event.isComposing) publish();
		});
		// Let the native editor handle selection, copy/paste and the soft keyboard;
		// none of these events should also reach canvas/host shortcut handlers.
		for (const type of [
			"pointerdown",
			"pointerup",
			"touchstart",
			"touchmove",
			"touchend",
			"contextmenu",
			"keyup",
		])
			input.addEventListener(type, (event) => event.stopPropagation());
		input.addEventListener("keydown", (event) => {
			event.stopPropagation();
			if (
				!state.composing &&
				!event.isComposing &&
				(event.key === "Enter" || event.key === "Escape")
			) {
				event.preventDefault();
				input.blur();
				canvas.focus({ preventScroll: true });
			}
		});
		root.append(input);
		return state;
	};
	const position = () => {
		const canvasRect = canvas.getBoundingClientRect();
		const sx = canvasRect.width / canvas.width;
		const sy = canvasRect.height / canvas.height;
		for (const { input, field } of fields.values()) {
			const [x0, y0, x1, y1] = field.rect;
			const [cx0, cy0, cx1, cy1] = field.clip;
			const visibleFontSize = Math.max(1, field.fontSize * sy);
			const editorFontSize = Math.max(16, visibleFontSize);
			// Keep the layout font at 16px to avoid iOS focus zoom, while rendering
			// at the same size as Bevy. Scale the entire editor's geometry with it.
			const scale = visibleFontSize / editorFontSize;
			const dx = sx / scale;
			const dy = sy / scale;
			const face = fonts.get(field.fontId);
			Object.assign(input.style, {
				left: `${canvasRect.left + x0 * sx}px`,
				top: `${canvasRect.top + y0 * sy}px`,
				width: `${(x1 - x0) * dx}px`,
				height: `${(y1 - y0) * dy}px`,
				clipPath: `inset(${(cy0 - y0) * dy}px ${(x1 - cx1) * dx}px ${(y1 - cy1) * dy}px ${(cx0 - x0) * dx}px)`,
				fontSize: `${editorFontSize}px`,
				fontFamily:
					face?.status === "loaded"
						? `"${face.family}"`
						: (field.fontFamily ?? "sans-serif"),
				transformOrigin: "top left",
				transform: `scale(${scale})`,
				color: field.foreground,
				backgroundColor: field.background,
				paddingLeft: `${Math.max(0, (field.padding?.[0] ?? 0) * sx - 1) / scale}px`,
				paddingRight: `${Math.max(0, (field.padding?.[1] ?? 0) * sx - 1) / scale}px`,
				border: `${1 / scale}px solid transparent`,
				backgroundClip: "padding-box",
				borderRadius: `${3 / scale}px`,
			});
		}
	};
	window.addEventListener("resize", position);
	window.addEventListener("scroll", position, true);
	window.visualViewport?.addEventListener("resize", position);
	window.visualViewport?.addEventListener("scroll", position);
	return {
		registerFont(id, bytes) {
			if (disposed || fonts.has(id)) return;
			// Copy out of WASM memory before loading asynchronously; each host owns
			// its own faces so identical asset IDs in other apps cannot collide.
			const face = new window.FontFace(
				`spatiosense-input-${nextFontFamily++}`,
				bytes.slice(),
			);
			fonts.set(id, face);
			face
				.load()
				.then(() => {
					if (disposed) return;
					document.fonts.add(face);
					position();
					wake();
				})
				.catch((error) =>
					window.console.warn("Unable to load text-input font", error),
				);
		},
		sync(snapshot) {
			if (disposed) return;
			const live = new Set(snapshot.map((field) => field.id));
			for (const [id, state] of fields) {
				if (!live.has(id)) {
					state.input.blur();
					state.input.remove();
					fields.delete(id);
				}
			}
			for (const field of snapshot) {
				let state = fields.get(field.id);
				if (!state) {
					state = create(field);
					fields.set(field.id, state);
				}
				state.field = field;
				state.input.setAttribute("aria-label", field.label);
				if (
					!state.composing &&
					!state.dirty &&
					state.input.value !== field.value
				)
					state.input.value = field.value;
			}
			position();
		},
		drain() {
			const pending = events;
			events = [];
			for (const state of fields.values()) state.dirty = false;
			return pending;
		},
		dispose() {
			if (disposed) return [];
			// Flush the final composition/blur without waking a retiring host.
			retiring = true;
			for (const state of fields.values()) state.input.blur();
			disposed = true;
			root.remove();
			fields.clear();
			for (const face of fonts.values()) document.fonts.delete(face);
			fonts.clear();
			window.removeEventListener("resize", position);
			window.removeEventListener("scroll", position, true);
			window.visualViewport?.removeEventListener("resize", position);
			window.visualViewport?.removeEventListener("scroll", position);
			const pending = events;
			events = [];
			return pending;
		},
	};
}

// The Rust resource owns one instance; no module-global app/editor state.
export function createBrowserTextInputBridge(selector, wake) {
	const canvas = document.querySelector(selector);
	const bridge = canvas ? createTextInputBridge(window, canvas, wake) : null;
	return {
		registerFont: (id, bytes) => bridge?.registerFont(id, bytes),
		sync: (snapshot) => bridge?.sync(JSON.parse(snapshot)),
		drain: () => JSON.stringify(bridge?.drain() ?? []),
		dispose: () => JSON.stringify(bridge?.dispose() ?? []),
	};
}
