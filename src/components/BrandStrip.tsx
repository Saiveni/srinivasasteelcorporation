import React from 'react';
import { motion } from 'framer-motion';

export const BrandStrip = () => {
  const brands = [
    { 
      name: "VIZAG STEEL", 
      logo: "/images/partners/vizag-steel-logo.svg", 
      subtitle: "MOU DEALER" 
    },
    { 
      name: "JINDAL PANTHER", 
      logo: "/images/partners/jindal-panther-logo.svg", 
      subtitle: "TMT REBARS DEALER" 
    },
    { 
      name: "SIMHADRI TMT", 
      logo: "/images/partners/simhadri-tmt-logo.svg", 
      subtitle: "SUPPLY PARTNER" 
    }
  ];

  return (
    <section className="section-padding bg-ssc-navy border-y border-ssc-gold/10 overflow-hidden relative">
      {/* Subtle industrial background effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
      
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-micro text-ssc-gold uppercase mb-4 block tracking-[0.2em]">
            STRATEGIC PARTNERSHIPS
          </span>
          <h2 className="text-h3 text-ssc-on-dark-primary uppercase tracking-tight">
            TRUSTED DEALER RELATIONSHIPS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch justify-center">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center text-center p-6 md:p-7 rounded-xl bg-ssc-steel-dark/40 border border-ssc-on-dark-primary/10 shadow-premium-soft hover:shadow-premium-medium hover:border-ssc-gold/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle metallic sheen on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* 2. LOGOS — Substantial display size */}
              <div className="relative w-full h-32 sm:h-36 md:h-40 flex items-center justify-center mb-5">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`}
                  className="w-full h-full object-contain filter brightness-110 drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* 3. PARTNER NAME — Strong Title */}
              <h3 className="text-body-large font-bold text-ssc-on-dark-primary tracking-tight uppercase mb-2 transition-colors duration-300 group-hover:text-ssc-gold">
                {brand.name}
              </h3>

              {/* 4. PARTNERSHIP TYPE — Gold accent label */}
              <div className="inline-block px-3 py-1 rounded-full bg-ssc-gold/5 border border-ssc-gold/10">
                <span className="text-[10px] font-bold text-ssc-gold uppercase tracking-[0.15em]">
                  {brand.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};