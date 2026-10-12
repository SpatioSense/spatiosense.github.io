// Shared by the standalone viewer and its webapp hosts. Submenu depth is local UI state.
export const MENU_HISTORY_KEY = "__spatiosenseMobileMenu";

export function createMenuHistory(history, changed) {
  const token =
    globalThis.crypto?.randomUUID?.() ?? `${Date.now()}:${Math.random()}`;
  let href = history.location.href;
  let desired = false;
  let pending = false;
  let disposed = false;
  let waiters = [];
  const ownsCurrent = () =>
    history.location.href === href &&
    history.location.state?.[MENU_HISTORY_KEY] === token;
  const enter = () => {
    href = history.location.href;
    history.push(href, {
      ...history.location.state,
      [MENU_HISTORY_KEY]: token,
    });
  };
  const unsubscribe = history.subscribe(() => {
    if (pending && !ownsCurrent()) {
      pending = false;
      const samePage = history.location.href === href;
      if (desired && !disposed && samePage) enter();
      else desired = false;
      const settled = waiters;
      waiters = [];
      settled.forEach((resolve) => {
        resolve();
      });
      if (disposed) unsubscribe();
      return;
    }
    const open = ownsCurrent();
    if (open !== desired && !disposed) {
      desired = open;
      changed(open);
    }
  });
  function setOpen(open) {
    if (disposed) return;
    desired = open;
    if (pending) return;
    if (open && !ownsCurrent()) enter();
    else if (!open && ownsCurrent()) {
      pending = true;
      history.back();
    }
  }
  return {
    setOpen,
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
  let requested = -1;
  const origin = window.location.origin;
  const parent = window.parent;
  const request = (open) => {
    requested = open ? 1 : 0;
    wake();
  };
  const standalone = parent === window && window.__EMBODX_STANDALONE__ === true;
  const history = standalone
    ? createMenuHistory(browserHistory(window), request)
    : null;
  const publish = () =>
    parent.postMessage(
      { type: "embodx:mobileMenuState", open: reported },
      origin,
    );
  const message = (event) => {
    if (standalone || event.origin !== origin || event.source !== parent)
      return;
    if (
      event.data?.type === "embodx:setMobileMenu" &&
      typeof event.data.open === "boolean"
    )
      request(event.data.open);
    else if (event.data?.type === "embodx:queryMobileMenu") publish();
  };
  window.addEventListener("message", message);
  if (!standalone) publish();
  return {
    sync(open) {
      // Apply host navigation before interpreting the still-old ECS state as a UI dismissal.
      if (requested !== -1) {
        const next = requested;
        requested = -1;
        reported = next === 1;
        return next;
      }
      if (reported !== open) {
        reported = open;
        if (history) history.setOpen(open);
        else publish();
      }
      return -1;
    },
    dispose() {
      window.removeEventListener("message", message);
      if (history) history.dispose();
      else {
        reported = false;
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
export function syncMobileMenu(open) {
  return bridge?.sync(open) ?? -1;
}
