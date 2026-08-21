import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Factory, Map, Handshake, MapPin, ShieldCheck, Construction, Award, Truck } from 'lucide-react';

const MilestoneCard = ({ 
  index, 
  year, 
  title, 
  content, 
  icon: Icon,
  isMobile 
}: { 
  index: number; 
  year: string; 
  title: string; 
  content: string; 
  icon: any;
  isMobile?: boolean;
}) => {
  const number = (index + 1).toString().padStart(2, '0');
  
  // Subtle vertical / angle variations to look naturally suspended
  const yOffset = isMobile ? 0 : (index % 2 === 0 ? 0 : 15);
  const rotateZ = isMobile ? 0 : (index % 2 === 0 ? 0.4 : -0.4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ 
        opacity: 1, 
        y: yOffset,
        transition: { 
          duration: 1.2, 
          delay: 0.8 + (index * 0.25),
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true }}
      className={`relative flex flex-col items-center ${isMobile ? 'mb-40' : ''}`}
    >
      {/* 
        PHYSICAL HANGING MECHANISM 
        Structure: Rod -> Wrap-around Clamp -> Mechanical Hook -> 3D Card
      */}
      <div className={`absolute ${isMobile ? '-left-16 top-1/2 -translate-y-1/2' : '-top-[100px] left-1/2 -translate-x-1/2'} flex flex-col items-center z-30`}>
        
        {/* The ENGINEERED CLAMP (Wrapped around the cylindrical rod) */}
        <div className="relative group">
          {/* Main Clamp Body (Front half visible) */}
          <div className={`${isMobile ? 'w-8 h-12' : 'w-14 h-10'} bg-gradient-to-br from-[#E8C47A] via-[#C5A059] to-[#8A6D3B] border-[0.5px] border-white/20 shadow-[0_5px_15px_rgba(0,0,0,0.6)] rounded-sm relative z-10`}>
            {/* Clamp Detailing (Bolts/Grooves) */}
            <div className="absolute top-1/2 left-1 w-2 h-2 rounded-full bg-black/20 border border-white/10 -translate-y-1/2" />
            <div className="absolute top-1/2 right-1 w-2 h-2 rounded-full bg-black/20 border border-white/10 -translate-y-1/2" />
            
            {/* Inner curve indicating it's wrapping around a cylinder */}
            <div className={`absolute ${isMobile ? 'inset-y-0 left-0 w-2' : 'inset-x-0 top-0 h-2'} bg-black/10 rounded-full`} />
          </div>
          
          {/* Clamp Shadow on Rod */}
          <div className={`absolute ${isMobile ? 'left-full top-0 w-4 h-full' : 'top-full left-0 w-full h-4'} bg-black/30 blur-sm -z-10`} />
        </div>

        {/* The MECHANICAL HOOK / C-LINK */}
        <div className={`${isMobile ? 'w-16 h-0.5' : 'w-0.5 h-16'} bg-gradient-to-b from-[#C5A059] to-[#8A6D3B] relative flex items-center justify-center`}>
          {/* Upper Pivot Point */}
          <div className="absolute top-0 w-2.5 h-2.5 rounded-full bg-[#8A6D3B] border border-[#C5A059]/50 shadow-inner" />
          
          {/* The Hook Shape (visible connection to card) */}
          <div className={`absolute bottom-0 ${isMobile ? 'right-0' : ''} flex flex-col items-center`}>
            {/* Loop through card lid */}
            <div className="w-5 h-6 border-2 border-[#C5A059] border-t-0 rounded-b-full shadow-lg" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] -mt-1 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
          </div>
        </div>
      </div>

      {/* 3D HEAVY METAL PLAQUE */}
      <motion.div 
        animate={{ 
          rotateZ: [rotateZ, rotateZ + 0.2, rotateZ],
          y: [yOffset, yOffset - 2, yOffset],
          rotateX: [0, 1, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.7
        }}
        className="w-[300px] bg-[#0A121E] border-[1px] border-[#C5A059]/40 rounded-sm p-8 text-center shadow-[0_40px_80px_rgba(0,0,0,1),inset_0_2px_10px_rgba(255,255,255,0.05)] relative group preserve-3d"
      >
        {/* Metal Bevel (Subtle inner glow on edges) */}
        <div className="absolute inset-0 border-t border-l border-white/5 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/60 pointer-events-none" />
        
        {/* 3D Underside Thickness Effect */}
        <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#1a1d22] -z-10" />

        {/* Brushed Metal Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
        
        <div className="relative z-10">
          {/* Editorial Index Header */}
          <div className="flex justify-between items-center w-full mb-8 opacity-60">
            <span className="text-[#C5A059] font-technical font-bold text-[9px] tracking-widest">SSC_{number}</span>
            <div className="h-[1px] flex-grow mx-4 bg-[#C5A059]/10" />
            <span className="text-[#C5A059] font-technical font-bold text-[9px] tracking-widest">SEC_0{index}</span>
          </div>
          
          {/* Icon in Recess */}
          <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-[#C5A059]/20 rounded-sm bg-black/20 shadow-inner group-hover:bg-[#C5A059]/5 transition-all duration-500">
            <Icon className="w-8 h-8 text-[#C5A059]" strokeWidth={1.5} />
          </div>
          
          <h4 className="text-[#C5A059] font-heading font-extrabold text-[34px] mb-1 tracking-tighter uppercase">{year}</h4>
          <h5 className="text-white font-technical font-bold text-[11px] tracking-[0.3em] uppercase mb-6 opacity-80">{title}</h5>
          
          <div className="w-12 h-[1px] bg-[#C5A059]/40 mx-auto mb-6 shadow-[0_0_10px_rgba(197,160,89,0.3)]" />
          
          <p className="text-white/40 text-[15px] font-light leading-relaxed">
            {content}
          </p>
        </div>

        {/* Ambient Reflective Light (Bottom edge) */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      </motion.div>
    </motion.div>
  );
};

const TrustIcon = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-10 h-10 flex items-center justify-center border border-[#C5A059]/20 rounded-full bg-[#C5A059]/5">
      <Icon className="w-5 h-5 text-[#C5A059]" />
    </div>
    <span className="text-[10px] lg:text-xs font-technical font-bold text-white/70 tracking-widest uppercase text-center max-w-[120px]">
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