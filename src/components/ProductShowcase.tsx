import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const products = [
  {
    index: "01",
    name: "TMT Rebars",
    description: "Premium grade thermo-mechanically treated steel bars engineered for superior structural integrity.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
    alt: "Premium ribbed TMT reinforcement steel bars close-up in an organized industrial environment"
  },
  {
    index: "02",
    name: "Binding Wire",
    description: "High-tensile annealed wire coils designed for precise and secure reinforcement anchoring.",
    image: "https://images.unsplash.com/photo-1533035350221-afc0331c4b78?auto=format&fit=crop&q=80&w=1000",
    alt: "Macro industrial view of high-quality annealed steel binding wire coils"
  },
  {
    index: "03",
    name: "Oil Rods",
    description: "Precision-engineered industrial steel rods optimized for specialized mechanical and structural applications.",
    image: "https://images.unsplash.com/photo-1563285797-47671181f440?auto=format&fit=crop&q=80&w=1000",
    alt: "Bundles of precision cylindrical industrial steel rods in a high-end manufacturing environment"
  },
  {
    index: "04",
    name: "Decoiling Services",
    description: "Advanced industrial steel coil processing, straightening and precision cutting to custom specifications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000",
    alt: "Professional industrial steel decoiling machinery processing high-grade metal coils"
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="group relative flex flex-col bg-white border border-[#0F1E32]/10 rounded-[20px] overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1.5"
    >
      {/* Image Container */}
      <div className="relative h-[220px] sm:h-[240px] lg:h-[300px] overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.alt}
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />
        {/* Architectural Overlay */}
        <div className="absolute inset-0 bg-ssc-navy/0 group-hover:bg-ssc-navy/5 transition-colors duration-500" />
      </div>

      {/* Card Content */}
      <div className="p-6 lg:p-8 flex flex-col flex-grow">
        <div className="text-[10px] font-technical tracking-[0.2em] text-ssc-gold mb-3 uppercase font-bold">
          {product.index} / MATERIAL
        </div>
        <h3 className="text-xl lg:text-2xl font-heading text-ssc-navy mb-3 font-[600] tracking-tight">
          {product.name}
        </h3>
        <p className="text-[#4A5568] text-[13px] lg:text-[14px] leading-relaxed mb-6 flex-grow font-[450]">
          {product.description}
        </p>
        
        <Link 
          to="/products"
          className="inline-flex items-center text-ssc-gold font-technical font-bold text-[12px] uppercase tracking-[0.15em] group/link w-fit"
        >
          View Details
          <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export const ProductShowcase = () => {
  return (
    <section id="products" className="relative py-24 lg:py-32 bg-[#F4F6F8] overflow-hidden">
      {/* Engineering Background Details */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #111C2F 1px, transparent 1px), linear-gradient(to bottom, #111C2F 1px, transparent 1px)',
             backgroundSize: '120px 120px'
           }} 
      />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#111C2F]/[0.03] hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#111C2F]/[0.03] hidden lg:block" />

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-[620px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-ssc-gold text-[12px] lg:text-[13px] font-technical font-bold uppercase tracking-[0.25em] mb-4 block">
                OUR PRODUCTS
              </span>
              <h2 className="text-[38px] lg:text-[56px] text-ssc-navy font-heading leading-[1.1] mb-6 font-[500] tracking-tight">
                Engineered for <br className="hidden lg:block" /> Excellence.
              </h2>
              <p className="text-[#4A5568] text-base lg:text-lg leading-relaxed font-[450]">
                From high-grade TMT reinforcement steel to precision industrial supplies, 
                we provide materials engineered for strength, consistency and dependable performance.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-end text-right border-r border-ssc-gold/20 pr-6 mb-2"
          >
            <span className="text-[9px] text-ssc-navy/30 font-technical font-bold tracking-[0.2em] uppercase mb-1">
              SSC / MATERIAL CATALOGUE
            </span>
            <span className="text-[9px] text-ssc-navy/30 font-technical font-bold tracking-[0.2em] uppercase mb-1">
              EST. 1994
            </span>
            <span className="text-[9px] text-ssc-navy/30 font-technical font-bold tracking-[0.2em] uppercase">
              INDUSTRIAL SUPPLY
            </span>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};