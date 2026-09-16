# ChatGPT Theme Switcher

A Tampermonkey userscript that adds custom themes and a persistent theme switcher to ChatGPT.

## Features

- Switch themes directly inside ChatGPT
- Remembers your selected theme
- Includes dark and light themes
- No external dependencies
- No special userscript permissions (`@grant none`)

## Demo

[![ChatGPT Theme Switcher demo](assets/theme-switcher-demo.gif)](assets/theme-switcher-demo.mp4)

The recording keeps project and chat sections collapsed and uses a purpose-built example, so no conversation titles or message history are exposed. Click the preview to open the compressed MP4.

## Install

1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. [Install ChatGPT Theme Switcher from Greasy Fork](https://greasyfork.org/en/scripts/596084-chatgpt-theme-switcher).

Tampermonkey handles installation and future updates automatically.

### Direct installation from GitHub

You can also install the generated userscript directly from GitHub:

https://raw.githubusercontent.com/AlFontal/chatgpt-theme-switcher/main/dist/chatgpt-theme-switcher.user.js

Opening that URL with Tampermonkey installed should prompt you to install the script.

## Themes

- IC Orange PPL
- Everforest
- Gruvbox Dark
- Catppuccin Mocha
- Tokyo Night
- Everforest Light Dim
- Nord Light Dim
- ChatGPT Default

## Development

No npm dependencies are required. Node 22 is used by CI to build the userscript from the source files in `src/`.

```bash
npm run build
npm run check
```

The generated userscript is:

```text
dist/chatgpt-theme-switcher.user.js
```

## Project structure

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

`themes.js` contains the palettes, `styles.js` contains the CSS generation, and `app.js` contains ChatGPT DOM detection and the theme-picker behavior. The build step produces the single userscript in `dist/`.

## Publishing updates

The userscript `@version` is generated from the version in `package.json`. Bump the package version for any update you want existing installations to receive:

```bash
npm run release:patch
```

or:

```bash
npm run release:minor
```

Then commit and push. GitHub Actions rebuilds `dist/` and commits the generated userscript if necessary. Greasy Fork is configured to sync from the generated file on `main`, with a GitHub webhook triggering the sync after pushes.

## Maintenance note

ChatGPT changes its DOM regularly, so the script may break after interface updates. The script uses ChatGPT design tokens where possible and keeps the more fragile DOM-specific logic isolated in `app.js`.

## License

MIT
