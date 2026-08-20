import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal, SectionContainer, AnimatedCard } from "@/components/SharedLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div style={{ "--page-accent": "oklch(0.4 0.1 240)" } as any}>
      {/* Hero Foundation */}
      <SectionContainer className="min-h-[80vh] flex flex-col justify-center">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-12 h-[2px] bg-ssc-gold"></span>
            <span className="text-ssc-gold font-bold uppercase tracking-[0.4em] text-xs">Since 1994</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-ssc-navy mb-8 leading-[0.9]">
            The Strength <br/> Behind <span className="text-ssc-gold">Success.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Premium TMT bars and industrial supplies for India's largest infrastructure projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-ssc-gold text-white font-extrabold px-8 py-8 rounded-xl text-lg hover:scale-105 shadow-premium transition-all">
              View Products <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-ssc-navy text-ssc-navy font-extrabold px-8 py-8 rounded-xl text-lg hover:bg-ssc-navy hover:text-white transition-all">
              Our Legacy
            </Button>
          </div>
        </ScrollReveal>
      </SectionContainer>

      {/* Feature Foundation */}
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
                <h3 className="text-xl text-ssc-navy mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
