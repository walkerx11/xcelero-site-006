"use client";

import { ReviewSection } from "@/artemis/components/ReviewSection";

export function Platform() {
  return (
    <div className="bg-[#FAFAFA] text-[#111111]">
      <section className="pt-32 pb-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="w-3 h-3 bg-[#FF4D00] mb-8"></div>
            <h1 className="text-[60px] md:text-[90px] leading-[0.9] font-display font-medium tracking-tight mb-8 uppercase text-balance">
              Infrastructure<br/>& Fields.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-[#111111]/60 font-medium max-w-2xl text-balance">
              Through the XEmbassy network, xCelero provides the physical nodes in the global internet of innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-12 border-b border-[#111111]/10 hidden md:block">
        <div className="w-full max-w-7xl mx-auto h-[40vh] md:h-[60vh] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1518314916593-332dd0e0474c?auto=format&fit=crop&w=2000&q=80" 
            alt="Infrastructure" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
          />
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-[11px] font-mono tracking-widest uppercase mb-16 text-[#FF4D00]">The 3 Engines</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Infrastructure",
                desc: "A distributed constellation of 190 XHansa Hubs spanning every African nation and 19 global cities. Living labs for real-world testing."
              },
              {
                title: "Projects",
                desc: "Convening industry, government, and entrepreneurs to run real-world pilots. Transforming ideas into tangible change at civilizational scale."
              },
              {
                title: "Capital",
                desc: "Mobilizing capital through dedicated funds and SPVs. Blending grants, risk capital, and project finance to ensure transformative tech scales."
              }
            ].map((item, i) => (
              <div key={i} className="border-t border-[#111111]/10 pt-6">
                <div className="text-[11px] font-mono font-bold text-[#FF4D00] mb-6">0{i+1}</div>
                <h3 className="text-2xl font-display font-medium tracking-tight mb-4">{item.title}</h3>
                <p className="text-[15px] leading-[1.8] text-[#111111]/70 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[11px] font-mono tracking-widest uppercase mb-6 text-[#FF4D00]">Blueprint</h2>
            <h3 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8">
              The XEmbassy
            </h3>
            <p className="text-lg text-[#111111]/70 font-medium leading-[1.7] mb-12 max-w-lg">
              At the heart of XHansa 3.0 lies the XEmbassy: a 42,000 sq ft physical node in the global internet of innovation. 
              Not an office, but a distributed micro-campus.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {[
                { title: "Prototyping Lab", pct: "25%", desc: "CNC machines, 3D printers, clean benches, robotics." },
                { title: "Wet Lab", pct: "10%", desc: "PCR machines, biosafety cabinets, fermentation." },
                { title: "Pilot Zone", pct: "15%", desc: "Small-scale manufacturing, modular test rigs." },
                { title: "Open Workspace", pct: "15%", desc: "Radical proximity for ProtoCitizens." }
              ].map((zone, i) => (
                <div key={i} className="border-t border-[#111111]/10 pt-4">
                  <div className="flex items-baseline space-x-2 mb-2">
                     <span className="text-[#FF4D00] font-mono text-[11px]">{zone.pct}</span>
                     <h4 className="font-bold text-sm tracking-tight">{zone.title}</h4>
                  </div>
                  <p className="text-[13px] text-[#111111]/60 font-medium leading-[1.6]">{zone.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#111111] text-[#FAFAFA] p-12 flex flex-col justify-center items-center text-center">
             <div className="text-[120px] md:text-[160px] font-display font-medium leading-none tracking-tighter">42K</div>
             <div className="text-[11px] font-mono text-[#FAFAFA]/50 uppercase tracking-widest mt-4">Square Feet</div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-[11px] font-mono tracking-widest uppercase mb-16 text-[#FF4D00]">The 13 Critical Domains</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
             {[
              { name: "Energy (Generation & Transmission)", desc: "Microgrids, non-lithium storage, low-temp geothermal, small modular nuclear / fusion pathways." },
              { name: "Water & Aquatic Systems", desc: "Distributed desalination, atmospheric H2O harvesting, aquaculture optimization, open-source water grids." },
              { name: "Food & Algorithmic Agriculture", desc: "Climate resilient crop genetics, vertical protein farming, algorithmic harvest optimization." },
              { name: "Materials & Computation", desc: "Ethical refining architectures, bio-plastics, mycelium composites, semi-conductor material sovereignty." },
              { name: "Mobility & Logistics", desc: "Electric mass transit retrofits, heavy-lift drone logistics for remote delivery, autonomous port management." },
              { name: "Cognitive Systems & Data Sovereignty", desc: "Edge AI, decentralized identity, indigenous language LLMs, private sovereign clouds." },
              { name: "Built Environments & Circularity", desc: "Algorithmic urban planning, cooling architectures, waste-to-energy syndicates." },
              { name: "Earth Systems & Biometrics", desc: "Real-time planetary monitoring, early warning sensors, programmable conservation efforts." },
              { name: "Space & Deep Sea Tech", desc: "Micro-satellite constellations for climate tracking, deep sea non-extractive resource mapping." },
              { name: "Industrial Biotech", desc: "Programmable biology, synthetic enzymes, and microbial factories." },
              { name: "Hypersonics", desc: "Next-generation high-speed atmospheric transit." },
              { name: "Quantum Technologies", desc: "Quantum sensing and unbreakable sovereign encryption architectures." },
              { name: "Semiconductors", desc: "Sovereign fabrication capabilities and novel chip design." }
            ].map((field, i) => (
              <div key={i} className="border-t border-[#111111]/10 pt-6">
                <div className="text-[11px] font-mono font-bold text-[#FF4D00] mb-4">{(i+1).toString().padStart(2, '0')}</div>
                <h3 className="text-lg font-bold tracking-tight mb-3 text-[#111111]">{field.name}</h3>
                <p className="text-[14px] leading-[1.6] text-[#111111]/70 font-medium">{field.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReviewSection />
    </div>
  );
}
