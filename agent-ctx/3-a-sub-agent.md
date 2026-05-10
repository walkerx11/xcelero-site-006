# Task 3-a: Enhance Ventures page with Framer Motion layoutId animation

## Summary
Added Framer Motion `layoutId` animation to the Ventures page for smooth grid-to-detail transition when clicking a VentureCard.

## Changes Made
**File: `/home/z/my-project/src/artemis/pages/Ventures.tsx`**

1. **Import**: Added `LayoutGroup` to framer-motion import
2. **VentureCard**: 
   - Wrapped in `motion.div` with `layout`, `layoutId={!isSelected ? venture.id : undefined}`, and custom transition
   - Inner div (bg-[#111111]) changed to `motion.div` with `layout` prop
   - h3 venture name changed to `motion.h3` with `layout` prop
3. **VentureExpanded**:
   - Added `layout` prop to outer `motion.div`
   - Header area changed to `motion.div` with `layout`, `layoutId={venture.id}`, and custom transition
   - h2 venture name changed to `motion.h2` with `layout` prop
4. **LayoutGroup**: Wrapped grid + AnimatePresence in `<LayoutGroup>`

## Key Design Decisions
- Conditional `layoutId` on VentureCard (`!isSelected ? venture.id : undefined`) prevents dual-element conflict when both card and expanded view would share the same layoutId simultaneously
- All layout transitions use `duration: 0.4, ease: [0.22, 1, 0.36, 1]` as specified
- VentureExpanded outer container retains its original 0.5s transition for expand/collapse animation

## Verification
- `bun run lint` passes clean
- Dev server running on port 3000
- No existing functionality broken (search, filter, expand/collapse all work)
