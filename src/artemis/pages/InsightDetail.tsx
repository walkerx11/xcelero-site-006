"use client";

import { useRouter, Link } from "@/artemis/router";
import { ArrowLeft } from "lucide-react";
import { insightsData } from "@/artemis/data/insights";

export function InsightDetail() {
  const { params, navigate } = useRouter();
  const id = params?.id;
  const post = insightsData.find(p => p.id === id);

  if (!post) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen text-[#111111] flex flex-col items-center justify-center">
        <h1 className="text-[60px] font-display font-medium tracking-tight mb-8">Not Found</h1>
        <button onClick={() => navigate("/insights")} className="px-5 py-2.5 border border-[#111111] text-[11px] uppercase tracking-[0.1em] font-bold hover:bg-[#111111] hover:text-white transition-colors">
          Return to Insights
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen">
      <section className="pt-32 pb-24 px-6 md:px-12 border-b border-[#111111]/10">
        <div className="w-full max-w-4xl mx-auto">
          <Link to="/insights" className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#111111]/50 hover:text-[#FF4D00] flex items-center gap-2 mb-12 w-fit transition-colors">
            <ArrowLeft className="w-3 h-3" /> Back to Insights
          </Link>
          
          <div className="flex items-center gap-4 mb-12 flex-wrap">
             <div className="px-4 py-2 border border-[#111111] bg-[#FF4D00]/10 text-[#FF4D00] text-[11px] font-mono tracking-widest uppercase font-bold">
              {post.category}
            </div>
             <div className="px-4 py-2 border border-[#111111] bg-[#111111]/5 text-[#111111] text-[11px] font-mono tracking-widest uppercase font-bold">
              {post.date}
            </div>
          </div>

          <h1 className="text-[50px] md:text-[80px] leading-[0.9] font-display font-medium tracking-tight mb-8 uppercase text-balance">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-[#111111]/60 font-medium max-w-3xl text-balance">
            {post.summary}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16 pb-8 border-b border-[#111111]/10">
            <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center font-display text-xl">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight">{post.author}</div>
              <div className="text-[11px] uppercase font-mono tracking-widest text-[#111111]/50 mt-1">Author / Lead</div>
            </div>
          </div>
          
          <div className="text-[#111111]/80 font-medium leading-[1.8] space-y-8 text-lg">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
