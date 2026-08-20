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
    return () => {};
  }, [isInView, number, shouldReduceMotion]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center relative px-4 group">
      {/* Icon: Gold, Thin stroke */}
      <div className="text-ssc-gold mb-4 opacity-90">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Number: White, precise sans-serif */}
      <div className="text-[48px] sm:text-[52px] lg:text-[60px] font-heading font-[500] text-white leading-none mb-2 tracking-tight">
        {count}{suffix}
      </div>

      {/* Label: Muted cool gray, uppercase, letter-spacing */}
      <div className="text-[10px] lg:text-[11px] text-[#94A3B8] font-technical font-[600] uppercase tracking-[0.24em] whitespace-nowrap">
        {label}
      </div>
      
      {/* Desktop Vertical Technical Divider (Measurement Marks) */}
      {index < 3 && (
        <div className="hidden lg:block absolute -right-[1px] top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-white/10">
          <div className="absolute top-0 -left-[2px] w-[5px] h-[1px] bg-white/20" />
          <div className="absolute bottom-0 -left-[2px] w-[5px] h-[1px] bg-white/20" />
        </div>
      )}
    </div>
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
      {/* 
          1. HERO → STATS TRANSITION 
          Dark navy angular shape extending downward from the Hero.
      */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-ssc-navy pointer-events-none" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60px, 0 100%)' }} />

      {/* 
          2. FLOATING PANEL (STEEL PERFORMANCE INDEX)
          Deep navy panel overlapping the transition.
      */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px] relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative top-[-60px] bg-[#111C2F] border-[1px] border-white/10 border-t-ssc-gold shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2px] overflow-hidden"
        >
          {/* Subtle engineering details */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
               style={{ 
                 backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
               }} 
          />
          {/* Technical horizontal calibration lines */}
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/5" />
          
          {/* Center Marker: Tiny gold crosshair */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
             <div className="w-[1px] h-3 bg-ssc-gold/40" />
             <div className="w-2 h-[1px] bg-ssc-gold/40 -mt-1.5" />
          </div>

          {/* Coordinate Marks (Subtle) */}
          <div className="absolute top-2 right-4 text-[8px] font-mono text-white/20 select-none tracking-widest uppercase">
            REF. INDEX SSC_2026
          </div>

          <div className="px-6 py-12 lg:py-16">
            {/* Panel Header */}
            <div className="flex flex-col items-center mb-12 text-center">
              <span className="text-ssc-gold text-[10px] lg:text-[11px] font-technical font-bold tracking-[0.28em] uppercase mb-2">
                STEEL PERFORMANCE INDEX
              </span>
              <span className="text-[#94A3B8] text-[9px] lg:text-[10px] font-technical tracking-[0.2em] uppercase opacity-80">
                ENGINEERED FOR RELIABLE DELIVERY
              </span>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 lg:gap-0 items-center justify-center">
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

      {/* 
          3. VISIBLE LIGHT BACKGROUND GAP 
          Breathing space before Products.
      */}
      <div className="h-[80px] lg:h-[120px]" />
    </section>
  );
};