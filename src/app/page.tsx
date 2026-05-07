"use client";

import { RouterProvider, useRouter } from "@/artemis/router";
import { Layout } from "@/artemis/components/Layout";
import { Home } from "@/artemis/pages/Home";
import { Manifesto } from "@/artemis/pages/Manifesto";
import { Approach } from "@/artemis/pages/Approach";
import { Platform } from "@/artemis/pages/Platform";
import { Programs } from "@/artemis/pages/Programs";
import { ProgramDetail } from "@/artemis/pages/ProgramDetail";
import { Ventures } from "@/artemis/pages/Ventures";
import { VentureDetail } from "@/artemis/pages/VentureDetail";
import { RoutesPage } from "@/artemis/pages/RoutesPage";
import { Insights } from "@/artemis/pages/Insights";
import { InsightDetail } from "@/artemis/pages/InsightDetail";
import { Capital } from "@/artemis/pages/Capital";
import { JoinPage } from "@/artemis/pages/JoinPage";
import { CareersPage } from "@/artemis/pages/CareersPage";

function Router() {
  const { path } = useRouter();

  // Route matching
  const renderPage = () => {
    if (path === "/" || path === "") return <Home />;
    if (path === "/manifesto") return <Manifesto />;
    if (path === "/approach") return <Approach />;
    if (path === "/platform") return <Platform />;
    if (path === "/programs") return <Programs />;
    if (path.startsWith("/programs/")) return <ProgramDetail />;
    if (path === "/ventures") return <Ventures />;
    if (path.startsWith("/ventures/")) return <VentureDetail />;
    if (path === "/routes") return <RoutesPage />;
    if (path === "/insights") return <Insights />;
    if (path.startsWith("/insights/")) return <InsightDetail />;
    if (path === "/capital") return <Capital />;
    if (path === "/join") return <JoinPage />;
    if (path === "/careers") return <CareersPage />;
    
    // 404 fallback
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] text-[#111111]">
        <div className="text-center px-6">
          <p className="font-mono text-[10px] tracking-[0.4em] text-[#FF4D00] mb-4">404_PAGE_NOT_FOUND</p>
          <h1 className="text-6xl font-display font-medium mb-8 uppercase tracking-tighter">Page Missing</h1>
          <a href="#/" className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white text-[12px] font-bold uppercase tracking-widest hover:bg-[#FF4D00] transition-colors">
            Return Home
          </a>
        </div>
      </div>
    );
  };

  return <Layout>{renderPage()}</Layout>;
}

export default function ArtemisApp() {
  return (
    <RouterProvider>
      <Router />
    </RouterProvider>
  );
}
