"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "@/artemis/router";
import {
  ArrowRight,
  MapPin,
  ChevronDown,
  Flame,
  Wheat,
  Anchor,
  Cog,
  Factory,
  Rocket,
  Globe,
  Lightbulb,
  Users,
} from "lucide-react";
import { teamData, TeamMember } from "@/artemis/data/team";

/* ── Timeline Data ── */
const timelineEras = [
  {
    era: "200,000 BCE",
    title: "The First Networks",
    subtitle: "Food Gatherers & Hunting Circles",
    description:
      "Early humans survived not as individuals, but as circles. Hunting parties coordinated across vast savannahs. Food gatherers shared knowledge of seasons, water sources, and medicinal plants. The first technology was cooperation. The first infrastructure was trust.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800&q=80",
    side: "left" as const,
  },
  {
    era: "10,000 BCE",
    title: "The Agricultural Compact",
    subtitle: "Settlement, Surplus, and Specialization",
    description:
      "When humans planted the first seed, they also planted the first economy. Surplus created trade. Trade created routes. Routes created cities. The Nile, the Niger, the Zambezi became arteries of commerce. Specialization was born: the blacksmith, the weaver, the healer.",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    side: "right" as const,
  },
  {
    era: "800 - 1600 CE",
    title: "The Trade Routes",
    subtitle: "Trans-Saharan, Swahili Coast, and Silk Road",
    description:
      "Gold, salt, ivory, and ideas flowed along routes that connected Timbuktu to Cairo, Kilwa to Gujarat, and Mogadishu to Malacca. These were not just trade corridors; they were knowledge highways. The Hausa city-states, the Great Zimbabwe, the Swahili coast: all built on the principle that commerce and culture travel together.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80",
    side: "left" as const,
  },
  {
    era: "1800 - 1960",
    title: "The Extraction Century",
    subtitle: "Colonial Infrastructure, Extractive Economics",
    description:
      "Railways were built, but only from mine to port. Universities were founded, but only to train administrators. Infrastructure served extraction, not self-reliance. The pattern was consistent: raw materials left, finished goods returned, value accumulated elsewhere. The wealth of the continent was its curse.",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    side: "right" as const,
  },
  {
    era: "1960 - 2000",
    title: "Independence Without Infrastructure",
    subtitle: "Political Freedom, Economic Dependency",
    description:
      "Flags changed. Borders hardened. But the infrastructure of extraction remained. Post-colonial economies inherited railways that still ran mine-to-port. Aid replaced trade. Structural adjustment replaced industrial policy. The talent drain accelerated: 70,000 professionals leaving Africa annually by the year 2000.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    side: "left" as const,
  },
  {
    era: "2000 - 2019",
    title: "The Digital Leap",
    subtitle: "Mobile Money, Fintech, and the Startup Ecosystem",
    description:
      "M-Pesa proved that Africa could leapfrog. Mobile-first innovation spread across the continent: fintech in Lagos, agritech in Nairobi, healthtech in Kigali. But 90% of ventures still failed. The ecosystem had talent and ambition but lacked infrastructure, capital, and the commercialization architecture to turn ideas into operating companies at scale.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    side: "right" as const,
  },
  {
    era: "2020",
    title: "The Thesis Is Drafted",
    subtitle: "Amina Osei-Mensah drafts the xCelero thesis",
    description:
      "After a decade leading Africa investments at a sovereign wealth fund, and building three venture-backed companies, Amina Osei-Mensah drafts the founding thesis: the Global South doesn't need more incubators or more aid. It needs infrastructure, ventures, capital, and community, integrated as a single platform. The four engines.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    side: "left" as const,
    isCurrentDay: true,
  },
  {
    era: "2021 - 2022",
    title: "The Platform Takes Shape",
    subtitle: "M1 Core Nairobi, XEmbassy Lagos, Route Leg 1",
    description:
      "The first M1 Core campus opens in Nairobi: 50,000 sq ft of lab, maker, and co-working space. XEmbassy nodes launch in Lagos and Accra. The first accelerator cohort begins. Six investment vehicles are structured. The Route goes from thesis to operating infrastructure.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    side: "right" as const,
    isCurrentDay: true,
  },
  {
    era: "2023 - Present",
    title: "The Flywheel Accelerates",
    subtitle: "190 hubs, 39 countries, 40+ ventures on the Route",
    description:
      "xCelero now operates across 190 hubs in 39 countries. 40+ ventures are building on the Route. Seven accelerator cohorts have graduated. The XCitizen network exceeds 1,200 members. The Route spans six legs from the Gulf of Guinea to the Mediterranean. The four engines, infrastructure, ventures, capital, community, compound with every cycle.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    side: "left" as const,
    isCurrentDay: true,
  },
];

/* ── Manifesto Sections (condensed from Manifesto page) ── */
const manifestoPoints = [
  {
    number: "01",
    title: "The Model is Broken",
    heading: "Centralized, extractive, myopic.",
    text: "The dominant model of global innovation is broken. For decades, \"critical technologies\" have been defined by narrow geopolitical interests, focused on supremacy in defense, aerospace, and computing. These models hoard genius in a handful of elite cities, while treating the rest of the world as a market for consumption or an arena for extraction.",
  },
  {
    number: "02",
    title: "The Self-Reliance Mandate",
    heading: "True self-reliance is technological.",
    text: "We reject the centralized, elitist models that hoard opportunity. We champion a world where a coder in Niamey can spark a startup with a financier in Tokyo. Under xHansa, we recognize that true self-reliance is not just political; it is technological. It is the ability to generate electricity, secure food, purify water, and defend networks on one's own terms.",
  },
  {
    number: "03",
    title: "Systematic Maximalism",
    heading: "Deep-tech architecture.",
    text: "xCelero represents a systemic rewrite of how critical innovation is funded, built, and deployed. We do not do \"apps for convenience.\" We do deep-tech infrastructure. We do Civilizational Flow. This is not a manifesto of hope; it is a declaration of intent. Welcome to the engine of the next civilization.",
  },
];

/* ── Team categories ── */
const categories = [
  { key: "all", label: "All" },
  { key: "leadership", label: "Leadership" },
  { key: "investment", label: "Investment" },
  { key: "programs", label: "Programs" },
  { key: "infrastructure", label: "Infrastructure" },
  { key: "advisory", label: "Advisory" },
];

/* ══════════════════════════════════════════════════════════════════════════
   ABOUT PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function About() {
  return (
    <div className="bg-white text-[#111111]">
      <HeroSection />
      <TimelineSection />
      <ManifestoSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HERO, Editorial centered with serif accent
   ══════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative bg-white text-[#111111] pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-44 md:pb-28 px-5 sm:px-6 md:px-12 lg:px-20 border-b border-[#111111]/10">
      <div ref={ref} className="w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#FF4D00] mb-8 md:mb-12">
            About xCelero Labs
          </span>

          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] font-display font-medium tracking-[-0.02em] mb-8 md:mb-10">
            From the first{" "}
            <em className="italic font-serif text-[#FF4D00]">circle</em> to the
            four engines.
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-[1.6] text-[#111111]/50 font-medium max-w-2xl">
            For 200,000 years, humans have organized in circles to hunt, trade,
            build, and compound. xCelero is the latest iteration of that oldest
            pattern: a platform where builders gather, infrastructure enables,
            capital funds, and the network compounds.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   TIMELINE, Alternating left-right with images
   ══════════════════════════════════════════════════════════════════════════ */
function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6 block">
            Our History
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-display font-medium tracking-tight leading-[1.05] mb-6">
            The long arc of{" "}
            <em className="italic font-serif text-[#FF4D00]">cooperation</em>.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#111111]/50 font-medium leading-relaxed max-w-2xl mx-auto">
            xCelero didn&apos;t emerge from nothing. It stands on 200,000 years
            of human collaboration. The same impulse that drove hunting circles
            drives the Route today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#111111]/10 -translate-x-1/2" />

          {/* Mobile line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-[#111111]/10" />

          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {timelineEras.map((era, i) => (
              <TimelineEntry key={era.era} era={era} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  era,
  index,
}: {
  era: (typeof timelineEras)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = era.icon;
  const isLeft = era.side === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className="relative"
    >
      {/* Desktop: alternating layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left column */}
        <div className={`${isLeft ? "pr-8" : "order-2 pl-8"}`}>
          {isLeft ? (
            <TimelineContent era={era} />
          ) : (
            <TimelineImage era={era} />
          )}
        </div>
        {/* Right column */}
        <div className={`${isLeft ? "order-2 pl-8" : "pr-8"}`}>
          {isLeft ? (
            <TimelineImage era={era} />
          ) : (
            <TimelineContent era={era} />
          )}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="lg:hidden flex gap-6">
        {/* Dot on mobile line */}
        <div className="relative flex-shrink-0 w-12 flex flex-col items-center">
          <div
            className={`w-3 h-3 rounded-full border-2 z-10 mt-2 ${
              era.isCurrentDay
                ? "bg-[#FF4D00] border-[#FF4D00]"
                : "bg-white border-[#111111]/20"
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <TimelineContent era={era} />
          <div className="mt-4">
            <TimelineImage era={era} />
          </div>
        </div>
      </div>

      {/* Desktop center dot */}
      <div className="hidden lg:block absolute left-1/2 top-6 -translate-x-1/2 z-10">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            era.isCurrentDay
              ? "bg-[#FF4D00] border-[#FF4D00] shadow-lg shadow-[#FF4D00]/20"
              : "bg-white border-[#111111]/15"
          }`}
        />
      </div>
    </motion.div>
  );
}

function TimelineContent({ era }: { era: (typeof timelineEras)[number] }) {
  const Icon = era.icon;
  return (
    <div>
      {/* Era label */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-8 h-8 flex items-center justify-center ${
            era.isCurrentDay
              ? "bg-[#FF4D00] text-white"
              : "border border-[#111111]/15 text-[#111111]/40"
          }`}
        >
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <span
          className={`text-[11px] font-mono font-bold tracking-[0.15em] uppercase ${
            era.isCurrentDay ? "text-[#FF4D00]" : "text-[#111111]/35"
          }`}
        >
          {era.era}
        </span>
        {era.isCurrentDay && (
          <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase px-2 py-0.5 bg-[#FF4D00]/10 text-[#FF4D00]">
            Now
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-[22px] md:text-[28px] font-display font-medium tracking-tight leading-[1.15] mb-2">
        {era.title}
      </h3>
      <p className="text-[13px] font-mono font-bold tracking-[0.1em] uppercase text-[#FF4D00]/70 mb-4">
        {era.subtitle}
      </p>

      {/* Description */}
      <p className="text-[14px] md:text-[15px] text-[#111111]/55 leading-[1.7] font-medium">
        {era.description}
      </p>
    </div>
  );
}

function TimelineImage({ era }: { era: (typeof timelineEras)[number] }) {
  return (
    <div className="aspect-[4/3] overflow-hidden group">
      <img
        src={era.image}
        alt={era.title}
        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
          era.isCurrentDay ? "grayscale-0" : "grayscale group-hover:grayscale-0"
        }`}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MANIFESTO SECTION, Condensed from the Manifesto page
   ══════════════════════════════════════════════════════════════════════════ */
function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#FAFAFA] border-b border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6 block">
            The Manifesto
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-display font-medium tracking-tight leading-[1.05] mb-6">
            Not incrementalists.{" "}
            <em className="italic font-serif text-[#FF4D00]">Systematic maximalists</em>.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#111111]/50 font-medium leading-relaxed">
            We build the architecture for the next wave of human progress. A
            declaration of intent, not a manifesto of hope.
          </p>
        </motion.div>

        {/* Manifesto points */}
        <div className="max-w-4xl mx-auto space-y-0">
          {manifestoPoints.map((point, i) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="border-t border-[#111111]/10 py-10 md:py-14"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00]">
                    {point.number}
                  </span>
                  <div className="text-[13px] font-mono font-medium tracking-[0.05em] text-[#111111]/35 mt-1">
                    {point.title}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h3 className="text-[24px] md:text-[32px] font-display font-medium tracking-tight leading-[1.15] mb-4">
                    {point.heading}
                  </h3>
                  <p className="text-[15px] md:text-[17px] text-[#111111]/55 leading-[1.75] font-medium max-w-2xl">
                    {point.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read full manifesto link */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/manifesto"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#FF4D00] hover:text-[#111111] transition-colors group"
          >
            Read the full manifesto
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   TEAM SECTION, Filterable grid (same as Team page)
   ══════════════════════════════════════════════════════════════════════════ */
function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredMembers =
    activeCategory === "all"
      ? teamData
      : teamData.filter((m) => m.category === activeCategory);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6 block">
            The Team
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-display font-medium tracking-tight leading-[1.05] mb-6">
            The people behind the{" "}
            <em className="italic font-serif text-[#FF4D00]">platform</em>.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#111111]/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Operators, investors, engineers, and builders across six African
            cities. United by a single thesis: critical technology belongs in
            the markets that need it most.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              suppressHydrationWarning
              onClick={() => {
                setActiveCategory(cat.key);
                setExpandedId(null);
              }}
              className={`px-4 py-2 text-[11px] font-mono font-bold tracking-widest uppercase border transition-all ${
                activeCategory === cat.key
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-[#111111]/50 border-[#111111]/10 hover:border-[#111111]/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#111111]/40">
            {filteredMembers.length} member{filteredMembers.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && ` in ${categories.find((c) => c.key === activeCategory)?.label}`}
          </span>
        </motion.div>

        {/* Team cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredMembers.map((member, i) => (
              <TeamCard
                key={member.id}
                member={member}
                index={i}
                isInView={isInView}
                isExpanded={expandedId === member.id}
                onToggle={() =>
                  setExpandedId(expandedId === member.id ? null : member.id)
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View team page link */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#FF4D00] hover:text-[#111111] transition-colors group"
          >
            View dedicated team page
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Team Card ── */
function TeamCard({
  member,
  index,
  isInView,
  isExpanded,
  onToggle,
}: {
  member: TeamMember;
  index: number;
  isInView: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className={`border p-6 md:p-8 bg-white transition-all duration-300 cursor-pointer group ${
        isExpanded
          ? "border-[#FF4D00]/30"
          : "border-[#111111]/10 hover:border-[#FF4D00]/30"
      }`}
      onClick={onToggle}
    >
      {/* Top: Photo + Name */}
      <div className="flex items-start gap-5 mb-4">
        <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden bg-[#FAFAFA]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[18px] md:text-[22px] font-display font-medium tracking-tight leading-[1.2] mb-1">
            {member.name}
          </h3>
          <p className="text-[13px] md:text-[14px] text-[#FF4D00] font-medium leading-[1.4]">
            {member.role}
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 mb-4">
        <MapPin className="w-3.5 h-3.5 text-[#111111]/30" />
        <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#111111]/40">
          {member.location}
        </span>
      </div>

      {/* Category tag */}
      <div className="mb-4">
        <span className="inline-block px-2.5 py-1 bg-[#FAFAFA] text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/40">
          {member.category}
        </span>
      </div>

      {/* Bio (expandable) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="pt-4 border-t border-[#111111]/10">
              <p className="text-[14px] md:text-[15px] text-[#111111]/60 font-medium leading-[1.7]">
                {member.bio}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand hint */}
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#111111]/5">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/20 group-hover:text-[#FF4D00]/60 transition-colors">
          {isExpanded ? "Close" : "Read bio"}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-[#111111]/20 group-hover:text-[#FF4D00]/60 transition-all duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CTA SECTION, Dark bg
   ══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#111111] text-white py-20 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#FF4D00] mb-8 md:mb-12">
            Join the Platform
          </span>

          <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-display font-medium tracking-[-0.02em] leading-[1.05] mb-8 md:mb-10">
            The next chapter is yours.
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-[1.6] text-white/50 font-medium max-w-2xl mb-10 sm:mb-14">
            200,000 years of cooperation led here. The Route is built. The
            engines are running. Apply to the Accelerator, invest through
            xCelero Capital, or join a hub near you.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4D00] text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00]/90 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-white hover:text-[#111111] transition-all"
            >
              View Open Roles
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
