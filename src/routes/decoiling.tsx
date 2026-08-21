import { createFileRoute } from "@tanstack/react-router";
import { DecoilingSection } from "@/components/DecoilingSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/decoiling")({
  component: DecoilingPage,
  head: () => ({
    meta: [
      { title: "Decoiling & Services | Srinivasa Steel Corporation" },
      { name: "description", content: "Precision steel decoiling and processing services by Srinivasa Steel Corporation." },
    ],
  }),
});

function DecoilingPage() {
  return (
    <div className="pt-20">
      <DecoilingSection />
      <ContactSection />
    </div>
  );
}
