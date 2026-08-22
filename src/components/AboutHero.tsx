import React from 'react';
import { motion, Variants } from 'framer-motion';
import rebarWarehouse from '@/assets/rebar-warehouse.jpg.asset.json';

export const AboutHero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const headlineVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.9, 
        delay: 0.3 + (i * 0.15),
        ease: [0.16, 1, 0.3, 1] 
      }
    })
  };

  const visualVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 1.05,
      clipPath: 'inset(0 100% 0 0)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0 0% 0 0)',
      transition: { 
        duration: 1.2, 
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <>
      <section className="relative min-h-[70vh] lg:min-h-[85vh] bg-[#0A111F] flex items-center overflow-hidden pt-24 lg:pt-32 pb-12 lg:pb-16">
        {/* Foundation Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }} 
          />
        </div>

        <div className="container-wide relative z-10 w-full max-w-[1400px] mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24"
          >
            
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[46%] text-left">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <span className="text-ssc-gold text-[10px] lg:text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                  EST. 1994 • INDUSTRIAL EXCELLENCE
                </span>
              </motion.div>

              <div className="mb-8 lg:mb-10 overflow-hidden">
                <motion.h1 
                  custom={0}
                  variants={headlineVariants}
                  className="text-[42px] xs:text-[52px] sm:text-[68px] lg:text-[84px] leading-[0.9] font-heading font-extrabold text-white uppercase tracking-tighter italic mb-2"
                >
                  BUILT ON
                </motion.h1>
                <motion.h1 
                  custom={1}
                  variants={headlineVariants}
                  className="text-[42px] xs:text-[52px] sm:text-[68px] lg:text-[84px] leading-[0.9] font-heading font-extrabold text-ssc-gold uppercase tracking-tighter italic"
                >
                  STEEL.
                </motion.h1>
              </div>

              <motion.div variants={itemVariants} className="max-w-xl">
                <p className="text-white/60 text-base lg:text-[18px] leading-relaxed font-medium mb-10">
                  Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements with over three decades of engineering excellence.
                </p>
                
                <div className="flex items-center gap-10">
                  <div className="flex flex-col">
                    <span className="text-white text-3xl lg:text-4xl font-heading font-bold italic tracking-tighter">30+</span>
                    <span className="text-ssc-gold/40 text-[9px] font-technical font-bold uppercase tracking-[0.3em] mt-1">Years Experience</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-ssc-gold text-3xl lg:text-4xl font-heading font-bold italic tracking-tighter">SPEC</span>
                    <span className="text-ssc-gold/40 text-[9px] font-technical font-bold uppercase tracking-[0.3em] mt-1">550D Standards</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="w-full lg:w-[54%] relative">
              <motion.div
                variants={visualVariants}
                className="relative aspect-[4/3] lg:aspect-[1.3/1] rounded-[24px] overflow-hidden shadow-2xl border border-white/5"
              >
                <img 
                  src={rebarWarehouse.url} 
                  alt="Industrial Steel Warehouse"
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F]/60 via-transparent to-transparent z-10" />
                
                <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-ssc-gold" />
                  <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.4em] uppercase">
                    SYS-VERIFIED-SPEC
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] lg:h-[60px] fill-[#F7F7F4]">
            <path d="M0,120 C300,100 900,100 1200,120 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — COMPANY STORY */}
      <section id="company-story" className="relative py-24 lg:py-32 bg-[#F7F7F4] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #0B1B33 1px, transparent 1px), linear-gradient(to bottom, #0B1B33 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} 
          />
        </div>

        <div className="container-wide relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-ssc-gold" />
                <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                  Our Company
                </span>
              </div>
              <h2 className="text-[38px] lg:text-[64px] text-ssc-navy font-heading font-extrabold tracking-tighter uppercase italic leading-[0.9]">
                A LEGACY BUILT ON <span className="text-ssc-gold">PRECISION.</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="max-w-xl">
                <p className="text-ssc-navy/70 text-base lg:text-lg leading-relaxed font-medium mb-12">
                  Since our inception, Srinivasa Steel Corporation has been at the forefront of the steel industry, bridging the gap between quality manufacturing and reliable construction supply. Our journey is defined by a commitment to excellence, technological adoption in decoiling, and fostering long-term partnerships with India's leading steel producers.
                </p>
                
                <div className="grid grid-cols-2 gap-10 pt-10 border-t border-ssc-navy/5">
                  <div>
                    <span className="text-ssc-navy text-3xl lg:text-4xl font-heading font-bold italic tracking-tighter">100k+</span>
                    <span className="text-ssc-gold/60 text-[9px] font-technical font-bold uppercase tracking-[0.3em] block mt-2">Tons Delivered</span>
                  </div>
                  <div>
                    <span className="text-ssc-navy text-3xl lg:text-4xl font-heading font-bold italic tracking-tighter">500+</span>
                    <span className="text-ssc-gold/60 text-[9px] font-technical font-bold uppercase tracking-[0.3em] block mt-2">Major Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};