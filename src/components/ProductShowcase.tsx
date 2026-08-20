import { ScrollReveal, SectionContainer } from "./SharedLayout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const products = [
  {
    name: "TMT Rebars",
    description: "Premium grade thermo-mechanically treated steel bars for superior strength.",
    image: "/src/assets/hero-steel.jpg", // Realistic photograph of bundled ribbed TMT reinforcement steel bars
  },
  {
    name: "Binding Wire",
    description: "High-tensile annealed wire for secure reinforcement anchoring.",
    image: "https://images.pexels.com/photos/15059762/pexels-photo-15059762.jpeg?auto=compress&cs=tinysrgb&w=800", // Realistic photograph of black annealed construction binding wire coils
  },
  {
    name: "Oil Rods",
    description: "Industrial-grade rods engineered for specialized mechanical applications.",
    image: "/src/assets/hero-steel.jpg", // Industrial precision steel rods
  },
  {
    name: "Decoiling Services",
    description: "Precision coil straightening and cutting to custom length specifications.",
    image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800", // Industrial machinery for decoiling and straightening
  },
];

export const ProductShowcase = () => {
  return (
    <SectionContainer id="products">
      <div className="text-center mb-16">
        <ScrollReveal>
          <span className="text-ssc-gold text-eyebrow inline-block mb-4">Our Products</span>
          <h2 className="h2-fluid text-ssc-navy font-heading">Engineered for Excellence</h2>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 border border-white/20 h-full flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ssc-navy/0 group-hover:bg-ssc-navy/10 transition-colors duration-500" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading text-ssc-navy mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                
                <Link 
                  to="/products"
                  className="inline-flex items-center text-ssc-gold font-technical font-bold text-sm uppercase tracking-wider group/link"
                >
                  View Details
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
};
