import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants, Easing } from 'framer-motion';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const steelImageUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop";
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rodReveal = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);
  const rodOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  
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
      className="relative py-20 lg:py-48 bg-[#0B1B33] overflow-hidden"
    >
      {/* INDUSTRIAL BACKGROUND WITH PARALLAX GEOMETRY */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
               backgroundSize: '100px 100px'
             }} 
        />
        <div className="absolute top-[10%] right-[5%] w-[1px] h-[70%] bg-white/5" />
        <div className="absolute top-[40%] left-[-10%] w-[120%] h-[1px] bg-white/5 transform rotate-2" />
        
        {/* Technical Marks */}
        <div className="absolute top-10 left-10 flex flex-col gap-4 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-white" />
              <span className="text-[8px] font-technical text-white">0{i+1}_REF</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="container-wide relative z-10">
        {/* HEADER BLOCK */}
        <div className="max-w-4xl mb-24 lg:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: cubicBezier }}
          >
            <span className="text-[#C5A059] text-[11px] lg:text-[12px] font-technical font-bold tracking-[0.5em] uppercase mb-8 block">
              HERITAGE & PRESENCE
            </span>
            <h2 className="text-[42px] lg:text-[88px] text-white font-heading font-extrabold leading-[0.9] mb-12 tracking-tighter uppercase">
              BUILT OVER TIME. <br />
              <span className="text-[#C5A059]">BUILT TO LAST.</span>
            </h2>
            <div className="relative pl-8 max-w-[620px]">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C5A059]" />
              <p className="text-[17px] lg:text-[21px] text-white/60 leading-[1.7] font-light">
                Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, specializing in <span className="text-white font-medium">TMT rebars</span>, steel products, wire products and decoiling solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* TIMELINE EXPERIENCE */}
        <div className="relative min-h-[600px] lg:min-h-0 pt-10 pb-20 lg:pt-32 lg:pb-32">
          
          {/* THE STEEL ROD (Desktop & Mobile) */}
          <div className="absolute top-0 bottom-0 left-6 lg:left-0 lg:top-1/2 lg:bottom-auto lg:w-full lg:h-12 lg:-translate-y-1/2 z-10 flex items-center">
            <div className="relative w-full h-full lg:h-12">
              
              {/* TMT REBAR BODY */}
              <motion.div 
                style={{ 
                  width: "100%", 
                  opacity: rodOpacity,
                }}
                className="absolute inset-0 w-6 lg:w-full shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* 3D Steel Cylinder Base */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#0f1115] via-[#3a3f47] to-[#0a0c10] border-t border-white/5" />
                
                {/* High-Realism Ribbing Pattern */}
                <div className="absolute inset-0 opacity-80 mix-blend-overlay rounded-full" 
                     style={{ 
                       backgroundImage: `repeating-linear-gradient(
                         135deg, 
                         transparent, 
                         transparent 8px, 
                         rgba(0,0,0,0.9) 8px, 
                         rgba(0,0,0,0.9) 12px, 
                         rgba(255,255,255,0.05) 12px, 
                         rgba(255,255,255,0.05) 14px
                       )`,
                       backgroundSize: '40px 100%'
                     }} 
                />

                {/* Metallic Longitudinal Ribs (Horizontal Lines) */}
                <div className="absolute top-[20%] left-0 w-full h-[1px] bg-black/40" />
                <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-white/5" />
                
                {/* Steel Grain and Weathering */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] rounded-full" />

                {/* Animated Sheen Highlight */}
                <motion.div 
                  animate={{ 
                    x: ["-100%", "200%"],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg]"
                />

                {/* End Cap (Conical effect for desktop) */}
                <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/80 to-transparent rounded-r-full hidden lg:block" />
              </motion.div>

              {/* MACHINED NODES (Desktop only for horizontal) */}
              <div className="absolute inset-0 hidden lg:flex justify-around items-center">
                {milestones.map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { delay: 0.5 + (i * 0.2), duration: 0.8, ease: cubicBezier }
                    }}
                    viewport={{ once: true }}
                    className="relative w-8 h-20 flex items-center justify-center group"
                  >
                    {/* Machine connection point */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#333] via-[#555] to-[#222] rounded-[4px] border border-white/10 shadow-2xl" />
                    
                    {/* The "O-Ring" / Pin */}
                    <motion.div 
                      whileInView={{ 
                        backgroundColor: "#C5A059",
                        boxShadow: "0 0 20px rgba(197,160,89,0.8)",
                        transition: { delay: 0.7 + (i * 0.2), duration: 1 }
                      }}
                      className="w-4 h-4 rounded-full bg-[#111] z-10 border border-white/20 relative" 
                    >
                      {/* Gold ring around pin */}
                      <div className="absolute -inset-1 rounded-full border border-[#C5A059]/40" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT GRID - Content inside "image guards" (relative positioning to nodes) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-12 relative z-20 pl-24 lg:pl-0">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: milestone.align === 'top' ? 20 : -20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 1, delay: 0.6 + (idx * 0.15), ease: cubicBezier }
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col relative ${milestone.align === 'top' ? 'lg:pb-32' : 'lg:pt-32'}`}
              >
                {/* Mobile Machined Node */}
                <div className="absolute left-[-68px] top-6 lg:hidden w-10 h-12 bg-gradient-to-b from-[#4a505c] to-[#1a1d22] rounded-md flex items-center justify-center shadow-xl">
                  <div className="w-3 h-3 rounded-full bg-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.6)]" />
                </div>

                {/* Content Box - Placed strategically relative to the rod */}
                <div className={`flex flex-col ${milestone.align === 'top' ? 'lg:justify-end flex-grow mb-12' : 'lg:justify-start mt-12'}`}>
                  {/* Visual Connector Line (Vertical) */}
                  <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-[1px] bg-[#C5A059]/40 ${
                    milestone.align === 'top' ? 'bottom-[0px] h-24' : 'top-[0px] h-24'
                  }`} />
                  
                  <div className="bg-[#0D1E3A]/40 backdrop-blur-sm border border-white/5 p-6 rounded-lg lg:bg-transparent lg:p-0 lg:border-0">
                    <span className="text-[12px] lg:text-[13px] font-technical font-extrabold text-[#C5A059] tracking-[0.3em] block mb-4">
                      {milestone.label}
                    </span>
                    <h3 className="text-[20px] lg:text-[22px] font-heading font-bold text-white leading-tight mb-5 uppercase tracking-wide">
                      {milestone.title}
                    </h3>
                    <p className="text-[15px] lg:text-[16px] text-white/50 leading-relaxed font-light max-w-[300px]">
                      {milestone.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};