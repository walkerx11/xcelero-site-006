"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Settings, Coins, GraduationCap, ArrowRight, MapPin, Briefcase, BookOpen, Users } from "lucide-react";
import { Link } from "@/artemis/router";

/* ── Network Stats ── */
const networkStats = [
  { value: "1,000+", label: "Operators" },
  { value: "190", label: "Hubs" },
  { value: "39+", label: "Countries" },
  { value: "4", label: "Engines" },
];

/* ── XCitizen Personas ── */
const personas = [
  {
    icon: Rocket,
    title: "Founders",
    description:
      "Building ventures from thesis to operating company. Access to prototyping labs, accelerator programs, and non-dilutive capital.",
  },
  {
    icon: Settings,
    title: "Operators",
    description:
      "Running the Route infrastructure. Hub managers, lab technicians, logistics coordinators across 190 locations.",
  },
  {
    icon: Coins,
    title: "Investors",
    description:
      "Deploying capital through six vehicles. From $500 community notes to institutional thematic funds.",
  },
  {
    icon: GraduationCap,
    title: "Mentors",
    description:
      "Transferring knowledge across cohorts. Domain experts in energy, biotech, manufacturing, and defense.",
  },
];

/* ── How It Works Steps ── */
const howItWorks = [
  {
    step: "01",
    title: "Apply or Get Nominated",
    desc: "XCitizens enter through accelerator cohorts, hub memberships, or direct nomination by existing members.",
  },
  {
    step: "02",
    title: "Get Matched to the Route",
    desc: "Your skills, venture stage, and geography are matched to the right hub, program, and peer group.",
  },
  {
    step: "03",
    title: "Compound Returns",
    desc: "Every connection, deal, and collaboration strengthens the network for everyone. The flywheel accelerates.",
  },
];

/* ── Benefits ── */
const benefits = [
  {
    icon: MapPin,
    title: "Route Access",
    description:
      "Work from any of 190 hubs. CNC machines, prototyping labs, and co-working spaces across 39 countries.",
  },
  {
    icon: Briefcase,
    title: "Deal Flow",
    description:
      "First access to investment opportunities, venture data rooms, and co-investment rounds.",
  },
  {
    icon: Users,
    title: "Peer Network",
    description:
      "Connect with operators and founders building in the same vertical and geography.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description:
      "Workshops, playbooks, and field reports from ventures that have scaled on the Route.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   COMMUNITY PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function Community() {
  return (
    <div className="bg-white text-[#111111]">
      <HeroSection />
      <NetworkStatsSection />
      <WhoAreXCitizensSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HERO, Editorial centered with serif accent (matching Route/Capital pages)
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
          {/* Small label */}
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#FF4D00] mb-8 md:mb-12">
            Community
          </span>

          <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] font-display font-medium tracking-[-0.02em] mb-8 md:mb-10">
            The fourth{" "}
            <em className="italic font-serif text-[#FF4D00]">engine</em>.
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-[1.6] text-[#111111]/50 font-medium max-w-2xl">
            XCitizens are the connective tissue that turns individual efforts
            into collective momentum. Operators, founders, investors, and
            mentors across 190 hubs and 39 countries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   NETWORK STATS, Inline metrics row
   ══════════════════════════════════════════════════════════════════════════ */
function NetworkStatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 md:gap-x-20 md:gap-y-10">
          {networkStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="text-center min-w-[80px]"
            >
              <div className="text-[40px] sm:text-[48px] md:text-[64px] font-display font-medium tracking-[-0.03em] text-[#111111]">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#111111]/35 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   WHO ARE XCITIZENS, Grid of 4 persona cards
   ══════════════════════════════════════════════════════════════════════════ */
function WhoAreXCitizensSection() {
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
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6 block">
            Who Are XCitizens
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-display font-medium tracking-tight leading-[1.05] mb-6">
            Four roles, <span className="text-[#111111]/40">one network</span>.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#111111]/50 font-medium leading-relaxed">
            Every XCitizen plays a distinct part in the flywheel. Whether you
            build, operate, invest, or teach, your contribution compounds
            across the Route.
          </p>
        </motion.div>

        {/* Persona grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, i) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={persona.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="border border-[#111111]/10 bg-white p-6 md:p-8 hover:border-[#FF4D00]/30 transition-colors group"
              >
                <div className="w-12 h-12 border border-[#111111]/10 flex items-center justify-center mb-5 group-hover:border-[#FF4D00] group-hover:text-[#FF4D00] transition-colors">
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-display font-medium tracking-tight mb-3">
                  {persona.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#111111]/55 leading-[1.7] font-medium">
                  {persona.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HOW IT WORKS, 3-step process (matching Approach.tsx step-card style)
   ══════════════════════════════════════════════════════════════════════════ */
function HowItWorksSection() {
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
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6 block">
            How It Works
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-display font-medium tracking-tight leading-[1.05] mb-6">
            Three steps to the{" "}
            <span className="text-[#111111]/40">flywheel</span>.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#111111]/50 font-medium leading-relaxed">
            The network gets stronger with every member. Here is how you enter,
            find your place, and start compounding.
          </p>
        </motion.div>

        {/* Step cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {howItWorks.map((step, i) => (
              <HowItWorksCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksCard({
  step,
  index,
}: {
  step: (typeof howItWorks)[number];
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
      className="group"
    >
      <div className="border-l-4 border-[#FF4D00] pt-8 pb-8 px-6 md:px-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 min-h-[280px] flex flex-col justify-between hover:-translate-y-1">
        {/* Top content */}
        <div>
          <div className="text-[48px] md:text-[56px] font-display font-medium tracking-[-0.03em] leading-none text-[#FF4D00] mb-6">
            {step.step}
          </div>
          <h3 className="text-[22px] md:text-[26px] font-display font-medium tracking-tight leading-[1.15] mb-5 text-[#111111]">
            {step.title}
          </h3>
          <p className="text-[15px] md:text-[16px] text-[#111111]/55 font-medium leading-[1.7]">
            {step.desc}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#111111]/5">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#111111]/30">
            Step {step.step}
          </span>
          <span className="w-8 h-8 rounded-full border border-[#111111]/10 flex items-center justify-center text-[#111111]/30 group-hover:border-[#FF4D00] group-hover:text-[#FF4D00] transition-all">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   BENEFITS, 4-column grid (matching Careers culture section)
   ══════════════════════════════════════════════════════════════════════════ */
function BenefitsSection() {
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
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#FF4D00] mb-6 block">
            Benefits
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-display font-medium tracking-tight leading-[1.05] mb-6">
            What you gain as an{" "}
            <em className="italic font-serif text-[#FF4D00]">XCitizen</em>.
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="border border-[#111111]/10 bg-white p-6 hover:border-[#111111]/20 transition-colors group"
              >
                <div className="w-10 h-10 border border-[#111111]/10 flex items-center justify-center mb-5 group-hover:border-[#FF4D00] group-hover:text-[#FF4D00] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-medium tracking-tight mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[13px] text-[#111111]/55 leading-[1.65] font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CTA SECTION, Dark bg (matching other pages)
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
            Join the Network
          </span>

          <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-display font-medium tracking-[-0.02em] leading-[1.05] mb-8 md:mb-10">
            Become an XCitizen
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-[1.6] text-white/50 font-medium max-w-2xl mb-10 sm:mb-14">
            The network that builds the next century is accepting new members.
            Apply to the Accelerator, invest through xCelero Capital, or join a
            hub near you.
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
              to="/capital"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-white hover:text-[#111111] transition-all"
            >
              Invest
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
