import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 20 : 50, rotateX: -10 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { 
          duration: 0.8, 
          delay: 0.4 + (index * 0.2),
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      viewport={{ once: true }}
      className={`relative flex flex-col items-center ${isMobile ? 'mb-16' : ''}`}
    >
      {/* HANGING HOOK & CLAMP */}
      <div className={`absolute ${isMobile ? '-left-8 top-1/2 -translate-y-1/2 w-8' : '-top-16 left-1/2 -translate-x-1/2 h-16'} flex flex-col items-center z-20`}>
        {/* Clamp on Rod */}
        <div className={`${isMobile ? 'w-4 h-6 rounded-sm' : 'w-6 h-4 rounded-sm'} bg-gradient-to-br from-[#D4AF37] via-[#C5A059] to-[#8A6D3B] border border-white/20 shadow-lg`} />
        {/* Hanging Line/Hook */}
        <div className={`${isMobile ? 'h-[2px] w-full' : 'w-[2px] h-full'} bg-gradient-to-b from-[#C5A059] to-transparent opacity-60`} />
        {/* Connection Pin */}
        <div className="w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
      </div>

      {/* 3D CARD */}
      <motion.div 
        animate={{ 
          y: [0, -4, 0],
          rotate: [0, 0.5, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: index * 0.5
        }}
        className="w-full max-w-[280px] bg-[#0A121E] border border-[#C5A059]/30 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] group relative"
      >
        {/* Depth Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C5A059]/20" />
        
        {/* Card Content */}
        <div className="p-6 flex flex-col items-center text-center relative z-10">
          <div className="flex justify-between w-full mb-6">
            <span className="text-[#C5A059] font-technical font-bold text-xs tracking-widest">{number}</span>
            <span className="text-[#C5A059] font-technical font-bold text-xs tracking-widest">{number}</span>
          </div>
          
          <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[#C5A059]/20 rounded-lg bg-[#C5A059]/5">
            <Icon className="w-6 h-6 text-[#C5A059]" />
          </div>
          
          <div className="mb-2">
            <span className="text-[#C5A059] font-heading font-extrabold text-2xl tracking-tight">{year}</span>
          </div>
          
          <div className="mb-4">
            <span className="text-white font-technical font-bold text-[10px] tracking-[0.2em] uppercase opacity-80">{title}</span>
          </div>
          
          <p className="text-white/50 text-sm font-light leading-relaxed">
            {content}
          </p>
        </div>

        {/* Metallic Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* Hover Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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

  const rodReveal = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);
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
      className="relative py-24 lg:py-40 bg-[#050A14] overflow-hidden"
    >
      {/* INDUSTRIAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
               backgroundSize: '80px 80px'
             }} 
        />
        {/* Blueprint Lines */}
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-[#C5A059]/5" />
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-[#C5A059]/5" />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* HEADER BLOCK */}
        <div className="text-center mb-32 lg:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#C5A059]/40" />
              <span className="text-[#C5A059] text-xs lg:text-sm font-technical font-bold tracking-[0.4em] uppercase">
                OUR JOURNEY
              </span>
              <div className="w-12 h-[1px] bg-[#C5A059]/40" />
            </div>
            
            <h2 className="text-[36px] lg:text-[72px] text-white font-heading font-extrabold leading-[1.1] mb-8 tracking-tighter uppercase">
              STRONG ROOTS.<br />
              <span className="text-[#C5A059]">STRONGER FUTURE.</span>
            </h2>
            
            <p className="text-white/50 text-base lg:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              From a strong beginning in 1994 to becoming a trusted steel supplier across multiple locations, our journey is built on quality, trust and consistent delivery.
            </p>
          </motion.div>
        </div>

        {/* TIMELINE ROD & CARDS */}
        <div className="relative pb-32">
          
          {/* THE STEEL ROD */}
          <div className="relative z-10 mb-24 lg:mb-0 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-12">
            <div className="relative w-full h-full flex justify-center lg:block">
              
              {/* Desktop Horizontal Rod */}
              <div className="hidden lg:block relative w-full h-12">
                <motion.div 
                  style={{ width: rodReveal, opacity: rodOpacity }}
                  className="absolute inset-0 h-10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] rounded-full overflow-hidden"
                >
                  {/* 3D Steel Cylinder */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-[#3a3f47] to-[#0a0c10] border-t border-white/5" />
                  
                  {/* High-Definition TMT Ribbing */}
                  <div className="absolute inset-0 opacity-70 mix-blend-overlay" 
                       style={{ 
                         backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(0,0,0,0.8) 10px, rgba(0,0,0,0.8) 14px, rgba(255,255,255,0.05) 14px, rgba(255,255,255,0.05) 16px)`,
                         backgroundSize: '45px 100%'
                       }} 
                  />

                  {/* Longitudinal Reinforcement Lines */}
                  <div className="absolute top-[25%] left-0 w-full h-[1px] bg-black/40" />
                  <div className="absolute bottom-[25%] left-0 w-full h-[1px] bg-white/5" />
                  
                  {/* Branding/Text on Rod */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="text-[10px] font-technical tracking-[1em] text-white">SSC TMT 500 D</span>
                  </div>

                  {/* Animated Gold Sheen */}
                  <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A059]/10 to-transparent skew-x-[-30deg]"
                  />
                </motion.div>
              </div>

              {/* Mobile Vertical Rod */}
              <div className="lg:hidden relative w-10 h-[800px]">
                <motion.div 
                  style={{ height: rodReveal, opacity: rodOpacity }}
                  className="absolute inset-0 w-8 mx-auto shadow-[10px_0_30px_rgba(0,0,0,0.8)] rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-[#3a3f47] to-[#0a0c10] border-l border-white/5" />
                  <div className="absolute inset-0 opacity-70 mix-blend-overlay" 
                       style={{ 
                         backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.8) 10px, rgba(0,0,0,0.8) 14px, rgba(255,255,255,0.05) 14px, rgba(255,255,255,0.05) 16px)`,
                         backgroundSize: '100% 45px'
                       }} 
                  />
                  <div className="absolute top-0 left-[25%] h-full w-[1px] bg-black/40" />
                  <div className="absolute top-0 right-[25%] h-full w-[1px] bg-white/5" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* MILESTONE CARDS GRID */}
          <div className="relative z-20">
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-8 pt-32">
              {milestones.map((m, i) => (
                <MilestoneCard key={i} index={i} {...m} />
              ))}
            </div>

            {/* Mobile Column */}
            <div className="lg:hidden flex flex-col items-center pl-16">
              {milestones.map((m, i) => (
                <MilestoneCard key={i} index={i} {...m} isMobile />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ICON STRIP */}
        <div className="mt-20 pt-20 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
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