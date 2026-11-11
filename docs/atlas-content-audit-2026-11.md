# Alexandria content-only editorial audit — November 2026

## Scope
Source repository: `kapil433/readingatlas`, including `3d/catalogue-manifest.json`. Destination: `kapil433/Alexandria`. The existing Alexandria HTML structure, CSS, interaction logic, navigation, and UI/UX are not redesigned.

## Baseline
- Alexandria: 2610 catalogue placements; 2524 canonical work IDs; 100 country/country-group sections.
- 3D Atlas: 1413 source manifest entries across nine collections.
- Exact title+author matches are distinguished from potential title aliases and genuinely unreviewed entries.

## Curated additions
- world: 89
- india: 29
- science: 9
- novellas: 14
- gems: 14
- short: 1
- knowledge: 14

The additional geographic country is **North Korea**, with Bandi's *The Accusation* and the externally publisher-verified *Friend* by Paek Nam-nyong. North Korean memoirs and journalism are deliberately placed as narrative nonfiction in a new existing-style knowledge subject, not labeled fiction.

The source's misleading Yemen title *The Hostage (Boats of Al-Ghad)* is corrected to *The Hostage* (1984), verified against the English publisher. Original-language / translation dates are treated distinctly where checked. Source country groupings are not accepted as proof of a writer's nationality.

## Editorial limitations
This is a selective, defensible first enrichment, not a claim that all unmatched entries are essential or fully verified. The complete 3D Atlas manifest is recorded with status in `docs/atlas-source-comparison-2026-11.json`. Remaining works are queued for individual bibliographic review instead of being bulk-imported.

## Verification links
- https://github.com/kapil433/readingatlas/tree/main/3d
- https://cup.columbia.edu/book/friend/9780231195607/
- https://groveatlantic.com/book/the-accusation/
- https://www.simonandschuster.com/books/The-Hostage/Zayd-Mutee-Dammaj/9781566561402
- https://www.academiegoncourt.com/tahar-beh-jelloun

## Engineering acceptance
Apply the curation patch before the existing registration of works. Preserve prior records and stable IDs, reconcile deduplicated counts from actual data, ensure no HTML/CSS/UI rendering changes, and confirm North Korea, regional Indian literature and every added collection can be searched within the existing interface.
