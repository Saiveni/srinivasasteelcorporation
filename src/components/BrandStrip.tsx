import React from 'react';
import { motion } from 'framer-motion';

export const BrandStrip = () => {
  const brands = [
    { name: "Vizag Steel", logo: "VIZAG STEEL", subtitle: "MoU Dealer" },
    { name: "Jindal Panther", logo: "JINDAL PANTHER", subtitle: "TMT Rebars Dealer" },
    { name: "Simhadri TMT", logo: "SIMHADRI TMT", subtitle: "Supply Partner" }
  ];

  return (
    <section className="py-14 bg-white border-y border-ssc-navy/5 overflow-hidden">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-micro text-ssc-gold-dark uppercase mb-4 block">
            STRATEGIC PARTNERSHIPS
          </span>
          <h2 className="text-h3 text-ssc-navy uppercase">
            TRUSTED DEALER RELATIONSHIPS
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
              <div className="text-2xl lg:text-3xl font-body font-bold text-ssc-navy/60 group-hover:text-ssc-navy transition-colors duration-500 tracking-tighter uppercase mb-2">
                {brand.logo}
              </div>
              <div className="text-micro text-ssc-gold-dark uppercase">
                {brand.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};