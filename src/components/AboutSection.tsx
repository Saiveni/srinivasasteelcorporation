import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  const milestones = [
    {
      label: "1994",
      title: "ESTABLISHED",
      content: "Founding of Srinivasa Steel Corporation, beginning our journey in regional steel distribution.",
      align: "top"
    },
    {
      label: "CORE EXPERTISE",
      title: "TMT REBARS • STEEL PRODUCTS",
      content: "Specializing in premium reinforcement steel and industrial wire products.",
      align: "bottom"
    },
    {
      label: "REGIONAL PRESENCE",
      title: "VIJAYAWADA • VIZAG • GANNAVARAM",
      content: "Strategic network serving construction and industrial requirements across key locations.",
      align: "top"
    },
    {
      label: "TODAY",
      title: "STEEL SUPPLY • DECOILING SOLUTIONS",
      content: "A leader in steel supply chains and professional decoiling services.",
      align: "bottom"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 lg:py-40 bg-[#F4F6F8] overflow-hidden"
    >
      {/* Background Industrial Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-[#0B1B33]" />
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-[#0B1B33]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header Block */}
        <div className="max-w-4xl mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#C5A059] text-[12px] font-technical font-bold tracking-[0.4em] uppercase mb-6 block">
              HERITAGE & PRESENCE
            </span>
            <h2 className="text-[42px] lg:text-[72px] text-[#0B1B33] font-heading font-extrabold leading-[0.95] mb-10 tracking-tighter uppercase">
              BUILT OVER TIME. <br />
              <span className="text-[#C5A059]">BUILT TO LAST.</span>
            </h2>
            <p className="text-[20px] lg:text-[22px] text-[#0B1B33]/70 max-w-[700px] leading-[1.6] font-medium border-l-4 border-[#C5A059] pl-8">
              Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, specializing in TMT rebars, steel products, wire products and decoiling solutions.
            </p>
          </motion.div>
        </div>

        {/* THE TMT STEEL ROD TIMELINE */}
        <div className="relative mt-20 lg:mt-40 mb-20 lg:mb-40">
          {/* Milestone Content Desktop Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1) }}
                className={`relative z-20 flex flex-col ${
                  milestone.align === 'top' ? 'lg:mb-48' : 'lg:mt-48'
                }`}
              >
                <div className="mb-4">
                  <span className="text-[14px] font-technical font-extrabold text-[#C5A059] tracking-widest block mb-2">
                    {milestone.label}
                  </span>
                  <h3 className="text-[18px] lg:text-[20px] font-heading font-bold text-[#0B1B33] leading-tight mb-4 uppercase">
                    {milestone.title}
                  </h3>
                  <p className="text-[15px] text-[#0B1B33]/60 leading-relaxed font-normal lg:max-w-[240px]">
                    {milestone.content}
                  </p>
                </div>
                
                {/* Visual Connector Line to Rod */}
                <div className={`hidden lg:block absolute left-4 w-[1px] bg-gradient-to-b from-[#C5A059]/40 to-transparent ${
                  milestone.align === 'top' ? 'top-full h-24' : 'bottom-full h-24 rotate-180'
                }`} />
              </motion.div>
            ))}
          </div>

          {/* THE STEEL ROD (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-6 -translate-y-1/2 hidden lg:block z-10">
            {/* TMT Bar Texture & Ribbing (CSS) */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              {/* Main Rod Body */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3A4350] via-[#5D6B7F] to-[#2B323D]" />
              
              {/* Ribbing Pattern */}
              <div className="absolute inset-0 opacity-40" 
                   style={{ 
                     backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(0,0,0,0.4) 15px, rgba(0,0,0,0.4) 18px)',
                     backgroundSize: '40px 100%'
                   }} 
              />
              
              {/* Metallic Highlight */}
              <div className="absolute top-1 left-0 w-full h-[2px] bg-white/20 blur-[1px]" />
              
              {/* Animated Reveal Overlay */}
              <motion.div 
                style={{ scaleX: pathLength }}
                className="absolute inset-0 bg-[#F4F6F8] origin-right z-20 mix-blend-color-burn" 
              />
            </div>
            
            {/* Milestone Anchor Points on Rod */}
            <div className="absolute inset-0 flex justify-around items-center">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.5)] z-30" />
              ))}
            </div>
          </div>

          {/* Mobile Rod View (Vertical) */}
          <div className="lg:hidden absolute left-0 top-0 bottom-0 w-4 z-0">
             <div className="relative h-full w-full rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3A4350] via-[#5D6B7F] to-[#2B323D]" />
                <div className="absolute inset-0 opacity-30" 
                     style={{ 
                       backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(0,0,0,0.4) 15px, rgba(0,0,0,0.4) 18px)',
                     }} 
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};