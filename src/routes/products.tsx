import { createFileRoute } from "@tanstack/react-router";
import { ProductsComponent } from "@/components/ProductsComponent";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Our Products | Srinivasa Steel Corporation" },
      { name: "description", content: "Explore our range of TMT rebars, wire products, and industrial steel solutions." },
    ],
  }),
});

function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductsComponent />
      <ContactSection />
    </div>
  );
}

