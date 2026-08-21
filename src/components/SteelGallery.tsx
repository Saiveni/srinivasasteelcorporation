import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    category: "TMT REBARS",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    title: "TMT Reinforcement Steel"
  },
  {
    category: "STEEL COILS",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    title: "Hot Rolled Steel Coils"
  },
  {
    category: "WIRE PRODUCTS",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    title: "Industrial Wire Bundles"
  },
  {
    category: "OIL RODS",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    title: "Precision Oil Rods"
  },
  {
    category: "DECOILING",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    title: "Professional Decoiling Line"
  },
  {
    category: "STEEL STOCKYARD",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop",
    title: "Regional Distribution Yard"
  },
  {
    category: "STEEL LOADING",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    title: "Logistics and Despatch"
  },
  {
    category: "STEEL DISTRIBUTION",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop",
    title: "Fleet Distribution Network"
  }
];

export const SteelGallery = () => {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", ...Array.from(new Set(galleryItems.map(item => item.category)))];

  const filteredItems = filter === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#F4F6F8]">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="text-center mb-16">
          <span className="text-ssc-gold text-[11px] font-technical font-bold tracking-[0.4em] uppercase mb-4 block">
            Visual Documentation
          </span>
          <h2 className="text-[38px] text-ssc-navy font-heading font-medium tracking-tight uppercase">
            Steel Gallery
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-[10px] font-technical font-bold tracking-widest uppercase transition-all duration-300 border rounded-full ${
                filter === cat 
                ? "bg-ssc-navy text-white border-ssc-navy" 
                : "bg-transparent text-ssc-navy/50 border-black/10 hover:border-ssc-gold hover:text-ssc-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-md"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-widest uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-heading font-medium leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};