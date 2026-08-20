import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal, SectionContainer } from "@/components/SharedLayout";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div style={{ "--page-accent": "var(--color-ssc-gray-steel)" } as any}>
      <SectionContainer className="min-h-[60vh] flex items-center">
        <ScrollReveal>
          <span className="text-ssc-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Visual Proof</span>
          <h1 className="text-5xl md:text-7xl text-ssc-navy mb-8">Project <br/>Showcase</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Explore the landmark infrastructure projects powered by Srinivasa Steel Corporation's premium supplies.
          </p>
        </ScrollReveal>
      </SectionContainer>
    </div>
  );
}
