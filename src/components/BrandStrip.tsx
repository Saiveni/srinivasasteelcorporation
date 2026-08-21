import React from 'react';
import { motion } from 'framer-motion';

export const BrandStrip = () => {
  const brands = [
    { name: "Vizag Steel", logo: "VIZAG STEEL", subtitle: "MoU Dealer" },
    { name: "Jindal Panther", logo: "JINDAL PANTHER", subtitle: "TMT Rebars Dealer" },
    { name: "Simhadri TMT", logo: "SIMHADRI TMT", subtitle: "Supply Partner" }
  ];

  return (
    <section className="py-24 bg-white border-y border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ssc-gold text-[11px] font-technical font-bold tracking-[0.4em] uppercase mb-4 block">
            Dealer & MoU Supply Relationships
          </span>
          <h2 className="text-[28px] lg:text-[32px] text-ssc-navy font-heading font-medium tracking-tight uppercase">
            Brands We Supply
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-32">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="text-2xl lg:text-3xl font-heading font-bold text-ssc-navy/60 group-hover:text-ssc-navy transition-colors duration-500 tracking-tighter uppercase mb-2">
                {brand.logo}
              </div>
              <div className="text-[9px] font-technical font-bold text-ssc-gold/60 tracking-[0.2em] uppercase">
                {brand.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};