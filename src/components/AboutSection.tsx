import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Factory, Map, Handshake, MapPin } from 'lucide-react';

const MilestoneCard = ({ index, year, title, content, icon: Icon, isMobile }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 + (index * 0.2), ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${isMobile ? 'mb-24' : ''}`}
    >
      {/* MECHANICAL CONNECTION: Clamp -> Hook -> Card */}
      <div className={`flex flex-col items-center ${isMobile ? 'absolute -left-12' : ''}`}>
        {/* Clamp (Machine part around rod) */}
        <div className={`bg-gradient-to-br from-[#D4AF37] to-[#8A6D3B] rounded-sm ${isMobile ? 'w-8 h-4' : 'w-10 h-6'} shadow-[0_2px_5px_rgba(0,0,0,0.8)] z-30`} />
        {/* Realistic Hook/Link */}
        <div className={`bg-gradient-to-b from-[#C5A059] to-[#8A6D3B] ${isMobile ? 'w-2 h-10' : 'w-3 h-16'} shadow-md`} />
      </div>

      {/* 3D Engineered Card */}
      <motion.div 
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        className="w-[280px] bg-[#0A121E] border-[0.5px] border-[#C5A059]/40 rounded-lg p-6 text-center shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#C5A059]/30 rounded-full bg-[#C5A059]/5">
            <Icon className="w-6 h-6 text-[#C5A059]" />
          </div>
          <h4 className="text-[#C5A059] font-heading font-extrabold text-3xl mb-2">{year}</h4>
          <h5 className="text-white font-technical font-bold text-xs tracking-[0.2em] uppercase mb-4 opacity-90">{title}</h5>
          <p className="text-white/60 text-sm leading-relaxed">{content}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const rodReveal = useTransform(scrollYProgress, [0.05, 0.4], ["0%", "100%"]);

  const milestones = [
    { year: "1994", title: "ESTABLISHED", content: "Founded Srinivasa Steel Corporation in Hyderabad.", icon: Factory },
    { year: "2000s", title: "EXPANDED TO VIZAG", content: "Expanded operations to Visakhapatnam steel market.", icon: Map },
    { year: "2010s", title: "MOU DEALER STATUS", content: "Become MoU Dealer for Vizag Steel Plant.", icon: Handshake },
    { year: "TODAY", title: "3 LOCATIONS, 30+ YEARS", content: "3 locations. 30+ years of trust. Thousands of tons delivered.", icon: MapPin }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#050A14] overflow-hidden relative">
      <div className="container-wide relative z-10 text-center mb-32">
        <span className="text-[#C5A059] text-xs font-technical font-bold tracking-[0.4em] uppercase mb-6 block">OUR JOURNEY</span>
        <h2 className="text-[48px] lg:text-[72px] text-white font-heading font-extrabold uppercase leading-[0.9] mb-8">STRONG ROOTS.<br/><span className="text-[#C5A059]">STRONGER FUTURE.</span></h2>
      </div>

      {/* TIMELINE INSTALLATION */}
      <div className="relative z-20 min-h-[600px] flex justify-center">
        {/* Horizontal Desktop Steel Rod */}
        <div className="hidden lg:block w-[1000px] h-20 relative">
          <motion.div style={{ width: rodReveal }} className="absolute h-12 bg-gradient-to-b from-[#333] via-[#777] to-[#222] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
             <div className="w-full h-full opacity-40 bg-[repeating-linear-gradient(135deg,transparent,transparent_15px,rgba(0,0,0,1)_15px,rgba(0,0,0,1)_20px)]" />
          </motion.div>
          <div className="absolute top-12 left-0 w-[1000px] flex justify-between px-24">
            {milestones.map((m, i) => <MilestoneCard key={i} index={i} {...m} />)}
          </div>
        </div>

        {/* Vertical Mobile Steel Rod */}
        <div className="lg:hidden w-20 relative flex flex-col items-center">
          <motion.div style={{ height: rodReveal }} className="w-8 bg-gradient-to-r from-[#333] via-[#777] to-[#222] rounded-full shadow-[10px_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
             <div className="w-full h-full opacity-40 bg-[repeating-linear-gradient(45deg,transparent,transparent_15px,rgba(0,0,0,1)_15px,rgba(0,0,0,1)_20px)]" />
          </motion.div>
          <div className="absolute top-0 w-full flex flex-col items-center pt-16">
            {milestones.map((m, i) => <MilestoneCard key={i} index={i} {...m} isMobile />)}
          </div>
        </div>
      </div>
    </section>
  );
};