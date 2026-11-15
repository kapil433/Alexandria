# ReadingAtlas → Alexandria Explore Knowledge revision

**Source:** [ReadingAtlas World Nonfiction](https://github.com/kapil433/readingatlas/blob/main/index.html), original embedded `ATLASN` object (22 domains, 277 book records).  
**Implementation:** [Alexandria](https://github.com/kapil433/Alexandria), branch `add-ambedkar-and-taste-aesthetics-2026-11`.  
**Editorial rule:** Keep nine Mastery pathways, Great Nonfiction (250), and Recent Nonfiction (100) unchanged; simplify **Explore Knowledge only**.

## What is visible

Explore Knowledge now shows **23 numbered subjects / 208 book placements**. Subjects 01–22 retain ReadingAtlas's original heading and subject order. The 23rd subject, **Taste, Comedy, Color & Everyday Aesthetics**, has ten books about personal taste, laughter, Japanese aesthetics, color perception, creative practice and social criticism.

Within each subject, books follow their *relative order in ReadingAtlas*; a few additional or alternate books were not selected because this is meant as a brief, approachable pathway rather than a full academic syllabus. Each book retains a why-read-this description and subject connection. Some source titles are textbooks; those serve as systematic entry points rather than graduate-completion requirements.

| No. | ReadingAtlas source topic / appended topic | Books displayed | Source count |
| ---: | --- | ---: | ---: |
| 01 | Mathematics | 9 | 20 |
| 02 | Complexity, Networks & Systems | 10 | 22 |
| 03 | Anthropology & Human Variation | 10 | 18 |
| 04 | Product, Strategy & Organizations | 10 | 16 |
| 05 | India — History, Society & State | 10 | 27 |
| 06 | Philosophy & Philosophy of Mind | 10 | 14 |
| 07 | Computer Science & Software | 10 | 14 |
| 08 | AI, Machine Learning & Intelligent Systems | 10 | 12 |
| 09 | Physics & Physical Reality | 10 | 12 |
| 10 | Biology, Evolution & Life | 8 | 8 |
| 11 | Economics & Institutions | 7 | 8 |
| 12 | Politics, Sociology & Collective Action | 8 | 8 |
| 13 | History, Geography & Geopolitics | 8 | 8 |
| 14 | Media, Art, Design & Perception | 8 | 8 |
| 15 | Psychology, Cognition & Behaviour | 6 | 6 |
| 16 | Environment, Climate & Earth Systems | 6 | 6 |
| 17 | Global Politics & International Relations | 10 | 16 |
| 18 | Writing Craft & Literary Practice | 8 | 8 |
| 19 | Language & Linguistics | 10 | 10 |
| 20 | Sound, Music & Listening | 10 | 10 |
| 21 | Architecture, Cities & Built Environment | 10 | 10 |
| 22 | Non-Dual Philosophy & Contemplative Traditions | 10 | 16 |
| 23 | Taste, Comedy, Color & Everyday Aesthetics | 10 | 10 |

The source's full original 277 nonfiction records and domain descriptions are captured, unchanged, in `data/readingatlas-explore-2026.json` under `sourceCatalogue`. The old 55 Explore subject records from Alexandria remain in `DATA.legacyExploreSubjectArchive` within the embedded script, so this revision is reversible without losing editorial work.

## Protected sections

| Section | Books | Change |
| --- | ---: | --- |
| Nine Mastery pathways | 278 | None |
| Great Nonfiction (8 shelves) | 250 | None |
| Recent Nonfiction (3 shelves) | 100 | None |
| Explore Knowledge | 208 | Replaces the old 554-placement specialist Explore view |

**Current totals:** 43 Knowledge subjects, 836 Knowledge placements; all-collection catalogue 2,984 placements and 2,789 canonical work IDs. Existing works retain their original work IDs when a title/author match is available. Removing visible Explore placements changes catalogue counts, not user Library notes or stored reading-progress records.

## Additional author guide

Dr. B. R. Ambedkar is guide **#102**, following the existing three-stage guide format: introductory *Annihilation of Caste* and *Castes in India*; additional economic, constitutional and historical writings; and *The Buddha and His Dhamma*. The recommended editions and scholarly companion readings are documented in `data/author-ambedkar-2026.json`. Existing Ambedkar-related catalogue work IDs are not changed.

## Implementation and limitations

- The original CSS, overall interface design and compressed base catalogue remain unchanged.
- Explore subjects are numbered and displayed in ReadingAtlas order. Within each, book cards show source numbers, author, explanatory note and a source-informed connection.
- The protected three collection book arrays were checked for exact equality against the old `main` snapshot.
- `scripts/check-readingatlas-explore.cjs` checks source order, selected book metadata, guide schema, and collection totals.
- Browser/device testing, all translation editions, and every ISBN are not independently verified. The source archive is an editorial record, not an external book-text library.

**Deployment:** The changes are on a review branch until the pull request is merged.
