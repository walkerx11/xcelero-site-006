---
Task ID: 1
Agent: Main Agent
Task: Build a Bessemer Ventures-style Careers page for xCelero Labs

Work Log:
- Analyzed the Bessemer Ventures jobs board (jobs.bvp.com) HTML structure thoroughly
- Explored the xCelero project structure, routing system, and component patterns
- Created `/src/artemis/data/careers.ts` with mock data for 10 companies (Helios Energy, Noma AI, Vulcan Homes, Joule Mobility, Refract Diagnostics, Denari Finance, Sankofa Education, Convoy Logistics, xCelero Labs, Vectis Ports, Aegis Intelligence) with 31 total job listings
- Built `/src/artemis/pages/CareersPage.tsx` — a sophisticated multi-company job board featuring:
  - Dark masthead with hero copy, stats, and Jobs/Companies tabs
  - Sticky search bar with real-time filtering
  - 5 filter dropdowns (Roles, Skills, Location, Stage, Industry) with checkboxes
  - Internships only and Remote options toggles
  - Active filter chips with clear all functionality
  - Grouped company results with expandable/collapsible sections
  - Company cards with logo, stage badge, employee count, industry tags, location tags
  - Truncated company descriptions
  - Job cards with salary badges, remote/hybrid badges, location, posted date, department, skill tags, and Apply buttons
  - "Show more companies" pagination
  - Empty state with clear filters CTA
  - Dark CTA section at bottom for profile submission
- Added `/careers` route to `src/app/page.tsx`
- Added "careers" navigation link to Layout.tsx Nav
- Added "Careers" link to Footer
- Added Careers and Join pages to SearchModal
- All lint checks pass clean
- Dev server running and responding on port 3000

Stage Summary:
- Careers page fully functional at `#/careers`
- Modeled after Bessemer Ventures jobs.bvp.com blueprint
- 10 portfolio companies with 31 job listings across diverse verticals
- Full search, filter, and grouped company results functionality
