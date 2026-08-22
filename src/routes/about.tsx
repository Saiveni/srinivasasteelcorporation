import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { AboutHero } from "@/components/AboutHero";
import { LeadershipSection } from "@/components/LeadershipSection";
import { IndustrialNetwork } from "@/components/IndustrialNetwork";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Srinivasa Steel Corporation | Established 1994" },
      { name: "description", content: "Learn about Srinivasa Steel Corporation, established in 1994 and serving steel, TMT and related construction requirements." },
      { property: "og:title", content: "About Srinivasa Steel Corporation | Established 1994" },
      { property: "og:description", content: "Learn about Srinivasa Steel Corporation, established in 1994 and serving steel, TMT and related construction requirements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-[#050A14] flex flex-col">
      {/* 01 — PREMIUM ABOUT OPENING & 02 — COMPANY STORY */}
      <AboutHero />
      
      {/* 03 — LEADERSHIP / PROMOTERS */}
      <LeadershipSection />
      
      {/* 04 — INDUSTRIAL TIMELINE */}
      <AboutSection />
      
      {/* 05 — REGIONAL INDUSTRIAL NETWORK */}
      <IndustrialNetwork />

      {/* 06 — WHY CHOOSE SRINIVASA STEEL? & 07 — STRONG CTA */}
      <WhyChooseUs />
    </div>
  );
}
