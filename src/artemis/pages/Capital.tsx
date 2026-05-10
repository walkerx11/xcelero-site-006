"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "@/artemis/router";
import { venturesData } from "@/artemis/data/ventures";
import {
  ArrowRight,
  ChevronDown,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Check,
  X,
  Loader2,
  Zap,
  Building2,
  HandCoins,
  Landmark,
  Mail,
  PiggyBank,
  FileText,
  Banknote,
  Scale,
  Wallet,
  CircleDollarSign,
  Layers,
} from "lucide-react";

/* ── Derived Data ── */

const verticals = [...new Set(venturesData.map((v) => v.vertical))];
const totalVentures = venturesData.length;
const totalCountries = 39;
const totalHubs = 190;
const capitalTarget = "$4B";

/* ── Investment Vehicles ── */
const investmentVehicles = [
  {
    id: "xcelero-fund",
    name: "xCelero Fund",
    shortName: "The Fund",
    icon: CircleDollarSign,
    tagline: "Continuous capital. Broad exposure. Open access.",
    description:
      "An open-ended, evergreen commingled fund that deploys across the full xCelero venture portfolio. The Fund offers quarterly liquidity windows, transparent NAV reporting, and entry from $500 — making institutional-grade venture accessible to everyone.",
    details: [
      { label: "Structure", value: "Open-ended evergreen fund" },
      { label: "Min entry", value: "$500" },
      { label: "Mgmt fee", value: "1.0%" },
      { label: "Carry", value: "None" },
      { label: "Liquidity", value: "Quarterly (up to 5% NAV)" },
      { label: "Reporting", value: "Quarterly NAV + updates" },
    ],
    bestFor: "First-time venture investors, portfolio diversification, passive exposure to critical tech",
    color: "#FF4D00",
  },
  {
    id: "spv-syndicates",
    name: "SPV Syndicates",
    shortName: "SPV",
    icon: Layers,
    tagline: "Co-invest alongside institutions on breakout deals.",
    description:
      "Purpose-built Special Purpose Vehicles for individual follow-on investments in high-conviction ventures. Each SPV is a single-asset vehicle with defined economics — you know exactly what you're investing in, with side-by-side GP economics and institutional-grade deal terms.",
    details: [
      { label: "Structure", value: "Single-asset SPV per deal" },
      { label: "Min entry", value: "$5,000" },
      { label: "Mgmt fee", value: "1.0%" },
      { label: "Carry", value: "10% above hurdle" },
      { label: "Liquidity", value: "Illiquid until exit" },
      { label: "Reporting", value: "Quarterly + ad-hoc" },
    ],
    bestFor: "Experienced investors seeking deal-level selection, co-investment rights with institutional partners",
    color: "#FF4D00",
  },
  {
    id: "thematic-funds",
    name: "Thematic Funds",
    shortName: "Thematic",
    icon: PiggyBank,
    tagline: "Concentrated bets on critical technology verticals.",
    description:
      "Commingled closed-end funds targeting specific verticals — Energy, Food Systems, Sovereign Tech, Digital Finance. Each fund concentrates capital in 8–15 ventures within a single domain, giving investors targeted exposure to the sectors they believe in most.",
    details: [
      { label: "Structure", value: "7-year closed-end fund" },
      { label: "Min entry", value: "$50,000" },
      { label: "Mgmt fee", value: "1.5%" },
      { label: "Carry", value: "20% above 8% hurdle" },
      { label: "Liquidity", value: "Semi-annual tender offers" },
      { label: "Reporting", value: "Monthly + custom" },
    ],
    bestFor: "Institutional allocators, family offices, sector-conviction investors, impact-mandated capital",
    color: "#FF4D00",
  },
  {
    id: "catalyst-notes",
    name: "Catalyst Notes",
    shortName: "Catalyst",
    icon: Banknote,
    tagline: "Revenue-linked returns. Venture velocity without equity dilution.",
    description:
      "Revenue-based financing instruments for portfolio ventures that have reached revenue milestones. Investors receive a fixed return multiple tied to venture revenue performance — no equity dilution, no valuation negotiations. Capital that moves at the speed of the business.",
    details: [
      { label: "Structure", value: "Revenue-linked note" },
      { label: "Min entry", value: "$10,000" },
      { label: "Return target", value: "1.5–2.5x multiple" },
      { label: "Duration", value: "24–48 months" },
      { label: "Security", value: "Revenue assignment" },
      { label: "Reporting", value: "Monthly revenue reports" },
    ],
    bestFor: "Yield-oriented investors, revenue-stage venture exposure, non-dilutive capital supporters",
    color: "#111111",
  },
  {
    id: "non-dilutive-desk",
    name: "Non-Dilutive Desk",
    shortName: "Non-Dilutive",
    icon: Shield,
    tagline: "Unlock grants, prizes, and government incentives across 39 countries.",
    description:
      "Not a fund — a service. Our Non-Dilutive Capital Desk matches ventures with grants, prizes, sovereign incentives, and development finance across every country on the Route. Average non-dilutive raise per venture: $180K. This is capital that doesn't cost equity.",
    details: [
      { label: "Structure", value: "Advisory + placement" },
      { label: "Min entry", value: "N/A (venture-side)" },
      { label: "Fee", value: "8–12% success fee" },
      { label: "Avg raise", value: "$180K per venture" },
      { label: "Pipeline", value: "2,400+ active programs" },
      { label: "Geographies", value: "39 countries" },
    ],
    bestFor: "Ventures seeking working capital without dilution; grant-mandated organizations seeking pipeline",
    color: "#111111",
  },
  {
    id: "anchor-mandate",
    name: "Anchor Mandate",
    shortName: "Anchor",
    icon: Landmark,
    tagline: "Custom portfolio construction for institutional-scale allocators.",
    description:
      "For investors deploying $250K+, Anchor Mandates offer bespoke portfolio construction with advisory board participation, direct venture selection input, custom SPV formation, GP carry participation, and real-time dashboard access. This is venture investing on your terms.",
    details: [
      { label: "Structure", value: "Custom mandate / SMA" },
      { label: "Min entry", value: "$250,000" },
      { label: "Mgmt fee", value: "Negotiated" },
      { label: "Carry", value: "Negotiated carry participation" },
      { label: "Liquidity", value: "Custom terms" },
      { label: "Reporting", value: "Real-time dashboard" },
    ],
    bestFor: "Sovereign wealth funds, DFIs, endowments, ultra-high-net-worth, family offices with strategic mandates",
    color: "#111111",
  },
];

/* ── Investment Tiers ── */
const investmentTiers = [
  {
    id: "scout",
    name: "Scout",
    min: 500,
    max: 4999,
    icon: Zap,
    color: "#FF4D00",
    tagline: "Start building your position",
    benefits: [
      "Access to xCelero Fund (Continuous Capital Flow)",
      "Quarterly portfolio updates & NAV reports",
      "Route Deal Flow pipeline visibility",
      "Community investor network access",
    ],
    vehicle: "xCelero Fund",
    holdPeriod: "Open-ended",
    reporting: "Quarterly",
  },
  {
    id: "syndicate",
    name: "Syndicate",
    min: 5000,
    max: 49999,
    icon: HandCoins,
    color: "#FF4D00",
    tagline: "Co-invest alongside institutions",
    benefits: [
      "All Scout benefits",
      "SPV co-investment rights",
      "Side-by-side GP economics",
      "Annual LP meeting invitation",
      "Dedicated investor relations contact",
    ],
    vehicle: "SPV Syndicates",
    holdPeriod: "3\u20135 years",
    reporting: "Quarterly + ad-hoc",
  },
  {
    id: "partner",
    name: "Partner",
    min: 50000,
    max: 249999,
    icon: Building2,
    color: "#FF4D00",
    tagline: "Institutional-grade allocation",
    benefits: [
      "All Syndicate benefits",
      "Thematic Fund allocation",
      "Board observer seats (select ventures)",
      "Co-investment first-look rights",
      "Custom reporting & data room access",
      "Annual strategy summit attendance",
    ],
    vehicle: "Thematic Funds",
    holdPeriod: "7-year fund life",
    reporting: "Monthly + custom",
  },
  {
    id: "anchor",
    name: "Anchor",
    min: 250000,
    max: null,
    icon: Landmark,
    color: "#111111",
    tagline: "Shape the portfolio",
    benefits: [
      "All Partner benefits",
      "Advisory board participation",
      "Direct venture selection input",
      "Custom SPV formation",
      "GP carry participation",
      "Portfolio construction rights",
    ],
    vehicle: "Anchor Mandate",
    holdPeriod: "Custom",
    reporting: "Real-time dashboard",
  },
];

/* ── FAQ ── */
const faqItems = [
  {
    q: "Who can invest?",
    a: "Individual investors from $500 via the xCelero Fund. No accreditation required. SPV Syndicates and Thematic Funds require qualified investor status depending on jurisdiction. Anchor Mandates are for institutional investors and family offices.",
  },
  {
    q: "How does xCelero deploy capital?",
    a: "We deploy across five vehicles: (1) xCelero Fund — broad exposure across the full portfolio; (2) SPV Syndicates — single-deal co-investments alongside institutions; (3) Thematic Funds — concentrated sector bets in energy, food, sovereign tech; (4) Catalyst Notes — revenue-linked returns for revenue-stage ventures; (5) Non-Dilutive Desk — grants and incentives matching across 39 countries.",
  },
  {
    q: "What are the fees?",
    a: "xCelero Fund: 1% management fee, no carry. SPV Syndicates: 1% management + 10% carry above hurdle. Thematic Funds: 1.5% management + 20% carry above 8% hurdle. Catalyst Notes: no management fee, return target 1.5–2.5x. No sales load on any vehicle. See offering documents for full expense ratios.",
  },
  {
    q: "How does liquidity work?",
    a: "The xCelero Fund offers quarterly redemption windows (up to 5% of NAV per quarter). SPV positions are illiquid until exit event. Thematic Funds may offer semi-annual tender offers at Board discretion. Catalyst Notes have a defined 24–48 month duration. Consider all positions illiquid and invest only capital you can commit.",
  },
  {
    q: "Is this a fund-of-funds?",
    a: "No. xCelero Capital originates and builds ventures directly. We are a venture studio that deploys capital into our own creations — not a passive allocator. When we co-invest through SPVs, it's alongside institutional partners we've selected, not into blind pools.",
  },
  {
    q: "What's the investment thesis?",
    a: "Critical technology — energy, food, water, defense, manufacturing — not SaaS arbitrage. Global South-first markets where infrastructure gaps are the opportunity. Revenue-adjacent ventures with working prototypes and pilot customers, not slide decks. Route-connected companies that leverage the 190-hub network for scale. Sovereign-by-design technology that enables self-determination, not dependency.",
  },
  {
    q: "Can international investors participate?",
    a: "Yes. xCelero Capital structures investments through Mauritius HoldCos and UAE Free Zone entities to accept global capital. US investors access vehicles via Reg D offerings. African investors can participate through mobile money rails and local agent networks in select jurisdictions.",
  },
  {
    q: "How is NAV calculated?",
    a: "Portfolio valuations follow ASC 820 fair value measurement. Early-stage ventures are valued at cost until a material financing event. Revenue-generating ventures use a mix of revenue multiples, comparable transactions, and discounted cash flows. The fund is audited annually by an independent registered public accounting firm.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   CAPITAL PAGE
   ══════════════════════════════════════════════════════════════════════════ */
export function Capital() {
  const [showSubscribe, setShowSubscribe] = useState(false);

  return (
    <div className="bg-white text-[#111111]">
      <Hero onSubscribe={() => setShowSubscribe(true)} />
      <StatsBar />
      <InvestmentVehicles />
      <InvestmentTiers />
      <PortfolioSectors />
      <FAQSection />
      <InvestCTA onSubscribe={() => setShowSubscribe(true)} />
      <SubscribeModal
        isOpen={showSubscribe}
        onClose={() => setShowSubscribe(false)}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   HERO — Editorial centered with serif accent
   ══════════════════════════════════════════════════════════════════════════ */
function Hero({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10">
      <div className="w-full max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mb-6 block">
            xCelero Capital
          </span>
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-display font-medium tracking-[-0.03em] leading-[0.9] mb-6">
            Invest in{" "}
            <em className="font-serif italic text-[#FF4D00]">critical</em>
            <br />
            technology from $500
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#111111]/60 font-medium max-w-xl mx-auto mb-10">
            Six investment vehicles. One thesis: the technology that defines
            the next century will be built in the markets that need it most.
            xCelero gives you access to that pipeline.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Link
              to="#invest-tiers"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document
                  .getElementById("invest-tiers")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00] transition-colors"
            >
              Invest Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onSubscribe}
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#111111]/20 text-[12px] font-bold uppercase tracking-[0.12em] hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-all bg-white"
            >
              Get Updates
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   STATS BAR — Horizontal ticker
   ══════════════════════════════════════════════════════════════════════════ */
function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: capitalTarget, label: "Capital target" },
    { value: String(totalVentures), label: "Active ventures" },
    { value: `${totalCountries}+`, label: "Countries" },
    { value: "6", label: "Investment vehicles" },
    { value: String(totalHubs), label: "Route hubs" },
  ];

  return (
    <section
      ref={ref}
      className="py-8 md:py-10 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10 bg-white"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-wrap justify-between gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center flex-1 min-w-[100px]"
            >
              <span className="block text-[28px] md:text-[36px] font-display font-medium tracking-[-0.03em] leading-[1]">
                {stat.value}
              </span>
              <span className="block text-[11px] md:text-[12px] text-[#111111]/40 font-medium tracking-[0.05em] uppercase mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   INVESTMENT VEHICLES — Expandable detail cards
   ══════════════════════════════════════════════════════════════════════════ */
function InvestmentVehicles() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      id="investment-vehicles"
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
            Investment Vehicles
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-display font-medium tracking-[-0.03em] leading-[0.9] mt-3">
            Six ways to deploy{" "}
            <em className="font-serif italic text-[#FF4D00]">capital</em>
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#111111]/50 font-medium leading-[1.7] max-w-xl mt-4">
            From $500 in the xCelero Fund to custom Anchor Mandates at $250K+,
            every vehicle is built for the same thesis — critical technology in
            the markets that need it most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {investmentVehicles.map((vehicle, i) => {
            const Icon = vehicle.icon;
            const isExpanded = expanded === vehicle.id;
            return (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`border p-6 md:p-8 bg-white transition-all flex flex-col cursor-pointer group ${
                  isExpanded
                    ? "border-[#FF4D00] ring-1 ring-[#FF4D00]/20 md:col-span-1"
                    : "border-[#111111]/10 hover:border-[#FF4D00]/30"
                }`}
                onClick={() => setExpanded(isExpanded ? null : vehicle.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isExpanded
                          ? "bg-[#FF4D00]"
                          : "border border-[#111111]/10 group-hover:border-[#FF4D00]/30"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 transition-colors ${
                          isExpanded ? "text-white" : "text-[#FF4D00]"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/30 block">
                        {vehicle.shortName}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#111111]/30 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Title + Tagline */}
                <h3 className="text-[20px] md:text-[24px] font-display font-medium tracking-tight mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-[13px] text-[#FF4D00] font-medium leading-[1.5] mb-3">
                  {vehicle.tagline}
                </p>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] text-[#111111]/50 font-medium leading-[1.7] mb-4">
                  {vehicle.description}
                </p>

                {/* Details Grid — always visible */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                  {vehicle.details.map((detail, di) => (
                    <div key={di} className="flex flex-col">
                      <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-[#111111]/30">
                        {detail.label}
                      </span>
                      <span className="text-[12px] md:text-[13px] font-medium text-[#111111]/70 leading-[1.4]">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Best For — expandable */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#111111]/10 pt-4 mt-auto">
                        <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] block mb-1">
                          Best for
                        </span>
                        <p className="text-[12px] md:text-[13px] text-[#111111]/60 font-medium leading-[1.6]">
                          {vehicle.bestFor}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   INVESTMENT TIERS — Interactive selection + inline form
   ══════════════════════════════════════════════════════════════════════════ */
function InvestmentTiers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    tier: "",
    accredited: false,
    consent: false,
  });

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    const tier = investmentTiers.find((t) => t.id === tierId);
    if (tier) {
      setFormData((prev) => ({
        ...prev,
        tier: tierId,
        amount: tier.min.toString(),
      }));
    }
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/capital/invest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      ref={ref}
      id="invest-tiers"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#FAFAFA] border-t border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Invest Now
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-display font-medium tracking-[-0.03em] leading-[0.9] mt-3">
            Pick your{" "}
            <em className="font-serif italic text-[#FF4D00]">entry</em>
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#111111]/50 font-medium leading-[1.7] max-w-xl mt-4">
            Four tiers, each mapped to the investment vehicle that fits your
            capital and conviction. Select a tier to start your investment
            inquiry.
          </p>
        </motion.div>

        {/* Tier Cards — horizontal scroll on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {investmentTiers.map((tier, i) => {
            const Icon = tier.icon;
            const isSelected = selectedTier === tier.id;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => handleSelectTier(tier.id)}
                className={`border p-6 md:p-8 bg-white cursor-pointer transition-all flex flex-col ${
                  isSelected
                    ? "border-[#FF4D00] ring-1 ring-[#FF4D00]/20"
                    : "border-[#111111]/10 hover:border-[#FF4D00]/30"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isSelected ? "bg-[#FF4D00]" : "border border-[#111111]/10"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        isSelected ? "text-white" : "text-[#FF4D00]"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/30">
                    {tier.vehicle}
                  </span>
                </div>

                <h3 className="text-[24px] md:text-[28px] font-display font-medium tracking-tight mb-1">
                  {tier.name}
                </h3>
                <p className="text-[13px] text-[#111111]/40 font-medium mb-4">
                  {tier.tagline}
                </p>

                <div className="mb-5">
                  <span className="text-[32px] md:text-[40px] font-display font-medium tracking-[-0.03em] leading-[1]">
                    ${tier.min.toLocaleString()}
                  </span>
                  <span className="text-[13px] text-[#111111]/40 font-medium ml-1">
                    {tier.max ? `\u2013 $${tier.max.toLocaleString()}` : "+ "}
                    minimum
                  </span>
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {tier.benefits.map((benefit, bi) => (
                    <li key={bi} className="flex items-start gap-2">
                      <Check
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          isSelected ? "text-[#FF4D00]" : "text-[#111111]/20"
                        }`}
                        strokeWidth={2}
                      />
                      <span className="text-[12px] md:text-[13px] text-[#111111]/60 font-medium leading-[1.5]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#111111]/30 border-t border-[#111111]/10 pt-4 mt-auto">
                  <span>{tier.holdPeriod}</span>
                  <span>{tier.reporting}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Inline Investment Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border border-[#111111]/10 bg-white p-8 md:p-12 max-w-2xl mx-auto">
                {formState === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-green-600" strokeWidth={2} />
                    </div>
                    <h3 className="text-[24px] font-display font-medium mb-3">
                      Investment inquiry submitted
                    </h3>
                    <p className="text-[14px] text-[#111111]/50 font-medium leading-[1.7] max-w-md mx-auto">
                      Our investor relations team will reach out within 24 hours
                      with next steps, offering documents, and wire instructions.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-[20px] md:text-[24px] font-display font-medium tracking-tight">
                          Start your investment
                        </h3>
                        <p className="text-[13px] text-[#111111]/40 font-medium mt-1">
                          {investmentTiers.find((t) => t.id === selectedTier)?.name} tier
                          {" "}via{" "}
                          {investmentTiers.find((t) => t.id === selectedTier)?.vehicle}{" "}
                          &mdash; from $
                          {investmentTiers
                            .find((t) => t.id === selectedTier)
                            ?.min.toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => setShowForm(false)}
                        className="p-2 hover:bg-[#111111]/5 transition-colors"
                        aria-label="Close form"
                      >
                        <X className="w-5 h-5 text-[#111111]/40" />
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#111111]/40 block mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData((p) => ({ ...p, name: e.target.value }))
                            }
                            className="w-full border border-[#111111]/10 px-4 py-3 text-[14px] font-medium focus:outline-none focus:border-[#FF4D00] transition-colors bg-white"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#111111]/40 block mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((p) => ({ ...p, email: e.target.value }))
                            }
                            className="w-full border border-[#111111]/10 px-4 py-3 text-[14px] font-medium focus:outline-none focus:border-[#FF4D00] transition-colors bg-white"
                            placeholder="investor@xcelero.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#111111]/40 block mb-2">
                          Investment Amount (USD)
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[14px] text-[#111111]/30 font-medium">
                            $
                          </span>
                          <input
                            type="number"
                            required
                            min={
                              investmentTiers.find(
                                (t) => t.id === selectedTier
                              )?.min
                            }
                            value={formData.amount}
                            onChange={(e) =>
                              setFormData((p) => ({
                                ...p,
                                amount: e.target.value,
                              }))
                            }
                            className="w-full border border-[#111111]/10 px-4 py-3 pl-8 text-[14px] font-medium focus:outline-none focus:border-[#FF4D00] transition-colors bg-white"
                            placeholder="5000"
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-3 py-2">
                        <input
                          type="checkbox"
                          id="accredited"
                          checked={formData.accredited}
                          onChange={(e) =>
                            setFormData((p) => ({
                              ...p,
                              accredited: e.target.checked,
                            }))
                          }
                          className="mt-1 accent-[#FF4D00]"
                        />
                        <label
                          htmlFor="accredited"
                          className="text-[12px] text-[#111111]/50 font-medium leading-[1.6]"
                        >
                          I am an accredited/qualified investor (required for
                          Syndicate tier and above)
                        </label>
                      </div>

                      <div className="flex items-start gap-3 py-2">
                        <input
                          type="checkbox"
                          id="consent"
                          required
                          checked={formData.consent}
                          onChange={(e) =>
                            setFormData((p) => ({
                              ...p,
                              consent: e.target.checked,
                            }))
                          }
                          className="mt-1 accent-[#FF4D00]"
                        />
                        <label
                          htmlFor="consent"
                          className="text-[12px] text-[#111111]/50 font-medium leading-[1.6]"
                        >
                          By selecting this I agree to receive communications
                          from xCelero Labs related to investments xCelero has or
                          intends to make. I understand this is an inquiry and not
                          a binding commitment.
                        </label>
                      </div>

                      {formState === "error" && (
                        <p className="text-red-600 text-[13px] font-medium">
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={formState === "submitting" || !formData.consent}
                        className="w-full px-8 py-4 bg-[#111111] text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formState === "submitting" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing&hellip;
                          </>
                        ) : (
                          <>
                            Submit Investment Inquiry
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-[#111111]/30 font-medium text-center leading-[1.6]">
                        This is not an offer to sell securities. Investment
                        inquiries are subject to eligibility verification and
                        offering document review.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   PORTFOLIO SECTORS — Visual sector matrix from ventures data
   ══════════════════════════════════════════════════════════════════════════ */
function PortfolioSectors() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const sectorData = verticals.map((vertical) => {
    const count = venturesData.filter((v) => v.vertical === vertical).length;
    return { name: vertical, count };
  });

  const sectorImages: Record<string, string> = {
    Energy: "/sectors/energy.png",
    Water: "/sectors/water.png",
    "Food & Agriculture": "/sectors/food-agriculture.png",
    "Materials & Manufacturing": "/sectors/materials-manufacturing.png",
    "Mobility & Logistics": "/sectors/mobility-logistics.png",
    "Data & Intelligence": "/sectors/data-intelligence.png",
    "Built Environments": "/sectors/built-environments.png",
    "Life Sciences": "/sectors/life-sciences.png",
    "Digital Finance": "/sectors/digital-finance.png",
    "Education & Cognitive Infrastructure": "/sectors/education-cognitive.png",
    "Space & Off-World Industrialization": "/sectors/space-industrialization.png",
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#111111] text-white border-t border-white/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Portfolio Exposure
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-display font-medium tracking-[-0.03em] leading-[0.95] mt-3">
            Broad exposure <em className="font-serif italic text-[#FF4D00]">by design</em>
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/50 font-medium leading-[1.7] max-w-xl mt-4">
            One investment creates exposure to {totalVentures} ventures across{" "}
            {verticals.length} critical technology sectors. Broad exposure
            increases the probability of capturing a breakout winner.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {sectorData.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Photo */}
              <div className="aspect-[4/5] relative">
                <img
                  src={sectorImages[sector.name] || "/sectors/energy.png"}
                  alt={sector.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 group-hover:via-black/40 transition-colors duration-500" />
              </div>
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <span className="text-[28px] md:text-[36px] font-display font-medium text-[#FF4D00] leading-none block mb-1">
                  {sector.count}
                </span>
                <span className="text-[11px] md:text-[13px] font-bold text-white/90 block leading-tight">
                  {sector.name}
                </span>
                <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-widest uppercase text-white/40 block mt-1">
                  ventures
                </span>
              </div>
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF4D00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/ventures"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-white hover:text-[#111111] transition-all"
          >
            View All Ventures
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   FAQ — Accordion
   ══════════════════════════════════════════════════════════════════════════ */
function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-[#111111]/10"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-[120px] lg:self-start"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
              Questions, Answered
            </span>
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-display font-medium tracking-[-0.03em] leading-[0.95] mt-3">
              Questions,
              <br />
              <em className="font-serif italic text-[#FF4D00]">answered</em>
            </h2>
          </motion.div>

          <div className="lg:col-span-7">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-t border-[#111111]/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#111111]/30 shrink-0">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[15px] md:text-[17px] font-medium leading-[1.5] pr-4">
                      {item.q}
                    </h3>
                  </div>
                  <div className="text-[#111111]/30 group-hover:text-[#111111]/60 transition-colors shrink-0">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] md:text-[15px] text-[#111111]/60 font-medium leading-[1.7] pb-6 pl-0 md:pl-14">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   INVEST CTA — Bottom call-to-action
   ══════════════════════════════════════════════════════════════════════════ */
function InvestCTA({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#111111] text-white border-t border-white/10">
      <div className="w-full max-w-[1400px] mx-auto text-center">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mb-6 block">
          Start Today
        </span>
        <h2 className="text-[36px] md:text-[56px] lg:text-[72px] font-display font-medium tracking-[-0.03em] leading-[0.9] mb-6">
          The next century is being{" "}
          <em className="font-serif italic text-[#FF4D00]">built</em>
          <br />
          right now. Will you fund it?
        </h2>
        <p className="text-[15px] md:text-[17px] text-white/50 font-medium leading-[1.7] max-w-xl mx-auto mb-10">
          From $500 in the xCelero Fund to custom Anchor Mandates — six
          vehicles, one thesis, 39 countries of deal flow.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link
            to="#invest-tiers"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document
                .getElementById("invest-tiers")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#FF4D00] text-white text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-white hover:text-[#111111] transition-colors"
          >
            Invest Now
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onSubscribe}
            className="inline-flex items-center gap-2 px-10 py-5 border border-white/20 text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-white hover:text-[#111111] transition-all"
          >
            Get Updates
            <Mail className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-white/20 font-medium text-center leading-[1.6] mt-8 max-w-lg mx-auto">
          This is not an offer to sell securities. Investment inquiries are
          subject to eligibility verification and offering document review.
          Past performance does not guarantee future results.
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   SUBSCRIBE MODAL
   ══════════════════════════════════════════════════════════════════════════ */
function SubscribeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/capital/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-[#111111]/10 p-8 md:p-10 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {status === "success" ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                  <Check className="w-7 h-7 text-green-600" strokeWidth={2} />
                </div>
                <h3 className="text-[20px] font-display font-medium mb-2">
                  You&apos;re on the list
                </h3>
                <p className="text-[13px] text-[#111111]/50 font-medium leading-[1.7]">
                  We&apos;ll send you portfolio updates, NAV reports, and new
                  investment opportunities.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-[20px] font-display font-medium tracking-tight">
                      Get investor updates
                    </h3>
                    <p className="text-[12px] text-[#111111]/40 font-medium mt-1">
                      Portfolio news, NAV reports, and deal alerts
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-[#111111]/5 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5 text-[#111111]/40" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-[#111111]/10 px-4 py-3 text-[14px] font-medium focus:outline-none focus:border-[#FF4D00] transition-colors bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="modal-consent"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 accent-[#FF4D00]"
                    />
                    <label
                      htmlFor="modal-consent"
                      className="text-[11px] text-[#111111]/50 font-medium leading-[1.6]"
                    >
                      I agree to receive communications from xCelero Labs
                      related to investments. I understand I can unsubscribe at
                      any time.
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-[12px] font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting" || !consent}
                    className="w-full px-8 py-4 bg-[#111111] text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-[#FF4D00] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Subscribing&hellip;
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
