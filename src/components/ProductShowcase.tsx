import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const products = [
  {
    index: "01",
    name: "TMT Rebars",
    description: "Premium bundles of ribbed TMT reinforcement steel bars. Available in 5mm, 5.5mm, and 6mm TMT specifications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    alt: "Bundles of high-quality ribbed TMT reinforcement bars in a professional steel yard"
  },
  {
    index: "02",
    name: "Wire Products",
    description: "Industrial grade steel wire and binding wire coils designed for precise reinforcement anchoring.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    alt: "High-quality industrial steel wire and binding wire coils"
  },
  {
    index: "03",
    name: "Oil Rods",
    description: "High-performance steel oil rods engineered for specialized industrial and mechanical applications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    alt: "Professional grade industrial steel rods"
  },
  {
    index: "04",
    name: "Decoiled Steel",
    description: "Precision steel coil processing (2mm–4.5mm), straightening and cut-to-length services (10–40 feet).",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    alt: "Industrial steel decoiling machine processing a large steel coil"
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-[20px] border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
    >
      {/* Image Area */}
      <div className="aspect-[4/3] overflow-hidden relative bg-[#F8FAFC]">
        <img 
          src={product.image} 
          alt={product.alt}
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="p-7 lg:p-8">
        {/* Product Number */}
        <div className="mb-4">
          <span className="text-[11px] font-technical font-bold text-ssc-gold tracking-[0.2em]">
            {product.index}
          </span>
        </div>
        
        {/* Title */}
        <div className="flex gap-4 items-start mb-4">
          <div className="w-[1px] h-6 bg-ssc-gold/40 mt-1 flex-shrink-0" />
          <h3 className="text-[22px] lg:text-[26px] font-heading font-medium text-ssc-navy leading-tight tracking-tight">
            {product.name}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-[#64748B] text-[15px] leading-relaxed mb-8 line-clamp-2 font-[450]">
          {product.description}
        </p>

        {/* View Details */}
        <Link 
          to="/products"
          className="inline-flex items-center gap-2 text-[10px] font-technical font-bold text-ssc-gold uppercase tracking-[0.25em] group/link"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover/link:translate-x-[5px]" />
        </Link>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#F4F6F8] overflow-hidden">
      {/* Architectural Background Grid */}
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

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-[620px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-ssc-gold text-[12px] lg:text-[13px] font-technical font-bold uppercase tracking-[0.25em] mb-4 block">
                CATALOGUE
              </span>
              <h2 className="text-[38px] lg:text-[56px] text-ssc-navy font-heading leading-[1.1] mb-6 font-[500] tracking-tight uppercase">
                Steel Products
              </h2>
              <p className="text-[#4A5568] text-base lg:text-lg leading-relaxed font-[450]">
                QUALITY MATERIAL FOR CONSTRUCTION & INDUSTRIAL REQUIREMENTS
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
            <span className="text-[11px] font-technical uppercase tracking-[0.2em] text-[#A0AEC0] mb-2">SSC / PRODUCT SPECIFICATIONS</span>
            <span className="text-[11px] font-technical uppercase tracking-[0.2em] text-ssc-gold/60 font-bold">EST. 1994</span>
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