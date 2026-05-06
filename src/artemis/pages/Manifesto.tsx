"use client";

import { motion } from "framer-motion";
import { ReviewSection } from "@/artemis/components/ReviewSection";

export function Manifesto() {
  return (
    <div className="bg-[#FAFAFA] text-[#111111]">
      <section className="pt-32 pb-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-[60px] md:text-[90px] leading-[0.9] font-display font-medium tracking-tight mb-12 uppercase">
              The<br />Manifesto.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[#111111]/60 font-medium max-w-xl text-balance">
              We are not incrementalists. We are systematic maximalists. We build the architecture for the next wave of human progress.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[40vh] md:h-[60vh] w-full overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
              alt="Systematic Architecture" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="w-full max-w-3xl mx-auto space-y-32">
          
          <div className="border-t border-[#111111]/10 pt-8">
            <div className="text-[11px] font-mono tracking-widest uppercase mb-8 text-[#FF4D00]">01. The Model is Broken</div>
            <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight mb-8">Centralized, extractive, myopic.</h2>
            <div className="text-[#111111]/70 font-medium leading-[1.8] space-y-6 text-lg">
              <p>
                The dominant model of global innovation is broken. For decades, &quot;critical technologies&quot; have been defined by narrow geopolitical interests—focused on supremacy in defense, aerospace, and computing. 
              </p>
              <p>
                These models hoard genius in a handful of elite cities, while treating the rest of the world—particularly the Global South—as a market for consumption or an arena for extraction.
              </p>
            </div>
          </div>

          <div className="border-t border-[#111111]/10 pt-8">
            <div className="text-[11px] font-mono tracking-widest uppercase mb-8 text-[#FF4D00]">02. The Sovereign Mandate</div>
            <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight mb-8">True sovereignty is technological.</h2>
            <div className="text-[#111111]/70 font-medium leading-[1.8] space-y-6 text-lg">
              <p>
                We reject the centralized, elitist models that hoard opportunity. We champion a world where a coder in Niamey can spark a startup with a financier in Tokyo. Where a biotech breakthrough in São Paulo scales faster than an app in Silicon Valley.
              </p>
              <p>
                Under xHansa, we recognize that true sovereignty is not just political; it is technological. It is the ability to generate electricity, secure food, purify water, and defend networks on one's own terms. Sovereign agile manufacturing.
              </p>
            </div>
          </div>

          <div className="border-t border-[#111111]/10 pt-8">
            <div className="text-[11px] font-mono tracking-widest uppercase mb-8 text-[#FF4D00]">03. Systematic Maximalism</div>
            <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight mb-8">Deep-tech architecture.</h2>
            <div className="text-[#111111]/70 font-medium leading-[1.8] space-y-6 text-lg">
              <p>
                xCelero represents a systemic rewrite of how critical innovation is funded, built, and deployed. We do not do &quot;apps for convenience.&quot; We do deep-tech infrastructure. We do Civilizational Flow.
              </p>
              <p>
                This is not a manifesto of hope; it is a declaration of intent. Welcome to the engine of the next civilization.
              </p>
            </div>
          </div>

        </div>
      </section>
      <ReviewSection />
    </div>
  );
}
