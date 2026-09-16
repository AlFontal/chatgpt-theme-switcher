// ==UserScript==
// @name         ChatGPT Theme Switcher
// @namespace    https://alfontal.dev/
// @version      1.4.3
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
  const codeMuted = t.codeMuted || t.muted;
  const codeBorder = t.codeBorder || t.border;
  const codeHeader =
    t.codeHeader || `color-mix(in srgb, ${t.codeBackground} 88%, #000 12%)`;
  const codeRed = t.codeRed || t.red;
  const codeGreen = t.codeGreen || t.green;
  const codeYellow = t.codeYellow || t.yellow;
  const codeBlue = t.codeBlue || t.blue;
  const codePurple = t.codePurple || t.purple;
  const codeCyan = t.codeCyan || t.cyan;

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
  --af-code-header: ${codeHeader};
  --af-code-foreground: ${codeForeground};
  --af-code-muted: ${codeMuted};
  --af-code-border: ${codeBorder};
  --af-code-red: ${codeRed};
  --af-code-green: ${codeGreen};
  --af-code-yellow: ${codeYellow};
  --af-code-blue: ${codeBlue};
  --af-code-purple: ${codePurple};
  --af-code-cyan: ${codeCyan};

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

html,
body,
main,
#thread,
#page-header {
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
nav a,
nav button { color: var(--af-text) !important; }
nav a:hover,
nav button:hover { background-color: var(--af-hover) !important; }
nav [aria-current="page"],
nav [data-active="true"] { background-color: var(--af-surface-2) !important; }

/* The sidebar account footer has its own surface in ChatGPT and can retain a
 * dark-mode background even when the rest of a custom light theme is correct. */
[data-testid="accounts-profile-button"] {
  background: transparent !important;
  background-color: transparent !important;
  color: var(--af-text) !important;
  box-shadow: none !important;
}

[data-testid="accounts-profile-button"]:hover {
  background: var(--af-hover) !important;
  background-color: var(--af-hover) !important;
}

[data-testid="accounts-profile-button"] *,
[data-testid="accounts-profile-button"] .text-token-text-primary {
  color: var(--af-text) !important;
}

[data-testid="accounts-profile-button"] .text-token-text-secondary,
[data-testid="accounts-profile-button"] .text-token-text-tertiary {
  color: var(--af-muted) !important;
}

[data-testid="accounts-profile-button"] svg,
[data-testid="accounts-profile-button"] svg * {
  color: var(--af-text-secondary) !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}

.text-token-text-primary { color: var(--af-text) !important; }
.text-token-text-secondary { color: var(--af-text-secondary) !important; }
.text-token-text-tertiary { color: var(--af-muted) !important; }
[data-message-author-role="assistant"],
[data-message-author-role="user"],
.markdown,
.prose { color: var(--af-text) !important; }

/* Prose-invert stays active because ChatGPT keeps the root .dark class even
 * when our selected custom theme is light. Override elements that otherwise
 * keep dark-mode prose colours such as pure-white bold text. */
.markdown strong,
.prose strong,
.markdown b,
.prose b {
  color: var(--af-text) !important;
}

.markdown a,
.prose a {
  color: var(--af-accent) !important;
}

/* The captured DOM exposes a stable user-message-bubble-color class. */
.user-message-bubble-color,
[data-message-author-role="user"] .user-message-bubble-color {
  background: var(--af-surface-2) !important;
  background-color: var(--af-surface-2) !important;
  background-image: none !important;
  color: var(--af-text) !important;
}

/* The header action group uses ChatGPT's translucent-surface, whose native
 * dark-mode values remain active on light custom themes. Theme the container
 * and its two visible controls explicitly. */
#conversation-header-actions {
  background: var(--af-surface) !important;
  background-color: var(--af-surface) !important;
  border: 1px solid var(--af-border) !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

#conversation-header-actions::before,
#conversation-header-actions::after {
  background: none !important;
  box-shadow: none !important;
}

#conversation-header-actions [data-testid="share-chat-button"],
#conversation-header-actions [data-testid="conversation-options-button"] {
  background: transparent !important;
  color: var(--af-text) !important;
}

#conversation-header-actions [data-testid="share-chat-button"]:hover,
#conversation-header-actions [data-testid="conversation-options-button"]:hover {
  background: var(--af-hover) !important;
  color: var(--af-text) !important;
}

[data-composer-surface="true"] {
  background: var(--af-surface) !important;
  border-color: var(--af-border) !important;
}
[data-composer-surface="true"] > div { background-image: none !important; }
textarea,
[contenteditable="true"] {
  color: var(--af-text) !important;
  caret-color: var(--af-accent) !important;
}
textarea::placeholder { color: var(--af-muted) !important; }

#thread-bottom,
#thread-bottom-container {
  background: var(--af-main) !important;
  background-color: var(--af-main) !important;
  background-image: none !important;
  box-shadow: none !important;
  mask-image: none !important;
  -webkit-mask-image: none !important;
}

#thread-bottom-container::before,
#thread-bottom-container::after {
  background: none !important;
  background-image: none !important;
  box-shadow: none !important;
  mask-image: none !important;
  -webkit-mask-image: none !important;
}

[data-testid="thread-disclaimer"] .rounded-full {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
}

[data-testid="thread-disclaimer"] .text-token-text-tertiary,
[data-testid="thread-disclaimer"] .text-caption-regular {
  color: var(--af-muted) !important;
}

[role="menu"],
[role="listbox"],
[role="dialog"] {
  background-color: var(--af-surface) !important;
  color: var(--af-text) !important;
  border-color: var(--af-border) !important;
}
[role="menuitem"]:hover,
[role="option"]:hover { background-color: var(--af-hover) !important; }

input,
select {
  background-color: var(--af-surface) !important;
  color: var(--af-text) !important;
  border-color: var(--af-border) !important;
}

.border-token-border-light,
.border-token-border-medium { border-color: var(--af-border) !important; }

.af-code-frame {
  border-color: var(--af-code-border) !important;
}

.af-code-block {
  --code-block-surface: var(--af-code-background) !important;
  --gray-950: var(--af-code-background) !important;
  --gray-925: var(--af-code-header) !important;
  --gray-900: var(--af-code-header) !important;
  --gray-50: var(--af-code-foreground) !important;
  --gray-250: var(--af-code-muted) !important;
  --blue-200: var(--af-code-blue) !important;
  --pink-200: var(--af-code-purple) !important;
  --yellow-200: var(--af-code-yellow) !important;
  --red-200: var(--af-code-red) !important;
  --orange-200: var(--af-code-yellow) !important;
  --green-200: var(--af-code-green) !important;
  --purple-200: var(--af-code-purple) !important;
  background-color: var(--af-code-background) !important;
  color: var(--af-code-foreground) !important;
}

.af-code-block .af-code-header {
  color: var(--af-code-foreground) !important;
  opacity: 1 !important;
}

.af-code-block .af-code-header > div {
  background: var(--af-code-header) !important;
  background-color: var(--af-code-header) !important;
  color: var(--af-code-foreground) !important;
}

.af-code-block .af-code-header *,
.af-code-block .af-code-header .text-token-text-primary,
.af-code-block .af-code-header .text-token-text-secondary,
.af-code-block .af-code-header .text-token-text-tertiary {
  color: var(--af-code-foreground) !important;
  opacity: 1 !important;
}

.af-code-block #code-block-viewer,
.af-code-block .cm-editor,
.af-code-block .cm-scroller,
.af-code-block .cm-content {
  background-color: var(--af-code-background) !important;
  color: var(--af-code-foreground) !important;
}

.af-code-block pre,
.af-code-block code,
.af-code-block pre code,
.af-code-block pre code * {
  background-color: transparent !important;
}

.af-code-block .token.comment { color: var(--af-code-muted) !important; }
.af-code-block .token.keyword { color: var(--af-code-purple) !important; }
.af-code-block .token.string { color: var(--af-code-green) !important; }
.af-code-block .token.number,
.af-code-block .token.boolean { color: var(--af-code-yellow) !important; }
.af-code-block .token.function,
.af-code-block .token.class-name { color: var(--af-code-blue) !important; }
.af-code-block .token.variable,
.af-code-block .token.property { color: var(--af-code-cyan) !important; }
.af-code-block .token.regex,
.af-code-block .token.builtin { color: var(--af-code-red) !important; }

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

const LEGACY_MARKER_CLASSES = [
  "af-user-message-bubble",
  "af-composer-gradient",
  "af-composer-shell",
  "af-code-block",
  "af-code-frame",
  "af-code-header",
  "af-code-body",
  "af-code-pre"
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

function clearDynamicThemeMarkers() {
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

  /*
   * Current ChatGPT code blocks use a CodeMirror viewer with id
   * `code-block-viewer`. The themed surface is the nearest ancestor whose
   * Tailwind class defines --code-block-surface. This is much narrower than
   * the old rounded-container heuristic, which could accidentally mark an
   * entire assistant response as a code block.
   */
  for (const viewer of document.querySelectorAll("#code-block-viewer")) {
    const surface = findCodeSurface(viewer);
    if (!surface) continue;

    surface.classList.add("af-code-block");

    const frame = surface.parentElement;
    if (frame?.classList.contains("border-token-border-light")) {
      frame.classList.add("af-code-frame");
    }

    /*
     * There are currently two header layouts:
     *  - compact blocks: an absolute copy-button container
     *  - labelled blocks: a sticky language + copy-button container
     * In both cases the header is a direct child of the code surface, contains
     * the Copy button, and does not contain the CodeMirror viewer.
     */
    const header = [...surface.children].find(child =>
      Boolean(child.querySelector('button[aria-label="Copy"]')) &&
      !child.querySelector("#code-block-viewer")
    );

    header?.classList.add("af-code-header");
  }
}

function refreshDynamicThemeMarkers() {
  clearDynamicThemeMarkers();
  if (getCurrentThemeId() === "chatgpt-default") return;
  markCodeBlocks();
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

})();
