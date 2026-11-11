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

The atlas contains **2,787 catalogue placements** representing **2,694 canonical work IDs**, with intentional overlap across collections. These are catalogue IDs, not independently verified bibliographic editions.

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

The `content-atlas-curation-2026-11` branch includes a bibliography-only enrichment from Reading Atlas's 3D catalogue manifest. This changes **catalogue data only**, not Alexandria's interface or reading tools.

- World Fiction: 739 placements across 101 country/regional sections (including North Korea).
- India Canon: 173 placements, strengthening Hindi, Bengali, Urdu, Tamil, Telugu and other regional literatures.
- Short Fiction: 264 placements, including cross-listed Bandi stories.
- Used-Bookstore Gems: 364 placements.
- Science Fiction: 108 placements.
- Interdisciplinary pathways: 53 subjects, including a correctly categorized witness-literature and memoir pathway.
- Author guides: 101, unchanged.

The overall catalogue contains **2,787 placements and 2,694 canonical work IDs**, including intentional cross-listing. Exact title/author comparisons and unresolved candidates are recorded in `docs/atlas-source-comparison-2026-11.json`. Curated additions and provenance are in `data/atlas-curation-2026-11.json`; see `docs/atlas-content-audit-2026-11.md` for editorial limitations.
