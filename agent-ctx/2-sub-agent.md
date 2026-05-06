# Task ID: 2 - Sub-Agent Work Record

## Task: Replace DottedWorldMap on Home page with interactive BlueprintMap from Routes page

### Files Modified:
1. `/home/z/my-project/src/artemis/data/routes.ts` - Added MAP_LOCATIONS data and types (LabelPos, MapLocation)
2. `/home/z/my-project/src/artemis/pages/RoutesPage.tsx` - Removed inline MAP_LOCATIONS, now imports from data file
3. `/home/z/my-project/src/artemis/pages/Home.tsx` - Replaced DottedWorldMap with BlueprintMap, added filters and CTA
4. `/home/z/my-project/worklog.md` - Appended work record

### Changes Summary:
- Extracted `MAP_LOCATIONS` array (~30 location objects) and `MapLocation`/`LabelPos` types from RoutesPage.tsx to `@/artemis/data/routes.ts`
- RoutesPage.tsx now imports these from the shared data file
- Home.tsx: Removed `mapHubs` array (16 lat/lng entries) and `DottedWorldMap` component (~100 lines)
- Home.tsx: Added new `BlueprintMap` component using Newlab topographic map image with color-coded pins
- Home.tsx: Added leg filter buttons, legend row, and "View Full Route Map" CTA button
- Home.tsx: Clicking city markers navigates to `/routes` page
- LocationAccordion section kept unchanged

### Lint: 0 errors, 0 warnings
### Dev server: Running on port 3000
