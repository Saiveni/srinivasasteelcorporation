import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal, SectionContainer } from "@/components/SharedLayout";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div style={{ "--page-accent": "var(--color-ssc-gold)" } as any}>
      <SectionContainer className="min-h-[60vh] flex items-center">
        <ScrollReveal>
          <span className="text-ssc-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Our Catalog</span>
          <h1 className="text-5xl md:text-7xl text-ssc-navy mb-8">Industrial Steel <br/>Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From high-grade TMT bars to structural steel beams, we supply the materials that build modern India.
          </p>
        </ScrollReveal>
      </SectionContainer>
    </div>
  );
}
