import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Factory, Map, Handshake, MapPin, ShieldCheck, Construction, Award, Truck } from 'lucide-react';

const MilestoneCard = ({ 
  index, 
  year, 
  title, 
  content, 
  isMobile 
}: { 
  index: number; 
  year: string; 
  title: string; 
  content: string; 
  isMobile?: boolean;
}) => {
  const number = (index + 1).toString().padStart(2, '0');
  
  // Variations to look naturally suspended
  const yOffset = isMobile ? 0 : (index % 2 === 0 ? 0 : 40);
  const rotateZ = isMobile ? 0 : (index % 2 === 0 ? 0.5 : -0.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ 
        opacity: 1, 
        y: yOffset,
        transition: { 
          duration: 1.5, 
          delay: 0.5 + (index * 0.3),
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true }}
      className={`relative flex flex-col items-center ${isMobile ? 'mb-32' : ''}`}
    >
      {/* 
        PHYSICAL HANGING MECHANISM 
        Matches Reference: Gold/Brass Clamp -> Gold Link -> Plaque
      */}
      <div className={`absolute ${isMobile ? '-left-[4.5rem] top-1/2 -translate-y-1/2' : '-top-[100px] left-1/2 -translate-x-1/2'} flex flex-col items-center z-30`}>
        
        {/* GOLD CLAMP (Wrapped around the rod) */}
        <div className="relative">
          <div className={`${isMobile ? 'w-10 h-14' : 'w-16 h-10'} bg-gradient-to-br from-[#F5D48E] via-[#C5A059] to-[#8A6D3B] border-[1px] border-white/20 shadow-[0_10px_20px_rgba(0,0,0,0.6)] rounded-sm flex items-center justify-center relative z-10 overflow-hidden`}>
            {/* Clamp highlight */}
            <div className="absolute top-0 left-0 w-full h-[30%] bg-white/20" />
            
            {/* Number on clamp as per reference */}
            <span className="text-[10px] font-technical font-black text-black/60 relative z-20">{number}</span>
          </div>
        </div>

        {/* GOLD HANGER LINE & HOOK */}
        <div className={`${isMobile ? 'w-12 h-[2px]' : 'w-[2px] h-16'} bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.3)] relative`}>
          {/* Hook that connects to card top */}
          <div className={`absolute ${isMobile ? 'right-0 top-1/2 -translate-y-1/2' : 'bottom-0 left-1/2 -translate-x-1/2'} w-3 h-3 rounded-full bg-[#C5A059] border border-white/20`} />
        </div>
      </div>

      {/* 3D PREMIUM METAL PLAQUE */}
      <motion.div 
        animate={{ 
          rotateZ: [rotateZ, rotateZ + 0.3, rotateZ],
          y: [yOffset, yOffset - 3, yOffset],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.5
        }}
        className="w-[280px] bg-gradient-to-b from-[#161B22] to-[#0A0C10] border-[1.5px] border-[#C5A059]/40 rounded-lg p-8 text-center shadow-[0_50px_100px_rgba(0,0,0,1),inset_0_2px_15px_rgba(255,255,255,0.05)] relative group overflow-hidden"
      >
        {/* Beveled Edge Highlight */}
        <div className="absolute inset-0 border-t border-l border-white/10 rounded-lg pointer-events-none" />
        
        {/* 3D Bottom Thickness */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#000000] rounded-b-lg shadow-[0_-2px_10px_rgba(197,160,89,0.2)]" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Icon Style matches reference: Line icons in Gold */}
          <div className="text-[#C5A059] mb-6 scale-125">
             {index === 0 && <Factory className="w-10 h-10" strokeWidth={1} />}
             {index === 1 && <Factory className="w-10 h-10" strokeWidth={1} />}
             {index === 2 && <Handshake className="w-10 h-10" strokeWidth={1} />}
             {index === 3 && <MapPin className="w-10 h-10" strokeWidth={1} />}
          </div>
          
          <h4 className="text-white font-heading font-extrabold text-[28px] mb-1 tracking-tight uppercase">{year}</h4>
          <h5 className="text-[#C5A059] font-technical font-bold text-[10px] tracking-[0.2em] uppercase mb-5">{title}</h5>
          
          <div className="w-full h-[1px] bg-white/10 mb-5" />
          
          <p className="text-white/60 text-[14px] font-medium leading-relaxed max-w-[200px] mx-auto">
            {content}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TrustIcon = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex flex-col lg:flex-row items-center gap-4 group">
    <div className="w-12 h-12 flex items-center justify-center border border-[#C5A059]/30 rounded-full bg-[#C5A059]/5 group-hover:bg-[#C5A059]/10 transition-colors">
      <Icon className="w-6 h-6 text-[#C5A059]" strokeWidth={1.5} />
    </div>
    <span className="text-[11px] font-technical font-bold text-white/80 tracking-widest uppercase text-center lg:text-left">
      {text}
    </span>
  </div>
);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rodReveal = useTransform(scrollYProgress, [0.05, 0.4], ["0%", "100%"]);
  const rodOpacity = useTransform(scrollYProgress, [0.05, 0.1], [0, 1]);
  
  const milestones = [
    {
      year: "1994",
      title: "ESTABLISHED",
      content: "Founded Srinivasa Steel Corporation in Hyderabad.",
      icon: Factory
    },
    {
      year: "2000s",
      title: "EXPANDED TO VIZAG",
      content: "Expanded operations to Visakhapatnam steel market.",
      icon: Map
    },
    {
      year: "2010s",
      title: "MOU DEALER STATUS",
      content: "Become MoU Dealer for Vizag Steel Plant.",
      icon: Handshake
    },
    {
      year: "TODAY",
      title: "3 LOCATIONS, 30+ YEARS",
      content: "3 locations. 30+ years of trust. Thousands of tons delivered.",
      icon: MapPin
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-32 lg:py-56 bg-[#050A14] overflow-hidden"
    >
      {/* INDUSTRIAL ARCHITECTURAL AMBIANCE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Engineering Grid (Blueprint Style) */}
        <div className="absolute inset-0 opacity-[0.015]" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
               backgroundSize: '120px 120px'
             }} 
        />
        {/* Volumetric Dark Gradients */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent" />
        
        {/* Deep Steel Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#0A1A2F] rounded-full blur-[200px] opacity-40" />
      </div>

      <div className="container-wide relative z-10">
        {/* HEADER BLOCK */}
        <div className="text-center mb-40 lg:mb-64">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#C5A059]/30" />
              <span className="text-[#C5A059] text-xs font-technical font-bold tracking-[0.6em] uppercase">
                OUR JOURNEY
              </span>
              <div className="w-8 h-[1px] bg-[#C5A059]/30" />
            </div>
            <h2 className="text-[42px] lg:text-[88px] text-white font-heading font-extrabold leading-[0.9] mb-12 tracking-tighter uppercase">
              STRONG ROOTS.<br />
              <span className="text-[#C5A059] italic">STRONGER FUTURE.</span>
            </h2>
            <p className="text-white/40 text-base lg:text-[20px] font-light max-w-3xl mx-auto leading-relaxed">
              From a strong beginning in 1994 to becoming a trusted steel supplier across multiple locations, our journey is built on quality, trust and consistent delivery.
            </p>
          </motion.div>
        </div>

        {/* TIMELINE INSTALLATION */}
        <div className="relative pb-40">
          
          {/* THE 3D TMT REINFORCEMENT STEEL ROD */}
          <div className="relative lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-20 z-10 flex justify-center mb-32 lg:mb-0">
            <div className="relative w-full max-w-[1300px] h-full flex justify-center lg:block">
              
              {/* DESKTOP: Cylindrical TMT Rebar */}
              <div className="hidden lg:block relative w-full h-16 group">
                <motion.div 
                  style={{ width: rodReveal, opacity: rodOpacity }}
                  className="absolute inset-0 shadow-[0_30px_60px_rgba(0,0,0,0.9)] rounded-full overflow-hidden"
                >
                  {/* Heavy Steel Base Cylinder */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0e] via-[#41474e] to-[#080a0c] border-t border-white/5" />
                  
                  {/* High-Definition TMT Reinforcement Ribs (Geometry Marks) */}
                  <div className="absolute inset-0 opacity-100 mix-blend-overlay" 
                       style={{ 
                         backgroundImage: `repeating-linear-gradient(
                           125deg, 
                           transparent, 
                           transparent 12px, 
                           rgba(0,0,0,0.95) 12px, 
                           rgba(0,0,0,0.95) 18px, 
                           rgba(255,255,255,0.06) 18px, 
                           rgba(255,255,255,0.06) 20px
                         )`,
                         backgroundSize: '60px 100%'
                       }} 
                  />

                  {/* Dual Longitudinal Main Ribs (Structural Depth) */}
                  <div className="absolute top-[22%] left-0 w-full h-[2px] bg-black/70 shadow-sm" />
                  <div className="absolute bottom-[22%] left-0 w-full h-[1px] bg-white/5" />

                  {/* Surface Steel Grain */}
                  <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
                  
                  {/* Cinematic Highlights (Curved Surface) */}
                  <div className="absolute top-0 inset-x-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent" />
                  
                  {/* Animated Steel Shine Sweep */}
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg]"
                  />

                  {/* Industrial End Cap Detail */}
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-black/80 rounded-r-full" />
                </motion.div>
                
                {/* Micro-Annotation beneath the Rod */}
                <div className="absolute -bottom-8 left-0 opacity-10">
                  <span className="text-[7px] font-technical tracking-[1em] text-white">REINFORCEMENT_CORE_SPECS // 500D_FE_GRADE</span>
                </div>
              </div>

              {/* MOBILE: Vertical Cylindrical TMT Rebar */}
              <div className="lg:hidden relative w-14 h-[1400px]">
                <motion.div 
                  style={{ height: rodReveal, opacity: rodOpacity }}
                  className="absolute inset-0 shadow-[20px_0_40px_rgba(0,0,0,0.9)] rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0e] via-[#41474e] to-[#080a0c] border-l border-white/5" />
                  <div className="absolute inset-0 opacity-90 mix-blend-overlay" 
                       style={{ 
                         backgroundImage: `repeating-linear-gradient(
                           35deg, 
                           transparent, 
                           transparent 12px, 
                           rgba(0,0,0,0.95) 12px, 
                           rgba(0,0,0,0.95) 18px, 
                           rgba(255,255,255,0.06) 18px, 
                           rgba(255,255,255,0.06) 20px
                         )`,
                         backgroundSize: '100% 60px'
                       }} 
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* HANGING INSTALLATION GRID */}
          <div className="relative z-20">
            {/* Desktop Presentation */}
            <div className="hidden lg:grid grid-cols-4 gap-12 pt-36 max-w-[1300px] mx-auto">
              {milestones.map((m, i) => (
                <MilestoneCard key={i} index={i} {...m} />
              ))}
            </div>

            {/* Mobile Presentation */}
            <div className="lg:hidden flex flex-col items-center pl-24">
              {milestones.map((m, i) => (
                <MilestoneCard key={i} index={i} {...m} isMobile />
              ))}
            </div>
          </div>
        </div>

        {/* TRUST ACCREDITATION FOOTER */}
        <div className="mt-20 pt-20 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            <TrustIcon icon={ShieldCheck} text="30+ Years of Trust" />
            <TrustIcon icon={Construction} text="Premium Steel Products" />
            <TrustIcon icon={Award} text="Quality & Reliability" />
            <TrustIcon icon={Truck} text="Timely Supply Pan India" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};