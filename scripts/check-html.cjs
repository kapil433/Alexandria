#!/usr/bin/env node
/**
 * Validate Alexandria's inline JavaScript before deploying GitHub Pages.
 * No dependencies or browser required.
 */
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)]
  .map((match) => match[1])
  .filter((source) => source.trim().length > 0);

if (scripts.length === 0) {
  throw new Error('No inline application scripts found in index.html');
}
for (const [index, source] of scripts.entries()) {
  new vm.Script(source, { filename: `index.html:script-${index + 1}` });
}
const expected = [
  'function setTheme(',
  'function navigateTo(',
  'function renderKnowledge(',
  'function openAuthorGuideModal(',
  'function quickToggleWantToRead(',
  'NOV_2026_CURATION',
  'eastern-nonduality',
  'hermann-hesse'
];
for (const item of expected) {
  if (!html.includes(item)) {
    throw new Error(`Expected Alexandria feature missing: ${item}`);
  }
}
console.log(`Alexandria validated: ${scripts.length} inline JS script(s) compile; key navigation, theme and reading features present.`);
