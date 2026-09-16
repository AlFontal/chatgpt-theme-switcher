# ChatGPT Theme Switcher

A Tampermonkey userscript that adds a persistent theme switcher to ChatGPT.

## Themes

- IC Orange PPL
- Everforest
- Gruvbox Dark
- Catppuccin Mocha
- Tokyo Night
- Everforest Light Dim
- Nord Light Dim
- ChatGPT Default

## Structure

```text
src/
├── themes.js   # palettes only
├── styles.js   # ChatGPT and switcher CSS
└── app.js      # DOM detection, persistence, and switcher UI

scripts/
└── build.mjs   # zero-dependency bundler for the three source files

dist/
└── chatgpt-theme-switcher.user.js
```

Tampermonkey installs and auto-updates the bundled file in `dist/`. Development stays split across the files in `src/`.

## Install

Open:

```text
https://raw.githubusercontent.com/AlFontal/chatgpt-theme-switcher/main/dist/chatgpt-theme-switcher.user.js
```

Tampermonkey should offer to install the userscript.

## Development

No npm dependencies are required. Node 22 is used by CI.

```bash
npm run build
npm run check
```

The generated userscript is:

```text
dist/chatgpt-theme-switcher.user.js
```

## Publishing an update

Tampermonkey compares `@version`, which is generated from the version in `package.json`. Bump the package version for any update you want existing installations to receive:

```bash
npm run release:patch
```

or:

```bash
npm run release:minor
```

Then commit and push. The GitHub Action rebuilds `dist/` and commits it if necessary.

## Why the source is split

`themes.js` is intentionally just data, so palettes are easy to add and tune. `styles.js` contains the CSS generation. `app.js` owns ChatGPT DOM detection and the theme-picker behavior. The build step produces the one-file userscript Tampermonkey requires.

## Maintenance note

ChatGPT changes its DOM regularly. The script uses ChatGPT design tokens where possible and keeps the more fragile DOM-specific logic isolated in `app.js`.
