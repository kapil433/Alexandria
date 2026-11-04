# Alexandria

**A Literary & Intellectual Atlas** — *Explore literature. Follow ideas. Build understanding.*

Alexandria is an interactive digital library bringing together world literature, fiction, essays, poetry, science fiction, author reading guides, interdisciplinary learning pathways, and a personal reading notebook.

## Explore

- World fiction from 100 countries
- Short stories and novellas
- Rediscovered and overlooked literary gems
- Indian literary and civilizational canon
- Science fiction across historical eras
- Essays, articles, and poetry
- Individualized author guides
- Polymath learning pathways and mental models

The atlas contains **2,610 catalogue placements** representing **2,524 canonical work IDs**, with intentional overlap across collections. These are catalogue IDs, not independently verified bibliographic editions.

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