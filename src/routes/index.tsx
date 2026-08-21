import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal, SectionContainer, AnimatedCard } from "@/components/SharedLayout";
import { HeroSection } from "@/components/HeroSection";
import { TrustStatsBar } from "@/components/TrustStatsBar";
import ProductShowcase from "@/components/ProductShowcase";
import { PartnerStrip } from "@/components/PartnerStrip";


export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="font-body" style={{ "--page-accent": "oklch(0.4 0.1 240)" } as any}>
      <HeroSection />
      <TrustStatsBar />
      
      <ProductShowcase />
      <PartnerStrip />
    </div>
  );
}
