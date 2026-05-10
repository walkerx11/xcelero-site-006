# Task 13 - Main Agent: Add Case Studies Section to Ventures Page

## Task
Add a "Case Studies" section on the Ventures page, positioned just below the "Load More" button area but above the ReviewSection.

## File Modified
- `/home/z/my-project/src/artemis/pages/Ventures.tsx`

## Changes Made

### 1. Import Addition
Added `import { caseStudiesData } from "@/artemis/data/caseStudies";` to imports (line 8).

### 2. CaseStudiesSection Component (lines 233-307)
New component with:
- **Section header**: White bg, border-t, responsive padding
  - "CASE STUDIES" mono label in orange (#FF4D00)
  - Heading with italic serif orange "works"
  - Subtext about four ventures/verticals
- **Cards grid**: `grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5`
  - Each card: aspect-[4/3] image background with dark gradient overlay
  - Vertical tag badge (orange bg, top-left)
  - Venture name in white (bottom)
  - Key revenue metric in orange
  - Hover: scale image, grayscale-to-color, brightened overlay
  - Links to `/case-study` via Link from @/artemis/router
- **Animations**: useInView scroll-triggered with staggered entrance

### 3. Insertion Point
`<CaseStudiesSection />` placed between the Ventures Grid section close and `<ReviewSection />`, so the order is: Load More → CaseStudiesSection → ReviewSection.

## Verification
- All lint checks pass clean
- Dev server running on port 3000
