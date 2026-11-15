# Alexandria

**A Literary & Intellectual Atlas** — *Explore literature. Follow ideas. Build understanding.*

Alexandria is an interactive digital library bringing together world literature, fiction, essays, poetry, science fiction, author reading guides, interdisciplinary learning pathways, and a personal reading notebook.

## Explore

- World fiction from 101 country and regional sections
- Short stories and novellas
- Rediscovered and overlooked literary gems
- Indian literary and civilizational canon
- Science fiction across historical eras
- Essays, articles, and poetry
- Individualized author guides
- Polymath learning pathways and mental models

The atlas currently contains **2,984 catalogue placements** representing **2,789 canonical work IDs**, with intentional overlap across collections. These are catalogue IDs, not independently verified bibliographic editions.

## Refinements

- Removed unreliable or edition-dependent **book page counts**. Users can still enter page/chapter references in personal notes.
- Clarified catalogue placements versus unique work IDs.
- Clarified that external reading links do not necessarily provide free access.
- Improved responsiveness, reduced-motion support, and keyboard accessibility.
- Improved privacy of clean public HTML exports.

## Personal notes and privacy

Reading progress, ratings, summaries, custom books, and notes are held in your browser's local storage—not in the GitHub repository or on a server. Export a personal JSON backup from the app to transfer your work between devices.

**Do not publish personal backups or personal-edition HTML exports.**

## Development and hosting

The current public application is self-contained in `index.html`. No backend or package installation is required.

To preview locally, open `index.html` in a modern browser.

The GitHub Actions workflow at `.github/workflows/pages.yml` publishes the site to GitHub Pages after pushes to the `main` branch. Set **Settings → Pages → Build and deployment → Source: GitHub Actions** if needed.

Once enabled, the site URL is expected to be:

https://kapil433.github.io/Alexandria/

## Source and attribution

This is a curated reading atlas, not a repository of book texts. Publication and edition details may differ; links to third-party works are informational.
## Reading Atlas editorial enrichment (November 2026)

The November 2026 Reading Atlas consolidation included a bibliography-only enrichment from Reading Atlas's 3D catalogue manifest. This changes **catalogue data only**, not Alexandria's interface or reading tools.

- World Fiction: 739 placements across 101 country/regional sections (including North Korea).
- India Canon: 173 placements, strengthening Hindi, Bengali, Urdu, Tamil, Telugu and other regional literatures.
- Short Fiction: 264 placements, including cross-listed Bandi stories.
- Used-Bookstore Gems: 364 placements.
- Science Fiction: 108 placements.
- Interdisciplinary pathways: 53 subjects, including a correctly categorized witness-literature and memoir pathway.
- Author guides: 101, unchanged.

That earlier consolidation contained **2,787 placements and 2,694 canonical work IDs** before the subsequent Knowledge Library expansion, including intentional cross-listing. Exact title/author comparisons and unresolved candidates are recorded in `docs/atlas-source-comparison-2026-11.json`. Curated additions and provenance are in `data/atlas-curation-2026-11.json`; see `docs/atlas-content-audit-2026-11.md` for editorial limitations.

## Knowledge Library — four layers (November 2026)

The original expanded four-layer curriculum contained **75 Knowledge subjects and 1,182 curated Knowledge book placements** (historical snapshot, before the subsequent ReadingAtlas-style Explore revision) grouped into four complementary layers, using the established app layout, cards, progress tracking and reading studio:

1. **Nine mastery programmes (278 placements):** Mathematics; World & Comparative Philosophy with an emphasis on non-duality; Anthropology; Computer Science & Systems Design; AI, Product Management & Building; MBA, Marketing, Branding & Management; Complexity & Network Science; Writing Craft & Storytelling; and Entrepreneurship & Venture Building.
2. **Understand the World (55 subjects, 554 placements):** twelve broad scientific and intellectual domains spanning the natural sciences, social sciences, philosophy, politics, technology, design, business and arts. Ten new introductory foundations include Physics, Chemistry, Biology, Earth Science, Engineering, Political Science, Religion, Public Health, Human Geography and Economics.
3. **Great Nonfiction Library:** 250 distinct curated nonfiction books across eight editorial shelves, including cross-disciplinary titles such as *Gödel, Escher, Bach*.
4. **Recent & Highly Recommended Nonfiction:** 100 nonfiction selections grouped as 2024 (30), 2025 (33) and 2026 (37), with a dated selection snapshot, critical-list or prize-source links, and source recognition recorded with each entry.

**At the time of that expansion: 3,330 placements, 3,038 canonical work IDs, 75 Knowledge subjects, 101 country/region sections and 101 author guides.** Placements are not unique titles. A title can appear in more than one subject using its canonical work ID; some imported records retain source-specific bibliographic ID variants and require continued manual verification.

The [Knowledge Curation Audit](docs/knowledge-library-2026.md) describes the editorial method and caveats. Source datasets are versioned under `data/`. Run `node scripts/check-knowledge-library.cjs` for the regression suite. This project contains bibliographic descriptions and recommendations, not book texts. Site design, CSS and personal reading-data storage have not been redesigned.

## Earlier Knowledge classification refinement — November 2026

At that point the Knowledge Library contained **75 subjects and 1,182 reading placements**. Nine subjects are designated Mastery pathways (278 placements), including **Writing Craft** and **Entrepreneurship**; the other 55 broad Knowledge subjects (554 placements) retain their existing content. The Great Nonfiction (250) and Recent Nonfiction (100) shelves remain unchanged. Domain and purpose filters are separate; switching layers clears incompatible selections. No book data or visual styling was changed by this taxonomy refinement.

## Current Knowledge experience — accessible ReadingAtlas-style Explore (November 2026)

The current Knowledge library contains **43 subjects and 836 reading placements**, distributed as follows:

| Collection | Subjects/shelves | Book placements | Status |
| --- | ---: | ---: | --- |
| Designated Mastery | 9 | 278 | Exactly preserved |
| Explore Knowledge | 23 | 208 | Reorganized, with 5–10 books in each subject |
| Great Nonfiction | 8 | 250 | Exactly preserved |
| Recent Nonfiction (2024–2026) | 3 | 100 | Exactly preserved |

Explore Knowledge follows the **22 subject headings and ordering of ReadingAtlas's World Nonfiction** and includes a twenty-third subject, **Taste, Comedy, Color & Everyday Aesthetics** (10 books, including short Japanese works). The **277-book ReadingAtlas source** and its original subject descriptions are retained in `data/readingatlas-explore-2026.json`. Alexandria displays a deliberately compact, numbered 208-book selection, with the source book order, explanatory notes and subject connections preserved. The previous 55 specialized Explore subjects are also retained in the application's internal `legacyExploreSubjectArchive`, but are not displayed in the simplified Explore list.

**Dr. B. R. Ambedkar is Author Guide #102**, with a three-stage reading sequence and edition/companion guidance, matching the existing Author Guide format. The original reading IDs for his already-listed books have not been changed.

Across the entire Alexandria catalogue, there are **2,984 placements and 2,789 canonical work IDs** after removing redundant Explore placements from the active navigation. This is not a count of physical titles or editions; original books and the previous Explore paths remain archived in versioned source data.

The CSS, original embedded catalogue, personal reading notes/storage, and the selected nine Mastery, Great Nonfiction, and Recent Nonfiction reading sequences have not been modified. See `docs/readingatlas-explore-2026.md` for the source-to-Alexandria crosswalk, change scope and verification notes. Run `node scripts/check-readingatlas-explore.cjs` plus the Knowledge regression scripts to verify counts and source alignment.
