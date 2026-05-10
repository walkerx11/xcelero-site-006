export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "investment" | "product-programs" | "business-community" | "finance-operations" | "research";
  bio: string;
  location: string;
  image: string;
}

export const teamData: TeamMember[] = [
  // Investment & Governance
  {
    id: "1",
    name: "Amina Osei-Mensah",
    role: "Managing Partner",
    category: "investment",
    bio: "Former head of Africa investments at a top-tier sovereign wealth fund. Built three venture-backed companies across energy and logistics before founding xCelero to systematize venture creation for emerging markets.",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: "Kwame Asante",
    role: "General Partner",
    category: "investment",
    bio: "16 years in development finance across IFC, AfDB, and two pan-African funds. Structured over $800M in emerging market transactions. Leads capital strategy, public-private partnerships, and the six investment vehicles.",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: "Ngozi Eze",
    role: "General Partner",
    category: "investment",
    bio: "Wharton MBA and former McKinsey analyst specializing in African capital markets. Sources ventures, runs due diligence, and works hands-on with founders on go-to-market and commercialization across the Route.",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: "Camilo Adeyemi",
    role: "Partner Emeritus",
    category: "investment",
    bio: "Engineer and strategic operator. Leads technology commercialization through partnerships, pilots, and market validation. Previously: partnerships and advisory at the African Development Bank, corporate strategy at Shell Africa, Wharton.",
    location: "Abidjan, Cote d'Ivoire",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },

  // Product & Programs
  {
    id: "5",
    name: "David Kamau",
    role: "Head of Product",
    category: "product-programs",
    bio: "Stanford CS PhD and former Google X engineer. Led distributed systems teams across three continents. Now builds the product and technology backbone of the Route network, from platform tools to prototyping infrastructure.",
    location: "Addis Ababa, Ethiopia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "6",
    name: "Fatima Al-Rashid",
    role: "Head of Programs",
    category: "product-programs",
    bio: "Scaled operations for two Y Combinator companies across Sub-Saharan Africa. Expert in building distributed teams and cross-border logistics systems that work where infrastructure is thin.",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "7",
    name: "Liya Tadesse",
    role: "Product Engineer",
    category: "product-programs",
    bio: "MIT-trained systems engineer who designed manufacturing execution systems for semiconductor fabs. Now architects the prototyping labs, maker spaces, and pilot zones inside every XEmbassy node.",
    location: "Addis Ababa, Ethiopia",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=400&q=80",
  },

  // Business & Community
  {
    id: "8",
    name: "Isata Bangura",
    role: "Global Head of Business",
    category: "business-community",
    bio: "Cambridge economics graduate with deep experience in digital finance and mobile money across West Africa. Leads industry and government partnerships, startup commercialization, and market entry strategy. Previously: McKinsey, European Union.",
    location: "Freetown, Sierra Leone",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "9",
    name: "Adaeze Nwosu",
    role: "Membership & Community",
    category: "business-community",
    bio: "Community operations leader and connector. Previously: member experience operations at a pan-African co-working network and a global tech campus. Focused on member experience, defining culture, creating connections, and building the XCitizen network across 39 countries.",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1583487439331-6c94b0f7a8fe?auto=format&fit=crop&w=400&q=80",
  },

  // Finance & Operations
  {
    id: "10",
    name: "Samuel Mengistu",
    role: "Fund Controller",
    category: "finance-operations",
    bio: "Former quantitative researcher at a Nairobi-based hedge fund. Builds the financial models and scenario analyses that underpin every SPV and Thematic Fund allocation. Works closely with founders on unit economics and fundraising.",
    location: "Addis Ababa, Ethiopia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "11",
    name: "Emeka Obi",
    role: "Finance",
    category: "finance-operations",
    bio: "Former facilities director for a pan-African logistics company operating across 14 countries. Oversees financial planning, budgeting, and capital allocation across all 190+ Route hubs, XEmbassy nodes, and product realization labs.",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "12",
    name: "Blessing Okonkwo",
    role: "Legal Analyst",
    category: "finance-operations",
    bio: "Civil engineer turned legal and compliance operator. Managed regulatory frameworks across 8 West African jurisdictions before joining xCelero to navigate cross-border legal structures and investment compliance across the Route.",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },

  // Research & Associates
  {
    id: "13",
    name: "Thandiwe Moyo",
    role: "Writer & Researcher",
    category: "research",
    bio: "Former program director at a leading African accelerator with 200+ alumni companies. Now leads thesis development, thought leadership, and the intellectual infrastructure that underpins every investment and program decision on the Route.",
    location: "Harare, Zimbabwe",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "14",
    name: "Yusuf Hassan",
    role: "Associates",
    category: "research",
    bio: "Serial founder turned operator. His last company built solar microgrids across 12 Kenyan counties before acquisition. Now supports deal flow analysis, venture due diligence, and cohort operations across accelerator programs.",
    location: "Mombasa, Kenya",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "15",
    name: "Marie-Claire Uwimana",
    role: "Associates",
    category: "research",
    bio: "Education specialist with a decade of experience designing experiential learning programs for engineers and operators across East Africa. Supports fellowship operations, talent pipeline development, and program design for the Route.",
    location: "Kigali, Rwanda",
    image: "https://images.unsplash.com/photo-1570840306053-7a4117db0f62?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "16",
    name: "Dr. Adebayo Ogunlesi",
    role: "Partner Emeritus",
    category: "investment",
    bio: "Former managing director at Goldman Sachs and chairman of a major African infrastructure fund. Brings four decades of institutional capital and infrastructure development experience to xCelero's strategic planning.",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "17",
    name: "Dr. Wangari Mwangi",
    role: "Associates",
    category: "research",
    bio: "Former Kenyan Cabinet Secretary for Industrialization. Architect of East Africa's most successful special economic zone legislation and a trusted bridge between venture capital and government. Advises on policy and regulatory strategy.",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];
