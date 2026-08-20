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
    <section className="w-full relative z-20 bg-[#F1F3F6] overflow-visible">
      {/* 11. BACKGROUND: Architectural Engineering Documentation */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(45deg, #111C2F 0, #111C2F 1px, transparent 0, transparent 40px)',
           }} 
      />
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #111C2F 1px, transparent 1px), linear-gradient(to bottom, #111C2F 1px, transparent 1px)',
             backgroundSize: '100px 100px'
           }} 
      />
      {/* Soft radial lighting for background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)] opacity-50" />

      {/* 12. ATMOSPHERIC TRANSITION */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-ssc-navy to-transparent opacity-100 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1320px] relative">
        {/* 
            CARD POSITION: Overlapping the Hero
        */}
        <div className="relative top-[-30px] sm:top-[-45px] lg:top-[-70px]">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mx-auto backdrop-blur-[24px] bg-white/[0.08] border border-white/25 rounded-[24px] lg:rounded-[30px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden"
            style={{ 
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.1)'
            }}
          >
            {/* GLASS REFLECTION: Subtle diagonal highlight */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] opacity-50" />
            
            {/* GOLD CALIBRATION MARKER */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-ssc-gold/50 rounded-full" />

            <div className="px-6 py-8 sm:py-10 lg:px-16 lg:py-12">
              {/* CARD HEADER */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-10 border-b border-white/10 pb-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-ssc-gold text-[11px] lg:text-[13px] font-technical font-bold tracking-[0.35em] uppercase mb-1">
                    STEEL PERFORMANCE INDEX
                  </h3>
                  <p className="text-white/60 text-[9px] lg:text-[11px] font-technical font-medium tracking-[0.15em] uppercase">
                    ENGINEERED FOR RELIABLE DELIVERY
                  </p>
                </div>
                <div className="hidden lg:block">
                  <span className="text-white/40 text-[9px] font-technical font-bold tracking-[0.2em] uppercase">
                    SSC / SPEC-01
                  </span>
                </div>
              </div>

              {/* STATISTICS GRID: 2x2 Mobile, 4-column Desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0 items-center justify-center">
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

      {/* SECTION SPACING */}
      <div className="h-10 lg:h-16" />
    </section>
  );
};