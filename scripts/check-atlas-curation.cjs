#!/usr/bin/env node
// Catalogue-only verification for the November 2026 Reading Atlas curation.
// Requires only built-in Node modules. Run: node scripts/check-atlas-curation.cjs
const fs=require('node:fs');
const assert=require('node:assert/strict');
const zlib=require('node:zlib');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const patchFile=JSON.parse(fs.readFileSync('data/atlas-curation-2026-11.json','utf8'));
const patch=patchFile.patch;
const base64=html.match(/const PAYLOAD_B64 = "([^"]+)"/)?.[1];
assert.ok(base64,'Original compressed Alexandria dataset is missing');
const base=JSON.parse(zlib.inflateRawSync(Buffer.from(base64,'base64')).toString('utf8'));
const embedded=html.match(/const ATLAS_CONTENT_EXTENSION = (\{[\s\S]*?\});\n    \{/);
assert.ok(embedded,'Curated data injection is missing');
assert.deepEqual(JSON.parse(embedded[1]),patch,'Embedded catalogue must match the editorial source dataset');
const js=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(js.length,1);
new vm.Script(js[0][1],{filename:'index.html embedded application'});
// Simulate the existing Hesse addition and the new content-injection code without executing any DOM logic.
const a=html.indexOf('const NOV_2026_CURATION = ');
const b=html.indexOf('const NOV_2026_AUDIT = DATA.meta.auditSummary;');
assert.ok(a>=0&&b>a,'Cannot find catalogue bootstrap boundaries');
const cloned=JSON.parse(JSON.stringify(base));
new Function('DATA',html.slice(a,b)+';return DATA;')(cloned);
const counts={
  worldCountries:cloned.world100.length,
  worldBooks:cloned.world100.reduce((n,x)=>n+x.books.length,0),
  shortFiction:cloned.short250.length,
  usedGems:cloned.gems350.length,
  indiaCanon:cloned.india150.length,
  scienceFiction:cloned.scifi100.length,
  subjects:cloned.polymath51.length,
  subjectBooks:cloned.polymath51.reduce((n,x)=>n+x.books.length,0),
  authorGuides:cloned.authors100.length
};
assert.deepEqual(counts,{
  worldCountries:101,worldBooks:739,shortFiction:264,usedGems:364,
  indiaCanon:173,scienceFiction:108,subjects:53,subjectBooks:639,authorGuides:101
});
const books=[
  ...cloned.world100.flatMap(c=>c.books),...cloned.short250,...cloned.gems350,
  ...cloned.nonNovel500,...cloned.india150,...cloned.scifi100,
  ...cloned.polymath51.flatMap(c=>c.books)
];
assert.equal(books.length,2787,'Total placements changed unexpectedly');
assert.equal(new Set(books.map(b=>b.workId)).size,2694,'Canonical identity count changed unexpectedly');
assert.ok(books.every(b=>b.workId&&b.title&&b.author),'Missing essential bibliographic field');
const north=cloned.world100.find(c=>c.name==='North Korea');
assert.deepEqual(north?.books.map(b=>b.title).sort(),['Friend','The Accusation']);
assert.equal(north?.region,'Asia');
assert.ok(cloned.short250.some(b=>b.title==='The Accusation'&&b.workId===north.books.find(b=>b.title==='The Accusation').workId));
assert.ok(cloned.short250.filter(b=>b.form==='Novella').length>=14);
assert.ok(cloned.india150.filter(b=>b.sourceSection?.startsWith('india:')).every(b=>b.cat==='50 Indian Fiction'));
const witnesses=cloned.polymath51.find(s=>s.id==='witness-literature-2026');
assert.equal(witnesses.books.length,14);
assert.ok(witnesses.books.every(b=>b.stage==='2. Foundations'));
assert.ok(!north.books.some(b=>['In Order to Live','Nothing to Envy','Dear Leader'].includes(b.title)),'Memoirs incorrectly placed as fiction');
console.log('PASS: 2,787 placements / 2,694 canonical works; 101 countries; 53 subjects; catalogue and classification invariants verified.');
