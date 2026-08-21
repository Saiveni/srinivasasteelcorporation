import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrustCapabilities } from "@/components/TrustCapabilities";
import { TrustStatsBar } from "@/components/TrustStatsBar";
import ProductShowcase from "@/components/ProductShowcase";

import { AboutSection } from "@/components/AboutSection";
import { BrandStrip } from "@/components/BrandStrip";
import { SteelGallery } from "@/components/SteelGallery";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="font-body">
      <HeroSection />
      <TrustCapabilities />
      <TrustStatsBar />
      <ProductShowcase />
      
      <AboutSection />
      <BrandStrip />
      <SteelGallery />
      <ContactSection />
    </div>
  );
}
