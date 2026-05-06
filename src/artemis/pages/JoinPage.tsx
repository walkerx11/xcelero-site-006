"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@/artemis/router";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Rocket,
  Coins,
  Handshake,
  UserPlus,
} from "lucide-react";

/* ── Data ── */

const heroMetrics = [
  { value: "190", label: "Hub Locations on the Route" },
  { value: "1,000+", label: "Open Seats Cohort 2026" },
  { value: "63", label: "Countries in the Network" },
];

const pathways = [
  {
    id: "founders",
    icon: Rocket,
    label: "Founders",
    title: "For Founders",
    description:
      "Apply to our commercialization programs and gain access to infrastructure, capital, and a peer network across 190 hubs on the Route. Whether you're at prototype stage or post-revenue, there's a pathway built for where you are.",
    detail:
      "Quest Fellowship · xCelero Accelerator · M1 Core Residency · XEmbassy Drop-in",
  },
  {
    id: "investors",
    icon: Coins,
    label: "Investors",
    title: "For Investors",
    description:
      "Join the LP network or participate in SPV syndicates alongside institutional partners. Our capital vehicles are structured for the realities of building in the Global South — patient, aligned, and route-connected.",
    detail:
      "SPV Syndicates · Dedicated Funds · Continuous Capital Flow · Non-Dilutive Desk",
  },
  {
    id: "partners",
    icon: Handshake,
    label: "Partners",
    title: "For Partners",
    description:
      "Co-design commercialization programs with industry and government partners. Host an XEmbassy node. Provide market access, pilot opportunities, and first-customer contracts to ventures on the Route.",
    detail:
      "Government Programs · Industry Partnerships · XEmbassy Node Hosting · Living Labs",
  },
  {
    id: "talent",
    icon: UserPlus,
    label: "Talent",
    title: "For Talent",
    description:
      "Join the operator network across the Route. Fellowship positions, venture-in-residence roles, and specialized positions in deep tech, climate, and critical infrastructure across 63 countries.",
    detail:
      "Quest Fellowship · Operator Network · Venture-in-Residence · Route Deployments",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Express Interest",
    desc: "A brief application or referral from someone within the XEmbassy network. No decks required at this stage — just tell us what you're building and why it matters.",
  },
  {
    step: "02",
    title: "Deep Conversation",
    desc: "We spend three to five hours in real dialogue about your core technical insight, the bottleneck you're addressing, and the architecture you've chosen. Not a pitch — a conversation.",
  },
  {
    step: "03",
    title: "Onboarding",
    desc: "Join the Route. Access M1 Core campuses, XEmbassy nodes, and distributed living labs. Deploy into programs, connect with peers, and start building at the frontier.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   JOIN PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function JoinPage() {
  return (
    <div className="bg-white text-[#111111]">
      <HeroSection />
      <PathwaysSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HERO — Light bg, 7+5 grid (NEWLAB style, matching Programs page)
   ══════════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#FAFAFA] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: label + heading + para */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mb-6 block">
            Join xCelero
          </span>

          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-display font-medium tracking-[-0.03em] leading-[0.9] mb-6">
            Build where it
            <br />
            <span className="text-[#111111]/40">
              matters most
            </span>
          </h1>

          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#111111]/60 font-medium max-w-lg">
            The xCelero ecosystem is not a directory — it&apos;s a living
            infrastructure for people building at the frontier of critical
            technology. Whether you&apos;re a founder, investor, partner, or
            operator, there&apos;s a place on the Route for you.
          </p>
        </motion.div>

        {/* Right: metric cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col"
        >
          {heroMetrics.map((metric, i) => (
            <div
              key={i}
              className={`py-6 ${
                i > 0 ? "border-t border-[#111111]/10" : ""
              }`}
            >
              <div className="text-[40px] sm:text-[48px] md:text-[56px] font-display font-medium tracking-[-0.03em] leading-[1] mb-2">
                {metric.value}
              </div>
              <div className="text-[13px] md:text-[15px] text-[#111111]/50 font-medium leading-[1.5]">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   PATHWAYS — "How to Join" — centered label + heading, expandable accordion
   ══════════════════════════════════════════════════════════════════════════ */
function PathwaysSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">
            How to Join
          </div>
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-display font-medium tracking-[-0.03em] leading-[0.9] mb-6">
            Four pathways,{" "}
            <span className="text-[#111111]/40">
              one Route
            </span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#111111]/50 font-medium leading-relaxed">
            Every role in the ecosystem is connected. Founders need capital,
            capital needs deal flow, deal flow needs infrastructure, and
            infrastructure needs operators.
          </p>
        </motion.div>

        {/* Accordion rows */}
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-[#111111]/10">
            {pathways.map((pathway, idx) => (
              <PathwayRow key={pathway.id} pathway={pathway} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Single Pathway Row (expandable accordion) ── */
function PathwayRow({
  pathway,
  index,
}: {
  pathway: (typeof pathways)[number];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = pathway.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="border-b border-[#111111]/10"
    >
      {/* Toggle header */}
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
      >
        <div className="flex items-center gap-4 md:gap-6">
          {/* Index number */}
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/30">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Icon */}
          <div className="w-10 h-10 rounded-full bg-[#FF4D00] flex items-center justify-center text-white shrink-0">
            <Icon className="w-4 h-4" />
          </div>

          {/* Title + label */}
          <div>
            <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-display font-medium tracking-tight group-hover:text-[#FF4D00] transition-colors">
              {pathway.title}
            </h3>
            <p className="text-[13px] md:text-[15px] text-[#111111]/40 hidden sm:block">
              {pathway.label}
            </p>
          </div>
        </div>

        {/* Chevron */}
        <div className="text-[#111111]/30 group-hover:text-[#111111]/60 transition-colors shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-8 md:pb-12 pl-0 md:pl-[72px]">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Description */}
            <div className="md:col-span-7 space-y-6">
              <p className="text-[15px] md:text-[17px] text-[#111111]/60 font-medium leading-[1.7]">
                {pathway.description}
              </p>

              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#FF4D00] hover:text-[#111111] transition-colors group/link"
              >
                Explore {pathway.label} Programs
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Detail */}
            <div className="md:col-span-5">
              <div className="border-t border-[#111111]/10 pt-6">
                <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/30 mb-3">
                  Included Pathways
                </div>
                <p className="text-[15px] md:text-[17px] text-[#111111]/60 font-medium leading-[1.7]">
                  {pathway.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   PROCESS — "The Process" — centered 3-step grid (like Approach HowWeWork)
   ══════════════════════════════════════════════════════════════════════════ */
function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#FAFAFA] border-b border-[#111111]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">
            The Process
          </div>
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-display font-medium tracking-tight leading-[1.05] mb-6">
            Three steps to the{" "}
            <span className="text-[#111111]/40">
              Route
            </span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#111111]/50 font-medium leading-relaxed">
            Our onboarding is deliberately rigorous — because the people who
            belong here don&apos;t need convincing, they need a path.
          </p>
        </motion.div>

        {/* 3-step grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0">
            {processSteps.map((step, i) => (
              <ProcessCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-16 md:mt-24"
        >
          <Link
            to="/programs"
            className="group inline-flex items-center gap-6 px-10 py-5 bg-[#111111] text-white text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#FF4D00] transition-all"
          >
            Start an Application{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className={`border-t border-[#111111]/10 pt-10 pb-10 ${
        index > 0 ? "md:border-l md:pl-8" : ""
      }`}
    >
      <div className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#FF4D00] mb-6">
        STEP {step.step}
      </div>
      <h3 className="text-[24px] md:text-[28px] font-display font-medium tracking-tight leading-[1.15] mb-6">
        {step.title}
      </h3>
      <p className="text-[15px] md:text-[16px] text-[#111111]/55 font-medium leading-[1.7]">
        {step.desc}
      </p>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CTA SECTION — Dark bg (matching Programs CTA)
   ══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#111111] text-white py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: CTA heading + buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[28px] sm:text-[40px] md:text-[56px] font-display font-medium tracking-[-0.03em] leading-[0.95] mb-6">
            The map is already drawn.
            <br />
            <span className="text-white/40">
              Walk it.
            </span>
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/50 font-medium leading-[1.6] max-w-md mb-10">
            The Route connects 190 hubs across 63 countries. Whether
            you&apos;re building, investing, or operating — there&apos;s a seat
            with your name on it. Cohort 2026 is forming now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FF4D00] text-white text-[12px] font-bold tracking-widest uppercase hover:bg-white hover:text-[#111111] transition-colors"
              suppressHydrationWarning
            >
              Start Application
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/approach"
              className="inline-flex items-center justify-center px-10 py-5 border border-white/20 text-white text-[12px] font-bold tracking-widest uppercase hover:bg-white hover:text-[#111111] transition-colors"
              suppressHydrationWarning
            >
              Request Information
            </Link>
          </div>
        </motion.div>

        {/* Right: Deadline card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="border border-white/10 p-8 md:p-12 bg-white/5 backdrop-blur-sm"
        >
          <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mb-8">
            Next Deadline
          </div>
          <div className="text-3xl md:text-4xl font-display font-medium mb-4 tracking-tight uppercase">
            May 15th, 2026
          </div>
          <p className="text-white/40 font-medium leading-relaxed mb-8 text-[15px]">
            Applications for the xHansa Fellowship and xCelero Accelerator
            close on May 15th. Early submissions receive priority review and
            program placement.
          </p>
          <div className="pt-8 border-t border-white/10 flex justify-between items-center">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/30">
              Positions available
            </span>
            <span className="text-xl md:text-2xl font-display font-medium">
              1,000 Seats
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
