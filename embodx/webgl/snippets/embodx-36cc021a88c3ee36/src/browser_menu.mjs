// Shared by standalone and embedded viewers. Menu paths live in history.state,
// never in the URL (whose fragment may carry an invitation credential).
export const MENU_HISTORY_KEY = "__spatiosenseMobileMenu";

export const isMenuPath = (path) =>
	Array.isArray(path) &&
	path.length <= 16 &&
	path.every((part) => typeof part === "string" && part.length <= 64);
const samePath = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Browser-owned text and sticky activation rules apply. Mobile OS/tab-manager
// closes may bypass this event entirely; this is not a persistence mechanism.
export function installLeaveConfirmation(window, enabled) {
	const confirm = (event) => {
		if (!enabled()) return;
		event.preventDefault();
		event.returnValue = true;
	};
	window.addEventListener("beforeunload", confirm);
	return () => window.removeEventListener("beforeunload", confirm);
}

export function createMenuHistory(history, changed) {
	const token =
		globalThis.crypto?.randomUUID?.() ?? `${Date.now()}:${Math.random()}`;
	let href = history.location.href;
	let desired = null;
	let pending = false;
	let disposed = false;
	let pushing = false;
	let waiters = [];
	const current = () => {
		const entry = history.location.state?.[MENU_HISTORY_KEY];
		return history.location.href === href &&
			entry?.token === token &&
			isMenuPath(entry.path)
			? entry.path
			: null;
	};
	const ownsCurrent = () => current() !== null;
	const enter = (path) => {
		pushing = true;
		history.push(href, {
			...history.location.state,
			[MENU_HISTORY_KEY]: { token, path },
		});
		pushing = false;
	};
	const settle = () => {
		const settled = waiters;
		waiters = [];
		for (const resolve of settled) resolve();
		if (disposed) unsubscribe();
	};
	const reconcile = () => {
		if (history.location.href !== href) {
			desired = null;
			settle();
			return;
		}
		const path = current();
		const prefix =
			path !== null &&
			desired !== null &&
			path.length <= desired.length &&
			path.every((part, i) => part === desired[i]);
		if (path !== null && !prefix) {
			pending = true;
			history.back();
			return;
		}
		if (desired !== null) {
			if (path === null) enter([]);
			for (
				let depth = (path?.length ?? 0) + 1;
				depth <= desired.length;
				depth++
			)
				enter(desired.slice(0, depth));
		}
		settle();
	};
	const unsubscribe = history.subscribe(() => {
		if (pushing) return;
		if (pending) {
			pending = false;
			reconcile();
		} else if (!disposed) {
			const path = current();
			if (!samePath(path, desired)) {
				desired = path;
				changed(path !== null, path ?? []);
			}
		}
	});
	function setOpen(open, path = []) {
		if (disposed || !isMenuPath(path)) return;
		desired = open ? [...path] : null;
		if (pending) return;
		if (open && !ownsCurrent()) href = history.location.href;
		reconcile();
	}
	return {
		setOpen,
		dismiss() {
			setOpen(false);
			if (!disposed) changed(false, []);
		},
		ownsCurrent,
		isPending: () => pending,
		whenSettled: () =>
			pending
				? new Promise((resolve) => waiters.push(resolve))
				: Promise.resolve(),
		dispose() {
			setOpen(false);
			disposed = true;
			if (!pending) unsubscribe();
		},
	};
}

export function browserHistory(window) {
	return {
		get location() {
			return { href: window.location.href, state: window.history.state };
		},
		push: (href, state) => window.history.pushState(state, "", href),
		replace: (href, state) => window.history.replaceState(state, "", href),
		back: () => window.history.back(),
		subscribe(listener) {
			window.addEventListener("popstate", listener);
			return () => window.removeEventListener("popstate", listener);
		},
	};
}

export function createViewerMenuBridge(window, wake) {
	let reported = false;
	let mobile = false;
	let reportedPath = [];
	let requestedPath = [];
	let requested = -1;
	const origin = window.location.origin;
	const parent = window.parent;
	const request = (open, path = []) => {
		requested = open ? 1 : 0;
		requestedPath = open ? path : [];
		wake();
	};
	const standalone = parent === window && window.__EMBODX_STANDALONE__ === true;
	const history = standalone
		? createMenuHistory(browserHistory(window), request)
		: null;
	const removeConfirmation = standalone
		? installLeaveConfirmation(window, () => mobile)
		: () => {};
	const publish = () =>
		parent.postMessage(
			{
				type: "embodx:mobileMenuState",
				open: reported,
				path: reportedPath,
				mobile,
			},
			origin,
		);
	const message = (event) => {
		if (standalone || event.origin !== origin || event.source !== parent)
			return;
		if (
			event.data?.type === "embodx:setMobileMenu" &&
			typeof event.data.open === "boolean" &&
			isMenuPath(event.data.path ?? [])
		)
			request(event.data.open, event.data.path ?? []);
		else if (event.data?.type === "embodx:queryMobileMenu") publish();
	};
	window.addEventListener("message", message);
	if (!standalone) publish();
	return {
		sync(open, path = [], mobileLayout = false) {
			const layoutChanged = mobile !== mobileLayout;
			mobile = mobileLayout;
			// Apply host navigation before interpreting the still-old ECS state as a UI dismissal.
			if (requested !== -1) {
				const next = requested;
				requested = -1;
				reported = next === 1;
				reportedPath = requestedPath;
				if (layoutChanged && !standalone) publish();
				return next;
			}
			if (layoutChanged || reported !== open || !samePath(path, reportedPath)) {
				reported = open;
				reportedPath = open ? path : [];
				if (history) history.setOpen(open, reportedPath);
				else publish();
			}
			return -1;
		},
		requestedPath: () => requestedPath,
		dispose() {
			removeConfirmation();
			window.removeEventListener("message", message);
			if (history) history.dispose();
			else {
				reported = false;
				reportedPath = [];
				mobile = false;
				publish();
			}
		},
	};
}

let bridge;
export function installMobileMenuBridge(wake) {
	bridge?.dispose();
	bridge = createViewerMenuBridge(window, wake);
}
export function syncMobileMenu(open, path, mobile) {
	return bridge?.sync(open, JSON.parse(path), mobile) ?? -1;
}
export function mobileMenuRequestedPath() {
	return JSON.stringify(bridge?.requestedPath() ?? []);
}
