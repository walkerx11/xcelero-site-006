"use client";

import { useState, useMemo } from "react";
import { Link } from "@/artemis/router";
import { Search, ChevronDown } from "lucide-react";
import { venturesData, Venture } from "@/artemis/data/ventures";
import { ReviewSection } from "@/artemis/components/ReviewSection";

const ITEMS_PER_PAGE = 25;

function VentureCard({ venture }: { venture: Venture }) {
  return (
    <Link
      to={`/ventures/${venture.id}`}
      className="group block"
    >
      <div className="relative bg-[#111111] text-white overflow-hidden transition-all duration-200 group-hover:scale-[1.02] group-hover:ring-1 group-hover:ring-[#FF4D00] group-hover:brightness-110">
        {/* Top section: name + code */}
        <div className="p-4 pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-display font-bold text-white leading-tight truncate">
                {venture.name}
              </h3>
              <span className="text-[10px] font-mono text-white/50 tracking-wider mt-1 block">
                {venture.code}
              </span>
            </div>
          </div>

          {/* Vertical badge */}
          <div className="mt-2.5">
            <span className="inline-block px-2 py-0.5 bg-white/10 text-[9px] font-mono uppercase tracking-widest text-white/70">
              {venture.vertical}
            </span>
          </div>
        </div>

        {/* Middle section: solution excerpt */}
        <div className="px-4 pb-3">
          <p className="text-[11px] text-white/70 leading-relaxed line-clamp-2">
            {venture.solution}
          </p>
        </div>

        {/* Bottom section: anchor partners */}
        <div className="px-4 pb-4 pt-1">
          <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 block mb-0.5">
            Anchor Partners
          </span>
          <span className="text-[11px] text-white/60 leading-snug line-clamp-1 block">
            {venture.anchorPartners}
          </span>
        </div>

        {/* Bottom-right orange square with first letter */}
        <div className="absolute bottom-3 right-3 w-8 h-8 bg-[#FF4D00] flex items-center justify-center font-display font-bold text-sm text-white">
          {venture.name.charAt(0)}
        </div>
      </div>
    </Link>
  );
}

export function Ventures() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Dynamically derive unique verticals from data
  const verticals = useMemo(() => {
    const unique = Array.from(new Set(venturesData.map((v) => v.vertical)));
    unique.sort();
    return unique;
  }, []);

  const categories = useMemo(() => ["All", ...verticals], [verticals]);

  const filteredVentures = useMemo(() => {
    return venturesData.filter((v) => {
      const matchesCategory =
        activeCategory === "All" || v.vertical === activeCategory;
      const matchesSearch =
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleVentures = filteredVentures.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVentures.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // Reset visible count when filters change
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <h1 className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.9] font-display font-medium tracking-tight mb-8">
          We invest in companies long before anyone knows their name.
        </h1>
        <div className="text-xl md:text-2xl text-[#111111]/50 font-medium mb-20">
          <p>(Often before they even have one.)</p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="relative w-full lg:w-[400px] group border-b border-[#111111]/20 hover:border-[#111111] focus-within:!border-[#FF4D00] transition-colors pb-4 flex items-center">
            <Search className="w-5 h-5 text-[#111111]/40 group-focus-within:text-[#FF4D00] mr-4 transition-colors" />
            <input
              type="text"
              placeholder="Search ventures"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="bg-transparent text-lg font-medium outline-none w-full placeholder:text-[#111111]/30"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#111111]/40 mr-2 border-r border-[#111111]/10 pr-4">
              Verticals
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#111111] text-white"
                    : "bg-white border border-[#111111]/10 text-[#111111]/60 hover:bg-[#111111]/5 hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="px-6 md:px-12 w-full max-w-7xl mx-auto">
        {/* Count display */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#111111]/40">
            {filteredVentures.length} venture{filteredVentures.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {visibleVentures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}
        </div>

        {filteredVentures.length === 0 && (
          <div className="py-32 text-center text-xl text-[#111111]/50 font-medium">
            No ventures found matching your criteria.
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group flex items-center gap-3 px-8 py-4 border border-[#111111]/10 text-[11px] font-mono uppercase tracking-widest font-bold text-[#111111]/60 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors"
            >
              Load More
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}
      </section>

      <ReviewSection title="Field notes on critical technology, venture infrastructure, and the routes that connect them" />
    </div>
  );
}
