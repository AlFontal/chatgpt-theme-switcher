import { DEFAULT_THEME, themes } from "./themes.js";
import { themeCSS, uiCSS } from "./styles.js";

const STORAGE_KEY = "alfontal-chatgpt-theme";
const THEME_STYLE_ID = "alfontal-chatgpt-theme-style";
const UI_STYLE_ID = "alfontal-chatgpt-theme-ui-style";
const THEME_BUTTON_ID = "alfontal-theme-button";
const THEME_MENU_ID = "alfontal-theme-menu";

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

function isTransparentColor(color) {
  return !color || color === "transparent" || color === "rgba(0, 0, 0, 0)";
}

function numericRadius(style) {
  const values = [
    style.borderTopLeftRadius,
    style.borderTopRightRadius,
    style.borderBottomLeftRadius,
    style.borderBottomRightRadius
  ];
  return Math.max(
    ...values.map(value => {
      const n = parseFloat(value);
      return Number.isFinite(n) ? n : 0;
    })
  );
}

function markUserMessageBubbles() {
  if (getCurrentThemeId() === "chatgpt-default") return;

  const messages = document.querySelectorAll('[data-message-author-role="user"]');

  for (const message of messages) {
    const knownSurface = message.querySelector(".bg-token-message-surface");
    if (knownSurface) {
      knownSurface.classList.add("af-user-message-bubble");
      continue;
    }

    const textElement =
      message.querySelector(".whitespace-pre-wrap") ||
      message.querySelector('[class*="whitespace-pre-wrap"]');

    if (!textElement) continue;

    let node = textElement.parentElement;
    let roundedFallback = null;

    for (let depth = 0; node && depth < 8; depth += 1) {
      if (node === message) break;

      const style = getComputedStyle(node);
      const radius = numericRadius(style);

      if (radius >= 12) {
        roundedFallback ||= node;
        const hasBackgroundImage =
          style.backgroundImage && style.backgroundImage !== "none";

        if (!isTransparentColor(style.backgroundColor) || hasBackgroundImage) {
          node.classList.add("af-user-message-bubble");
          roundedFallback = null;
          break;
        }
      }

      node = node.parentElement;
    }

    roundedFallback?.classList.add("af-user-message-bubble");
  }
}

function markComposerGradient() {
  if (getCurrentThemeId() === "chatgpt-default") return;

  const composer = document.querySelector('[data-composer-surface="true"]');
  if (!composer) return;

  let node = composer.parentElement;
  for (let depth = 0; node && depth < 10; depth += 1) {
    if (node === document.body || node === document.documentElement) break;

    const image = getComputedStyle(node).backgroundImage || "";
    if (image !== "none" && image.toLowerCase().includes("gradient")) {
      node.classList.add("af-composer-gradient");
    }
    node = node.parentElement;
  }
}

function clearDynamicThemeMarkers() {
  document.querySelectorAll(".af-user-message-bubble").forEach(element => {
    element.classList.remove("af-user-message-bubble");
  });
  document.querySelectorAll(".af-composer-gradient").forEach(element => {
    element.classList.remove("af-composer-gradient");
  });
}

function refreshDynamicThemeMarkers() {
  if (getCurrentThemeId() === "chatgpt-default") {
    clearDynamicThemeMarkers();
    return;
  }
  markUserMessageBubbles();
  markComposerGradient();
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
