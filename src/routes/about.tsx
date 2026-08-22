import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { AboutHero } from "@/components/AboutHero";
import { LeadershipSection } from "@/components/LeadershipSection";
import { IndustrialNetwork } from "@/components/IndustrialNetwork";

const locations = []; // Removed old data structure as it's now internal to IndustrialNetwork

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
    <div className="bg-[#050A14]">
      <AboutHero />
      <LeadershipSection />
      <AboutSection />
      
      {/* Inline Locations Section */}
      <IndustrialNetwork />
    </div>
  );
}
