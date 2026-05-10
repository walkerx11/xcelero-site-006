# Task 3-b: Enhance Routes page with scroll-driven map animation

## Summary
Enhanced the Routes page (`/home/z/my-project/src/artemis/pages/RoutesPage.tsx`) with interactive map animation that ties accordion selection to map highlighting. Added SVG arc overlay, auto-play cycling, zoom effect, and city marker pulse animations.

## Changes Made

### File: `/home/z/my-project/src/artemis/pages/RoutesPage.tsx`

1. **Imports**: Added `useEffect` to React imports
2. **RoutesPage component**:
   - Added `isAutoPlaying` state (starts true)
   - Added auto-play useEffect with setInterval (4s cycle through legs)
   - Created `manualSetActiveLeg` wrapper that stops auto-play
   - Updated hover handlers to respect auto-play state
   - Passed `manualSetActiveLeg` instead of raw `setActiveLeg` to child components
3. **MapSection**: Added `isAutoPlaying` prop, auto-play indicator label, passed prop to BlueprintMap
4. **BlueprintMap** (major enhancement):
   - Added `isAutoPlaying` prop
   - Added `legCenters` useMemo (average x/y per leg for zoom origin)
   - Added `legArcPaths` useMemo (SVG quadratic bezier paths per leg)
   - Added `mapTransform` useMemo (CSS scale + transform-origin for zoom)
   - Added SVG overlay with: arc glow filter, animated route arcs, animated city markers
   - Added auto-play indicator overlay
   - Applied zoom transform to map container

## Key Technical Decisions
- SVG uses `viewBox="0 0 100 100"` with `preserveAspectRatio="none"` to match percentage-based pin positioning
- Arc curvature uses perpendicular offset of -0.8 for subtle bow effect
- Glow effect via separate SVG path with blur filter behind the main animated path
- Auto-play uses raw `setActiveLeg` (not `manualSetActiveLeg`) so it doesn't stop itself
- Hover on accordion only affects map when NOT auto-playing

## Lint Status
All lint checks pass clean.
