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
    <div className="font-body bg-ssc-navy">
      <HeroSection />
      <TrustCapabilities />
      <TrustStatsBar />
      <ProductShowcase />
      
      <SteelTimeline />
      <BrandStrip />
      <div className="bg-white py-16 lg:py-24 border-t border-ssc-navy/5">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
            <div>
              <span className="text-micro text-ssc-gold-dark uppercase mb-4 block">
                VISUAL PORTFOLIO
              </span>
              <h2 className="text-h2 text-ssc-navy uppercase">
                STEEL IN <span className="text-ssc-gold-dark">ELEMENT.</span>
              </h2>
              <p className="text-body text-ssc-gray-body max-w-sm mt-4">
                A technical perspective of our products and processing facilities.
              </p>
            </div>
            {/* Fine structural grid element for industrial feel */}
            <div className="hidden lg:block w-32 h-32 opacity-10" 
                 style={{ 
                   backgroundImage: `linear-gradient(to right, var(--ssc-navy) 1px, transparent 1px), linear-gradient(to bottom, var(--ssc-navy) 1px, transparent 1px)`,
                   backgroundSize: '20px 20px'
                 }} 
            />
          </div>
          <SteelGallery isHomePage={true} />
        </div>
      </div>
      
    </div>
  );
}
