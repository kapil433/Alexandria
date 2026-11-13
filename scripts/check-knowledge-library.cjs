#!/usr/bin/env node
// Alexandria Knowledge Library four-layer regression test. Run: node scripts/check-knowledge-library.cjs
const fs=require('node:fs');
const zlib=require('node:zlib');
const assert=require('node:assert/strict');
const vm=require('node:vm');

const html=fs.readFileSync('index.html','utf8');
const b64=html.match(/const PAYLOAD_B64 = "([^"]+)"/)?.[1];
assert.ok(b64,'Original embedded Alexandria catalogue missing');
const initial=JSON.parse(zlib.inflateRawSync(Buffer.from(b64,'base64')).toString('utf8'));
const inputScripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(inputScripts.length,1,'Unexpected embedded application script count');
new vm.Script(inputScripts[0][1],{filename:'Alexandria index.html'});
const start=html.indexOf('const NOV_2026_CURATION = ');
const end=html.indexOf('const NOV_2026_AUDIT = DATA.meta.auditSummary;');
assert.ok(start>=0 && end>start,'Content bootstrap boundaries missing');
const actual=(new Function('DATA',html.slice(start,end)+'return DATA;'))(initial);
const subjects=actual.polymath51;
const totals=subjects.reduce((n,s)=>n+s.books.length,0);
assert.equal(subjects.length,75);
assert.equal(totals,1182);
for(const [layer,count] of [['mastery',7],['world',57],['great-nonfiction',8],['recent-nonfiction',3]]){
  assert.equal(subjects.filter(s=>s.knowledgeLayer===layer).length,count,layer);
}
const stages=['1. Orientation','2. Foundations','3. Core Understanding','4. Advanced Study','5. Mastery / Research'];
const mastery=subjects.filter(s=>s.knowledgeLayer==='mastery');
for(const subject of mastery){
  assert.ok(subject.books.length>=30,subject.id+' too short');
  assert.ok(subject.books.every(x=>stages.includes(x.stage)),subject.id+' bad stage');
  assert.deepEqual(subject.books.map(x=>stages.indexOf(x.stage)).slice().sort((a,b)=>a-b),subject.books.map(x=>stages.indexOf(x.stage)),subject.id+' stages out of order');
  assert.ok(subject.books.every(x=>x.title && x.author && x.workId && x.why),'Missing mastery metadata');
}
const great=subjects.filter(s=>s.knowledgeLayer==='great-nonfiction').flatMap(s=>s.books);
const recent=subjects.filter(s=>s.knowledgeLayer==='recent-nonfiction').flatMap(s=>s.books);
assert.equal(great.length,250);
assert.equal(new Set(great.map(x=>x.workId)).size,250,'Great Nonfiction must have 250 distinct works');
assert.equal(recent.length,100);
assert.equal(new Set(recent.map(x=>x.workId)).size,100);
assert.ok(recent.every(x=>['2024','2025','2026'].includes(String(x.year))));
assert.ok(recent.every(x=>x.sourceUrl && /^https:\/\//.test(x.sourceUrl) && x.recognition));
assert.ok(great.some(x=>x.title.includes('Gödel, Escher, Bach')),'Missing key interdisciplinary masterpiece');
const books=[
  ...actual.world100.flatMap(c=>c.books),...actual.short250,...actual.gems350,
  ...actual.nonNovel500,...actual.india150,...actual.scifi100,
  ...subjects.flatMap(s=>s.books)
];
assert.equal(books.length,3330);
assert.equal(new Set(books.map(x=>x.workId)).size,3038);
assert.ok(books.every(x=>x.title&&x.author&&x.workId));
assert.equal(actual.authors100.length,101);
assert.equal(actual.world100.length,101);
console.log('PASS: 7 mastery / 57 broad / 8 great nonfiction / 3 recent nonfiction; 75 subjects / 1,182 book placements / 3,038 canonical works');
