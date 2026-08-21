import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/HeroSection";
import { TrustStatsBar } from "@/components/TrustStatsBar";
import ProductShowcase from "@/components/ProductShowcase";
import { DecoilingSection } from "@/components/DecoilingSection";
import { AboutSection } from "@/components/AboutSection";
import { BrandStrip } from "@/components/BrandStrip";
import { SteelGallery } from "@/components/SteelGallery";
import { LocationsSection } from "@/components/LocationsSection";
import { ContactSection } from "@/components/ContactSection";


export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="font-body" style={{ "--page-accent": "oklch(0.4 0.1 240)" } as any}>
      <HeroSection />
      <TrustStatsBar />
      
      <ProductShowcase />
      <DecoilingSection />
      <AboutSection />
      <BrandStrip />
      <SteelGallery />
      <LocationsSection />
      <ContactSection />
    </div>
  );
}
