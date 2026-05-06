"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@/artemis/router";
import { ArrowRight } from "lucide-react";
import { programsData } from "@/artemis/data/programs";
import { ReviewSection } from "@/artemis/components/ReviewSection";

/* ── Hero metric cards (right column) ── */
const heroMetrics = [
  { value: "4", label: "Active Programs" },
  { value: "1,000+", label: "Operators Deployed" },
  { value: "9", label: "Civilizational Fields" },
];

/* ── Aggregate stats for centered numbers section ── */
const aggregateStats = [
  { value: "$620K", label: "Max funding package per company" },
  { value: "75%", label: "Follow-on funding success rate" },
  { value: "190", label: "Hub locations on the Route" },
  { value: "24mo", label: "Longest program deployment cycle" },
];

/* ══════════════════════════════════════════════════════════════════════════
   PROGRAMS PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function Programs() {
  return (
    <div className="bg-white text-[#111111]">
      <HeroSection />
      <ProgramShowcase />
      <NumbersSection />
      <CTASection />
      <ReviewSection title="Tactical 0-1 breakdowns to help you assemble a better timeline" />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HERO — Light bg, left heading + right stat cards
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
        {/* Left: label + heading + paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mb-6 block">
            Programs
          </span>

          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-display font-medium tracking-[-0.03em] leading-[0.9] mb-6">
            The engine of
            <br />
            transformation
          </h1>

          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#111111]/60 font-medium max-w-lg">
            We operate as a Civilizational Venturing Platform, not a fund. Our
            programs are high-intensity pathways designed for different stages of
            the beginnings of progress.
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
   PROGRAM SHOWCASE — Full-width program cards
   ══════════════════════════════════════════════════════════════════════════ */
function ProgramShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            The Strata
          </span>
        </motion.div>

        {/* Program cards */}
        <div className="border-t border-[#111111]/10">
          {programsData.map((program, idx) => (
            <ProgramCard key={program.id} program={program} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Single Program Card (full-width row) ── */
function ProgramCard({
  program,
  index,
}: {
  program: (typeof programsData)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = program.icon;

  /* Build a compact detail strip string from the details array */
  const detailStrip = program.details
    .map((d) => d.value)
    .join(" \u00B7 ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="border-b border-[#111111]/10"
    >
      <Link
        to={`/programs/${program.id}`}
        className="group block w-full py-8 md:py-12 lg:py-16"
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          {/* Icon */}
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${program.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-6 h-6 md:w-7 md:h-7" />
          </div>

          {/* Title + tagline + description */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-display font-medium tracking-[-0.02em] leading-[1.1] mb-1 group-hover:text-[#FF4D00] transition-colors duration-300">
              {program.title}
            </h3>
            <p className="text-[14px] md:text-[16px] text-[#111111]/40 font-display font-medium tracking-tight mb-4">
              {program.tagline}
            </p>
            <p className="text-[15px] md:text-[17px] text-[#111111]/60 font-medium leading-[1.7] max-w-2xl mb-5">
              {program.desc}
            </p>

            {/* Detail strip */}
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-[12px] md:text-[13px] font-mono font-bold tracking-widest uppercase text-[#111111]/30">
                {detailStrip}
              </span>
            </div>
          </div>

          {/* Explore arrow */}
          <div className="shrink-0 self-center lg:self-center hidden sm:flex">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#111111]/10 flex items-center justify-center group-hover:bg-[#FF4D00] group-hover:border-[#FF4D00] group-hover:text-white transition-all duration-300 text-[#111111]/40">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   NUMBERS SECTION — Centered grid of stats
   ══════════════════════════════════════════════════════════════════════════ */
function NumbersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-[#111111]/10 bg-[#FAFAFA]"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            By the numbers
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {aggregateStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`border-t border-[#111111]/10 pt-8 pb-8 ${
                i > 0 ? "lg:border-l lg:pl-8" : ""
              } ${i % 2 === 1 ? "pl-6 sm:pl-8" : ""}`}
            >
              <div className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-display font-medium tracking-[-0.03em] leading-[1] mb-3">
                {stat.value}
              </div>
              <div className="text-[13px] md:text-[15px] leading-[1.5] text-[#111111]/50 font-medium max-w-[200px]">
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
   CTA SECTION — Dark bg, application deadline (no italics)
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
            Ready to take the
            <br />
            beginning seriously?
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/50 font-medium leading-[1.6] max-w-md mb-10">
            Applications are currently open for the xHansa Fellowship and the
            xCelero Accelerator. Cohort 2026 is forming now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FF4D00] text-white text-[12px] font-bold tracking-widest uppercase hover:bg-white hover:text-[#111111] transition-colors"
            >
              Apply for Cohort 2026
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/approach"
              className="inline-flex items-center justify-center px-10 py-5 border border-white/20 text-white text-[12px] font-bold tracking-widest uppercase hover:bg-white hover:text-[#111111] transition-colors"
            >
              Review Program Directives
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
            Applications are currently open for the xHansa Fellowship and the
            xCelero Accelerator.
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
