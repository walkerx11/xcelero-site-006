# Task 2-a: Add Community as 4th pillar + rename Projects→Ventures + match Capital hero

## Summary
All three changes completed successfully across Approach.tsx, Home.tsx, and Capital.tsx.

## Changes Made

### Approach.tsx
- Added `Users` icon import from lucide-react
- Renamed engines[1].title from "Projects" to "Ventures"
- Added 4th engine: "Community" (num "04", Users icon, XCitizens network desc, link "/join")
- Updated hero paragraph: "infrastructure, ventures, capital, and community"
- Updated section label: "The 3 Engines" → "The 4 Engines"
- Updated heading: "Three engines, one machine." → "Four engines, one machine."
- Updated section description to reference "four integrated engines"
- Changed grid from `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-4`

### Home.tsx
- Added `Users` icon import from lucide-react
- Renamed pillars[1]: id "projects" → "ventures", heading "Projects" → "Ventures"
- Added 4th pillar: "Community" with XCitizens network content
- Updated intro section text to include "ventures, capital, and community"

### Capital.tsx
- Redesigned Hero to match Route page editorial style (white bg, centered layout, inline stats)
- Removed `<StatsBar />` from page render

## Verification
- `bun run lint` passes clean
- Dev server running on port 3000
