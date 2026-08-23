import React from 'react';
import { motion } from 'framer-motion';
import timelineRebar from '@/assets/timeline-rebar.png.asset.json';

const milestones = [
  {
    year: "1994",
    title: "ESTABLISHED",
    description: "Founded Srinivasa Steel Corporation in Hyderabad.",
    zone: "REGION 01",
    spec: "FOUNDATION-PHASE"
  },
  {
    year: "2000s",
    title: "EXPANDED TO VIZAG",
    description: "Expanded operations to Visakhapatnam steel market.",
    zone: "REGION 02",
    spec: "MARKET-EXPANSION"
  },
  {
    year: "2010s",
    title: "MOU DEALER STATUS",
    description: "Became MoU Dealer for Vizag Steel Plant.",
    zone: "REGION 02",
    spec: "PARTNERSHIP-LOCK"
  },
  {
    year: "TODAY",
    title: "3 LOCATIONS, 30+ YEARS",
    description: "3 locations. 30+ years of trust. Thousands of tons delivered.",
    zone: "NATIONAL-NETWORK",
    spec: "ACTIVE-OPERATIONS"
  }
];

const SteelRod = ({ orientation = 'vertical' }: { orientation?: 'vertical' | 'horizontal' }) => {
  if (orientation === 'horizontal') {
    return (
      <div className="absolute top-0 left-0 w-full h-[18px] flex items-center">
        {/* The Rebar Body */}
        <div className="w-full h-[12px] bg-[#2A2D35] relative overflow-hidden rounded-full border-y border-white/10 shadow-2xl">
          {/* Rips/Texture */}
          <div className="absolute inset-0 opacity-40" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 12px)',
                 backgroundSize: '20px 100%'
               }} 
          />
          {/* Steel Sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[28px] h-full flex justify-center">
      {/* Silver Machined Rebar from Reference */}
      <div className="w-[20px] h-full relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <img 
          src={timelineRebar.url} 
          alt="" 
          className="w-full h-full object-cover brightness-[1.2] contrast-[1.1]"
        />
        {/* Metallic Sheen Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/40 mix-blend-overlay" />
      </div>
    </div>
  );
};

const ClampHook = ({ position, orientation, delay, cardData }: any) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div 
      className="absolute z-20"
      style={{ 
        left: isHorizontal ? position : '50%',
        top: isHorizontal ? '50%' : position,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, type: 'spring' }}
        className="relative"
      >
        {/* Machined Metal Clamp */}
        <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#1A1D25] border-2 border-ssc-gold shadow-[0_0_15px_rgba(197,160,89,0.3)] flex items-center justify-center">
          <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-ssc-gold animate-pulse" />
        </div>
        
        {/* Connecting Arm/Hook */}
        <div className={`absolute bg-gradient-to-r from-ssc-gold to-ssc-gold/20 shadow-lg ${
          isHorizontal ? 'w-[2px] h-16 top-full left-1/2 -translate-x-1/2' : 'h-[2px] w-12 top-1/2 left-full'
        }`} />

        {/* The Card */}
        <div className={`absolute ${
          isHorizontal ? 'top-20 left-1/2 -translate-x-1/2' : 'left-24 top-1/2 -translate-y-1/2'
        }`}>
          <motion.div
            initial={{ opacity: 0, x: isHorizontal ? 0 : 20, y: isHorizontal ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, duration: 0.6 }}
            className="w-[280px] bg-[#0C121E] border border-white/10 p-6 rounded-2xl shadow-2xl relative group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-ssc-gold opacity-30 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.25em] uppercase">
                {cardData.year}
              </span>
              <span className="text-white/20 text-[8px] font-technical font-bold tracking-widest">
                {cardData.spec}
              </span>
            </div>
            
            <h4 className="text-white font-heading font-black italic text-xl mb-2 tracking-tight uppercase">
              {cardData.title}
            </h4>
            
            <p className="text-white/50 text-[13px] leading-relaxed font-medium italic">
              {cardData.description}
            </p>
            
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-ssc-gold/40 text-[8px] font-technical font-black tracking-widest uppercase">
                {cardData.zone}
              </span>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-ssc-gold/20" />
                <div className="w-1 h-1 rounded-full bg-ssc-gold/20" />
                <div className="w-1 h-1 rounded-full bg-ssc-gold/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const SteelTimeline = () => {
  return (
    <section id="timeline" className="relative py-12 lg:py-20 bg-[#080E1A] overflow-hidden">
      {/* Background System */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '100px 100px' 
             }} />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-gold/20 to-transparent" />
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
              <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                Corporate Evolution
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
            </div>
            <h2 className="text-[42px] lg:text-[72px] text-white font-heading font-extrabold tracking-tighter uppercase italic leading-[0.85]">
              COMPANY <span className="text-ssc-gold">LEGACY</span>
            </h2>
          </motion.div>
        </div>

        {/* Desktop Version - Horizontal Rod */}
        <div className="hidden lg:block relative h-[600px] mt-20">
          <SteelRod orientation="horizontal" />
          <ClampHook position="10%" orientation="horizontal" delay={0.5} cardData={milestones[0]} />
          <ClampHook position="36%" orientation="horizontal" delay={0.8} cardData={milestones[1]} />
          <ClampHook position="62%" orientation="horizontal" delay={1.1} cardData={milestones[2]} />
          <ClampHook position="88%" orientation="horizontal" delay={1.4} cardData={milestones[3]} />
        </div>

        {/* Mobile Version - Vertical Rod on Left */}
        <div className="lg:hidden relative flex min-h-[1000px] pt-10">
          {/* Vertical Spine on Left */}
          <div className="absolute left-2 top-0 bottom-0">
            <SteelRod orientation="vertical" />
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-24 ml-12 w-full">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative flex items-center h-[180px]">
                {/* Connecting Clamp & Arm for Mobile */}
                <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-20 flex items-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    className="w-6 h-6 rounded-full bg-[#1A1D25] border-2 border-ssc-gold shadow-[0_0_10px_rgba(197,160,89,0.3)] flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold" />
                  </motion.div>
                  {/* Hook arm */}
                  <div className="w-6 h-[2px] bg-gradient-to-r from-ssc-gold to-ssc-gold/20" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.2, duration: 0.6 }}
                  className="w-full max-w-[300px] bg-[#0C121E] border border-white/10 p-5 rounded-xl shadow-2xl relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-ssc-gold text-[8px] font-technical font-bold tracking-[0.2em] uppercase">
                      {ms.year}
                    </span>
                  </div>
                  <h4 className="text-white font-heading font-black italic text-lg mb-2 tracking-tight uppercase">
                    {ms.title}
                  </h4>
                  <p className="text-white/50 text-[12px] leading-relaxed font-medium italic">
                    {ms.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};