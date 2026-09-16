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
