import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    index: "01",
    name: "TMT Rebars",
    description: "Premium grade thermo-mechanically treated steel bars engineered for superior structural integrity.",
    image: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?auto=format&fit=crop&q=80&w=800",
    alt: "Premium industrial photography of bundled ribbed TMT reinforcement steel bars"
  },
  {
    index: "02",
    name: "Binding Wire",
    description: "High-tensile annealed wire coils designed for precise and secure reinforcement anchoring.",
    image: "https://images.unsplash.com/photo-1533035350221-afc0331c4b78?auto=format&fit=crop&q=80&w=800",
    alt: "Macro industrial view of high-quality annealed steel binding wire coils"
  },
  {
    index: "03",
    name: "Oil Rods",
    description: "Precision-engineered industrial steel rods optimized for specialized mechanical and structural applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    alt: "Precision industrial steel rods and machined components"
  },
  {
    index: "04",
    name: "Decoiling Services",
    description: "Advanced industrial steel coil processing, straightening and precision cutting to custom specifications.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    alt: "Professional industrial steel decoiling and coil processing facility"
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white rounded-[22px] border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.alt}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ssc-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-technical font-bold text-ssc-gold uppercase tracking-widest">
            {product.index} / MATERIAL
          </span>
        </div>
        
        <h3 className="text-xl font-heading font-semibold text-ssc-navy mb-3 group-hover:text-ssc-gold transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-[#64748B] text-sm leading-relaxed mb-6 line-clamp-2">
          {product.description}
        </p>

        <a 
          href={`#${product.name.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center gap-2 text-[12px] font-technical font-bold text-ssc-navy uppercase tracking-wider group/link"
        >
          View Details
          <ArrowRight className="w-4 h-4 text-ssc-gold transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#F4F6F8] overflow-hidden">
      {/* Architectural Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #111C2F 1px, transparent 1px),
            linear-gradient(to bottom, #111C2F 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-end text-right border-l border-black/10 pl-10"
          >
            <span className="text-[11px] font-technical uppercase tracking-[0.2em] text-[#A0AEC0] mb-2">SSC / Material Catalogue</span>
            <span className="text-[11px] font-technical uppercase tracking-[0.2em] text-[#A0AEC0] mb-2">Est. 1994</span>
            <span className="text-[11px] font-technical uppercase tracking-[0.2em] text-ssc-gold/60 font-bold">Industrial Supply</span>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
