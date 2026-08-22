import React from 'react';
import { motion, Variants } from 'framer-motion';
import rebarWarehouse from '@/assets/rebar-warehouse.jpg.asset.json';

export const AboutHero = () => {
  // Animation variants with explicit types to satisfy TS
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

  const techDetailVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 1.2 }
    }
  };

  return (
    <>
      <section className="relative min-h-[70vh] lg:min-h-[85vh] bg-[#0A111F] flex items-center overflow-hidden pt-24 lg:pt-32 pb-12 lg:pb-16">
        {/* Sophisticated Industrial Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle Engineering Grid */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} 
          />
          
          {/* Extremely subtle metallic texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
          
          {/* Very faint technical lines */}
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/[0.03]" />
          <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white/[0.03]" />
        </div>

        <div className="container-wide relative z-10 w-full">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          >
            
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[46%] text-left">
              {/* 2. Small eyebrow text */}
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <span className="text-ssc-gold text-[10px] lg:text-[11px] font-technical font-bold tracking-[0.4em] uppercase">
                  EST. 1994 • STEEL • TMT • SUPPLY • DECOILING
                </span>
              </motion.div>

              {/* 3. Main headline line by line */}
              <div className="mb-8 lg:mb-10 overflow-hidden">
                <motion.h1 
                  custom={0}
                  variants={headlineVariants}
                  className="text-[42px] xs:text-[52px] sm:text-[68px] lg:text-[84px] leading-[1] font-heading font-extrabold text-white uppercase tracking-tight mb-2"
                >
                  BUILT ON
                </motion.h1>
                <motion.h1 
                  custom={1}
                  variants={headlineVariants}
                  className="text-[42px] xs:text-[52px] sm:text-[68px] lg:text-[84px] leading-[1] font-heading font-extrabold text-ssc-gold uppercase tracking-tight mb-2"
                >
                  STEEL.
                </motion.h1>
                <motion.h1 
                  custom={2}
                  variants={headlineVariants}
                  className="text-[42px] xs:text-[52px] sm:text-[68px] lg:text-[84px] leading-[1] font-heading font-extrabold text-white uppercase tracking-tight mb-2"
                >
                  BUILT ON
                </motion.h1>
                <motion.h1 
                  custom={3}
                  variants={headlineVariants}
                  className="text-[42px] xs:text-[52px] sm:text-[68px] lg:text-[84px] leading-[1] font-heading font-extrabold text-ssc-gold uppercase tracking-tight"
                >
                  TRUST.
                </motion.h1>
              </div>

              {/* 4. Supporting paragraph */}
              <motion.div variants={itemVariants} className="max-w-xl">
                <p className="text-white/70 text-base lg:text-[17px] leading-relaxed font-medium mb-10">
                  Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements with over three decades of engineering excellence. We specialize in high-grade TMT reinforcement steel and precision decoiling services, providing the structural foundation for major infrastructure projects.
                </p>
                
                <div className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-white text-2xl lg:text-3xl font-heading font-bold">30+</span>
                    <span className="text-white/40 text-[9px] font-technical font-bold uppercase tracking-[0.2em]">Years Experience</span>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-white text-2xl lg:text-3xl font-heading font-bold uppercase tracking-tight italic text-ssc-gold">Quality</span>
                    <span className="text-white/40 text-[9px] font-technical font-bold uppercase tracking-[0.2em]">Core Standard</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="w-full lg:w-[54%] relative">
              {/* 5. Steel image/visual reveals with a masked slide */}
              <motion.div
                variants={visualVariants}
                className="relative aspect-[4/3] lg:aspect-[1.3/1] rounded-[20px] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10"
              >
                <img 
                  src={rebarWarehouse.url} 
                  alt="Premium TMT Reinforcement Steel Visualization"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A111F]/60 via-transparent to-white/5 mix-blend-overlay z-10" />
                
                {/* 6. Small technical details */}
                <motion.div 
                  variants={techDetailVariants}
                  className="absolute bottom-6 right-6 z-30 flex items-center gap-3"
                >
                  <div className="w-8 h-[1px] bg-ssc-gold" />
                  <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.3em] uppercase">
                    INDUSTRIAL SPECIFICATION 550D
                  </span>
                </motion.div>
              </motion.div>
            </div>

          </motion.div>
        </div>

        {/* Subtle architectural curve transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] lg:h-[60px] fill-[#F7F7F4]">
            <path d="M0,120 C300,100 900,100 1200,120 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — COMPANY STORY (Lighter Industrial) */}
      <section className="relative py-20 lg:py-24 bg-[#F7F7F4] overflow-hidden">
        {/* Blueprint background texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: 'linear-gradient(to right, #0B1B33 1px, transparent 1px), linear-gradient(to bottom, #0B1B33 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} 
          />
          {/* Technical measurement lines */}
          <div className="absolute top-10 left-10 w-[2px] h-[100px] bg-ssc-navy" />
          <div className="absolute top-10 left-10 w-[100px] h-[2px] bg-ssc-navy" />
        </div>

        <div className="container-wide relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <span className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.3em] uppercase mb-4 block">Our Foundation</span>
              <h2 className="text-[32px] lg:text-[56px] text-ssc-navy font-heading font-extrabold tracking-tighter uppercase mb-8 leading-[1.1]">
                A LEGACY BUILT ON <span className="text-ssc-gold">PRECISION</span> AND TRUST.
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="max-w-xl">
                <p className="text-ssc-navy/70 text-base lg:text-lg leading-relaxed font-medium mb-8">
                  Since our inception, Srinivasa Steel Corporation has been at the forefront of the steel industry, bridging the gap between quality manufacturing and reliable construction supply. Our journey is defined by a commitment to excellence, technological adoption in decoiling, and fostering long-term partnerships with India's leading steel producers.
                </p>
                
                <div className="grid grid-cols-2 gap-8 border-t border-ssc-navy/10 pt-8">
                  <div>
                    <span className="text-ssc-navy text-2xl lg:text-3xl font-heading font-bold block mb-1">100k+</span>
                    <span className="text-ssc-navy/40 text-[9px] font-technical font-bold uppercase tracking-[0.2em]">Tons Delivered</span>
                  </div>
                  <div>
                    <span className="text-ssc-navy text-2xl lg:text-3xl font-heading font-bold block mb-1">500+</span>
                    <span className="text-ssc-navy/40 text-[9px] font-technical font-bold uppercase tracking-[0.2em]">Major Projects</span>
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