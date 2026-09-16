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

export function themeCSS(t) {
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

/* ChatGPT's stock footer fade is tuned for its own dark background. It looks
 * especially bad on light themes, so the detected composer wrappers are made
 * into a flat themed surface instead. */
.af-composer-gradient,
.af-composer-shell {
  background: var(--af-main) !important;
  background-color: var(--af-main) !important;
  background-image: none !important;
  box-shadow: none !important;
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

/* -------------------------------------------------------------------------
 * Code blocks
 * -------------------------------------------------------------------------
 * JS marks the actual outer code container, header and body. Keeping the
 * selectors scoped to those markers avoids recolouring every nested div and
 * fixes the double/giant rounded-corner effect seen in light themes.
 */
.af-code-block {
  overflow: hidden !important;
  border: 1px solid var(--af-code-border) !important;
  border-radius: 12px !important;
  background: var(--af-code-background) !important;
  color: var(--af-code-foreground) !important;
}

.af-code-block .af-code-header {
  background: var(--af-code-header) !important;
  background-color: var(--af-code-header) !important;
  border: 0 !important;
  border-bottom: 1px solid var(--af-code-border) !important;
  border-radius: 0 !important;
  color: var(--af-code-foreground) !important;
  opacity: 1 !important;
}

.af-code-block .af-code-header,
.af-code-block .af-code-header *,
.af-code-block .af-code-header button,
.af-code-block .af-code-header .text-token-text-secondary,
.af-code-block .af-code-header .text-token-text-tertiary {
  color: var(--af-code-foreground) !important;
  opacity: 1 !important;
}

.af-code-block .af-code-header svg,
.af-code-block .af-code-header svg * {
  color: var(--af-code-foreground) !important;
  stroke: currentColor !important;
}

.af-code-block .af-code-body,
.af-code-block .af-code-pre,
.af-code-block pre {
  margin: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: var(--af-code-background) !important;
  background-color: var(--af-code-background) !important;
  color: var(--af-code-foreground) !important;
  box-shadow: none !important;
}

.af-code-block .af-code-body > div,
.af-code-block pre > div,
.af-code-block pre [class*="bg-token-main-surface"],
.af-code-block pre [class*="bg-black"] {
  background-color: transparent !important;
  background-image: none !important;
}

/* Fallback while the DOM marker is being attached. */
pre {
  background: var(--af-code-background) !important;
  background-color: var(--af-code-background) !important;
  border-color: var(--af-code-border) !important;
  color: var(--af-code-foreground) !important;
}

pre code,
pre code *,
.af-code-block code,
.af-code-block code * {
  background-color: transparent !important;
}

/* Syntax colours use a dedicated code palette. Light UI themes therefore get
 * bright syntax colours suitable for their deliberately dark code surfaces. */
pre .token.comment,
pre .token.prolog,
pre .token.doctype,
pre .token.cdata,
pre [class*="comment"],
.af-code-block [class*="comment"] {
  color: var(--af-code-muted) !important;
}

pre .token.keyword,
pre .token.selector,
pre .token.important,
pre [class*="keyword"],
.af-code-block [class*="keyword"] {
  color: var(--af-code-purple) !important;
}

pre .token.string,
pre .token.char,
pre .token.attr-value,
pre [class*="string"],
.af-code-block [class*="string"] {
  color: var(--af-code-green) !important;
}

pre .token.number,
pre .token.boolean,
pre .token.constant,
pre [class*="number"],
.af-code-block [class*="number"] {
  color: var(--af-code-yellow) !important;
}

pre .token.function,
pre .token.class-name,
pre [class*="function"],
.af-code-block [class*="function"] {
  color: var(--af-code-blue) !important;
}

pre .token.operator,
pre .token.punctuation,
pre [class*="punctuation"],
.af-code-block [class*="punctuation"] {
  color: var(--af-code-foreground) !important;
}

pre .token.variable,
pre .token.property,
pre .token.tag,
pre [class*="variable"],
.af-code-block [class*="variable"] {
  color: var(--af-code-cyan) !important;
}

pre .token.regex,
pre .token.builtin,
pre [class*="builtin"],
.af-code-block [class*="builtin"] {
  color: var(--af-code-red) !important;
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
