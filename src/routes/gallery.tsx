import { createFileRoute } from "@tanstack/react-router";
import { SteelGallery } from "@/components/SteelGallery";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Steel Gallery | Srinivasa Steel Corporation" },
      { name: "description", content: "Explore our gallery of TMT rebars, wire products, and industrial steel stock." },
    ],
  }),
});

function GalleryPage() {
  return (
    <div className="pt-20">
      <SteelGallery />
      <ContactSection />
    </div>
  );
}
