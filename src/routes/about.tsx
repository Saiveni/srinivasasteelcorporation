import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { LocationsSection } from "@/components/LocationsSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Srinivasa Steel Corporation" },
      { name: "description", content: "Learn about Srinivasa Steel Corporation, established in 1994, and our 30+ years of trust in steel supply." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <LocationsSection />
      <ContactSection />
    </div>
  );
}
