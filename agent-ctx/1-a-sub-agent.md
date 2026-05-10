# Task 1-a: Add routing and navigation for Team and CaseStudies pages

## Agent: Sub Agent

## Changes Made

### 1. `/home/z/my-project/src/app/page.tsx`
- Added imports: `Team` from `@/artemis/pages/Team`, `CaseStudies` from `@/artemis/pages/CaseStudies`
- Added route: `if (path === "/team") return <Team />;`
- Added route: `if (path === "/case-studies") return <CaseStudies />;`
- Replaced basic 404 fallback with editorial-style 404 page featuring:
  - Large "404" display font (responsive 80px/120px)
  - "Page Not Found" subtitle
  - Descriptive message about moved/nonexistent pages
  - "Return Home" button (bg-[#111111] text-white, hover:bg-[#FF4D00])
  - "Back to Insights" and "View Ventures" secondary links
  - White background, centered layout, consistent xCelero editorial styling

### 2. `/home/z/my-project/src/artemis/components/Layout.tsx`
- Added `{ name: "team", path: "/team" }` after "careers" in navLinks array
- Added `{ name: "case studies", path: "/case-studies" }` after "team" in navLinks array

### 3. `/home/z/my-project/src/artemis/router.tsx`
- Added param parsing: `if (path.startsWith("/case-studies/") && path.split("/").length === 3) { params.id = path.split("/")[2]; }`

## Verification
- `bun run lint` passes clean with zero errors
