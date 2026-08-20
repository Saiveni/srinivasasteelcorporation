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
    <section className="w-full relative z-20 bg-[#E7EBF0] overflow-hidden">
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
        <div className="relative top-[-70px]">
          {/* 9. BACKING PLATE: Physically mounted feel */}
          <div className="absolute inset-0 translate-y-[6px] bg-[#0A121F] rounded-[2px]" />
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'linear-gradient(110deg, #111C2F 0%, #15233A 100%)',
            }}
            className="relative bg-[#111C2F] border-[1px] border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] rounded-[2px] overflow-hidden"
          >
            {/* 2. PREMIUM STEEL SURFACE: Subtle brushed grain */}
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.03]" 
                 style={{ 
                   backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 2px)',
                   backgroundSize: '100% 2px'
                 }} 
            />

            {/* 7. ENGINEERING GRID: Barely noticeable (2-4%) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
                 style={{ 
                   backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                   backgroundSize: '60px 60px'
                 }} 
            />

            {/* 3. PANEL SHAPE: Tiny precision chamfers at top corners (8px) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#E7EBF0]" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#E7EBF0]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
            </div>

            {/* 4. SIGNATURE TOP EDGE: Thin gold line + center marker */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-ssc-gold/40" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
               {/* Tiny gold crosshair marker */}
               <div className="w-[10px] h-[1px] bg-ssc-gold" />
               <div className="w-[1px] h-[6px] bg-ssc-gold -mt-[3.5px]" />
            </div>

            {/* 8. TECHNICAL MICRO DETAILS */}
            <div className="absolute top-3 left-4 text-[7px] font-technical font-bold text-white/40 tracking-[0.2em] uppercase">A-01</div>
            <div className="absolute top-3 right-4 text-[7px] font-technical font-bold text-white/40 tracking-[0.2em] uppercase">SSC / SPEC-01</div>
            <div className="absolute bottom-3 left-4 text-[7px] font-technical font-bold text-white/40 tracking-[0.2em] uppercase">ENGINEERING DATA</div>
            <div className="absolute bottom-3 right-4 text-[7px] font-technical font-bold text-white/40 tracking-[0.2em] uppercase">METRIC / PERFORMANCE</div>

            <div className="px-6 py-10 lg:py-14">
              {/* 5. PANEL HEADER */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 border-b border-white/5 pb-6">
                <div className="text-left">
                  <h3 className="text-ssc-gold text-[11px] lg:text-[12px] font-technical font-bold tracking-[0.3em] uppercase mb-1">
                    STEEL PERFORMANCE INDEX
                  </h3>
                  <p className="text-[#94A3B8] text-[9px] lg:text-[10px] font-technical font-medium tracking-[0.15em] uppercase opacity-70">
                    ENGINEERED FOR RELIABLE DELIVERY
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 text-left lg:text-right">
                  <span className="text-[#64748B] text-[8px] font-technical font-bold tracking-[0.2em] uppercase">
                    REF. SSC / 1994–2026
                  </span>
                </div>
              </div>

              {/* 6. TECHNICAL HEADER LINE: Thin muted line + gold dot */}
              <div className="relative w-full h-[1px] bg-white/5 mb-12 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold shadow-[0_0_8px_rgba(212,162,76,0.4)]" />
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
      </div>

      {/* 3. VISIBLE LIGHT BACKGROUND GAP */}
      <div className="h-[40px] lg:h-[80px]" />
    </section>
  );
};