import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants, Easing } from 'framer-motion';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const steelImageUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"; // Close-up TMT steel
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const rodWidth = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "100%"]);
  const cubicBezier: Easing = [0.16, 1, 0.3, 1];

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
      className="relative py-24 lg:py-48 bg-[#0B1B33] overflow-hidden"
    >
      {/* SOPHISTICATED INDUSTRIAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Technical Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
               backgroundSize: '80px 80px'
             }} 
        />
        
        {/* Blueprint Geometry */}
        <div className="absolute top-0 right-0 w-[50%] h-full opacity-[0.05]">
          <div className="absolute top-[20%] right-[10%] w-[1px] h-[60%] bg-white" />
          <div className="absolute top-[40%] right-0 w-full h-[1px] bg-white transform -rotate-3" />
          <div className="absolute bottom-[40%] right-0 w-full h-[1px] bg-white transform rotate-3" />
        </div>

        {/* Measurement Marks */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-8 flex justify-between px-10 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`w-[1px] bg-white ${i % 5 === 0 ? 'h-6' : 'h-3'}`} />
          ))}
        </div>

        {/* Soft Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1B33] via-[#0D2140] to-[#081426]" />
      </div>

      <div className="container-wide relative z-10">
        {/* ASYMMETRIC HEADER BLOCK */}
        <div className="flex flex-col lg:flex-row items-end gap-16 mb-24 lg:mb-48">
          <div className="w-full lg:w-[60%]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: cubicBezier }}
            >
              <span className="text-[#C5A059] text-[11px] lg:text-[12px] font-technical font-bold tracking-[0.5em] uppercase mb-8 block">
                HERITAGE & PRESENCE
              </span>
              <h2 className="text-[48px] lg:text-[88px] text-white font-heading font-extrabold leading-[0.9] mb-12 tracking-tighter uppercase">
                BUILT OVER TIME. <br />
                <span className="text-[#C5A059]">BUILT TO LAST.</span>
              </h2>
              <div className="relative pl-8 max-w-[620px]">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C5A059] to-transparent" />
                <p className="text-[18px] lg:text-[21px] text-white/60 leading-[1.7] font-light">
                  Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, specializing in <span className="text-white font-medium">TMT rebars</span>, steel products, wire products and decoiling solutions.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* SECONDARY VISUAL ELEMENT */}
          <div className="hidden lg:block w-[30%] pb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: cubicBezier }}
              className="relative aspect-square overflow-hidden rounded-sm grayscale-[0.4] contrast-[1.1] opacity-40 hover:opacity-80 transition-opacity duration-700"
            >
              <img src={steelImageUrl} alt="TMT Steel Close-up" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-white/10" />
            </motion.div>
          </div>
        </div>

        {/* REAL TMT ROD TIMELINE EXPERIENCE */}
        <div className="relative pt-20 pb-20 lg:pt-40 lg:pb-40">
          
          {/* MILESTONE CONTENT - Desktop Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-12 relative z-20">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: milestone.align === 'top' ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 + (idx * 0.15), ease: cubicBezier }}
                className={`flex flex-col ${milestone.align === 'top' ? 'lg:mb-64' : 'lg:mt-64'}`}
              >
                <div className={`flex flex-col ${milestone.align === 'top' ? 'lg:justify-end flex-grow' : ''}`}>
                  <span className="text-[12px] font-technical font-extrabold text-[#C5A059] tracking-[0.3em] block mb-4">
                    {milestone.label}
                  </span>
                  <h3 className="text-[18px] lg:text-[22px] font-heading font-bold text-white leading-tight mb-5 uppercase tracking-wide">
                    {milestone.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-white/40 leading-relaxed font-normal max-w-[280px]">
                    {milestone.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* THE REAL TMT REINFORCEMENT BAR */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden lg:block z-10">
            <div className="relative w-full h-10">
              
              {/* MAIN ROD BODY: Cylindrical Gunmetal Steel */}
              <motion.div 
                style={{ width: rodWidth }}
                className="absolute inset-0 rounded-full overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                {/* 3D Cylindrical Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2A2E35] via-[#4A515E] to-[#1A1D22]" />
                
                {/* TMT Ribbing Pattern */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay" 
                     style={{ 
                       backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(0,0,0,0.5) 18px, rgba(0,0,0,0.5) 22px)',
                       backgroundSize: '50px 100%'
                     }} 
                />
                
                {/* Metallic Highlights & Reflections */}
                <div className="absolute top-[15%] left-0 w-full h-[2px] bg-white/20 blur-[1px]" />
                <div className="absolute top-[25%] left-0 w-full h-[1px] bg-white/10" />
                
                {/* GOLD LIGHT ACCENT (Traveling Brand Identity) */}
                <motion.div 
                  style={{ left: "-20%" }}
                  animate={{ left: "120%" }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 w-40 h-full bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent skew-x-[45deg]"
                />
              </motion.div>

              {/* MACHINED CONNECTION NODES */}
              <div className="absolute inset-0 flex justify-around items-center">
                {milestones.map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + (i * 0.2), type: "spring", stiffness: 100 }}
                    className="relative w-8 h-12 flex items-center justify-center"
                  >
                    {/* Machined Steel Collar */}
                    <div className="absolute w-full h-full bg-gradient-to-b from-[#5D6677] to-[#2B3039] rounded-sm border border-white/10 shadow-lg" />
                    {/* Gold Connection Point */}
                    <div className="w-3 h-3 rounded-full bg-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.8)] z-10" />
                    
                    {/* Vertical Connector Blueprint Line */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-[1px] bg-white/10 ${
                      i % 2 === 0 ? 'bottom-full h-32' : 'top-full h-32'
                    }`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE TMT ROD (Vertical) */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-6 z-0">
             <div className="relative h-full w-full rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A2E35] via-[#4A515E] to-[#1A1D22]" />
                <div className="absolute inset-0 opacity-30" 
                     style={{ 
                       backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(0,0,0,0.4) 15px, rgba(0,0,0,0.4) 18px)',
                     }} 
                />
                <div className="absolute left-[20%] top-0 h-full w-[2px] bg-white/20 blur-[1px]" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};