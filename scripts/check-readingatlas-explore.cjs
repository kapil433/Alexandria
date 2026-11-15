#!/usr/bin/env node
// Regression test for ReadingAtlas-informed Explore Knowledge. Run from repository root.
const fs=require('node:fs'),zlib=require('node:zlib'),vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const embed=html.match(/const PAYLOAD_B64 = "([^"]+)"/)?.[1];
assert.ok(embed,'Base compressed catalogue is missing');
const D=JSON.parse(zlib.inflateRawSync(Buffer.from(embed,'base64')).toString('utf8'));
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length,1);
new vm.Script(scripts[0][1],{filename:'index.html'});
const begin=html.indexOf('const NOV_2026_CURATION = ');
const end=html.indexOf('const NOV_2026_AUDIT = DATA.meta.auditSummary;');
assert.ok(begin>=0 && end>begin);
new Function('DATA',html.slice(begin,end)+'return DATA;')(D);
const source=JSON.parse(fs.readFileSync('data/readingatlas-explore-2026.json','utf8'));
const authorSource=JSON.parse(fs.readFileSync('data/author-ambedkar-2026.json','utf8'));
assert.equal(source.sourceCatalogue.domains.length,22,'ReadingAtlas source subjects');
assert.equal(source.sourceCatalogue.books.length,277,'ReadingAtlas source books');
assert.equal(source.subjects.length,23,'Explore subject headings');
assert.equal(source.subjects.reduce((n,s)=>n+s.books.length,0),208,'Explore chosen books');
assert.ok(source.subjects.every(s=>s.books.length>=5&&s.books.length<=10));
const categories=['mastery','world','great-nonfiction','recent-nonfiction'];
const groups=Object.fromEntries(categories.map(x=>[x,D.polymath51.filter(s=>s.knowledgeLayer===x)]));
assert.deepEqual(categories.map(x=>groups[x].length),[9,23,8,3]);
assert.deepEqual(categories.map(x=>groups[x].reduce((n,s)=>n+s.books.length,0)),[278,208,250,100]);
assert.equal(D.polymath51.length,43);
assert.equal(D.polymath51.reduce((n,s)=>n+s.books.length,0),836);
assert.equal(D.authors100.length,102);
assert.equal(D.legacyExploreSubjectArchive.length,55,'Previous Explore subjects should remain archived');
for(let i=0;i<23;i++){
 const here=groups.world[i],ref=source.subjects[i];
 assert.equal(here.id,ref.id,'Subject must keep ReadingAtlas heading order');
 assert.equal(here.subject,ref.subject);
 assert.equal(here.order,i+1);
 assert.equal(here.books.length,ref.books.length);
 const origin=source.sourceCatalogue.books.filter(b=>b.domain===ref.sourceCode);
 for(let k=0;k<here.books.length;k++){
  const b=here.books[k],expected=ref.books[k];
  assert.equal(b.title,expected.title);
  assert.equal(b.author,expected.author);
  assert.equal(b.why,expected.why);
  assert.equal(b.bridge,expected.bridge);
  assert.equal(b.sourcePosition,expected.sourcePosition);
  assert.ok(b.workId,'A canonical workId is required');
  if(i<22) {
    const p=origin.find(x=>x.num===b.sourcePosition);
    assert.ok(p,'A selected work must exist at its original source position');
    assert.equal(p.title,b.title);
    assert.equal(p.author,b.author);
    assert.equal(p.why,b.why);
    assert.equal(p.bridge,b.bridge);
  }
  if(k>0)assert.ok(here.books[k-1].sourcePosition<b.sourcePosition,'Original relative book order');
 }
}
assert.equal(groups.world[22].subject,'Taste, Comedy, Color & Everyday Aesthetics');
assert.equal(groups.world[22].books.length,10);
for(const [layer,count] of [['great-nonfiction',250],['recent-nonfiction',100]]){
 const books=groups[layer].flatMap(s=>s.books);
 assert.equal(books.length,count);
 assert.equal(new Set(books.map(b=>b.workId)).size,count);
}
assert.ok(groups.mastery.some(s=>s.id==='rhetoric-writing-craft'));
assert.ok(groups.mastery.some(s=>s.id==='entrepreneurship-venture'));
const ambedkar=D.authors100.find(a=>a.slug==='br-ambedkar');
assert.ok(ambedkar,'Ambedkar guide missing');
assert.equal(ambedkar.id,102);
assert.equal(ambedkar.name,authorSource.guide.name);
assert.deepEqual(ambedkar.pathway,authorSource.guide.pathway);
for(const f of ['startBook','middleWorks','endBook','translationGuide','companionBooks','bio'])assert.ok(ambedkar[f]);
const all=[
 ...D.world100.flatMap(s=>s.books),...D.short250,...D.gems350,...D.nonNovel500,
 ...D.india150,...D.scifi100,...D.polymath51.flatMap(s=>s.books)
];
assert.equal(all.length,2984);
assert.equal(new Set(all.map(x=>x.workId)).size,2789);
assert.ok(html.includes('activeSubj.knowledgeLayer === "world" ? \`')||html.includes('activeSubj.knowledgeLayer === "world" ? `'));
assert.ok(html.includes('Why it connects:'));
console.log('PASS: 23 ordered Explore subjects / 208 books; nine Mastery, Great and Recent counts unchanged; 102 author guides');
