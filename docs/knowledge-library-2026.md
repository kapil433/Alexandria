# Alexandria Knowledge Library — Four-Layer Editorial Revision

**Snapshot:** 13 November 2026  
**Destination:** `kapil433/Alexandria`, branch `knowledge-library-four-layers-2026-11`  
**Scope:** Content and existing Knowledge navigation only; **no UI redesign**.

## 1. Why this revision exists

The previous Knowledge library contained 53 subjects and 639 book placements. It had considerable specialist depth, but the disciplinary map mixed natural sciences, social sciences, design, business and philosophy inconsistently, and important fields lacked accessible, general foundations. Brand management and marketing were dispersed across other business works rather than covered coherently.

This revision retains all 53 subjects and preserves their original work records, adding a focused MBA/Marketing mastery pathway, foundational paths for the sciences and world systems, and nonfiction discovery collections.

## 2. Built classification

| Layer | Subjects | Book placements |
| --- | ---: | ---: |
| Nine mastery pathways | 9 | 278 |
| Understand the World | 55 | 554 |
| Great Nonfiction Library | 8 | 250 |
| Recent Nonfiction — 2024–2026 | 3 | 100 |
| **Knowledge total** | **75** | **1,182** |

**Canonical total across entire Alexandria:** 3,330 placements / 3,038 canonical work IDs. Previous baseline: 2,787 / 2,694. Knowledge placements can overlap by work ID, especially the nonfiction discovery shelves.

### Mastery programmes

- Mathematics — 30 books
- Complexity & Network Science — 32 books
- Anthropology — 31 books
- AI, Product Management & Product Building — 33 books
- Computer Science & Systems Design — 30 books
- World & Comparative Philosophy, Non-Duality emphasis — 34 books
- MBA, Marketing, Branding & Business Management — 38 books
- Writing Craft, Rhetoric & Storytelling — 25 books
- Entrepreneurship, Venture Building & Company Creation — 25 books

These reuse the existing five educational stages: Orientation, Foundations, Core Understanding, Advanced Study and Mastery/Research. Stage order has been verified programmatically.

### Understand the World

Subjects are assigned to 12 broad domains: Mathematics & Formal Sciences; Physics & the Universe; Chemistry & Materials; Biology & Life; Earth & Environment; Medicine, Mind & Health; Computing, Technology & Engineering; Anthropology & Society; History, Geography & Politics; Economics, Business & Management; Philosophy, Religion & Ethics; Language, Literature, Arts & Culture.

Ten new foundational subjects broaden science and practical understanding: Physics, Chemistry, Biology, Earth Science, Engineering & Infrastructure, Political Science, World Religions, Public Health, Human Geography and Economics.

### Great Nonfiction

Eight editorial shelves: Big Ideas; Physics/Chemistry/Discovery; Life/Earth/Environment; World History; Society/Economics; Philosophy/Mind; Art/Culture; Memoir/Biography/Witness. All 250 shelf slots are distinct within this collection. Each can also be discoverable through a relevant disciplinary path.

### Recent nonfiction

**Nonfiction only.** 2024: 30; 2025: 33; 2026: 37. Each entry preserves its year, dated list or award context and informational link. Dates in this shelf identify the selected publication or English-edition year, not necessarily the original language edition.

**Selection sources include:**
- [Publishers Weekly 2026 Best Nonfiction](https://best-books.publishersweekly.com/pw/best-books/2026/nonfiction)
- [National Book Foundation 2026 Nonfiction Longlist](https://www.nationalbook.org/longlist-for-the-2026-national-book-award-for-nonfiction/)
- [Royal Society Trivedi Science Book Prize](https://royalsociety.org/medals-and-prizes/science-book-prize/)
- [National Book Foundation 2025 Nonfiction](https://www.nationalbook.org/awards-prizes/national-book-awards-2025/?cat=nonfiction)
- [National Book Foundation 2024 Nonfiction](https://www.nationalbook.org/awards-prizes/national-book-awards-2024/?cat=nonfiction)
- [Scientific American nonfiction 2025](https://www.scientificamerican.com/article/scientific-americans-best-nonfiction-of-2025/)
- [Science News favourites 2024](https://www.sciencenews.org/article/best-science-books-of-2024)

Other source links and precise selection labels are stored in `data/recent-nonfiction-2026.json`. Being placed on a list is not equivalent to winning an award, nor is list appearance proof of consensus.

## 3. Editorial principles

Use the six roles as selection heuristics, not inflexible quotas: Gateway, Reader's Favourite, Foundation, Classic, Advanced and Critical Perspective. A title can fill more than one role. Academic textbooks supplement rather than displace accessible first reading. Subjects have different natural depths and are not arbitrarily limited to 5, 10 or 25.

## 4. Files

- `index.html` — embedded catalogue expansion, stage-aware paths and subnav filters; pre-existing CSS and compressed catalogue unchanged.
- `data/knowledge-mastery-2026.json` — nine mastery pathways (including Writing and Entrepreneurship), content additions and domain classification.
- `data/knowledge-foundations-2026.json` — ten foundational subject pathways.
- `data/great-nonfiction-2026.json` — 250 curated enduring nonfiction works.
- `data/recent-nonfiction-2026.json` — 100 dated recent nonfiction selections with linked shortlist/editorial evidence.
- `scripts/check-knowledge-library.cjs` — Node regression checks.

## 5. QA and limitations

Verified via data-bootstrap evaluation: 75 subjects, 1,182 Knowledge placements, nine mastery pathways, 250 Great Nonfiction selections without repeated work IDs, 100 recent nonfiction entries, 3,330 placements and 3,038 canonical IDs. All included books have title, author, work ID, explanatory text and one of the five existing stages. The embedded application JavaScript compiles; CSS and the original compressed catalogue are unchanged.

**Remaining work:** Individual edition-level bibliographic verification is not exhaustive, especially for translated classics, composite entries inherited from older curricula and the recent-release lists. Some title/author variants may remain distinct canonical IDs. External citation links and recommendations are a dated snapshot, not live price, availability or current-award claims. Browser-based visual and device performance testing has not been independently completed. Do not conflate the in-code audit with a complete scholarly bibliographic review.

## Classification-only correction — November 2026

Writing Craft, Rhetoric & Storytelling and Entrepreneurship, Venture Building & Company Creation have been promoted from *Explore Knowledge* to *Mastery*, retaining their existing 25 books apiece and original academic domains.

The Knowledge catalogue remains **75 subjects / 1,182 book placements**, with **nine Mastery pathways (278 placements)**, **55 Explore subjects (554 placements)**, **eight Great Nonfiction shelves (250)** and **three Recent Nonfiction shelves (100)**. This is a reclassification, not content expansion.

The 12 academic domains remain a separate metadata dimension, not alternative reading-depth categories. The application offers the academic domain filter only within Mastery or Explore; editorial reading shelves do not masquerade as academic disciplines. Switching Knowledge layers resets incompatible domain, stage and search filters. All existing book titles, authors, annotations, stages, work IDs, and reading-state storage are preserved.

See [Knowledge taxonomy change audit](knowledge-taxonomy-nine-mastery-2026-11.md) for verification and migration details.
