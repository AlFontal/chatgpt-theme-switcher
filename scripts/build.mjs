import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const pkg = JSON.parse(await readFile(new URL("package.json", root), "utf8"));

const owner = "AlFontal";
const repo = "chatgpt-theme-switcher";
const raw = `https://raw.githubusercontent.com/${owner}/${repo}/main/dist/chatgpt-theme-switcher.user.js`;

const metadata = `// ==UserScript==
// @name         ChatGPT Theme Switcher
// @namespace    https://alfontal.dev/
// @version      ${pkg.version}
// @description  Custom themes for ChatGPT with a persistent theme switcher.
// @author       AlFontal
// @license      MIT
// @match        https://chatgpt.com/*
// @run-at       document-start
// @grant        none
// @homepageURL  https://github.com/${owner}/${repo}
// @supportURL   https://github.com/${owner}/${repo}/issues
// @updateURL    ${raw}
// @downloadURL  ${raw}
// ==/UserScript==`;

function stripModuleSyntax(source) {
  return source
    .replace(/^import\s+.*?;\s*$/gm, "")
    .replace(/^export\s+/gm, "");
}

const sources = await Promise.all([
  readFile(new URL("src/themes.js", root), "utf8"),
  readFile(new URL("src/styles.js", root), "utf8"),
  readFile(new URL("src/app.js", root), "utf8")
]);

const body = sources.map(stripModuleSyntax).join("\n\n");
const output = `${metadata}\n\n(() => {\n  "use strict";\n\n${body}\n})();\n`;

const distDir = new URL("dist/", root);
await mkdir(distDir, { recursive: true });
const outFile = new URL("chatgpt-theme-switcher.user.js", distDir);
await writeFile(outFile, output, "utf8");

console.log(`Built v${pkg.version} -> ${fileURLToPath(outFile)}`);
