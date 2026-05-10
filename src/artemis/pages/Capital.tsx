"use client";

import { useRef, useState, useEffect } from "react";
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
  Lock,
} from "lucide-react";

/* ── Derived Data ── */

const verticals = [...new Set(venturesData.map((v) => v.vertical))];
const totalVentures = venturesData.length;
const totalCountries = 39;
const totalHubs = 190;
const capitalTarget = "$4B";

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
      "Access to xCelero Capital Continuous Flow",
      "Quarterly portfolio updates & NAV reports",
      "Route Deal Flow pipeline visibility",
      "Community investor network access",
    ],
    vehicle: "Continuous Capital Flow",
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
    holdPeriod: "3–5 years",
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
      "Dedicated Fund allocation",
      "Board observer seats (select ventures)",
      "Co-investment first-look rights",
      "Custom reporting & data room access",
      "Annual strategy summit attendance",
    ],
    vehicle: "Dedicated Funds",
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
    vehicle: "Custom Mandate",
    holdPeriod: "Custom",
    reporting: "Real-time dashboard",
  },
];

/* ── FAQ ── */
const faqItems = [
  {
    q: "Who can invest?",
    a: "Individual investors from $500. No accreditation required for the Continuous Capital Flow. SPV syndicates and Dedicated Funds require qualified investor status depending on jurisdiction. Anchor allocations are for institutional investors and family offices.",
  },
  {
    q: "How does xCelero deploy capital?",
    a: "We deploy across three channels: (1) Direct venture builds — originating critical technology companies inside the studio and funding them through MVP to revenue; (2) SPV co-investments — syndicating alongside institutional partners for follow-on rounds in breakout ventures; (3) Dedicated thematic funds — commingled vehicles targeting specific verticals like energy, food systems, or sovereign tech.",
  },
  {
    q: "What are the fees?",
    a: "Continuous Capital Flow: 1% management fee, no carry. SPV Syndicates: 1% management + 10% carry above hurdle. Dedicated Funds: 1.5% management + 20% carry above 8% hurdle. No sales load on any vehicle. Total expense ratios vary by vehicle — see offering documents for details.",
  },
  {
    q: "How does liquidity work?",
    a: "The Continuous Capital Flow offers quarterly redemption windows (up to 5% of NAV per quarter). SPV positions are illiquid until exit event. Dedicated Funds may offer semi-annual tender offers at Board discretion. You should consider all positions illiquid and invest only capital you can commit for 3–7 years.",
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
      <PortfolioStats />
      <InvestmentTiers />
      <HowCapitalMoves />
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
   HERO — USVC-style: editorial headline + Invest Now CTA
   ══════════════════════════════════════════════════════════════════════════ */
function Hero({ onSubscribe }: { onSubscribe: () => void }) {
  return (
    <section className="bg-[#FAFAFA] pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12 lg:px-20 border-b border-[#111111]/10">
      <div className="w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00] mb-6 block">
            xCelero Capital
          </span>
          <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-display font-medium tracking-[-0.03em] leading-[0.9] mb-6">
            Venture capital is the{" "}
            <em className="font-serif italic text-[#FF4D00]">asset class</em>
            <br />
            behind the biggest companies
            <br />
            of the century
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#111111]/60 font-medium max-w-xl mb-10">
            But most people have never been able to access it. xCelero is
            changing that — one investment creates exposure to critical technology
            ventures across 39 countries, from $500.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
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
   PORTFOLIO STATS — USVC network-style display
   ══════════════════════════════════════════════════════════════════════════ */
function PortfolioStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: capitalTarget, label: "Capital mobilization target", size: "big" },
    { value: String(totalVentures), label: "Active ventures in portfolio", size: "small" },
    { value: `${totalCountries}+`, label: "Countries on the Route", size: "small" },
    { value: String(totalHubs), label: "Hub locations", size: "small" },
  ];

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
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Portfolio
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-display font-medium tracking-[-0.03em] leading-[0.95] mt-3">
            Built for the terrain
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-[#111111]/10 pt-6"
            >
              <span
                className={`block font-display font-medium tracking-[-0.03em] leading-[1] mb-3 ${
                  stat.size === "big"
                    ? "text-[48px] md:text-[64px]"
                    : "text-[36px] md:text-[48px]"
                }`}
              >
                {stat.value}
              </span>
              <span className="text-[13px] md:text-[14px] text-[#111111]/50 font-medium leading-[1.5]">
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
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Invest Now
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-display font-medium tracking-[-0.03em] leading-[0.9] mt-4">
            Building a venture portfolio
            <br />
            used to require{" "}
            <em className="font-serif italic text-[#FF4D00]">a lot.</em>{" "}
            <br />
            Now it starts at $500
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#111111]/50 font-medium leading-[1.7] max-w-xl mx-auto mt-6">
            Institutions solved this decades ago — dedicated teams, decades-long
            relationships, hundreds of millions. You never had that option. Until
            now.
          </p>
        </motion.div>

        {/* Tier Cards */}
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
                    {tier.max ? `– $${tier.max.toLocaleString()}` : "+ "}
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
                          — from $
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
                            Processing…
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
   HOW CAPITAL MOVES — Cards showing capital vehicles
   ══════════════════════════════════════════════════════════════════════════ */
function HowCapitalMoves() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const vehicles = [
    {
      icon: Shield,
      title: "Non-Dilutive Capital Desk",
      description:
        "Matching ventures with grants, prizes, and government incentives across 39+ countries. Average non-dilutive raise: $180K per venture.",
      stat: "$180K",
      statLabel: "Avg non-dilutive raise",
    },
    {
      icon: TrendingUp,
      title: "Solidarity Pricing",
      description:
        "Founders in early-stage markets access the same quality of support at a fraction of Silicon Valley costs. Program fees scale with venture revenue.",
      stat: "60%",
      statLabel: "Cost reduction vs SV",
    },
    {
      icon: Globe,
      title: "Route Deal Flow",
      description:
        "Shared deal flow across 190 hubs. Ventures in Nairobi see the same pipeline access as those in Lagos, Cairo, or Cape Town.",
      stat: "190",
      statLabel: "Connected hubs",
    },
    {
      icon: Users,
      title: "LP Network",
      description:
        "Curated network of DFIs, sovereign wealth allocators, family offices, and impact investors aligned on critical technology commercialization.",
      stat: "4,500+",
      statLabel: "Active managers",
    },
  ];

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
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#FF4D00]">
            Capital Vehicles
          </span>
          <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-display font-medium tracking-[-0.03em] leading-[0.95] mt-3">
            How venture capital{" "}
            <em className="font-serif italic text-[#FF4D00]">actually</em>{" "}
            works
          </h2>
          <p className="text-[15px] md:text-[17px] text-[#111111]/50 font-medium leading-[1.7] max-w-xl mt-4">
            Venture investing doesn&apos;t follow the rules you&apos;re used
            to. We apply the same principles institutions have used for decades
            — but broke down the barriers.
          </p>
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
                className="border border-[#111111]/10 p-8 md:p-10 bg-white group hover:border-[#FF4D00]/30 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 rounded-full border border-[#111111]/10 flex items-center justify-center group-hover:border-[#FF4D00]/30 transition-colors">
                    <Icon
                      className="w-4 h-4 text-[#FF4D00]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-[28px] md:text-[36px] font-display font-medium tracking-[-0.03em] leading-[1]">
                      {vehicle.stat}
                    </span>
                    <span className="block text-[10px] font-mono text-[#111111]/30 tracking-widest uppercase mt-1">
                      {vehicle.statLabel}
                    </span>
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
   PORTFOLIO SECTORS — Visual sector matrix from ventures data
   ══════════════════════════════════════════════════════════════════════════ */
function PortfolioSectors() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const sectorData = verticals.map((vertical) => {
    const count = venturesData.filter((v) => v.vertical === vertical).length;
    return { name: vertical, count };
  });

  const sectorIcons: Record<string, string> = {
    Energy: "⚡",
    Water: "💧",
    "Food & Agriculture": "🌾",
    "Materials & Manufacturing": "⚙️",
    "Mobility & Logistics": "🚀",
    "Data & Intelligence": "🧠",
    "Built Environments": "🏗️",
    "Life Sciences": "🧬",
    "Digital Finance": "💰",
    "Education & Cognitive Infrastructure": "📚",
    "Space & Off-World Industrialization": "🌌",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {sectorData.map((sector, i) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border border-white/10 p-4 md:p-5 hover:border-[#FF4D00]/40 hover:bg-white/5 transition-all text-center"
            >
              <span className="text-[24px] md:text-[32px] block mb-2">
                {sectorIcons[sector.name] || "🔬"}
              </span>
              <span className="text-[11px] md:text-[12px] font-bold text-white/80 block mb-1 leading-tight">
                {sector.name}
              </span>
              <span className="text-[20px] md:text-[24px] font-display font-medium text-[#FF4D00]">
                {sector.count}
              </span>
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
   FAQ — Accordion like USVC
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
          {/* Left: Sticky heading */}
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

          {/* Right: FAQ items */}
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#111111] text-white border-t border-white/10"
    >
      <div className="w-full max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-display font-medium tracking-[-0.03em] leading-[0.9] mb-4">
            The goal is to capture
            <br />
            <em className="font-serif italic text-[#FF4D00]">the outliers.</em>
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/50 font-medium leading-[1.7] max-w-xl mx-auto mb-10">
            The entire venture model depends on being in the right rooms,
            backing the right people, and having enough exposure that when a
            breakout happens — you own a meaningful piece of it.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="#invest-tiers"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document
                  .getElementById("invest-tiers")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#FF4D00] text-white text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-[#FF6A2A] transition-colors"
            >
              Invest Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onSubscribe}
              className="inline-flex items-center gap-2 px-10 py-5 border border-white/20 text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-white hover:text-[#111111] transition-all"
            >
              Get Updates by Email
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   SUBSCRIBE MODAL — USVC-style email capture
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
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/capital/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });

      if (!res.ok) throw new Error("Failed");
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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white text-[#111111] w-full max-w-md p-8 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-[#111111]/5 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-[#111111]/40" />
            </button>

            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <Check
                    className="w-7 h-7 text-green-600"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-[20px] font-display font-medium mb-2">
                  You&apos;re on the list
                </h3>
                <p className="text-[13px] text-[#111111]/50 font-medium">
                  New holdings, fund updates, and notes from the team.
                </p>
              </div>
            ) : (
              <>
                <p className="text-[14px] text-[#111111]/50 font-medium mb-2">
                  New holdings, fund updates, and occasional notes from the team.
                </p>
                <h3
                  id="get-updates-title"
                  className="text-[20px] font-display font-medium mb-6"
                >
                  Get updates by email
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="investor@xcelero.com"
                      className="w-full border border-[#111111]/10 px-4 py-3.5 text-[14px] font-medium focus:outline-none focus:border-[#FF4D00] transition-colors"
                      aria-label="Email address"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="modal-consent"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 accent-[#FF4D00]"
                    />
                    <label
                      htmlFor="modal-consent"
                      className="text-[11px] text-[#111111]/40 font-medium leading-[1.6]"
                    >
                      By selecting this I agree to receive marketing
                      communications from xCelero Labs related to investments
                      xCelero has or intends to make.
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
                        Subscribing…
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
