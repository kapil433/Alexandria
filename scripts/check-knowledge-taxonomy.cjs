#!/usr/bin/env node
// Regression check for nine-pathway classification. No external dependencies.
// Run from repository root: node scripts/check-knowledge-taxonomy.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const zlib = require('node:zlib');
const vm = require('node:vm');
const html = fs.readFileSync('index.html','utf8');
const original = JSON.parse(zlib.inflateRawSync(Buffer.from(
  html.match(/const PAYLOAD_B64 = "([^"]+)"/)[1], 'base64'
)).toString('utf8'));
const start = html.indexOf('const NOV_2026_CURATION = ');
const end = html.indexOf('const NOV_2026_AUDIT = DATA.meta.auditSummary;');
assert.ok(start >= 0 && end > start, 'Missing Knowledge bootstrap');
new vm.Script([...html.matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1]);
(new Function('DATA',html.slice(start,end)+'return DATA;'))(original);
const sub = original.polymath51;
const layers = {
  mastery: sub.filter(s=>s.knowledgeLayer==='mastery'),
  world: sub.filter(s=>s.knowledgeLayer==='world'),
  great: sub.filter(s=>s.knowledgeLayer==='great-nonfiction'),
  recent: sub.filter(s=>s.knowledgeLayer==='recent-nonfiction')
};
assert.equal(sub.length,75);
assert.equal(sub.reduce((n,s)=>n+s.books.length,0),1182);
assert.deepEqual(Object.fromEntries(Object.entries(layers).map(([k,v])=>[k,v.length])),
 {mastery:9,world:55,great:8,recent:3});
assert.deepEqual(Object.fromEntries(Object.entries(layers).map(([k,v])=>[k,v.reduce((n,s)=>n+s.books.length,0)])),
 {mastery:278,world:554,great:250,recent:100});
for(const [id,count,domain] of [
  ['rhetoric-writing-craft',25,'12 · Language, Literature, Arts & Culture'],
  ['entrepreneurship-venture',25,'10 · Economics, Business & Management']
]){
 const match=sub.find(s=>s.id===id);
 assert.ok(match && match.knowledgeLayer==='mastery');
 assert.equal(match.knowledgeDomain,domain);
 assert.equal(match.books.length,count);
 assert.equal(new Set(match.books.map(b=>b.workId)).size,count);
}
assert.equal(new Set(layers.world.map(s=>s.knowledgeDomain)).size,12);
assert.ok(html.includes('id="poly-scale-filter" onchange="setKnowledgeLayerFilter(this.value)"'));
assert.ok(html.includes('if (!clusters.includes(STATE.polyCluster)) STATE.polyCluster = "ALL"'));
assert.ok(html.includes('STATE.routeKnowledgeLayer !== subDest'));
assert.ok(html.includes('stageSelect.value = "ALL"'));
assert.ok(html.includes('search.value = ""'));
const all=[...original.world100.flatMap(s=>s.books),...original.short250,...original.gems350,
 ...original.nonNovel500,...original.india150,...original.scifi100,...sub.flatMap(s=>s.books)];
assert.equal(all.length,3330);
assert.equal(new Set(all.map(b=>b.workId)).size,3038);
console.log('PASS: Nine mastery paths and 55 Explore subjects; 75 total / 1,182 books; no changes to canonical catalog totals.');
