"use client";

import { ReviewSection } from "@/artemis/components/ReviewSection";

export function Insights() {
  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen">
      <section className="pt-32 pb-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="w-3 h-3 bg-[#FF4D00] mb-8"></div>
            <h1 className="text-[60px] md:text-[90px] leading-[0.9] font-display font-medium tracking-tight mb-8 uppercase text-balance">
              Insights.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[#111111]/60 font-medium max-w-xl text-balance">
              News, dispatches, and perspectives from the frontier of civilizational technology.
            </p>
          </div>
          <div className="h-[40vh] md:h-[60vh] w-full overflow-hidden mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80" 
              alt="Insights & Research" 
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
            />
          </div>
        </div>
      </section>

      <ReviewSection title="Tactical 0-1 breakdowns to help you assemble a better timeline" />
    </div>
  );
}
