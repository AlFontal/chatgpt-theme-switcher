import { DEFAULT_THEME, themes } from "./themes.js";
import { themeCSS, uiCSS } from "./styles.js";

const STORAGE_KEY = "alfontal-chatgpt-theme";
const THEME_STYLE_ID = "alfontal-chatgpt-theme-style";
const UI_STYLE_ID = "alfontal-chatgpt-theme-ui-style";
const THEME_BUTTON_ID = "alfontal-theme-button";
const THEME_MENU_ID = "alfontal-theme-menu";

const LEGACY_MARKER_CLASSES = [
  "af-user-message-bubble",
  "af-composer-gradient",
  "af-composer-shell",
  "af-code-block",
  "af-code-frame",
  "af-code-header",
  "af-code-body",
  "af-code-pre",
  "af-permission-dialog",
  "af-permission-primary",
  "af-permission-secondary",
  "af-mode-switcher",
  "af-mode-option",
  "af-mode-active",
  "af-work-toolbar"
];

const PERMISSION_STYLE_PROPERTIES = [
  "background",
  "background-color",
  "background-image",
  "color",
  "border-color",
  "box-shadow",
  "backdrop-filter",
  "-webkit-backdrop-filter"
];

function installUIStyle() {
  if (document.getElementById(UI_STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = UI_STYLE_ID;
  style.textContent = uiCSS({
    themeButtonId: THEME_BUTTON_ID,
    themeMenuId: THEME_MENU_ID
  });
  (document.head || document.documentElement).appendChild(style);
}

function getCurrentThemeId() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
}

function clearPermissionInlineStyles() {
  document
    .querySelectorAll(
      ".af-permission-dialog, .af-permission-primary, .af-permission-secondary"
    )
    .forEach(element => {
      for (const property of PERMISSION_STYLE_PROPERTIES) {
        element.style.removeProperty(property);
      }
    });
}

function clearDynamicThemeMarkers() {
  clearPermissionInlineStyles();

  for (const className of LEGACY_MARKER_CLASSES) {
    document.querySelectorAll(`.${className}`).forEach(element => {
      element.classList.remove(className);
    });
  }
}

function findCodeSurface(viewer) {
  let node = viewer.parentElement;

  while (node && node !== document.body) {
    const isCodeSurface = [...node.classList].some(className =>
      className.includes("--code-block-surface")
    );

    if (isCodeSurface) return node;
    node = node.parentElement;
  }

  return null;
}

function markCodeBlocks() {
  if (getCurrentThemeId() === "chatgpt-default") return;

  for (const viewer of document.querySelectorAll("#code-block-viewer")) {
    const surface = findCodeSurface(viewer);
    if (!surface) continue;

    surface.classList.add("af-code-block");

    const frame = surface.parentElement;
    if (frame?.classList.contains("border-token-border-light")) {
      frame.classList.add("af-code-frame");
    }

    const header = [...surface.children].find(child =>
      Boolean(child.querySelector('button[aria-label="Copy"]')) &&
      !child.querySelector("#code-block-viewer")
    );

    header?.classList.add("af-code-header");
  }
}

function setImportantStyle(element, property, value) {
  element.style.setProperty(property, value, "important");
}

function markPermissionDialogs() {
  if (getCurrentThemeId() === "chatgpt-default") return;

  for (const dialog of document.querySelectorAll('[role="dialog"], [role="alertdialog"]')) {
    const text = dialog.textContent || "";
    const isPermissionDialog =
      text.includes("Allow ChatGPT to use") ||
      text.includes("Allow once") ||
      text.includes("Always allow");

    if (!isPermissionDialog) continue;

    dialog.classList.add("af-permission-dialog");
    setImportantStyle(dialog, "background", "var(--af-surface)");
    setImportantStyle(dialog, "background-color", "var(--af-surface)");
    setImportantStyle(dialog, "background-image", "none");
    setImportantStyle(dialog, "color", "var(--af-text)");
    setImportantStyle(dialog, "border-color", "var(--af-border)");
    setImportantStyle(dialog, "box-shadow", "0 18px 60px rgba(0,0,0,.22)");
    setImportantStyle(dialog, "backdrop-filter", "none");
    setImportantStyle(dialog, "-webkit-backdrop-filter", "none");

    for (const child of dialog.querySelectorAll("h1, h2, h3, p, span, a, div")) {
      if (child.closest("button")) continue;
      setImportantStyle(child, "color", "inherit");
    }

    for (const divider of dialog.querySelectorAll("hr, [class*='border']")) {
      setImportantStyle(divider, "border-color", "var(--af-border)");
    }

    for (const button of dialog.querySelectorAll("button")) {
      const label = (button.textContent || "").trim();
      setImportantStyle(button, "box-shadow", "none");
      setImportantStyle(button, "border-color", "var(--af-border)");

      if (/^Allow once$/i.test(label)) {
        button.classList.add("af-permission-primary");
        setImportantStyle(button, "background", "var(--af-accent)");
        setImportantStyle(button, "background-color", "var(--af-accent)");
        setImportantStyle(button, "color", "var(--af-main)");
      } else if (/^(Always allow|Deny)$/i.test(label)) {
        button.classList.add("af-permission-secondary");
        setImportantStyle(button, "background", "var(--af-surface-2)");
        setImportantStyle(button, "background-color", "var(--af-surface-2)");
        setImportantStyle(button, "color", "var(--af-text)");
      }
    }
  }
}

function isVisible(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const style = getComputedStyle(element);
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    style.display !== "none" &&
    style.visibility !== "hidden"
  );
}

function findInteractiveByExactText(label) {
  const selectors = [
    "button",
    '[role="button"]',
    '[role="tab"]',
    "a"
  ];

  return [...document.querySelectorAll(selectors.join(","))].find(element =>
    isVisible(element) && (element.textContent || "").trim() === label
  );
}

function nearestCommonAncestor(elements) {
  const valid = elements.filter(Boolean);
  if (!valid.length) return null;

  let node = valid[0];
  while (node && node !== document.documentElement) {
    if (valid.every(element => node.contains(element))) return node;
    node = node.parentElement;
  }

  return null;
}

function compactAncestorFor(elements, { maxHeight, maxWidth }) {
  let node = nearestCommonAncestor(elements);
  if (!node) return null;

  while (node && node !== document.body) {
    const rect = node.getBoundingClientRect();
    if (
      rect.width > 0 &&
      rect.height > 0 &&
      rect.height <= maxHeight &&
      rect.width <= maxWidth
    ) {
      return node;
    }
    node = node.parentElement;
  }

  return null;
}

function markModeSwitcher() {
  const chat = findInteractiveByExactText("Chat");
  const work = findInteractiveByExactText("Work");
  if (!chat || !work) return;

  const container = compactAncestorFor([chat, work], {
    maxHeight: 120,
    maxWidth: 700
  });
  if (!container) return;

  container.classList.add("af-mode-switcher");
  chat.classList.add("af-mode-option");
  work.classList.add("af-mode-option");

  const workLanding = [...document.querySelectorAll("h1, h2, div")].some(element =>
    isVisible(element) &&
    (element.textContent || "").trim() === "What should we work on?"
  );

  const selected = [chat, work].find(element =>
    element.getAttribute("aria-selected") === "true" ||
    element.getAttribute("aria-pressed") === "true" ||
    element.dataset.state === "active"
  );

  if (selected) {
    selected.classList.add("af-mode-active");
  } else {
    (workLanding ? work : chat).classList.add("af-mode-active");
  }
}

function markWorkToolbar() {
  const labels = ["Project", "Files", "Plugins", "Get desktop app"];
  const controls = labels
    .map(findInteractiveByExactText)
    .filter(Boolean);

  if (controls.length < 3) return;

  const toolbar = compactAncestorFor(controls, {
    maxHeight: 150,
    maxWidth: 1800
  });
  if (!toolbar) return;

  toolbar.classList.add("af-work-toolbar");
}

function refreshDynamicThemeMarkers() {
  clearDynamicThemeMarkers();
  if (getCurrentThemeId() === "chatgpt-default") return;
  markCodeBlocks();
  markPermissionDialogs();
  markModeSwitcher();
  markWorkToolbar();
}

function applyTheme(themeId) {
  if (themeId === "chatgpt-default") {
    document.getElementById(THEME_STYLE_ID)?.remove();
    localStorage.setItem(STORAGE_KEY, "chatgpt-default");
    clearDynamicThemeMarkers();
    updateThemeMenuSelection();
    return;
  }

  const safeThemeId = themes[themeId] ? themeId : DEFAULT_THEME;
  const theme = themes[safeThemeId];

  let style = document.getElementById(THEME_STYLE_ID);
  if (!style) {
    style = document.createElement("style");
    style.id = THEME_STYLE_ID;
    (document.head || document.documentElement).appendChild(style);
  }

  style.textContent = themeCSS(theme);
  localStorage.setItem(STORAGE_KEY, safeThemeId);
  refreshDynamicThemeMarkers();
  updateThemeMenuSelection();
}

function createThemeOption(themeId, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "af-theme-option";
  button.dataset.themeId = themeId;

  const dot = document.createElement("span");
  dot.className = "af-theme-dot";

  const text = document.createElement("span");
  text.textContent = label;

  button.append(dot, text);
  button.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    applyTheme(themeId);
    closeThemeMenu();
  });

  return button;
}

function createThemeSwitcher() {
  if (!document.body) return;

  if (document.getElementById(THEME_BUTTON_ID)) {
    updateThemeMenuSelection();
    return;
  }

  const button = document.createElement("button");
  button.id = THEME_BUTTON_ID;
  button.type = "button";
  button.textContent = "◉";
  button.title = "Change ChatGPT theme";
  button.setAttribute("aria-label", "Change ChatGPT theme");

  const menu = document.createElement("div");
  menu.id = THEME_MENU_ID;
  menu.setAttribute("role", "menu");

  for (const [themeId, theme] of Object.entries(themes)) {
    menu.appendChild(createThemeOption(themeId, theme.name));
  }

  const separator = document.createElement("div");
  separator.className = "af-separator";
  menu.appendChild(separator);
  menu.appendChild(createThemeOption("chatgpt-default", "ChatGPT Default"));

  button.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    menu.classList.toggle("af-open");
  });

  menu.addEventListener("click", event => event.stopPropagation());

  document.addEventListener("click", event => {
    if (!menu.contains(event.target) && event.target !== button) closeThemeMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeThemeMenu();
  });

  document.body.append(button, menu);
  updateThemeMenuSelection();
}

function closeThemeMenu() {
  document.getElementById(THEME_MENU_ID)?.classList.remove("af-open");
}

function updateThemeMenuSelection() {
  const current = getCurrentThemeId();
  document
    .querySelectorAll(`#${THEME_MENU_ID} .af-theme-option`)
    .forEach(button => {
      button.classList.toggle("af-current", button.dataset.themeId === current);
    });
}

let refreshPending = false;

function scheduleRefresh() {
  if (refreshPending) return;
  refreshPending = true;

  requestAnimationFrame(() => {
    refreshPending = false;
    if (!document.body) return;
    createThemeSwitcher();
    refreshDynamicThemeMarkers();
  });
}

function startObserver() {
  const observer = new MutationObserver(scheduleRefresh);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}

installUIStyle();

const initialTheme = getCurrentThemeId();
if (initialTheme !== "chatgpt-default") applyTheme(initialTheme);

function init() {
  installUIStyle();
  createThemeSwitcher();
  refreshDynamicThemeMarkers();
  startObserver();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
