# Alexandria Knowledge classification audit — 13 November 2026

## Intent and scope

Following explicit approval, **Writing Craft, Rhetoric & Storytelling** and **Entrepreneurship, Venture Building & Company Creation** are classified as designated Mastery subjects. This revision has **no new, removed, or edited book records**.

## Before and after

| Area | Before subjects | After subjects | Before books | After books |
|---|---:|---:|---:|---:|
| Mastery | 7 | 9 | 228 | 278 |
| Explore Knowledge | 57 | 55 | 604 | 554 |
| Great Nonfiction | 8 | 8 | 250 | 250 |
| Recent Nonfiction | 3 | 3 | 100 | 100 |
| **Total** | **75** | **75** | **1,182** | **1,182** |

The two migrated subjects each contain 25 original books, giving a precise transfer of 50 placements and zero net additions.

## Classification design

- **Knowledge layer** is the learning purpose: Mastery, Explore Knowledge, Great Nonfiction, Recent Nonfiction.
- **Academic domain** is a separate, optional refinement. Domain choices are scoped to Mastery or Explore; recent and Great Nonfiction remain editorial reading shelves.
- **Depth** is not inferred from raw book counts. A 25-book course is not automatically Mastery.
- **Reading stage** remains the existing five-stage pathway, unchanged for every book.
- Changing layer via tabs or dropdown resets stale domain, stage and search filters, while preserving all canonical reading and personal-library records.
- Writing Craft retains its academic domain **Language, Literature, Arts & Culture**.
- Entrepreneurship retains **Economics, Business & Management**.

## Verification

The baseline and updated compressed seed dataset and CSS are identical. Programmatic data bootstraps have been compared title by title and subject by subject.

- No changes to any of the original 75 subject book arrays or their work IDs.
- The only subject label changes abbreviate Writing Craft and Entrepreneurship while retaining their meanings.
- No changes to author guides, geographic fiction data, source book descriptions, reading order, or reading-progress storage.
- Application inline JavaScript parses successfully.
- A dependency-free validation script is at `scripts/check-knowledge-taxonomy.cjs`.
- Full interactive browser and device testing is not independently confirmed.

**Deployment:** Pending pull-request review. This branch is not automatically merged into `main`.
