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
    isCurrentDay: false,
  },
  {
    era: "10,000 BCE",
    title: "The Agricultural Compact",
    subtitle: "Settlement, Surplus, and Specialization",
    description:
      "When humans planted the first seed, they also planted the first economy. Surplus created trade. Trade created routes. Routes created cities. The Nile, the Niger, the Zambezi became arteries of commerce. Specialization was born: the blacksmith, the weaver, the healer.",
    icon: Wheat,
    isCurrentDay: false,
  },
  {
    era: "800 - 1600 CE",
    title: "The Trade Routes",
    subtitle: "Trans-Saharan, Swahili Coast, and Silk Road",
    description:
      "Gold, salt, ivory, and ideas flowed along routes that connected Timbuktu to Cairo, Kilwa to Gujarat, and Mogadishu to Malacca. These were not just trade corridors; they were knowledge highways. The Hausa city-states, the Great Zimbabwe, the Swahili coast: all built on the principle that commerce and culture travel together.",
    icon: Anchor,
    isCurrentDay: false,
  },
  {
    era: "1800 - 1960",
    title: "The Extraction Century",
    subtitle: "Colonial Infrastructure, Extractive Economics",
    description:
      "Railways were built, but only from mine to port. Universities were founded, but only to train administrators. Infrastructure served extraction, not self-reliance. The pattern was consistent: raw materials left, finished goods returned, value accumulated elsewhere.",
    icon: Cog,
    isCurrentDay: false,
  },
  {
    era: "1960 - 2000",
    title: "Independence Without Infrastructure",
    subtitle: "Political Freedom, Economic Dependency",
    description:
      "Flags changed. Borders hardened. But the infrastructure of extraction remained. Post-colonial economies inherited railways that still ran mine-to-port. Aid replaced trade. Structural adjustment replaced industrial policy. The talent drain accelerated: 70,000 professionals leaving Africa annually by the year 2000.",
    icon: Globe,
    isCurrentDay: false,
  },
  {
    era: "2000 - 2019",
    title: "The Digital Leap",
    subtitle: "Mobile Money, Fintech, and the Startup Ecosystem",
    description:
      "M-Pesa proved that Africa could leapfrog. Mobile-first innovation spread across the continent: fintech in Lagos, agritech in Nairobi, healthtech in Kigali. But 90% of ventures still failed. The ecosystem had talent and ambition but lacked the architecture to turn ideas into operating companies at scale.",
    icon: Factory,
    isCurrentDay: false,
  },
  {
    era: "2020",
    title: "The Thesis Is Drafted",
    subtitle: "Amina Osei-Mensah drafts the xCelero thesis",
    description:
      "After a decade leading Africa investments at a sovereign wealth fund, and building three venture-backed companies, Amina Osei-Mensah drafts the founding thesis: the Global South doesn't need more incubators or more aid. It needs infrastructure, ventures, capital, and community, integrated as a single platform. The four engines.",
    icon: Lightbulb,
    isCurrentDay: true,
  },
  {
    era: "2021 - 2022",
    title: "The Platform Takes Shape",
    subtitle: "M1 Core Nairobi, XEmbassy Lagos, Route Leg 1",
    description:
      "The first M1 Core campus opens in Nairobi: 50,000 sq ft of lab, maker, and co-working space. XEmbassy nodes launch in Lagos and Accra. The first accelerator cohort begins. Six investment vehicles are structured. The Route goes from thesis to operating infrastructure.",
    icon: Rocket,
    isCurrentDay: true,
  },
  {
    era: "2023 - Present",
    title: "The Flywheel Accelerates",
    subtitle: "190 hubs, 39 countries, 40+ ventures on the Route",
    description:
      "xCelero now operates across 190 hubs in 39 countries. 40+ ventures are building on the Route. Seven accelerator cohorts have graduated. The XCitizen network exceeds 1,200 members. The four engines compound with every cycle.",
    icon: Users,
    isCurrentDay: true,
  },
];

/* ── Manifesto data ── */
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
  { key: "partners", label: "Partners" },
  { key: "venture-building", label: "Venture Building" },
  { key: "platform", label: "Platform" },
  { key: "operations", label: "Operations" },
];

/* ══════════════════════════════════════════════════════════════════════════
   ABOUT PAGE — Flowing narrative + distinct team + manifesto cards
   ══════════════════════════════════════════════════════════════════════════ */
export function About() {
  return (
    <div className="bg-white text-[#111111]">
      <OpeningSection />
      <FlowingContent />
      <TeamSection />
      <ManifestoCardsSection />
      <ClosingCTA />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   OPENING — Understated entry point, not a "hero"
   ══════════════════════════════════════════════════════════════════════════ */
function OpeningSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="pt-16 sm:pt-20 md:pt-28 pb-0 px-5 sm:px-6 md:px-12 lg:px-20">
      <div ref={ref} className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#FF4D00] mb-6 block">
            About
          </span>

          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1.08] font-display font-medium tracking-[-0.02em] mb-6">
            From the first{" "}
            <em className="italic font-serif text-[#FF4D00]">circle</em> to the
            four engines.
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-[1.6] text-[#111111]/45 font-medium max-w-2xl">
            For 200,000 years, humans have organized in circles to hunt, trade,
            build, and compound. xCelero is the latest iteration of that oldest
            pattern. This is the story of how we got here, what we believe, and
            who is building it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   FLOWING CONTENT — Timeline → Manifesto, one continuous thread
   ══════════════════════════════════════════════════════════════════════════ */
function FlowingContent() {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 px-5 sm:px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-3xl mx-auto relative">
        {/* The continuous vertical thread */}
        <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px bg-[#111111]/8" />

        {/* Timeline entries */}
        {timelineEras.map((era, i) => (
          <TimelineEntry key={era.era} era={era} index={i} isLast={i === timelineEras.length - 1} />
        ))}

        {/* Transition marker: History → Manifesto */}
        <TransitionMarker label="What we believe" />

        {/* Manifesto entries */}
        {manifestoPoints.map((point, i) => (
          <ManifestoEntry key={point.number} point={point} index={i} />
        ))}

        {/* Manifesto link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative pl-10 md:pl-14 pt-4"
        >
          <Link
            to="/manifesto"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#FF4D00] hover:text-[#111111] transition-colors group"
          >
            Read the full manifesto
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Timeline Entry ── */
function TimelineEntry({
  era,
  index,
  isLast,
}: {
  era: (typeof timelineEras)[number];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = era.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
      className={`relative pl-10 md:pl-14 ${isLast ? "" : "pb-10 md:pb-14"}`}
    >
      {/* Dot on the thread */}
      <div className="absolute left-0 md:left-0 top-1.5 flex items-center justify-center w-[23px] md:w-[31px]">
        <div
          className={`w-2 h-2 rounded-full z-10 ${
            era.isCurrentDay
              ? "bg-[#FF4D00] shadow-[0_0_8px_rgba(255,77,0,0.4)]"
              : "bg-[#111111]/20"
          }`}
        />
      </div>

      {/* Content */}
      <div>
        {/* Era + icon row */}
        <div className="flex items-center gap-2.5 mb-2">
          <div
            className={`w-6 h-6 flex items-center justify-center ${
              era.isCurrentDay
                ? "bg-[#FF4D00] text-white"
                : "text-[#111111]/25"
            }`}
          >
            <Icon className="w-3 h-3" strokeWidth={1.5} />
          </div>
          <span
            className={`text-[11px] font-mono font-bold tracking-[0.12em] uppercase ${
              era.isCurrentDay ? "text-[#FF4D00]" : "text-[#111111]/30"
            }`}
          >
            {era.era}
          </span>
          {era.isCurrentDay && (
            <span className="text-[9px] font-mono font-bold tracking-[0.08em] uppercase px-1.5 py-0.5 bg-[#FF4D00]/8 text-[#FF4D00]">
              Now
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[20px] md:text-[24px] font-display font-medium tracking-tight leading-[1.2] mb-1">
          {era.title}
        </h3>
        <p className="text-[12px] font-mono font-bold tracking-[0.08em] uppercase text-[#FF4D00]/60 mb-3">
          {era.subtitle}
        </p>

        {/* Description */}
        <p className="text-[14px] md:text-[15px] text-[#111111]/50 leading-[1.7] font-medium">
          {era.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Transition Marker ── */
function TransitionMarker({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative pl-10 md:pl-14 py-8 md:py-12"
    >
      {/* Diamond marker on thread */}
      <div className="absolute left-[7px] md:left-[11px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] bg-[#FF4D00] rotate-45 z-10" />

      {/* Label */}
      <div className="flex items-center gap-4">
        <span className="text-[11px] font-mono font-bold tracking-[0.18em] uppercase text-[#FF4D00]">
          {label}
        </span>
        <div className="flex-1 h-px bg-[#111111]/8" />
      </div>
    </motion.div>
  );
}

/* ── Manifesto Entry ── */
function ManifestoEntry({
  point,
  index,
}: {
  point: (typeof manifestoPoints)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
      className={`relative pl-10 md:pl-14 ${
        index < manifestoPoints.length - 1 ? "pb-10 md:pb-14" : "pb-6"
      }`}
    >
      {/* Dot on the thread */}
      <div className="absolute left-0 md:left-0 top-1.5 flex items-center justify-center w-[23px] md:w-[31px]">
        <div className="w-2 h-2 rounded-full bg-[#111111]/15 z-10" />
      </div>

      <div>
        {/* Number + title */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#FF4D00]">
            {point.number}
          </span>
          <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#111111]/25">
            {point.title}
          </span>
        </div>

        {/* Heading */}
        <h3 className="text-[20px] md:text-[24px] font-display font-medium tracking-tight leading-[1.2] mb-3">
          {point.heading}
        </h3>

        {/* Text */}
        <p className="text-[14px] md:text-[15px] text-[#111111]/50 leading-[1.7] font-medium">
          {point.text}
        </p>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   TEAM SECTION — Distinct section, separate from the timeline thread
   ══════════════════════════════════════════════════════════════════════════ */
function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredMembers =
    activeCategory === "all"
      ? teamData
      : teamData.filter((m) => m.category === activeCategory);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-20 bg-[#FAFAFA]"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-4 block">
            Who we are
          </span>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-display font-medium tracking-tight leading-[1.08] mb-4">
            The people behind the{" "}
            <em className="italic font-serif text-[#FF4D00]">platform</em>.
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#111111]/40 font-medium leading-[1.6] max-w-xl">
            Founders, scientists, engineers, investors, and operators. Now we
            use our expertise to help critical technology founders go further,
            faster.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-1.5 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              suppressHydrationWarning
              onClick={() => {
                setActiveCategory(cat.key);
                setExpandedId(null);
              }}
              className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest uppercase border transition-all ${
                activeCategory === cat.key
                  ? "bg-[#111111] text-white border-[#111111]"
                  : "bg-white text-[#111111]/40 border-[#111111]/10 hover:border-[#111111]/20 hover:text-[#111111]/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Team grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {filteredMembers.map((member, i) => (
              <TeamCard
                key={member.id}
                member={member}
                index={i}
                isExpanded={expandedId === member.id}
                onToggle={() =>
                  setExpandedId(expandedId === member.id ? null : member.id)
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Team Card ── */
function TeamCard({
  member,
  index,
  isExpanded,
  onToggle,
}: {
  member: TeamMember;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={cardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
      className={`border p-5 md:p-6 bg-white transition-all duration-300 cursor-pointer group ${
        isExpanded
          ? "border-[#FF4D00]/30"
          : "border-[#111111]/8 hover:border-[#FF4D00]/25"
      }`}
      onClick={onToggle}
    >
      {/* Photo + Name */}
      <div className="flex items-start gap-4 mb-3">
        <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 overflow-hidden bg-[#F5F5F5]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-[16px] md:text-[18px] font-display font-medium tracking-tight leading-[1.2] mb-0.5">
            {member.name}
          </h4>
          <p className="text-[12px] md:text-[13px] text-[#FF4D00] font-medium leading-[1.4]">
            {member.role}
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 mb-3">
        <MapPin className="w-3 h-3 text-[#111111]/25" />
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/30">
          {member.location}
        </span>
      </div>

      {/* Category tag */}
      <span className="inline-block px-2 py-0.5 bg-[#F5F5F5] text-[9px] font-mono font-bold tracking-widest uppercase text-[#111111]/30 mb-1">
        {member.category}
      </span>

      {/* Expandable bio */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="pt-3 mt-3 border-t border-[#111111]/8">
              <p className="text-[13px] md:text-[14px] text-[#111111]/50 leading-[1.7] font-medium">
                {member.bio}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand hint */}
      <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-[#111111]/5">
        <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-[#111111]/15 group-hover:text-[#FF4D00]/50 transition-colors">
          {isExpanded ? "Close" : "Bio"}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-[#111111]/15 group-hover:text-[#FF4D00]/50 transition-all duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MANIFESTO CARDS — Horizontal side-by-side cards below team
   ══════════════════════════════════════════════════════════════════════════ */
function ManifestoCardsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-20 bg-white"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-4 block">
            What we believe
          </span>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-display font-medium tracking-tight leading-[1.08] mb-4">
            Not incrementalists.{" "}
            <em className="italic font-serif text-[#FF4D00]">Systematic maximalists</em>.
          </h2>
        </motion.div>

        {/* Horizontal cards grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {manifestoPoints.map((point, i) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="border border-[#111111]/8 p-6 md:p-8 bg-[#FAFAFA] group hover:border-[#FF4D00]/20 transition-colors"
            >
              {/* Number + label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-[11px] font-mono font-bold tracking-[0.15em] text-[#FF4D00]">
                  {point.number}
                </span>
                <span className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-[#111111]/25">
                  {point.title}
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-[20px] md:text-[24px] font-display font-medium tracking-tight leading-[1.2] mb-4">
                {point.heading}
              </h3>

              {/* Text */}
              <p className="text-[13px] md:text-[14px] text-[#111111]/45 leading-[1.7] font-medium">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Link to full manifesto */}
        <div className="mt-8 md:mt-10">
          <Link
            to="/manifesto"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#FF4D00] hover:text-[#111111] transition-colors group"
          >
            Read the full manifesto
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CLOSING CTA — Minimal, not a separate "dark page"
   ══════════════════════════════════════════════════════════════════════════ */
function ClosingCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#0A0A0A] text-white py-16 md:py-24 px-5 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="w-full max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-display font-medium tracking-[-0.02em] leading-[1.08] mb-5">
            The next chapter is{" "}
            <em className="italic font-serif text-[#FF4D00]">yours</em>.
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[17px] leading-[1.6] text-white/40 font-medium max-w-lg mx-auto mb-8">
            200,000 years of cooperation led here. The Route is built. The
            engines are running.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4D00] text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-[#FF4D00]/90 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white/70 text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-[#111111] transition-all"
            >
              View Open Roles
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
