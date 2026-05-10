# Task 2-b: Investor Dashboard Page

## Work Record

### Files Created
- `/home/z/my-project/src/artemis/pages/InvestorDashboard.tsx` — Full investor dashboard page

### Files Modified
- `/home/z/my-project/src/app/page.tsx` — Added `/dashboard` route + InvestorDashboard import
- `/home/z/my-project/src/artemis/components/Layout.tsx` — Added "dashboard" nav link after "capital"

### Sections Built
1. **Hero** — Dark bg (#111111), "xCelero Capital Dashboard" label, "Portfolio at a glance." heading, subtext, disclaimer
2. **Key Metrics Row** — 4 cards (AUM $127.4M, 43 Active Ventures, 28.6% Net IRR, 7 Successful Exits) with icons, hover effects
3. **Fund Performance** — Table with 6 funds (Venture Fund I, Critical Tech, Route Infrastructure, Catalyst Notes, Community Investment Notes, Single-Venture SPVs), responsive grid
4. **Portfolio Breakdown** — 2-column layout with CSS bar charts for sector allocation (6 sectors) and stage allocation (3 stages), animated bars with #FF4D00
5. **Recent Activity** — Timeline with 5 events, left border + dot markers, event + time display
6. **CTA Section** — Dark bg, "Ready to invest?" heading, two buttons (Schedule a Call → /join, View Investment Vehicles → /capital)

### Design Compliance
- font-display for headings, font-mono for labels
- Colors: #111111 text, #FF4D00 accent, /30 /40 /50 /60 opacity variants
- Borders: border-[#111111]/10
- Spacing: py-16 md:py-24 px-6 md:px-12 lg:px-20
- Max width: max-w-[1400px] mx-auto
- framer-motion for all animations (useInView, staggered reveals, animated bars)
- "use client" directive
- Responsive design with mobile-first approach

### Verification
- All lint checks pass clean
- Dev server running on port 3000
