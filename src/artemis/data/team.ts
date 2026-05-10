export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "leadership" | "investment" | "programs" | "infrastructure" | "advisory";
  bio: string;
  location: string;
  image: string;
}

export const teamData: TeamMember[] = [
  // Leadership
  {
    id: "1",
    name: "Amina Osei-Mensah",
    role: "CEO & Founder",
    category: "leadership",
    bio: "Former head of Africa investments at a top-tier sovereign wealth fund. Built three venture-backed companies across energy and logistics before founding xCelero to systematize venture creation for emerging markets.",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: "David Kamau",
    role: "Chief Technology Officer",
    category: "leadership",
    bio: "Stanford CS PhD and former Google X engineer. Led distributed systems teams across three continents before joining xCelero to build the technology backbone of the Route network.",
    location: "Addis Ababa, Ethiopia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: "Fatima Al-Rashid",
    role: "Chief Operating Officer",
    category: "leadership",
    bio: "Scaled operations for two Y Combinator companies across Sub-Saharan Africa. Expert in building distributed teams and cross-border logistics systems that work where infrastructure is thin.",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: "Kwame Asante",
    role: "Chief Investment Officer",
    category: "leadership",
    bio: "16 years in development finance across IFC, AfDB, and two pan-African funds. Structured over $800M in emerging market transactions and now deploys that discipline into xCelero's six investment vehicles.",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },

  // Investment Team
  {
    id: "5",
    name: "Ngozi Eze",
    role: "Senior Investment Associate",
    category: "investment",
    bio: "Wharton MBA and former McKinsey analyst specializing in African capital markets. Leads deal sourcing and due diligence for energy and manufacturing verticals across the Route.",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "6",
    name: "Samuel Mengistu",
    role: "Investment Analyst",
    category: "investment",
    bio: "Former quantitative researcher at a Nairobi-based hedge fund. Builds the financial models and scenario analyses that underpin every SPV and Thematic Fund allocation decision.",
    location: "Addis Ababa, Ethiopia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "7",
    name: "Isata Bangura",
    role: "Investment Associate",
    category: "investment",
    bio: "Cambridge economics graduate with deep experience in digital finance and mobile money systems across West Africa. Sources and evaluates fintech and digital infrastructure deals.",
    location: "Freetown, Sierra Leone",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },

  // Programs
  {
    id: "8",
    name: "Thandiwe Moyo",
    role: "Director of Programs",
    category: "programs",
    bio: "Former program director at a leading African accelerator with 200+ alumni companies. Designed the four-strata program architecture that takes founders from fellowship through scale.",
    location: "Harare, Zimbabwe",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "9",
    name: "Yusuf Hassan",
    role: "Accelerator Lead",
    category: "programs",
    bio: "Serial founder turned operator. His last company built solar microgrids across 12 Kenyan counties before acquisition. Now he guides xCelero Accelerator cohorts through the 0-to-1 journey.",
    location: "Mombasa, Kenya",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "10",
    name: "Marie-Claire Uwimana",
    role: "Fellowship Director",
    category: "programs",
    bio: "Education specialist with a decade of experience designing experiential learning programs for engineers and operators across East Africa. Runs the xHansa Fellowship that seeds the talent pipeline.",
    location: "Kigali, Rwanda",
    image: "https://images.unsplash.com/photo-1570840306053-7a4117db0f62?auto=format&fit=crop&w=400&q=80",
  },

  // Infrastructure
  {
    id: "11",
    name: "Emeka Obi",
    role: "Hub Operations Lead",
    category: "infrastructure",
    bio: "Former facilities director for a pan-African logistics company operating across 14 countries. Oversees the design, build-out, and daily operation of all 190+ Route hubs and XEmbassy nodes.",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "12",
    name: "Liya Tadesse",
    role: "Engineering Lead",
    category: "infrastructure",
    bio: "MIT-trained systems engineer who designed manufacturing execution systems for semiconductor fabs. Now architects the prototyping labs and pilot zones inside every XEmbassy node.",
    location: "Addis Ababa, Ethiopia",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "13",
    name: "Blessing Okonkwo",
    role: "Route Infrastructure Manager",
    category: "infrastructure",
    bio: "Civil engineer turned tech operator. Managed the build-out of co-working and maker spaces across 8 West African cities before joining xCelero to connect hubs into the Route network.",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },

  // Advisory Board
  {
    id: "14",
    name: "Dr. Adebayo Ogunlesi",
    role: "Senior Advisor, Infrastructure",
    category: "advisory",
    bio: "Former managing director at Goldman Sachs and chairman of a major African infrastructure fund. Brings four decades of institutional capital and infrastructure development experience to xCelero's strategic planning.",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "15",
    name: "Dr. Wangari Mwangi",
    role: "Senior Advisor, Policy & Government",
    category: "advisory",
    bio: "Former Kenyan Cabinet Secretary for Industrialization. Architect of East Africa's most successful special economic zone legislation and a trusted bridge between venture capital and government.",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];
