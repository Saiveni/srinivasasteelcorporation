import React from 'react';
import { motion, Variants } from 'framer-motion';
import rebarWarehouse from '@/assets/rebar-warehouse.jpg.asset.json';

const categories = ["STEEL", "TMT", "SUPPLY", "DECOILING"];

export const AboutHero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
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
        delay: 0.25 + (i * 0.12),
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const visualVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.04,
      clipPath: 'inset(0 100% 0 0)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      {/* SECTION 1 — PREMIUM OPENING */}
      <section className="relative bg-[#050A14] flex items-center overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-24">
        {/* Foundation Background — Engineering Grid + Gold Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />
          {/* Warm metallic glow */}
          <div className="absolute -top-40 right-[10%] w-[500px] h-[500px] rounded-full bg-ssc-gold/[0.05] blur-[120px]" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[300px] rounded-full bg-ssc-gold/[0.03] blur-[100px]" />
          {/* Brushed steel texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
          {/* Technical edge lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="container-wide relative z-10 w-full max-w-[1400px] mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          >

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-[52%] text-left">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-7">
                <div className="w-10 h-[1px] bg-ssc-gold" />
                <span className="text-ssc-gold text-[10px] lg:text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                  EST. 1994 • VIJAYAWADA, ANDHRA PRADESH
                </span>
              </motion.div>

              <div className="mb-8 overflow-hidden">
                <motion.h1
                  custom={0}
                  variants={headlineVariants}
                  className="text-[40px] xs:text-[48px] sm:text-[64px] lg:text-[76px] leading-[0.92] font-heading font-extrabold text-white uppercase tracking-tighter italic"
                >
                  SRINIVASA
                </motion.h1>
                <motion.h1
                  custom={1}
                  variants={headlineVariants}
                  className="text-[40px] xs:text-[48px] sm:text-[64px] lg:text-[76px] leading-[0.92] font-heading font-extrabold text-ssc-gold uppercase tracking-tighter italic"
                >
                  STEEL
                </motion.h1>
                <motion.h1
                  custom={2}
                  variants={headlineVariants}
                  className="text-[40px] xs:text-[48px] sm:text-[64px] lg:text-[76px] leading-[0.92] font-heading font-extrabold text-white uppercase tracking-tighter italic"
                >
                  CORPORATION
                </motion.h1>
              </div>

              {/* Category Strip — Technical Specification Row */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 pb-6 border-b border-white/10"
              >
                {categories.map((cat, i) => (
                  <div key={cat} className="flex items-center gap-5">
                    <span className="text-white/80 text-[12px] lg:text-[13px] font-technical font-bold tracking-[0.35em] uppercase">
                      {cat}
                    </span>
                    {i < categories.length - 1 && (
                      <span className="w-1 h-1 rounded-full bg-ssc-gold/70" />
                    )}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="max-w-xl">
                <p className="text-white/55 text-base lg:text-[17px] leading-relaxed font-medium mb-10">
                  An established steel supplier serving construction and industrial requirements with over three decades of engineering excellence — from TMT reinforcement to precision decoiling.
                </p>

                <div className="flex items-center gap-8 lg:gap-10">
                  <div className="flex flex-col">
                    <span className="text-white text-3xl lg:text-4xl font-heading font-bold italic tracking-tighter">30+</span>
                    <span className="text-ssc-gold/50 text-[9px] font-technical font-bold uppercase tracking-[0.3em] mt-1">Years Experience</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-white text-3xl lg:text-4xl font-heading font-bold italic tracking-tighter">3</span>
                    <span className="text-ssc-gold/50 text-[9px] font-technical font-bold uppercase tracking-[0.3em] mt-1">Regional Yards</span>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-ssc-gold text-3xl lg:text-4xl font-heading font-bold italic tracking-tighter">MoU</span>
                    <span className="text-ssc-gold/50 text-[9px] font-technical font-bold uppercase tracking-[0.3em] mt-1">Dealer Status</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="w-full lg:w-[48%] relative">
              <motion.div
                variants={visualVariants}
                className="relative aspect-[4/3] lg:aspect-[1.15/1] rounded-[24px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/10"
              >
                <img
                  src={rebarWarehouse.url}
                  alt="Srinivasa Steel Corporation industrial steel warehouse with stacked TMT reinforcement bars"
                  className="w-full h-full object-cover contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14]/70 via-transparent to-[#050A14]/20 z-10" />

                {/* Machined EST Badge */}
                <div className="absolute top-5 left-5 z-30 flex items-center gap-3 bg-[#0A111F]/80 backdrop-blur-md border border-ssc-gold/30 rounded-full px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ssc-gold animate-pulse" />
                  <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.35em] uppercase">
                    EST. 1994
                  </span>
                </div>

                {/* Spec Chip */}
                <div className="absolute bottom-5 right-5 z-30 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-ssc-gold" />
                  <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.4em] uppercase">
                    SYS-VERIFIED-SPEC
                  </span>
                </div>
              </motion.div>

              {/* Floating depth shadow plate */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[24px] border border-ssc-gold/10 -z-10 hidden lg:block" />
            </div>
          </motion.div>
        </div>

        {/* Curve Transition into Company Story */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] lg:h-[60px] fill-[#F7F7F4]">
            <path d="M0,120 C300,100 900,100 1200,120 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — COMPANY STORY */}
      <section id="company-story" className="relative py-20 lg:py-28 bg-[#F7F7F4] overflow-hidden">
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
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-24 items-start">
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
