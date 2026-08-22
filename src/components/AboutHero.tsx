import React from 'react';
import { motion } from 'framer-motion';
import rebarWarehouse from '@/assets/rebar-warehouse.jpg.asset.json';

export const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] bg-[#050A14] flex items-center overflow-hidden pt-20 lg:pt-32">
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      {/* Decorative Technical Linework */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-24 h-[1px] bg-ssc-gold/20" />
        <div className="absolute top-[20%] right-[10%] w-[1px] h-32 bg-ssc-gold/10" />
      </div>

      <div className="container-wide relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[46%]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6 lg:mb-8">
                <span className="text-ssc-gold text-[10px] lg:text-[11px] font-technical font-bold tracking-[0.4em] uppercase">
                  EST. 1994 • STEEL • TMT • SUPPLY • DECOILING
                </span>
              </div>

              <h1 className="text-[44px] xs:text-[56px] sm:text-[72px] lg:text-[92px] leading-[0.95] font-heading font-extrabold text-white uppercase tracking-tighter mb-8 lg:mb-12 italic">
                BUILT ON <span className="text-ssc-gold">STEEL.</span><br />
                BUILT ON <span className="text-ssc-gold">TRUST.</span>
              </h1>

              <div className="max-w-xl">
                <p className="text-white/70 text-base lg:text-[18px] leading-relaxed font-medium mb-8">
                  Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements with over three decades of engineering excellence. We specialize in high-grade TMT reinforcement steel and precision decoiling services, providing the structural foundation for major infrastructure projects across the region.
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-white text-2xl lg:text-3xl font-heading font-bold">30+</span>
                    <span className="text-white/40 text-[10px] font-technical font-bold uppercase tracking-widest">Years Experience</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-white text-2xl lg:text-3xl font-heading font-bold italic uppercase">Trust</span>
                    <span className="text-white/40 text-[10px] font-technical font-bold uppercase tracking-widest">Core Value</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="w-full lg:w-[54%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] lg:aspect-[1.4/1] rounded-[24px] overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
            >
              {/* Metallic Border Overlay */}
              <div className="absolute inset-0 border border-white/10 rounded-[24px] z-20 pointer-events-none" />
              
              {/* Image with subtle zoom effect */}
              <img 
                src={rebarWarehouse.url} 
                alt="Industrial Steel Warehouse Atmosphere"
                className="w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
              />

              {/* Gradient Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-ssc-navy/40 via-transparent to-white/5 mix-blend-overlay z-10" />
              
              {/* Technical Detail: Precision corner */}
              <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
                <div className="w-12 h-[1px] bg-ssc-gold" />
                <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.2em] uppercase">
                  ARCHITECTURAL GRADE
                </span>
              </div>
            </motion.div>

            {/* Floating Steel Texture Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0c0f13] border border-ssc-gold/20 rounded-2xl z-20 hidden lg:flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
              <div className="text-center">
                <span className="text-ssc-gold text-[10px] font-technical font-bold block mb-1">TMT</span>
                <span className="text-white/40 text-[8px] font-technical font-bold uppercase tracking-[0.2em]">SPEC 550D</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Concave architectural curve transition to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] lg:h-[100px] fill-[#050A14]">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
