"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@/artemis/router";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Coins,
  TrendingUp,
  Shield,
  Users,
  Globe,
} from "lucide-react";

/* ── Data ── */

const capitalStack = [
  {
    id: "spv",
    label: "SPVs",
    title: "Special Purpose Vehicles",
    description:
      "Purpose-built investment vehicles for single-venture or portfolio-specific deployments. SPVs allow targeted capital allocation with clear governance, tailored deal terms, and streamlined exits — ideal for co-investment alongside institutional partners.",
    detail:
      "Minimum ticket: $50K · Target hold: 3-5 years · Quarterly reporting · Side-by-side GP economics",
    audience: ["LPs", "Angel Investors"],
  },
  {
    id: "dedicated",
    label: "Dedicated Funds",
    title: "Dedicated Funds",
    description:
      "Commingled vehicles targeting specific verticals or geographies across the Route. Each fund is structured around a thesis — climate infrastructure, sovereign tech, agricultural supply chains — with dedicated portfolio management and milestone-based capital calls.",
    detail:
      "Minimum commitment: $250K · 7-year fund life · Annual capital calls · GP carry 20/80",
    audience: ["LPs", "Institutional Investors"],
  },
  {
    id: "continuous",
    label: "Continuous Capital",
    title: "Continuous Capital Flow",
    description:
      "An evergreen deployment mechanism that recycles returns into new venture origination. Capital is never idle — distributions from mature positions are immediately redeployed into the next cohort, creating compounding velocity across the Route.",
    detail:
      "Open-ended structure · Rolling subscriptions · Monthly deployment cycles · Net IRR target 25%+",
    audience: ["LPs", "Individuals", "ETF Allocators"],
  },
];

const vehicles = [
  {
    icon: Shield,
    title: "Non-Dilutive Capital Desk",
    description:
      "Matching ventures with grants, prizes, and government incentives across 39+ countries on the Route. Average non-dilutive raise: $180K per venture.",
  },
  {
    icon: TrendingUp,
    title: "Solidarity Pricing",
    description:
      "Founders in early-stage markets access the same quality of support at a fraction of Silicon Valley costs. Program fees scale with venture revenue, not geography.",
  },
  {
    icon: Globe,
    title: "Route Deal Flow",
    description:
      "Shared deal flow across 190 hubs. Ventures in Nairobi see the same pipeline access as those in Lagos, Cairo, or Cape Town.",
  },
  {
    icon: Users,
    title: "LP Network",
    description:
      "A curated network of development finance institutions, sovereign wealth allocators, family offices, and impact investors aligned on critical technology commercialization.",
  },
];

const investmentThesis = [
  "Critical technology — energy, food, water, defense, manufacturing — not SaaS arbitrage",
  "Global South-first — markets where infrastructure gaps are the opportunity",
  "Revenue-adjacent — ventures with working prototypes and pilot customers, not slide decks",
  "Route-connected — portfolio companies that leverage the hub network for scale",
  "Sovereign-by-design — technology that enables self-determination, not dependency",
];

/* ══════════════════════════════════════════════════════════════════════════
   CAPITAL PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function Capital() {
  return (
    <div className="bg-white text-[#111111]">
      <Hero />
      <CapitalStackSection />
      <VehiclesSection />
      <ThesisSection />
      <CTASection />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HERO — Light background, centered (matching Programs page format)
   ══════════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10">
      <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mb-6 block">
            xCelero Capital
          </span>
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-display font-medium tracking-[-0.03em] leading-[0.9] mb-6">
            Capital that
            <br />
            matches the
            <br />
            terrain
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#111111]/60 font-medium max-w-lg">
            We mobilize capital that understands the realities of building in the
            Global South — aligned, patient, and structured for ventures that
            need more than a term sheet.
          </p>
        </motion.div>

        {/* Right: key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 space-y-0"
        >
          {[
            { value: "$4B", label: "Capital mobilization target" },
            { value: "39+", label: "Countries with non-dilutive programs" },
            { value: "190", label: "Hub locations on the Route" },
          ].map((item, i) => (
            <div
              key={i}
              className={`border-t border-[#111111]/10 py-5 ${
                i === 2 ? "border-b" : ""
              }`}
            >
              <div className="text-[40px] sm:text-[48px] md:text-[56px] font-display font-medium tracking-[-0.03em] leading-[1] mb-2">
                {item.value}
              </div>
              <div className="text-[13px] md:text-[15px] text-[#111111]/50 font-medium leading-[1.5]">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CAPITAL STACK — Expandable accordion rows (like Programs Strata Stack)
   ══════════════════════════════════════════════════════════════════════════ */
function CapitalStackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Capital Stack
          </span>
        </motion.div>

        <div>
          {capitalStack.map((item, i) => (
            <CapitalStackRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapitalStackRow({
  item,
  index,
}: {
  item: (typeof capitalStack)[number];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-t border-[#111111]/10"
    >
      <button
        suppressHydrationWarning
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/30">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mr-4">
              {item.label}
            </span>
            <span className="text-[20px] md:text-[28px] font-display font-medium tracking-tight">
              {item.title}
            </span>
          </div>
        </div>
        <div className="text-[#111111]/30 group-hover:text-[#111111]/60 transition-colors shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-8 pl-0 md:pl-20">
          <p className="text-[15px] md:text-[17px] text-[#111111]/60 font-medium leading-[1.7] max-w-2xl mb-4">
            {item.description}
          </p>
          <p className="text-[13px] text-[#111111]/40 font-mono leading-[1.6] mb-4">
            {item.detail}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.audience.map((a) => (
              <span
                key={a}
                className="px-3 py-1.5 border border-[#111111]/10 text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-[#111111]/60"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   VEHICLES SECTION — Grid of capital vehicle cards
   ══════════════════════════════════════════════════════════════════════════ */
function VehiclesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#FAFAFA] border-t border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Capital Vehicles
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-display font-medium tracking-[-0.03em] leading-[0.9] mt-4">
            How capital moves
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {vehicles.map((vehicle, i) => {
            const Icon = vehicle.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-[#111111]/10 p-8 md:p-10 bg-white group hover:border-[#FF4D00]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full border border-[#111111]/10 flex items-center justify-center group-hover:border-[#FF4D00]/30 transition-colors">
                    <Icon className="w-4 h-4 text-[#FF4D00]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-[20px] md:text-[24px] font-display font-medium tracking-tight mb-3">
                  {vehicle.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#111111]/50 font-medium leading-[1.7]">
                  {vehicle.description}
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
   THESIS SECTION — Centered investment thesis
   ══════════════════════════════════════════════════════════════════════════ */
function ThesisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Investment Thesis
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-display font-medium tracking-[-0.03em] leading-[0.9] mt-4">
            What we back
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {investmentThesis.map((thesis, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-[#111111]/10 py-5 flex items-start gap-4"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] md:text-[17px] text-[#111111]/70 font-medium leading-[1.6]">
                {thesis}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CTA SECTION — Call to action for different investor types
   ══════════════════════════════════════════════════════════════════════════ */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const ctaCards = [
    {
      audience: "LPs",
      title: "Institutional Limited Partners",
      description:
        "Access a diversified portfolio of critical technology ventures across the Route with structured governance and milestone-based deployments.",
      cta: "Request LP Deck",
    },
    {
      audience: "Angel Investors",
      title: "Angel Co-Investment",
      description:
        "Join SPV syndicates alongside institutional partners. Minimum tickets from $50K with side-by-side economics and full portfolio transparency.",
      cta: "Join Angel Network",
    },
    {
      audience: "Individuals",
      title: "Individual Participation",
      description:
        "Continuous Capital Flow enables rolling subscriptions for qualified individual investors seeking exposure to critical technology commercialization.",
      cta: "Explore Participation",
    },
    {
      audience: "ETF",
      title: "ETF & Fund Allocators",
      description:
        "Dedicated Funds with thematic exposure to climate infrastructure, sovereign tech, and agricultural supply chains across the Global South.",
      cta: "Request Fund Materials",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#FAFAFA] border-t border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Participate
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-display font-medium tracking-[-0.03em] leading-[0.9] mt-4">
            Get on the cap table
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-[#111111]/10 p-8 bg-white group hover:border-[#FF4D00]/30 transition-colors flex flex-col"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mb-4">
                {card.audience}
              </span>
              <h3 className="text-[18px] md:text-[20px] font-display font-medium tracking-tight mb-3">
                {card.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-[#111111]/50 font-medium leading-[1.7] mb-6 flex-grow">
                {card.description}
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#FF4D00] hover:text-[#111111] transition-colors group/link"
              >
                {card.cta}
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
