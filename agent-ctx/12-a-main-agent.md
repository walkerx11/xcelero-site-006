# Task 12-a: Add "13 Critical Domains" section to About page

## Summary
Added a `CriticalDomainsSection` with 13 image cards to the About page, positioned between `HowWeWorkSection` and `ManifestoCardsSection`.

## File Modified
- `/home/z/my-project/src/artemis/pages/About.tsx`

## Changes Made
1. Added `criticalDomains` data array (13 entries with name, description, Unsplash image URL)
2. Created `CriticalDomainsSection` component with:
   - Dark bg (#111111) section with white text
   - "Critical Domains" mono uppercase orange label
   - "13 technologies. One Route." heading (Route in italic serif orange)
   - Responsive grid: 2→3→4→5 columns
   - Tall aspect-[3/4] image cards with gradient overlay, hover scale, staggered entrance
   - "Explore ventures in these domains" link to /ventures
3. Added `<CriticalDomainsSection />` between `<HowWeWorkSection />` and `<ManifestoCardsSection />`

## Lint
All checks pass clean.
