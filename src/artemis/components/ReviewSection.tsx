"use client";

import { Link } from "../router";
import { ArrowUpRight } from "lucide-react";
import { insightsData } from "../data/insights";

interface ReviewSectionProps {
  title?: string;
  backgroundColor?: string;
}

export function ReviewSection({ 
    title = "Tactical 0-1 breakdowns to help you assemble a better timeline", 
    backgroundColor = "bg-[#FAFAFA]" 
}: ReviewSectionProps) {
  return (
    <section className={`${backgroundColor} py-32 px-6 md:px-12 border-t border-[#111111]/10`}>
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-display font-medium tracking-tight leading-[1.05] mb-20 text-center max-w-4xl mx-auto text-balance">
          {title}
        </h2>
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Featured Insight */}
          <div className="lg:col-span-7">
            <Link to={`/insights/${insightsData[0].id}`} className="group block">
              <div className="w-full aspect-[4/3] bg-black mb-8 overflow-hidden rounded-sm">
                <img src={insightsData[0].imageCover || insightsData[0].image || "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80"} alt={insightsData[0].title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-start mb-6">
                 <div className="px-3 py-1 rounded-full border border-[#111111]/20 text-[10px] font-bold tracking-widest uppercase text-[#111111] bg-white">
                   Review Article
                 </div>
                 <div className="w-10 h-10 rounded-full border border-[#111111]/20 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors bg-white overflow-hidden text-[#111111]">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
                 </div>
              </div>
              <h3 className="text-4xl md:text-[44px] font-display font-medium tracking-tight mb-6 leading-[1.1] group-hover:text-[#FF4D00] transition-colors">{insightsData[0].title}</h3>
              <p className="text-[22px] text-[#111111]/70 leading-relaxed text-balance">
                {insightsData[0].summary}
              </p>
            </Link>
          </div>

          {/* Right Column: List of Insights */}
          <div className="lg:col-span-5 flex flex-col">
            {insightsData.slice(1, 4).map((post, idx) => (
              <Link to={`/insights/${post.id}`} key={post.id} className={`group flex gap-8 pb-10 ${idx !== 0 ? 'pt-10 border-t border-[#111111]/10' : ''}`}>
                 <div className="w-[140px] md:w-[180px] shrink-0 aspect-square overflow-hidden rounded-sm bg-black">
                    <img src={post.imageCover || post.image || `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=${80 + idx}`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="flex flex-col flex-1">
                   <div className="flex justify-between items-start mb-4">
                     <div className="px-3 py-1 rounded-full border border-[#111111]/20 text-[10px] font-bold tracking-widest uppercase text-[#111111] bg-white">
                       Review Article
                     </div>
                     <div className="w-10 h-10 rounded-full border border-[#111111]/20 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors bg-white shrink-0 ml-4 hidden sm:flex text-[#111111]">
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={1.5} />
                     </div>
                   </div>
                   <h3 className="text-[22px] md:text-2xl font-display font-medium tracking-tight mb-4 leading-[1.2] group-hover:text-[#FF4D00] transition-colors text-balance">
                     {post.title}
                   </h3>
                   <p className="text-[15px] font-medium text-[#111111]/70 leading-[1.6]">
                     {post.summary}
                   </p>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
