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
  
  // Varied vertical positions for desktop cards as requested
  const yOffset = isMobile ? 0 : (index % 2 === 0 ? 0 : 20);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: yOffset,
        transition: { 
          duration: 1.2, 
          delay: 0.6 + (index * 0.2),
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true }}
      className={`relative flex flex-col items-center ${isMobile ? 'mb-32' : ''}`}
    >
      {/* MECHANICAL CONNECTION: Rod -> Clamp -> Hook -> Card */}
      <div className={`absolute ${isMobile ? '-left-12 top-1/2 -translate-y-1/2' : '-top-20 left-1/2 -translate-x-1/2'} flex flex-col items-center z-20`}>
        {/* Clamp (Machine part around rod) */}
        <div className={`${isMobile ? 'w-6 h-10' : 'w-12 h-8'} bg-gradient-to-br from-[#D4AF37] via-[#C5A059] to-[#8A6D3B] border border-white/20 shadow-2xl rounded-sm`} />
        
        {/* Realistic Metal Hook/Link */}
        <div className={`${isMobile ? 'w-10 h-[3px]' : 'w-[3px] h-12'} bg-gradient-to-b from-[#C5A059] to-[#8A6D3B] shadow-md relative`}>
           {/* Connection Bolt */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
        </div>
      </div>

      {/* 3D Engineered Plaque */}
      <motion.div 
        animate={{ 
          rotate: [0, index % 2 === 0 ? 0.5 : -0.5, 0],
          y: [yOffset, yOffset - 3, yOffset]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.5
        }}
        className="w-[280px] bg-[#0A121E] border-[0.5px] border-[#C5A059]/40 rounded-sm p-7 text-center shadow-[0_30px_60px_rgba(0,0,0,0.9)] relative group"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Metallic Bevel/Edge */}
        <div className="absolute inset-0 border-b-2 border-r-2 border-white/5 pointer-events-none" />
        
        {/* Blueprint Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-center w-full mb-6 px-1">
            <span className="text-[#C5A059] font-technical font-bold text-[10px] tracking-widest">{number}</span>
            <div className="h-[1px] flex-grow mx-4 bg-[#C5A059]/20" />
            <span className="text-[#C5A059] font-technical font-bold text-[10px] tracking-widest">{number}</span>
          </div>
          
          <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-[#C5A059]/20 rounded-full bg-[#C5A059]/5 group-hover:bg-[#C5A059]/10 transition-colors duration-500">
            <Icon className="w-7 h-7 text-[#C5A059]" />
          </div>
          
          <h4 className="text-[#C5A059] font-heading font-extrabold text-3xl mb-1 tracking-tighter uppercase">{year}</h4>
          <h5 className="text-white font-technical font-bold text-[11px] tracking-[0.25em] uppercase mb-5 opacity-80">{title}</h5>
          
          <div className="w-10 h-[1px] bg-[#C5A059]/40 mx-auto mb-5" />
          
          <p className="text-white/50 text-sm font-light leading-relaxed">
            {content}
          </p>
        </div>

        {/* Realistic Extrusion Shadow */}
        <div className="absolute -bottom-2 -right-2 inset-0 bg-black/40 -z-10 blur-sm rounded-sm" />
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
  const rodOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  
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
      className="relative py-32 lg:py-48 bg-[#050A14] overflow-hidden"
    >
      {/* ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
               backgroundSize: '100px 100px'
             }} 
        />
        {/* Construction Detail Lines */}
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-[#C5A059]/5" />
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-[#C5A059]/5" />
        
        {/* Atmospheric Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[160px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* HEADER BLOCK */}
        <div className="text-center mb-32 lg:mb-56">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#C5A059] text-xs lg:text-sm font-technical font-bold tracking-[0.5em] uppercase mb-6 block">
              OUR JOURNEY
            </span>
            <h2 className="text-[42px] lg:text-[84px] text-white font-heading font-extrabold leading-[0.95] mb-10 tracking-tighter uppercase">
              STRONG ROOTS.<br />
              <span className="text-[#C5A059]">STRONGER FUTURE.</span>
            </h2>
            <p className="text-white/50 text-base lg:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              From a strong beginning in 1994 to becoming a trusted steel supplier across multiple locations, our journey is built on quality, trust and consistent delivery.
            </p>
          </motion.div>
        </div>

        {/* TIMELINE INSTALLATION */}
        <div className="relative pb-40">
          
          {/* THE 3D TMT STEEL ROD */}
          <div className="relative lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-16 z-10 flex justify-center mb-24 lg:mb-0">
            <div className="relative w-full max-w-[1200px] h-full flex justify-center lg:block">
              
              {/* DESKTOP: Horizontal TMT Bar */}
              <div className="hidden lg:block relative w-full h-12">
                <motion.div 
                  style={{ width: rodReveal, opacity: rodOpacity }}
                  className="absolute inset-0 shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-full overflow-hidden"
                >
                  {/* 3D Cylinder Base */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#3a3f47] to-[#0a0c10] border-t border-white/5" />
                  
                  {/* Realistic TMT Ribbing (Diagonal Marks) */}
                  <div className="absolute inset-0 opacity-80 mix-blend-overlay" 
                       style={{ 
                         backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(0,0,0,0.9) 10px, rgba(0,0,0,0.9) 15px, rgba(255,255,255,0.05) 15px, rgba(255,255,255,0.05) 17px)`,
                         backgroundSize: '50px 100%'
                       }} 
                  />

                  {/* Longitudinal Reinforcement Marks */}
                  <div className="absolute top-[20%] left-0 w-full h-[1px] bg-black/60" />
                  <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-white/5" />

                  {/* Engineered Stamp */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <span className="text-[8px] font-technical tracking-[1.5em] text-white uppercase">SSC HIGH-TENSILE TMT 500D</span>
                  </div>
                  
                  {/* Cinematic Light Sweep */}
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg]"
                  />
                </motion.div>
              </div>

              {/* MOBILE: Vertical TMT Bar */}
              <div className="lg:hidden relative w-12 h-[1200px]">
                <motion.div 
                  style={{ height: rodReveal, opacity: rodOpacity }}
                  className="absolute inset-0 shadow-[15px_0_30px_rgba(0,0,0,0.8)] rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-[#3a3f47] to-[#0a0c10] border-l border-white/5" />
                  <div className="absolute inset-0 opacity-80 mix-blend-overlay" 
                       style={{ 
                         backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.9) 10px, rgba(0,0,0,0.9) 15px, rgba(255,255,255,0.05) 15px, rgba(255,255,255,0.05) 17px)`,
                         backgroundSize: '100% 50px'
                       }} 
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* HANGING MILESTONE PLACEMENT */}
          <div className="relative z-20">
            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-4 gap-8 pt-32 max-w-[1200px] mx-auto">
              {milestones.map((m, i) => (
                <MilestoneCard key={i} index={i} {...m} />
              ))}
            </div>

            {/* Mobile Vertical Layout */}
            <div className="lg:hidden flex flex-col items-center pl-20">
              {milestones.map((m, i) => (
                <MilestoneCard key={i} index={i} {...m} isMobile />
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER ICON STRIP */}
        <div className="mt-20 pt-20 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
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