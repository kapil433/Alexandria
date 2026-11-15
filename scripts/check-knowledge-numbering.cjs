#!/usr/bin/env node
// Exercise the real Knowledge and book-card renderers without browser dependencies.
// Run from the repository root: node scripts/check-knowledge-numbering.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const zlib = require('node:zlib');

const html = fs.readFileSync('index.html', 'utf8');
const payload = html.match(/const PAYLOAD_B64 = "([^"]+)"/)?.[1];
assert.ok(payload, 'Missing base catalogue');
const DATA = JSON.parse(zlib.inflateRawSync(Buffer.from(payload, 'base64')).toString('utf8'));
const bootstrapStart = html.indexOf('const NOV_2026_CURATION = ');
const bootstrapEnd = html.indexOf('const NOV_2026_AUDIT = DATA.meta.auditSummary;');
assert.ok(bootstrapStart >= 0 && bootstrapEnd > bootstrapStart, 'Missing catalogue bootstrap');
new Function('DATA', html.slice(bootstrapStart, bootstrapEnd))(DATA);

function functionSource(name, followingName) {
  const start = html.indexOf(`    function ${name}(`);
  const end = html.indexOf(`    function ${followingName}(`, start);
  assert.ok(start >= 0 && end > start, `Missing ${name} renderer`);
  return html.slice(start, end);
}

const elements = Object.fromEntries([
  'poly-scale-filter', 'poly-stage-filter', 'poly-search-input', 'poly-cluster-pills',
  'knowledge-count-badge', 'poly-subject-list', 'poly-active-subject-panel'
].map(id => [id, { value: '', innerHTML: '', textContent: '' }]));
const document = { getElementById: id => elements[id] || null };
const STATE = { polyCluster: 'ALL', selectedSubjectId: '' };
const history = { replaceState(_state, _title, url) { this.url = url; } };
const { renderKnowledge, selectPolymathSubject, escapeHtml } = new Function(
  'DATA', 'STATE', 'document', 'history', 'getUserRecord',
  functionSource('escapeHtml', 'loadPersistedState') +
  functionSource('renderBookCardHTML', 'hasUserContent') +
  functionSource('renderKnowledge', 'selectPolymathSubject') +
  functionSource('selectPolymathSubject', 'toggleDemoLibrary') +
  'return { renderKnowledge, selectPolymathSubject, escapeHtml };'
)(DATA, STATE, document, history, () => null);

const subjects = DATA.polymath51.filter(subject => subject.knowledgeLayer === 'world');
assert.equal(subjects.length, 23);
const catalogueBefore = JSON.stringify(DATA);
const sourcePositions = subjects.map(subject => subject.books.map(book => book.sourcePosition));
assert.ok(sourcePositions.some(positions => positions.some((position, index) => position !== index + 1)),
  'The fixture must include sparse original ReadingAtlas positions');

function resetFilters() {
  elements['poly-scale-filter'].value = 'CORE';
  elements['poly-stage-filter'].value = 'ALL';
  elements['poly-search-input'].value = '';
  STATE.polyCluster = 'ALL';
}

function displayedBooks() {
  return [...elements['poly-active-subject-panel'].innerHTML.matchAll(
    /<div class="text-xs font-semibold alx-accent-text">(\d+) · [\s\S]*?<h3 class="alx-book-title">([\s\S]*?)<\/h3>/g
  )].map(match => ({ number: match[1], title: match[2] }));
}

function expectedBooks(subject, books = subject.books) {
  return books.map(book => ({
    number: String(subject.books.indexOf(book) + 1).padStart(2, '0'),
    title: escapeHtml(book.title)
  }));
}

resetFilters();
for (const subject of subjects) {
  STATE.selectedSubjectId = subject.id;
  renderKnowledge();
  assert.deepEqual(displayedBooks(), expectedBooks(subject),
    `${subject.id}: number every selected book consecutively in its existing order`);
  assert.ok(elements['poly-active-subject-panel'].innerHTML.includes(
    `<h2 class="font-serif-editorial text-2xl sm:text-4xl font-bold">${String(subject.order).padStart(2, '0')} · ${escapeHtml(subject.subject)}</h2>`
  ), `${subject.id}: preserve subject numbering and heading`);
  assert.deepEqual([...elements['poly-subject-list'].innerHTML.matchAll(
    /onclick="selectPolymathSubject\('([^']+)'\)"/g
  )].map(match => match[1]), subjects.map(item => item.id), 'Preserve subject directory order');

  for (const stage of new Set(subject.books.map(book => book.stage))) {
    elements['poly-stage-filter'].value = stage;
    renderKnowledge();
    assert.deepEqual(displayedBooks(), expectedBooks(subject, subject.books.filter(book => book.stage === stage)),
      `${subject.id}: keep full-path positions when filtering by ${stage}`);
  }
  elements['poly-stage-filter'].value = 'ALL';

  for (const book of subject.books) {
    elements['poly-search-input'].value = book.title;
    renderKnowledge();
    const displayed = displayedBooks();
    assert.ok(displayed.some(item => item.title === escapeHtml(book.title)),
      `${subject.id}: title search must include ${book.title}`);
    for (const item of displayed) {
      assert.deepEqual(item, expectedBooks(subject).find(candidate => candidate.title === item.title),
        `${subject.id}: preserve each book's full-path position in search results`);
    }
  }
  elements['poly-search-input'].value = '';
}

elements['poly-search-input'].value = '__no_matching_knowledge_book__';
renderKnowledge();
assert.equal(displayedBooks().length, 0, 'Empty search must clear previous book cards');
assert.ok(elements['poly-subject-list'].innerHTML.includes('No subjects match your filter.'));
assert.ok(elements['poly-active-subject-panel'].innerHTML.includes('Reset the subject filters'));

resetFilters();
for (const subject of [subjects.at(-1), subjects[0]]) {
  selectPolymathSubject(subject.id);
  assert.equal(STATE.selectedSubjectId, subject.id);
  assert.equal(history.url, `#knowledge/${subject.id}`);
  assert.deepEqual(displayedBooks(), expectedBooks(subject), 'Subject switches start their own sequence');
}

assert.deepEqual(subjects.map(subject => subject.books.map(book => book.sourcePosition)), sourcePositions,
  'Rendering must preserve original ReadingAtlas source positions');
assert.equal(JSON.stringify(DATA), catalogueBefore, 'Numbering must not mutate the catalogue');
console.log('PASS: 23 Explore subjects / 208 books numbered 01–N; source order, metadata, stage/search positions, empty results and subject switches preserved');
