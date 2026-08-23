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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 items-start justify-center">
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
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center text-center p-8 rounded-xl bg-ssc-steel-dark/30 border border-ssc-on-dark-primary/5 shadow-premium-soft hover:shadow-premium-medium hover:border-ssc-gold/20 transition-all duration-500"
            >
              {/* Premium Logo Container */}
              <div className="relative w-full h-32 flex items-center justify-center mb-6">
                {/* Subtle highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`}
                  className="max-w-[80%] max-h-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-body-large font-bold text-ssc-on-dark-primary tracking-tighter uppercase transition-colors duration-300 group-hover:text-ssc-gold">
                  {brand.name}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-ssc-gold/5 border border-ssc-gold/10">
                  <span className="text-[10px] font-bold text-ssc-gold uppercase tracking-widest">
                    {brand.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};