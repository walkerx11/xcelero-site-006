"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "../router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { insightsData } from "../data/insights";

interface ReviewSectionProps {
  title?: string;
  backgroundColor?: string;
}

const categoryBadge: Record<string, string> = {
  Energy: "bg-[#FF4D00]/10 text-[#FF4D00]",
  "Food Systems": "bg-green-500/10 text-green-600",
  Infrastructure: "bg-[#111111]/10 text-[#111111]",
  Capital: "bg-amber-500/10 text-amber-600",
};

function getCategoryClass(category: string): string {
  return categoryBadge[category] || "bg-[#111111]/5 text-[#111111]/60";
}

export function ReviewSection({
  title = "Tactical 0-1 breakdowns to help you assemble a better timeline",
  backgroundColor = "bg-[#FAFAFA]",
}: ReviewSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = insightsData[0];
  const secondary = insightsData.slice(1, 4);

  return (
    <section
      ref={ref}
      className={`${backgroundColor} py-20 md:py-32 px-6 md:px-12 lg:px-20 border-t border-[#111111]/10`}
    >
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[40px] md:text-[60px] lg:text-[72px] font-display font-medium tracking-tight leading-[1.05] mb-16 md:mb-24 text-center max-w-4xl mx-auto text-balance"
        >
          {title}
        </motion.h2>

        {/* Featured Card: full-width, image left, content right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <Link
            to={`/insights/${featured.id}`}
            className="group block border border-[#111111]/10 bg-white hover:border-[#111111]/25 transition-colors duration-300"
          >
            <div className="grid lg:grid-cols-12">
              {/* Image */}
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#111111]">
                <img
                  src={
                    featured.imageCover ||
                    featured.image ||
                    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                  }
                  alt={featured.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              {/* Content */}
              <div className="lg:col-span-7 p-6 md:p-10 lg:p-14 flex flex-col justify-center">
                <span
                  className={`inline-block self-start px-3 py-1 text-[10px] font-mono font-bold tracking-[0.15em] uppercase mb-6 ${getCategoryClass(featured.category)}`}
                >
                  {featured.category}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-[44px] font-display font-medium tracking-tight leading-[1.1] mb-5 group-hover:text-[#FF4D00] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-[17px] md:text-[19px] text-[#111111]/60 leading-relaxed mb-8 max-w-xl">
                  {featured.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono tracking-[0.05em] text-[#111111]/40">
                    {featured.author} &middot; {featured.date}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center border border-[#111111]/15 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                    <ArrowUpRight
                      className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary Cards: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
          {secondary.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: "easeOut",
              }}
            >
              <Link
                to={`/insights/${post.id}`}
                className="group block border border-[#111111]/10 bg-white hover:border-[#111111]/25 transition-colors duration-300"
              >
                {/* Image on top */}
                <div className="aspect-[16/9] overflow-hidden bg-[#111111]">
                  <img
                    src={
                      post.imageCover ||
                      post.image ||
                      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                    }
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                {/* Content below */}
                <div className="p-5 md:p-6">
                  <span
                    className={`inline-block px-3 py-1 text-[10px] font-mono font-bold tracking-[0.15em] uppercase mb-4 ${getCategoryClass(post.category)}`}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-[20px] md:text-[22px] font-display font-medium tracking-tight leading-[1.2] mb-3 group-hover:text-[#FF4D00] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-[#111111]/55 leading-[1.6] mb-5 line-clamp-3">
                    {post.summary}
                  </p>
                  <span className="text-[11px] font-mono tracking-[0.05em] text-[#111111]/35">
                    {post.author} &middot; {post.date}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Field Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#FF4D00] hover:text-[#111111] transition-colors group"
          >
            View All Field Notes
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
