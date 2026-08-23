import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

/**
 * High-fidelity 3D TMT reinforcement steel rod (Rebar).
 * Engineered with realistic rib geometry, cylindrical shading, and metallic finish.
 */
const RebarSpine = () => {
  return (
    <div className="relative w-[48px] sm:w-[56px] h-full flex flex-col items-center">
      {/* Cast Shadow */}
      <div className="absolute right-[-20px] top-0 bottom-0 w-[30px] bg-black/40 blur-xl z-0" />
      
      {/* Rebar Body */}
      <div className="relative w-full h-full rounded-full overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-10">
        {/* Base Cylindrical Metal Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #0a0c10 0%, #1a1e24 15%, #4a525d 35%, #7a828d 45%, #4a525d 65%, #1a1e24 85%, #0a0c10 100%)'
          }}
        />
        
        {/* TMT Ribs (Diagonal) */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `repeating-linear-gradient(150deg, 
              transparent 0px, 
              transparent 12px, 
              rgba(0,0,0,0.5) 14px, 
              rgba(0,0,0,0.7) 16px, 
              rgba(255,255,255,0.15) 18px, 
              rgba(255,255,255,0.05) 20px, 
              transparent 24px)`,
            maskImage: 'linear-gradient(to right, transparent 5%, black 20%, black 80%, transparent 95%)'
          }}
        />
        
        {/* Longitudinal Ribs */}
        <div className="absolute left-[28%] top-0 bottom-0 w-[3px] bg-white/10 blur-[0.5px]" />
        <div className="absolute right-[28%] top-0 bottom-0 w-[2px] bg-black/40" />
        
        {/* Specular Light Band */}
        <div className="absolute left-[40%] top-0 bottom-0 w-[12%] bg-white/10 blur-[4px]" />
        
        {/* Brushed Texture */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay" />
      </div>

      {/* Rounded Top Cap */}
      <div className="absolute -top-[20px] w-full h-[40px] rounded-full bg-gradient-to-b from-[#4a525d] to-[#1a1e24] shadow-lg z-20" />
    </div>
  );
};

/**
 * Realistic Machined Steel Hook / Clamp.
 * Physically connects the card to the rebar spine.
 */
const MetalClamp = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: -20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="relative z-30 flex items-center"
    >
      {/* The Clamp (Collar) */}
      <div 
        className="w-[64px] h-[48px] rounded-[6px] relative shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #8a6d3b 0%, #c5a059 30%, #f4d088 50%, #c5a059 70%, #8a6d3b 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay" />
        {/* Bolt detail */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/40 shadow-inner" />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/40 shadow-inner" />
      </div>

      {/* The Hook / Suspension Arm */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 0.6 }}
        className="h-[8px] bg-gradient-to-b from-[#c5a059] via-[#f4d088] to-[#8a6d3b] shadow-md relative"
      >
        {/* Arm End Connector */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[12px] h-[16px] bg-[#c5a059] rounded-sm shadow-sm" />
      </motion.div>
    </motion.div>
  );
};

/**
 * Premium Hanging Milestone Card.
 * Appears physically suspended from the clamp.
 */
const HangingCard = ({ 
  milestone, 
  delay = 0 
}: { 
  milestone: { year: string, title: string, description: string },
  delay?: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: delay + 0.5, 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ x: 5 }}
      className="relative ml-[-4px]"
    >
      <div className="bg-[#0c0f13] border border-[#c5a059]/30 rounded-[12px] p-6 sm:p-8 w-[280px] sm:w-[380px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative group">
        {/* Machined Metal Texture */}
        <div className="absolute inset-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
        
        {/* Spec Label */}
        <div className="absolute top-4 right-4 px-2 py-0.5 border border-[#c5a059]/20 rounded text-[9px] font-technical text-[#c5a059]/60 tracking-widest uppercase">
          Steel Spec: FE-550D
        </div>

        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-4">
            <h3 className="text-white text-[32px] sm:text-[42px] font-heading font-black italic tracking-tighter leading-none">
              {milestone.year}
            </h3>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-[#c5a059]/40 to-transparent" />
          </div>
          
          <h4 className="text-[#c5a059] text-[12px] sm:text-[14px] font-technical font-bold uppercase tracking-[0.2em] mb-4">
            {milestone.title}
          </h4>
          
          <p className="text-white/60 text-[14px] sm:text-[16px] leading-relaxed font-medium">
            {milestone.description}
          </p>
        </div>

        {/* Realistic Depth Shadow */}
        <div className="absolute -inset-[2px] bg-gradient-to-br from-white/5 to-transparent rounded-[14px] pointer-events-none" />
        
        {/* Corner Bolt Details */}
        <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-white/5" />
        <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-white/5" />
      </div>
    </motion.div>
  );
};

export const SteelTimeline = () => {
  const milestones = [
    {
      year: '1994',
      title: 'ESTABLISHED',
      description: 'Founded Srinivasa Steel Corporation in Hyderabad.',
    },
    {
      year: '2000s',
      title: 'EXPANDED TO VIZAG',
      description: 'Expanded operations to Visakhapatnam steel market.',
    },
    {
      year: '2010s',
      title: 'MOU DEALER STATUS',
      description: 'Became MoU Dealer for Vizag Steel Plant.',
    },
    {
      year: 'TODAY',
      title: '3 LOCATIONS, 30+ YEARS',
      description: '3 locations. 30+ years of trust. Thousands of tons delivered.',
    },
  ];

  return (
    <section id="steel-timeline" className="relative py-24 lg:py-32 bg-[#050A14] overflow-hidden">
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1200px] mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#c5a059]" />
              <span className="text-[#c5a059] text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                Company Legacy
              </span>
            </div>
            <h2 className="text-[48px] sm:text-[72px] lg:text-[90px] text-white font-heading font-black tracking-tighter uppercase italic leading-[0.85]">
              HISTORY <span className="text-white/20">HANGING FROM</span><br />
              <span className="text-[#c5a059]">SOLID STEEL.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative flex gap-0 sm:gap-12 min-h-[1200px]">
          {/* THE STEEL ROD (VERTICAL SPINE) */}
          <div className="h-full absolute left-0 sm:relative">
            <RebarSpine />
          </div>

          {/* THE MILESTONES */}
          <div className="flex flex-col gap-24 sm:gap-32 pt-20 pl-16 sm:pl-0">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative flex items-center">
                {/* Horizontal Physical Hook connecting Spine to Card */}
                <div className="absolute left-[-64px] sm:left-[-112px] top-1/2 -translate-y-1/2">
                  <MetalClamp delay={idx * 0.4} />
                </div>
                
                <HangingCard milestone={ms} delay={idx * 0.4} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Architectural Curve */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#050A14] to-transparent pointer-events-none" />
    </section>
  );
};
