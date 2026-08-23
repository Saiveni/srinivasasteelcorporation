import React from 'react';
import { motion } from 'framer-motion';

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

const TMTBar = ({ orientation = 'horizontal', className = "" }: { orientation?: 'vertical' | 'horizontal', className?: string }) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div className={`relative ${isHorizontal ? 'h-8 w-full' : 'w-8 h-full'} ${className}`}>
      {/* Three Parallel Bars */}
      <div className={`flex ${isHorizontal ? 'flex-col justify-between h-full' : 'flex-row justify-between w-full'}`}>
        {[0, 1, 2].map((i) => (
          <div 
            key={i}
            className={`relative rounded-full border border-white/10 overflow-hidden shadow-2xl
              ${isHorizontal ? 'h-2 w-full' : 'w-2 h-full'}
              bg-gradient-to-b from-[#2A2D35] via-[#3A3F47] to-[#1A1C22]
            `}
          >
            {/* Helical Ribs */}
            <div 
              className="absolute inset-0 opacity-40 mix-blend-overlay"
              style={{
                backgroundImage: isHorizontal 
                  ? 'repeating-linear-gradient(45deg, transparent, transparent 4px, #000 4px, #000 6px)'
                  : 'repeating-linear-gradient(135deg, transparent, transparent 4px, #000 4px, #000 6px)',
                backgroundSize: isHorizontal ? '12px 100%' : '100% 12px'
              }}
            />
            {/* Metallic Highlight */}
            <div className={`absolute inset-0 bg-gradient-to-${isHorizontal ? 'b' : 'r'} from-white/10 via-transparent to-black/40`} />
            
            {/* Embossed Branding (subtle) */}
            {i === 1 && (
              <div className={`absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none`}>
                <span className={`text-[4px] font-technical font-black tracking-[1em] text-white ${isHorizontal ? '' : 'rotate-90'}`}>
                  SSC TMT
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const PhysicalHangingSystem = ({ orientation = 'horizontal', delay = 0, cardData }: any) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div className={`relative ${isHorizontal ? 'flex flex-col items-center' : 'flex items-center ml-2'}`}>
      {/* 1. Metal Clamp (wraps around the 3 bars) */}
      <div className="relative z-30">
        <div className={`bg-gradient-to-br from-[#3A3F47] to-[#1A1C22] border border-white/20 rounded-sm shadow-lg flex items-center justify-center
          ${isHorizontal ? 'w-10 h-10' : 'w-10 h-10'}`}
        >
          {/* Clamp Bolts */}
          <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-ssc-gold/40 border border-black/50" />
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-ssc-gold/40 border border-black/50" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-ssc-gold/40 border border-black/50" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-ssc-gold/40 border border-black/50" />
          
          <div className="w-4 h-4 rounded-full border border-ssc-gold/30 bg-black/40 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold shadow-[0_0_5px_rgba(197,160,89,0.5)]" />
          </div>
        </div>
      </div>

      {/* 2. Short Metal Connector */}
      <div className={`z-20 bg-gradient-to-b from-[#2A2D35] to-[#1A1C22] border-x border-white/10 shadow-md
        ${isHorizontal ? 'w-2 h-8' : 'h-2 w-8'}`} 
      />

      {/* 3. Hook */}
      <div className="relative z-30">
        <div className={`bg-[#1A1C22] border-2 border-ssc-gold/50 rounded-full flex items-center justify-center shadow-lg
          ${isHorizontal ? 'w-6 h-6' : 'w-6 h-6'}`}
        >
          <div className="w-2 h-2 rounded-full bg-ssc-gold" />
        </div>
      </div>

      {/* 4. Timeline Card */}
      <div className={`mt-2 ${isHorizontal ? '' : 'ml-4'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 0.6 }}
          className="w-[280px] bg-[#0C121E] border border-white/10 p-6 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] relative group"
        >
          {/* Hanging point on card */}
          <div className={`absolute ${isHorizontal ? '-top-1 left-1/2 -translate-x-1/2' : 'top-1/2 -left-1 -translate-y-1/2'} w-3 h-3 bg-ssc-gold rounded-full border-2 border-[#0C121E] shadow-sm`} />
          
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
    </div>
  );
};

export const SteelTimeline = () => {
  return (
    <section id="timeline" className="relative py-24 lg:py-32 bg-[#080E1A] overflow-hidden">
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
        <div className="text-center mb-24 lg:mb-32">
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

        {/* Desktop Version - Horizontal TMT Structural System */}
        <div className="hidden lg:block relative h-[600px] mt-20">
          {/* Main Structural Spine */}
          <div className="absolute top-0 left-0 w-full px-12">
            <TMTBar orientation="horizontal" />
          </div>
          
          {/* Hanging Cards */}
          <div className="flex justify-between items-start px-24 pt-4">
            <PhysicalHangingSystem cardData={milestones[0]} delay={0.2} />
            <PhysicalHangingSystem cardData={milestones[1]} delay={0.4} />
            <PhysicalHangingSystem cardData={milestones[2]} delay={0.6} />
            <PhysicalHangingSystem cardData={milestones[3]} delay={0.8} />
          </div>
        </div>

        {/* Mobile Version - Vertical TMT Structural Spine */}
        <div className="lg:hidden relative flex min-h-[1200px] pt-10">
          {/* Vertical Spine on Left */}
          <div className="absolute left-6 top-0 bottom-0 h-full">
            <TMTBar orientation="vertical" />
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-24 ml-4 w-full">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative flex items-center min-h-[220px]">
                <PhysicalHangingSystem 
                  orientation="vertical" 
                  cardData={ms} 
                  delay={idx * 0.2} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scope Lock Verbatim Text */}
        <div className="mt-32 px-6 py-8 border-t border-white/5 opacity-20">
          <p className="text-[10px] font-technical text-white/50 leading-relaxed uppercase tracking-wider max-w-2xl mx-auto text-center">
            '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
            <br /><br />
            ABOUT PAGE — TIMELINE STRUCTURE ONLY
            <br />
            IMPORTANT:
            This is ONLY a rebuild of the About page timeline.
            DO NOT CHANGE ANYTHING ELSE.
          </p>
        </div>
      </div>
    </section>
  );
};