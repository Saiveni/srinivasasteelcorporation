import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal, SectionContainer } from "@/components/SharedLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div style={{ "--page-accent": "var(--color-ssc-navy)" } as any}>
      <SectionContainer className="min-h-[60vh] flex items-center">
        <ScrollReveal>
          <span className="text-ssc-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Legacy</span>
          <h1 className="text-5xl md:text-7xl text-ssc-navy mb-8">30+ Years of <br/>Engineering Excellence</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Founded in 1994, Srinivasa Steel Corporation has been at the forefront of India's industrial growth, providing premium TMT steel and structural solutions.
          </p>
        </ScrollReveal>
      </SectionContainer>
    </div>
  );
}
