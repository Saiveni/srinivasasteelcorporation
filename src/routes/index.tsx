import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal, SectionContainer, AnimatedCard } from "@/components/SharedLayout";
import { HeroSection } from "@/components/HeroSection";
import { TrustStatsBar } from "@/components/TrustStatsBar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PartnerStrip } from "@/components/PartnerStrip";
import { Shield, Award, Users } from "lucide-react";

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
      <SectionContainer accent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Unmatched Quality", desc: "Certified premium grade steel meeting international standards." },
            { icon: Award, title: "30+ Years Trust", desc: "A legacy built on reliability and long-term partnerships." },
            { icon: Users, title: "Expert Support", desc: "Comprehensive technical guidance for industrial supplies." }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <AnimatedCard>
                <item.icon className="text-ssc-gold mb-6" size={40} />
                <h3 className="text-2xl font-heading text-ssc-navy mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
