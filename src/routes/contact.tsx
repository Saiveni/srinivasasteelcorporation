import { createFileRoute } from "@tanstack/react-router";
import { ScrollReveal, SectionContainer } from "@/components/SharedLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div style={{ "--page-accent": "oklch(0.6 0.1 200)" } as any}>
      <SectionContainer className="min-h-[60vh] flex items-center">
        <ScrollReveal>
          <span className="text-ssc-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl text-ssc-navy mb-8">Let's Build <br/>Together</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Have a project in mind? Our team of experts is ready to provide you with the best industrial supply solutions.
          </p>
        </ScrollReveal>
      </SectionContainer>
    </div>
  );
}
