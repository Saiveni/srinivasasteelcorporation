import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, MapPin, Truck, Factory } from "lucide-react";

interface StatItemProps {
  number: number;
  suffix: string;
  label: string;
  icon: any;
  index: number;
}

const StatItem = ({ number, suffix, label, icon: Icon, index }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(number);
      return;
    }

    if (isInView) {
      let start = 0;
      const end = number;
      const duration = 1400;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number, shouldReduceMotion]);

  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center relative px-2 sm:px-4 group cursor-default"
    >
      {/* 3. ICONS: Gold, Thin stroke */}
      <div className="text-ssc-gold mb-3 lg:mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:brightness-125">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      {/* 2. STATISTIC HIERARCHY: Sophisticated Number */}
      <div className="text-[32px] sm:text-[38px] lg:text-[46px] font-heading font-[300] text-white leading-none mb-2 tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
        {count}{suffix}
      </div>

      {/* 4. STAT LABELS: Muted uppercase */}
      <div className="text-[8px] sm:text-[9px] lg:text-[10px] text-white/50 font-technical font-[600] uppercase tracking-[0.2em] whitespace-nowrap">
        {label}
      </div>
      
      {/* 5. COLUMN DIVIDERS: Glass separators */}
      {index < 3 && (
        <div className="hidden lg:block absolute -right-[1px] top-1/2 -translate-y-1/2 h-16 w-[1px] bg-white/10" />
      )}
    </motion.div>
  );
};

export const TrustStatsBar = () => {
  const stats = [
    { number: 30, suffix: "+", label: "YEARS OF TRUST", icon: Award },
    { number: 3, suffix: "", label: "STRATEGIC LOCATIONS", icon: MapPin },
    { number: 500, suffix: "+", label: "TONS SUPPLY CAPACITY", icon: Factory },
    { number: 100, suffix: "%", label: "ON-TIME DELIVERY", icon: Truck },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full relative z-20 bg-[#E7EBF0]">
      {/* 11. BACKGROUND AROUND PANEL: Subtle diagonal engineering lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(45deg, #111C2F 0, #111C2F 1px, transparent 0, transparent 40px)',
           }} 
      />
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #111C2F 1px, transparent 1px), linear-gradient(to bottom, #111C2F 1px, transparent 1px)',
             backgroundSize: '200px 200px'
           }} 
      />

      {/* 
          12. HERO → PANEL TRANSITION 
          Precision architectural cut (angular geometry).
      */}
      <div className="absolute top-0 left-0 w-full h-[140px] bg-ssc-navy pointer-events-none" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40px, 0 120px)' }} />

      {/* 
          2. FLOATING PANEL (STEEL PERFORMANCE INDEX)
          Deep premium navy panel with brushed-steel grain.
      */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1500px] relative">
        {/* 
            FIX: Adjusted top positioning to prevent clipping. 
            The panel is moved downward (less negative offset) and overflow:hidden is removed from the section.
        */}
        <div className="relative top-[-25px] sm:top-[-30px] lg:top-[-35px] px-2 sm:px-0">
          {/* 1. OUTER SHADOW & DEPTH BACKING */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 translate-y-[10px] sm:translate-y-[12px] bg-black/50 blur-[24px] rounded-[2px] pointer-events-none" 
          />
          
          {/* 6. LOWER EXTRUSION EDGE (Darker thickness) */}
          <div className="absolute inset-0 translate-y-[8px] bg-[#05090F] pointer-events-none"
               style={{ 
                 clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)' 
               }} 
          />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-[#111C2F] overflow-hidden group"
            style={{
              clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
            }}
          >
            {/* CNC-MACHINED OUTER FRAME */}
            <div className="absolute inset-0 border-[10px] lg:border-[14px] border-transparent pointer-events-none z-10"
                 style={{
                   background: 'linear-gradient(135deg, #1A2638 0%, #2A384D 25%, #15233A 50%, #2A384D 75%, #1A2638 100%)',
                   maskImage: 'linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)',
                   maskClip: 'content-box, border-box',
                   maskComposite: 'exclude',
                   WebkitMaskComposite: 'xor',
                   padding: '10px'
                 }}
            />

            {/* TOP-EDGE LIGHT REFLECTION (Extreme subtle highlight) */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 pointer-events-none z-20 mix-blend-overlay" />
            
            {/* INNER BEVEL & GOLD REGISTRATION MARKS */}
            <div className="absolute inset-[10px] lg:inset-[14px] pointer-events-none z-10">
              {/* Microscopic inner bevel */}
              <div className="absolute inset-0 border-[1px] border-black/40 rounded-[1px]" />
              <div className="absolute inset-0 border-[1px] border-white/5 -translate-y-[0.5px] rounded-[1px]" />
              
              {/* Gold Registration Marks (Corners) */}
              <div className="absolute top-0 left-0 w-1 h-[1px] bg-ssc-gold/40" />
              <div className="absolute top-0 left-0 w-[1px] h-1 bg-ssc-gold/40" />
              <div className="absolute top-0 right-0 w-1 h-[1px] bg-ssc-gold/40" />
              <div className="absolute top-0 right-0 w-[1px] h-1 bg-ssc-gold/40" />
            </div>

            {/* PRECISION GOLD ACCENT (Inner thin line) */}
            <div className="absolute inset-[11px] lg:inset-[15px] border-[0.5px] border-ssc-gold/20 pointer-events-none z-10" />

            {/* METALLIC MEASUREMENT TICKS (Integrated into frame) */}
            <div className="absolute top-0 left-[20%] w-[1px] h-[4px] bg-white/10 z-20" />
            <div className="absolute top-0 left-[40%] w-[1px] h-[4px] bg-white/10 z-20" />
            <div className="absolute top-0 left-[60%] w-[1px] h-[4px] bg-white/10 z-20" />
            <div className="absolute top-0 left-[80%] w-[1px] h-[4px] bg-white/10 z-20" />

            {/* SURFACE MATERIAL: Brushed grain + subtle depth gradient */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 mix-blend-overlay opacity-[0.05]" 
                   style={{ 
                     backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 2px)',
                     backgroundSize: '100% 2px'
                   }} 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-10" />
            </div>

            {/* ENGINEERING GRID: Precision cut */}
            <div className="absolute inset-[12px] lg:inset-[16px] pointer-events-none opacity-[0.03] z-0" 
                 style={{ 
                   backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                   backgroundSize: '60px 60px'
                 }} 
            />

            {/* TECHNICAL MARKERS (Integrated into frame padding) */}
            <div className="absolute top-[3px] left-[18px] lg:left-[22px] text-[7px] font-technical font-bold text-white/30 tracking-[0.2em] uppercase z-20">A-01</div>
            <div className="absolute top-[3px] right-[18px] lg:right-[22px] text-[7px] font-technical font-bold text-white/30 tracking-[0.2em] uppercase z-20">SSC / SPEC-01</div>
            <div className="absolute bottom-[3px] left-[18px] lg:left-[22px] text-[7px] font-technical font-bold text-white/30 tracking-[0.2em] uppercase z-20">ENGINEERING DATA</div>
            <div className="absolute bottom-[3px] right-[18px] lg:right-[22px] text-[7px] font-technical font-bold text-white/30 tracking-[0.2em] uppercase z-20">METRIC / PERFORMANCE</div>

            {/* GOLD CENTER MARKER with measurement line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
               <div className="w-[14px] h-[1px] bg-ssc-gold" />
               <div className="w-[1px] h-[10px] bg-ssc-gold -mt-[5px]" />
               <div className="w-[80px] h-[0.5px] bg-ssc-gold/10 -mt-[5px]" />
            </div>



            <div className="px-5 py-8 sm:px-6 sm:py-10 lg:py-14">
              {/* 5. PANEL HEADER & 13. MOBILE HEADER */}
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-10 border-b border-white/5 pb-6 text-center lg:text-left"
              >
                <div>
                  <h3 className="text-ssc-gold text-[10px] sm:text-[11px] lg:text-[12px] font-technical font-bold tracking-[0.25em] lg:tracking-[0.3em] uppercase mb-1">
                    STEEL PERFORMANCE INDEX
                  </h3>
                  <p className="text-[#94A3B8] text-[8px] sm:text-[9px] lg:text-[10px] font-technical font-medium tracking-[0.12em] lg:tracking-[0.15em] uppercase opacity-70">
                    ENGINEERED FOR RELIABLE DELIVERY
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 lg:text-right">
                  <span className="text-[#64748B] text-[8px] font-technical font-bold tracking-[0.2em] uppercase">
                    REF. SSC / 1994–2026
                  </span>
                </div>
              </motion.div>

              {/* 6. TECHNICAL HEADER LINE: Thin muted line + gold dot */}
              <div className="relative w-full h-[1px] bg-white/5 mb-10 lg:mb-12 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold shadow-[0_0_8px_rgba(212,162,76,0.4)]" />
              </div>

              {/* 11. MOBILE GRID: 2x2 layout */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-4 lg:gap-0 items-center justify-center">
                {stats.map((stat, index) => (
                  <StatItem 
                    key={index} 
                    {...stat} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 15. SECTION SPACING: 64-96px breathing space */}
      <div className="h-[64px] sm:h-[80px] lg:h-[96px]" />
    </section>
  );
};