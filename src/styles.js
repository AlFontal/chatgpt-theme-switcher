export function uiCSS({ themeButtonId, themeMenuId }) {
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
  font-size: 0 !important;
  line-height: 1 !important;
  cursor: pointer !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .30) !important;
  opacity: .78 !important;
  transition: opacity 120ms ease, transform 120ms ease, background-color 120ms ease !important;
}
#${themeButtonId}::before {
  content: "" !important;
  width: 16px !important;
  height: 16px !important;
  border: 1px solid var(--af-border, #666) !important;
  border-radius: 999px !important;
  background: conic-gradient(
    var(--af-accent, #10a37f) 0 25%,
    var(--af-text-secondary, #b4b4b4) 25% 50%,
    var(--af-surface-2, #424242) 50% 75%,
    var(--af-main, #212121) 75% 100%
  ) !important;
  box-shadow: 0 0 0 2px var(--af-surface, #2f2f2f) !important;
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
#${themeMenuId} .af-theme-option:hover { background: var(--af-hover, #454545) !important; }
#${themeMenuId} .af-theme-option.af-current { background: var(--af-surface-2, #3b3b3b) !important; }
#${themeMenuId} .af-theme-dot {
  width: 8px !important;
  height: 8px !important;
  flex: 0 0 8px !important;
  border-radius: 999px !important;
  background: var(--af-muted, #888) !important;
}
#${themeMenuId} .af-current .af-theme-dot { background: var(--af-accent, #fff) !important; }
#${themeMenuId} .af-separator {
  height: 1px !important;
  margin: 5px 4px !important;
  background: var(--af-border, #555) !important;
}
`;
}

export function themeCSS(t) {
  const codeForeground = t.codeForeground || t.text;
  const codeMuted = t.codeMuted || t.muted;
  const codeBorder = t.codeBorder || t.border;
  const codeHeader = t.codeHeader || `color-mix(in srgb, ${t.codeBackground} 88%, #000 12%)`;
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
  --bg-primary: var(--af-surface) !important;
  --bg-secondary: var(--af-surface-2) !important;
  --bg-tertiary: var(--af-hover) !important;
  --bg-elevated-primary: var(--af-surface) !important;
  --bg-elevated-secondary: var(--af-surface-2) !important;
  --bg-tooltip: var(--af-surface-2) !important;
  --text-primary: var(--af-text) !important;
  --text-secondary: var(--af-text-secondary) !important;
  --text-tertiary: var(--af-muted) !important;
  --icon-tertiary: var(--af-muted) !important;
  --border-default: var(--af-border) !important;
  --border-sharp: var(--af-border) !important;
  --border-light: var(--af-border) !important;
  --border-medium: var(--af-border) !important;
  --interactive-bg-secondary-hover: var(--af-hover) !important;
  --interactive-bg-tertiary-default: var(--af-surface-2) !important;
  --interactive-bg-tertiary-selected: var(--af-surface-2) !important;
  --interactive-bg-tertiary-inactive: var(--af-surface-2) !important;
  --link: var(--af-accent) !important;
}

html, body, main, #thread, #page-header {
  background-color: var(--af-main) !important;
  color: var(--af-text) !important;
}
.bg-token-main-surface-primary { background-color: var(--af-main) !important; }
.bg-token-main-surface-secondary { background-color: var(--af-surface) !important; }
.bg-token-main-surface-tertiary { background-color: var(--af-surface-2) !important; }
.bg-token-sidebar-surface-primary { background-color: var(--af-sidebar) !important; }
.bg-token-sidebar-surface-secondary { background-color: var(--af-surface) !important; }
.bg-token-sidebar-surface-tertiary { background-color: var(--af-hover) !important; }
.bg-token-bg-primary,
[class*="bg-token-bg-primary/"] { background-color: var(--af-surface) !important; }
.bg-token-bg-secondary { background-color: var(--af-surface-2) !important; }
.bg-token-bg-tertiary { background-color: var(--af-hover) !important; }

nav { background-color: var(--af-sidebar) !important; border-color: var(--af-border) !important; }
nav a, nav button { color: var(--af-text) !important; }
nav a:hover, nav button:hover { background-color: var(--af-hover) !important; }
nav [aria-current="page"], nav [data-active="true"] { background-color: var(--af-surface-2) !important; }

[data-testid="accounts-profile-button"] {
  background: transparent !important;
  background-color: transparent !important;
  color: var(--af-text) !important;
  box-shadow: none !important;
}
[data-testid="accounts-profile-button"]:hover { background: var(--af-hover) !important; }
[data-testid="accounts-profile-button"] *,
[data-testid="accounts-profile-button"] .text-token-text-primary { color: var(--af-text) !important; }
[data-testid="accounts-profile-button"] .text-token-text-secondary,
[data-testid="accounts-profile-button"] .text-token-text-tertiary { color: var(--af-muted) !important; }
[data-testid="accounts-profile-button"] svg,
[data-testid="accounts-profile-button"] svg * { color: var(--af-text-secondary) !important; fill: currentColor !important; stroke: currentColor !important; }

.text-token-text-primary { color: var(--af-text) !important; }
.text-token-text-secondary { color: var(--af-text-secondary) !important; }
.text-token-text-tertiary { color: var(--af-muted) !important; }
[data-message-author-role="assistant"], [data-message-author-role="user"], .markdown, .prose { color: var(--af-text) !important; }
.markdown strong, .prose strong, .markdown b, .prose b { color: var(--af-text) !important; }
.markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6,
.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  color: var(--af-text) !important;
}
.markdown a, .prose a { color: var(--af-accent) !important; }

.user-message-bubble-color,
[data-message-author-role="user"] .user-message-bubble-color {
  background: var(--af-surface-2) !important;
  background-color: var(--af-surface-2) !important;
  background-image: none !important;
  color: var(--af-text) !important;
}

#conversation-header-actions {
  background: var(--af-surface) !important;
  background-color: var(--af-surface) !important;
  border: 1px solid var(--af-border) !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#conversation-header-actions::before,
#conversation-header-actions::after { background: none !important; box-shadow: none !important; }
#conversation-header-actions [data-testid="share-chat-button"],
#conversation-header-actions [data-testid="conversation-options-button"] { background: transparent !important; color: var(--af-text) !important; }
#conversation-header-actions [data-testid="share-chat-button"]:hover,
#conversation-header-actions [data-testid="conversation-options-button"]:hover { background: var(--af-hover) !important; color: var(--af-text) !important; }

.translucent-surface {
  background: var(--af-surface) !important;
  background-color: var(--af-surface) !important;
  border-color: var(--af-border) !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

/* Work-mode segmented control, detected from its Chat/Work controls. */
.af-mode-switcher {
  background: var(--af-surface) !important;
  background-color: var(--af-surface) !important;
  border: 1px solid var(--af-border) !important;
  box-shadow: none !important;
  color: var(--af-text) !important;
}
.af-mode-switcher .af-mode-option {
  background: transparent !important;
  background-color: transparent !important;
  color: var(--af-text-secondary) !important;
  box-shadow: none !important;
}
.af-mode-switcher .af-mode-option:hover {
  background: var(--af-hover) !important;
  color: var(--af-text) !important;
}
.af-mode-switcher .af-mode-option.af-mode-active {
  background: transparent !important;
  background-color: transparent !important;
  color: var(--af-text) !important;
}
.af-mode-switcher > div:first-child {
  background: transparent !important;
  background-color: transparent !important;
}
.af-mode-switcher [data-tpp-toggle-highlight] > div {
  background: var(--af-surface-2) !important;
  background-color: var(--af-surface-2) !important;
  border-color: var(--af-border) !important;
}

/* Work-mode toolbar below the composer: Project / Files / Plugins / desktop. */
.af-work-toolbar {
  background: var(--af-surface-2) !important;
  background-color: var(--af-surface-2) !important;
  border-color: var(--af-border) !important;
  box-shadow: none !important;
  color: var(--af-text-secondary) !important;
}
.af-work-toolbar a,
.af-work-toolbar button,
.af-work-toolbar [role="button"] {
  background: transparent !important;
  color: var(--af-text-secondary) !important;
}
.af-work-toolbar a:hover,
.af-work-toolbar button:hover,
.af-work-toolbar [role="button"]:hover {
  background: var(--af-hover) !important;
  color: var(--af-text) !important;
}
.af-work-toolbar svg,
.af-work-toolbar svg * {
  color: currentColor !important;
  stroke: currentColor !important;
}

[data-composer-surface="true"] { background: var(--af-surface) !important; border-color: var(--af-border) !important; }
[data-composer-surface="true"] > div { background-image: none !important; }
textarea, [contenteditable="true"] { color: var(--af-text) !important; caret-color: var(--af-accent) !important; }
textarea::placeholder { color: var(--af-muted) !important; }

button[aria-label="Start Voice"],
button[aria-label="Send prompt"],
button[aria-label="Stop answering"] {
  background: var(--af-accent) !important;
  background-color: var(--af-accent) !important;
  color: var(--af-main) !important;
  border-color: var(--af-accent) !important;
}
button[aria-label="Start Voice"]:hover,
button[aria-label="Send prompt"]:hover,
button[aria-label="Stop answering"]:hover { background: var(--af-accent-hover) !important; }

[data-model-reasoning-effort-slider] > [data-orientation="horizontal"] > span:first-child {
  background: var(--af-border) !important;
}
[data-model-reasoning-effort-slider] > [data-orientation="horizontal"] > span:first-child > [aria-hidden="true"] {
  background: var(--af-accent) !important;
}
[data-model-reasoning-effort-slider] [data-selected] {
  background: color-mix(in srgb, var(--af-main) 55%, transparent) !important;
}
[data-model-reasoning-effort-slider-thumb] {
  background: var(--af-text) !important;
  border-color: var(--af-main) !important;
}

#thread-bottom, #thread-bottom-container {
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
[data-testid="thread-disclaimer"] .text-caption-regular { color: var(--af-muted) !important; }

[role="menu"], [role="listbox"], [role="dialog"] {
  background-color: var(--af-surface) !important;
  color: var(--af-text) !important;
  border-color: var(--af-border) !important;
}
[role="tooltip"] > div {
  background: var(--af-surface-2) !important;
  color: var(--af-text) !important;
  border: 1px solid var(--af-border) !important;
  box-shadow: 0 8px 18px rgba(0, 0, 0, .18) !important;
}
[role="menuitem"]:hover, [role="option"]:hover { background-color: var(--af-hover) !important; }
input, select { background-color: var(--af-surface) !important; color: var(--af-text) !important; border-color: var(--af-border) !important; }
.border-token-border-default,
.border-token-border-extra-light,
.border-token-border-light,
.border-token-border-medium,
.border-token-border-heavy { border-color: var(--af-border) !important; }

a[target="_blank"][class*="text-[9px]"][class*="rounded-xl"] {
  background: var(--af-surface-2) !important;
  color: var(--af-text-secondary) !important;
  border-color: var(--af-border) !important;
}
a[target="_blank"][class*="text-[9px]"][class*="rounded-xl"] span {
  color: inherit !important;
}

.af-code-frame { border-color: var(--af-code-border) !important; }
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
.af-code-block .af-code-header { color: var(--af-code-foreground) !important; opacity: 1 !important; }
.af-code-block .af-code-header > div { background: var(--af-code-header) !important; color: var(--af-code-foreground) !important; }
.af-code-block .af-code-header *,
.af-code-block .af-code-header .text-token-text-primary,
.af-code-block .af-code-header .text-token-text-secondary,
.af-code-block .af-code-header .text-token-text-tertiary { color: var(--af-code-foreground) !important; opacity: 1 !important; }
.af-code-block #code-block-viewer,
.af-code-block .cm-editor,
.af-code-block .cm-scroller,
.af-code-block .cm-content { background-color: var(--af-code-background) !important; color: var(--af-code-foreground) !important; }
.af-code-block pre,
.af-code-block code,
.af-code-block pre code,
.af-code-block pre code * { background-color: transparent !important; }
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
:not(pre) > code { background-color: var(--af-surface) !important; color: var(--af-text) !important; }

table { border-color: var(--af-border) !important; }
th {
  background-color: var(--af-surface) !important;
  color: var(--af-text) !important;
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
::-webkit-scrollbar-thumb:hover { background: var(--af-text-secondary); background-clip: padding-box; }
::selection { background: var(--af-accent); color: var(--af-main); }
`;
}
