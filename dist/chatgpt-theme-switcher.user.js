// ==UserScript==
// @name         ChatGPT Theme Switcher
// @namespace    https://alfontal.dev/
// @version      1.4.1
// @description  Custom themes for ChatGPT with a persistent theme switcher.
// @author       AlFontal
// @match        https://chatgpt.com/*
// @run-at       document-start
// @grant        none
// @homepageURL  https://github.com/AlFontal/chatgpt-theme-switcher
// @supportURL   https://github.com/AlFontal/chatgpt-theme-switcher/issues
// @updateURL    https://raw.githubusercontent.com/AlFontal/chatgpt-theme-switcher/main/dist/chatgpt-theme-switcher.user.js
// @downloadURL  https://raw.githubusercontent.com/AlFontal/chatgpt-theme-switcher/main/dist/chatgpt-theme-switcher.user.js
// ==/UserScript==

(() => {
  "use strict";

const DEFAULT_THEME = "ic-orange-ppl";

const themes = {
  "ic-orange-ppl": {
    name: "IC Orange PPL",
    mode: "dark",
    main: "#262626",
    sidebar: "#262626",
    surface: "#303030",
    surface2: "#3a3a3a",
    hover: "#40382f",
    text: "#ffcb83",
    textSecondary: "#c69752",
    muted: "#9f825d",
    border: "#51422f",
    accent: "#f79500",
    accentHover: "#ffb347",
    red: "#c13900",
    green: "#a4a900",
    yellow: "#caaf00",
    blue: "#bd6d00",
    purple: "#fc5e00",
    cyan: "#f79500",
    codeBackground: "#1f1f1f"
  },

  everforest: {
    name: "Everforest",
    mode: "dark",
    main: "#3c474d",
    sidebar: "#37424a",
    surface: "#465258",
    surface2: "#505c62",
    hover: "#576268",
    text: "#d8caac",
    textSecondary: "#aeb6b0",
    muted: "#89958f",
    border: "#5e6b72",
    accent: "#a7c080",
    accentHover: "#b4cc8c",
    red: "#e67e80",
    green: "#a7c080",
    yellow: "#dbbc7f",
    blue: "#7fbbb3",
    purple: "#d699b6",
    cyan: "#83c092",
    codeBackground: "#37424a"
  },

  gruvbox: {
    name: "Gruvbox Dark",
    mode: "dark",
    main: "#282828",
    sidebar: "#1d2021",
    surface: "#32302f",
    surface2: "#3c3836",
    hover: "#504945",
    text: "#ebdbb2",
    textSecondary: "#a89984",
    muted: "#928374",
    border: "#504945",
    accent: "#b8bb26",
    accentHover: "#d5c4a1",
    red: "#fb4934",
    green: "#b8bb26",
    yellow: "#fabd2f",
    blue: "#83a598",
    purple: "#d3869b",
    cyan: "#8ec07c",
    codeBackground: "#1d2021"
  },

  catppuccin: {
    name: "Catppuccin Mocha",
    mode: "dark",
    main: "#1e1e2e",
    sidebar: "#181825",
    surface: "#313244",
    surface2: "#45475a",
    hover: "#585b70",
    text: "#cdd6f4",
    textSecondary: "#a6adc8",
    muted: "#7f849c",
    border: "#45475a",
    accent: "#a6e3a1",
    accentHover: "#b4befe",
    red: "#f38ba8",
    green: "#a6e3a1",
    yellow: "#f9e2af",
    blue: "#89b4fa",
    purple: "#cba6f7",
    cyan: "#94e2d5",
    codeBackground: "#181825"
  },

  "tokyo-night": {
    name: "Tokyo Night",
    mode: "dark",
    main: "#1a1b26",
    sidebar: "#16161e",
    surface: "#24283b",
    surface2: "#292e42",
    hover: "#3b4261",
    text: "#c0caf5",
    textSecondary: "#9aa5ce",
    muted: "#737aa2",
    border: "#414868",
    accent: "#9ece6a",
    accentHover: "#b9f27c",
    red: "#f7768e",
    green: "#9ece6a",
    yellow: "#e0af68",
    blue: "#7aa2f7",
    purple: "#bb9af7",
    cyan: "#7dcfff",
    codeBackground: "#16161e"
  },

  "everforest-light": {
    name: "Everforest Light Dim",
    mode: "light",
    main: "#d8d3bd",
    sidebar: "#cbc5ad",
    surface: "#e3dec8",
    surface2: "#c3bda6",
    hover: "#b8b19a",
    text: "#3f4a4f",
    textSecondary: "#596569",
    muted: "#747f7a",
    border: "#aaa48f",
    accent: "#657d23",
    accentHover: "#53691b",
    red: "#b84d48",
    green: "#657d23",
    yellow: "#9b7200",
    blue: "#3d7190",
    purple: "#955b7d",
    cyan: "#397864",
    codeBackground: "#2d353b",
    codeHeader: "#343f44",
    codeForeground: "#d3c6aa",
    codeMuted: "#859289",
    codeBorder: "#4f5b58",
    codeRed: "#e67e80",
    codeGreen: "#a7c080",
    codeYellow: "#dbbc7f",
    codeBlue: "#7fbbb3",
    codePurple: "#d699b6",
    codeCyan: "#83c092"
  },

  "nord-light": {
    name: "Nord Light Dim",
    mode: "light",
    main: "#cfd5da",
    sidebar: "#c1c8ce",
    surface: "#dbe0e4",
    surface2: "#b9c2c9",
    hover: "#adb7bf",
    text: "#394550",
    textSecondary: "#52606b",
    muted: "#6f7c86",
    border: "#9faab2",
    accent: "#4f6f78",
    accentHover: "#415e66",
    red: "#a94c52",
    green: "#58784b",
    yellow: "#8c702f",
    blue: "#4c6f91",
    purple: "#745d88",
    cyan: "#4e7a7a",
    codeBackground: "#2e3440",
    codeHeader: "#3b4252",
    codeForeground: "#d8dee9",
    codeMuted: "#7b88a1",
    codeBorder: "#4c566a",
    codeRed: "#bf616a",
    codeGreen: "#a3be8c",
    codeYellow: "#ebcb8b",
    codeBlue: "#81a1c1",
    codePurple: "#b48ead",
    codeCyan: "#88c0d0"
  }
};


function uiCSS({ themeButtonId, themeMenuId }) {
  return `
#${themeButtonId} {
  position: fixed !important;
  right: 18px !important;
  top: 150px !important;
  width: 36px !important;
  height: 36px !important;
  z-index: 2147483647 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
  margin: 0 !important;
  border: 1px solid var(--af-border, #555) !important;
  border-radius: 9px !important;
  background: var(--af-surface, #2f2f2f) !important;
  color: var(--af-accent, #fff) !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  font-size: 20px !important;
  line-height: 1 !important;
  cursor: pointer !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .30) !important;
  opacity: .78 !important;
  transition: opacity 120ms ease, transform 120ms ease, background-color 120ms ease !important;
}

#${themeButtonId}:hover {
  opacity: 1 !important;
  transform: scale(1.04) !important;
  background: var(--af-surface-2, #3b3b3b) !important;
}

#${themeMenuId} {
  position: fixed !important;
  right: 62px !important;
  top: 150px !important;
  width: 205px !important;
  z-index: 2147483647 !important;
  display: none !important;
  padding: 6px !important;
  margin: 0 !important;
  border: 1px solid var(--af-border, #555) !important;
  border-radius: 10px !important;
  background: var(--af-surface, #2f2f2f) !important;
  color: var(--af-text, #f2f2f2) !important;
  box-shadow: 0 8px 28px rgba(0, 0, 0, .38) !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
  font-size: 13px !important;
  line-height: 1.4 !important;
}

#${themeMenuId}.af-open { display: block !important; }

#${themeMenuId} .af-theme-option {
  display: flex !important;
  align-items: center !important;
  gap: 9px !important;
  width: 100% !important;
  box-sizing: border-box !important;
  padding: 8px 10px !important;
  margin: 0 !important;
  border: 0 !important;
  border-radius: 6px !important;
  background: transparent !important;
  color: var(--af-text, #f2f2f2) !important;
  text-align: left !important;
  font-family: inherit !important;
  font-size: 13px !important;
  line-height: 1.4 !important;
  cursor: pointer !important;
}

#${themeMenuId} .af-theme-option:hover {
  background: var(--af-hover, #454545) !important;
}

#${themeMenuId} .af-theme-option.af-current {
  background: var(--af-surface-2, #3b3b3b) !important;
}

#${themeMenuId} .af-theme-dot {
  width: 8px !important;
  height: 8px !important;
  flex: 0 0 8px !important;
  border-radius: 999px !important;
  background: var(--af-muted, #888) !important;
}

#${themeMenuId} .af-current .af-theme-dot {
  background: var(--af-accent, #fff) !important;
}

#${themeMenuId} .af-separator {
  height: 1px !important;
  margin: 5px 4px !important;
  background: var(--af-border, #555) !important;
}
`;
}

function themeCSS(t) {
  const codeForeground = t.codeForeground || t.text;
  const codeBorder = t.codeBorder || t.border;

  return `
:root {
  color-scheme: ${t.mode};
  --af-main: ${t.main};
  --af-sidebar: ${t.sidebar};
  --af-surface: ${t.surface};
  --af-surface-2: ${t.surface2};
  --af-hover: ${t.hover};
  --af-text: ${t.text};
  --af-text-secondary: ${t.textSecondary};
  --af-muted: ${t.muted};
  --af-border: ${t.border};
  --af-accent: ${t.accent};
  --af-accent-hover: ${t.accentHover};
  --af-red: ${t.red};
  --af-green: ${t.green};
  --af-yellow: ${t.yellow};
  --af-blue: ${t.blue};
  --af-purple: ${t.purple};
  --af-cyan: ${t.cyan};
  --af-code-background: ${t.codeBackground};
  --af-code-foreground: ${codeForeground};
  --af-code-border: ${codeBorder};

  --main-surface-primary: var(--af-main) !important;
  --main-surface-secondary: var(--af-surface) !important;
  --main-surface-tertiary: var(--af-surface-2) !important;
  --sidebar-surface-primary: var(--af-sidebar) !important;
  --sidebar-surface-secondary: var(--af-surface) !important;
  --sidebar-surface-tertiary: var(--af-hover) !important;
  --composer-surface-primary: var(--af-surface) !important;
  --message-surface: var(--af-surface-2) !important;
  --message-surface-hover: var(--af-hover) !important;
  --text-primary: var(--af-text) !important;
  --text-secondary: var(--af-text-secondary) !important;
  --text-tertiary: var(--af-muted) !important;
  --border-light: var(--af-border) !important;
  --border-medium: var(--af-border) !important;
  --link: var(--af-accent) !important;
}

html, body {
  background: var(--af-main) !important;
  color: var(--af-text) !important;
}

main, #thread, #page-header {
  background-color: var(--af-main) !important;
  color: var(--af-text) !important;
}

.bg-token-main-surface-primary { background-color: var(--af-main) !important; }
.bg-token-main-surface-secondary { background-color: var(--af-surface) !important; }
.bg-token-main-surface-tertiary { background-color: var(--af-surface-2) !important; }
.bg-token-sidebar-surface-primary { background-color: var(--af-sidebar) !important; }
.bg-token-sidebar-surface-secondary { background-color: var(--af-surface) !important; }
.bg-token-sidebar-surface-tertiary { background-color: var(--af-hover) !important; }

nav {
  background-color: var(--af-sidebar) !important;
  border-color: var(--af-border) !important;
}
nav a, nav button { color: var(--af-text) !important; }
nav a:hover, nav button:hover { background-color: var(--af-hover) !important; }
nav [aria-current="page"], nav [data-active="true"] { background-color: var(--af-surface-2) !important; }

.text-token-text-primary { color: var(--af-text) !important; }
.text-token-text-secondary { color: var(--af-text-secondary) !important; }
.text-token-text-tertiary { color: var(--af-muted) !important; }
[data-message-author-role="assistant"],
[data-message-author-role="user"],
.markdown,
.prose { color: var(--af-text) !important; }

.af-user-message-bubble,
[data-message-author-role="user"] .bg-token-message-surface,
[data-message-author-role="user"] [class*="bg-token-message-surface"] {
  background: var(--af-surface-2) !important;
  background-color: var(--af-surface-2) !important;
  background-image: none !important;
  color: var(--af-text) !important;
}

.bg-token-message-surface { background-color: var(--af-surface-2) !important; }

[data-composer-surface="true"] {
  background: var(--af-surface) !important;
  border-color: var(--af-border) !important;
}
[data-composer-surface="true"] > div { background-image: none !important; }
textarea, [contenteditable="true"] {
  color: var(--af-text) !important;
  caret-color: var(--af-accent) !important;
}
textarea::placeholder { color: var(--af-muted) !important; }

.af-composer-gradient {
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    color-mix(in srgb, var(--af-main) 80%, transparent) 24%,
    var(--af-main) 58%,
    var(--af-main) 100%
  ) !important;
}

[role="menu"], [role="listbox"], [role="dialog"] {
  background-color: var(--af-surface) !important;
  color: var(--af-text) !important;
  border-color: var(--af-border) !important;
}
[role="menuitem"]:hover, [role="option"]:hover { background-color: var(--af-hover) !important; }

input, select {
  background-color: var(--af-surface) !important;
  color: var(--af-text) !important;
  border-color: var(--af-border) !important;
}

.border-token-border-light, .border-token-border-medium { border-color: var(--af-border) !important; }

/* Code blocks deliberately use their own surface and foreground.
 * Light application themes keep a dark editor-like code panel so ChatGPT's
 * syntax highlighting remains readable instead of becoming pastel-on-pastel. */
pre,
pre > div,
[class*="code-block"],
[class*="codeblock"] {
  background: var(--af-code-background) !important;
  background-color: var(--af-code-background) !important;
  border-color: var(--af-code-border) !important;
  color: var(--af-code-foreground) !important;
}

pre code,
pre code *,
[class*="code-block"] code,
[class*="code-block"] code * {
  background-color: transparent !important;
}

pre > div:first-child,
pre [class*="border-b"],
[class*="code-block"] > div:first-child,
[class*="code-block"] [class*="border-b"],
[class*="codeblock"] > div:first-child {
  background: color-mix(in srgb, var(--af-code-background) 88%, #000 12%) !important;
  background-color: color-mix(in srgb, var(--af-code-background) 88%, #000 12%) !important;
  border-color: var(--af-code-border) !important;
  color: var(--af-code-foreground) !important;
}

pre [class*="bg-token-main-surface"],
pre [class*="bg-black"],
[class*="code-block"] [class*="bg-token-main-surface"],
[class*="code-block"] [class*="bg-black"] {
  background: var(--af-code-background) !important;
  background-color: var(--af-code-background) !important;
}

/* Header controls and labels should not inherit washed-out page colours. */
pre button,
pre svg,
[class*="code-block"] button,
[class*="code-block"] svg {
  color: var(--af-code-foreground) !important;
  stroke: currentColor !important;
}

/* Keep syntax tokens readable. ChatGPT/Prism/Shiki class names vary, so use
 * broad token families with theme semantic colours rather than one renderer. */
pre .token.comment,
pre .token.prolog,
pre .token.doctype,
pre .token.cdata,
pre [class*="comment"] {
  color: color-mix(in srgb, var(--af-code-foreground) 55%, var(--af-code-background)) !important;
}

pre .token.keyword,
pre .token.selector,
pre .token.important,
pre [class*="keyword"] {
  color: var(--af-purple) !important;
}

pre .token.string,
pre .token.char,
pre .token.attr-value,
pre [class*="string"] {
  color: var(--af-green) !important;
}

pre .token.number,
pre .token.boolean,
pre .token.constant,
pre [class*="number"] {
  color: var(--af-yellow) !important;
}

pre .token.function,
pre .token.class-name,
pre [class*="function"] {
  color: var(--af-blue) !important;
}

pre .token.operator,
pre .token.punctuation,
pre [class*="punctuation"] {
  color: var(--af-code-foreground) !important;
}

pre .token.variable,
pre .token.property,
pre .token.tag,
pre [class*="variable"] {
  color: var(--af-cyan) !important;
}

pre .token.regex,
pre .token.builtin,
pre [class*="builtin"] {
  color: var(--af-red) !important;
}

:not(pre) > code {
  background-color: var(--af-surface) !important;
  color: var(--af-text) !important;
}

table { border-color: var(--af-border) !important; }
th {
  background-color: var(--af-surface) !important;
  border-color: var(--af-border) !important;
}
td { border-color: var(--af-border) !important; }

* { scrollbar-color: var(--af-border) transparent; }
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: var(--af-border);
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: padding-box;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--af-text-secondary);
  background-clip: padding-box;
}

::selection {
  background: var(--af-accent);
  color: var(--af-main);
}
`;
}




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

})();
