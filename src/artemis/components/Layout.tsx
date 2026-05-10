"use client";

import { useEffect, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Link, useRouter } from "../router";
import { SearchModal } from "./SearchModal";

export function Layout({ children }: { children: React.ReactNode }) {
  const { path } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans flex flex-col selection:bg-[#FF4D00]/20 selection:text-[#111111]">
      <Nav />
      <main className="flex-grow pt-[80px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#111111]/10 h-[80px] flex items-center px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-6 h-6 bg-[#FF4D00] flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-[10px]">X</span>
            </div>
            <span className="text-sm font-bold tracking-tight uppercase whitespace-nowrap hidden sm:inline text-[#111111]">xCelero Labs</span>
          </Link>
          
          <div className="hidden lg:flex space-x-8 items-center">
            {[
              { name: "manifesto", path: "/manifesto" },
              { name: "approach", path: "/approach" },
              { name: "infrastructure", path: "/platform" },
              { name: "route", path: "/routes" },
              { name: "programs", path: "/programs" },
              { name: "ventures", path: "/ventures" },
              { name: "capital", path: "/capital" },
              { name: "careers", path: "/careers" },
              { name: "join", path: "/join" },
              { name: "insights", path: "/insights" }
            ].map((item) => (
              <Link key={item.name} to={item.path} className="text-[11px] lowercase tracking-[0.1em] font-medium text-[#111111]/60 hover:text-[#FF4D00] transition-colors relative">
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="p-2 border border-[#111111]/10 hover:border-[#111111] hover:bg-[#111111] hover:text-white transition-colors group flex items-center gap-2"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-[#111111] group-hover:text-white" />
              <span className="hidden sm:inline-flex text-[10px] font-mono font-medium text-[#111111]/40 group-hover:text-white/50">⌘K</span>
            </button>
            <Link to="/join" className="px-5 py-2.5 border border-[#111111] text-[11px] lowercase tracking-[0.1em] font-bold hover:bg-[#111111] hover:text-white transition-colors hidden sm:inline-flex">
              join
            </Link>
          </div>
        </div>
      </nav>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-24 pb-12 px-6 md:px-12">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* CTA cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <Link to="/programs" className="group block">
            <div className="border border-white/10 p-10 md:p-12 aspect-[16/9] md:aspect-auto md:h-[300px] flex flex-col justify-between hover:bg-white/5 transition-colors relative overflow-hidden">
               <div className="flex justify-between items-start">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/50">xCelero Accelerator</div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
               </div>
               <div>
                  <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">From thesis to operating company in 24 months.</h2>
                  <p className="text-white/50 font-medium">High-intensity venture building with funding, mentorship, and Route infrastructure built in.</p>
               </div>
            </div>
          </Link>
          
          <Link to="/capital" className="group block">
            <div className="border border-white/10 p-10 md:p-12 aspect-[16/9] md:aspect-auto md:h-[300px] flex flex-col justify-between hover:bg-white/5 transition-colors relative overflow-hidden">
               <div className="flex justify-between items-start">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/50">xCelero Capital</div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
               </div>
               <div>
                  <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">Invest in critical technology from $500.</h2>
                  <p className="text-white/50 font-medium">Six vehicles, one thesis: back the technology the next century needs, in the markets that need it most.</p>
               </div>
            </div>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          <div className="lg:col-span-6">
            <div className="text-[60px] md:text-[80px] lg:text-[100px] font-display font-medium leading-[0.9] tracking-tight uppercase mb-8">
              xCelero<br />Labs
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">xCelero Labs</span>
              <Link to="/ventures" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">Companies</Link>
              <Link to="/careers" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">Careers</Link>
              <Link to="/approach" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">Who we back</Link>
              <Link to="/insights" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">News</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">Programs</span>
              <Link to="/programs" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">Overview</Link>
              <Link to="/programs" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">Fellowship</Link>
              <Link to="/programs" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">Hansa Hubs</Link>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">Social</span>
              <a href="#" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">X</a>
              <a href="#" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">YouTube</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">Legal</span>
              <Link to="/" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/" className="text-[13px] font-bold text-white/60 hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-[10px] text-white/30 uppercase tracking-widest font-mono" suppressHydrationWarning>
          © {new Date().getFullYear()} xCelero Labs.
        </div>
      </div>
    </footer>
  );
}
