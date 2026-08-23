import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrustCapabilities } from "@/components/TrustCapabilities";
import { TrustStatsBar } from "@/components/TrustStatsBar";
import ProductShowcase from "@/components/ProductShowcase";

import { SteelTimeline } from "@/components/SteelTimeline";
import { BrandStrip } from "@/components/BrandStrip";
import { SteelGallery } from "@/components/SteelGallery";


export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Srinivasa Steel Corporation | TMT Rebars & Steel Products" },
      { name: "description", content: "Srinivasa Steel Corporation supplies TMT rebars, steel products, wire products and decoiling solutions for construction and industrial requirements." },
      { property: "og:title", content: "Srinivasa Steel Corporation | TMT Rebars & Steel Products" },
      { property: "og:description", content: "Steel, TMT and decoiling solutions for construction and industrial requirements." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Srinivasa Steel Corporation | TMT Rebars & Steel Products" },
      { name: "twitter:description", content: "Steel, TMT and decoiling solutions for construction and industrial requirements." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop" },
    ],
  }),
});

function HomePage() {
  return (
    <div className="font-body bg-background">
      <HeroSection />
      <TrustCapabilities />
      <TrustStatsBar />
      <ProductShowcase />
      
      <SteelTimeline />
      <BrandStrip />
      <div className="bg-white section-spacing">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
            <div>
              <span className="text-micro text-primary uppercase mb-4 block">
                VISUAL PORTFOLIO
              </span>
              <h2 className="text-h2 text-foreground uppercase">
                STEEL IN <span className="text-primary">ELEMENT.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <p className="text-body text-foreground/70 max-w-sm lg:text-right">
                A technical perspective of our products and processing facilities.
              </p>
            </div>
          </div>
          <SteelGallery isHomePage={true} />
        </div>
      </div>
      
    </div>
  );
}
