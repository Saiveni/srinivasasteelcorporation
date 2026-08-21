import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, MapPin, Truck, Factory } from "lucide-react";

interface StatItemProps {
  number: number;
  suffix: string;
  label: string;
  subLabel: string;
  icon: any;
  index: number;
}

const StatItem = ({ number, suffix, label, subLabel, icon: Icon, index }: StatItemProps) => {
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
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4 py-6 group cursor-default transition-colors duration-300 hover:bg-white/[0.02] rounded-xl"
    >
      {/* Micro-technical label */}
      <div className="absolute top-2 left-4 text-[7px] font-technical tracking-[0.2em] text-white/20 uppercase hidden lg:block">
        {subLabel}
      </div>

      <div className="text-ssc-gold mb-4 transition-all duration-500 group-hover:scale-110 group-hover:brightness-125">
        <Icon size={18} strokeWidth={1.2} />
      </div>

      <div className="text-[32px] sm:text-[38px] lg:text-[44px] font-heading font-[400] text-white leading-none mb-3 tracking-tight transition-transform duration-500 group-hover:-translate-y-[3px]">
        {count}{suffix}
      </div>

      <div className="text-[9px] lg:text-[10px] text-white/40 font-technical font-[500] uppercase tracking-[0.25em] leading-relaxed">
        {label}
      </div>
      
      {index < 3 && (
        <div className="hidden lg:block absolute -right-[1px] top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/5" />
      )}
    </motion.div>
  );
};

export const TrustStatsBar = () => {
  const stats = [
    { number: 30, suffix: "+", label: "YEARS OF TRUST", subLabel: "01 / QUALITY", icon: Award },
    { number: 3, suffix: "", label: "STRATEGIC LOCATIONS", subLabel: "02 / NETWORK", icon: MapPin },
    { number: 500, suffix: "+", label: "TONS SUPPLY CAPACITY", subLabel: "03 / CAPACITY", icon: Factory },
    { number: 100, suffix: "%", label: "ON-TIME DELIVERY", subLabel: "04 / DELIVERY", icon: Truck },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full relative z-20 bg-[#F1F3F6] overflow-visible pb-12 lg:pb-20">
      {/* Light Engineering Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #111C2F 1px, transparent 1px), linear-gradient(to bottom, #111C2F 1px, transparent 1px)',
             backgroundSize: '80px 80px'
           }} 
      />
      
      {/* Technical Measurement Lines (Invisible hints) */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-ssc-navy/5 hidden lg:block" />
      <div className="absolute top-0 right-10 w-[1px] h-full bg-ssc-navy/5 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px] relative">
        <div className="relative mt-8 sm:mt-12 lg:mt-[-85px] mb-8 lg:mb-0">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full mx-auto backdrop-blur-[12px] bg-[#0C1828]/94 rounded-[24px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden border border-white/10"
            style={{ 
              background: 'linear-gradient(135deg, #16283E 0%, #0B1728 100%)',
            }}
          >
            {/* Precision Edge Detailing */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-ssc-gold rounded-b-full" />
            
            {/* Technical Labels around the console */}
            <div className="absolute top-4 left-6 hidden lg:block">
              <span className="text-[7px] text-white/10 font-technical tracking-[0.3em]">SEC-IDX // 4.0</span>
            </div>
            <div className="absolute bottom-4 right-6 hidden lg:block">
              <span className="text-[7px] text-white/10 font-technical tracking-[0.3em]">VERIFIED // 2026</span>
            </div>

            <div className="px-6 py-10 lg:px-12 lg:py-14">
              {/* Console Header */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-12 border-b border-white/5 pb-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-ssc-gold text-[10px] lg:text-[11px] font-technical font-bold tracking-[0.4em] uppercase mb-2">
                    STEEL PERFORMANCE INDEX
                  </h3>
                  <p className="text-white/40 text-[9px] lg:text-[10px] font-technical font-medium tracking-[0.1em] uppercase">
                    ENGINEERED FOR RELIABLE DELIVERY
                  </p>
                </div>
                <div className="hidden lg:block">
                  <span className="text-white/20 text-[9px] font-technical font-bold tracking-[0.2em] uppercase">
                    SSC / SPEC-01
                  </span>
                </div>
              </div>

              {/* Statistics Grid: 2x2 Mobile, 4-column Desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-0 items-start">
                {stats.map((stat, index) => (
                  <StatItem 
                    key={index} 
                    {...stat} 
                    index={index}
                  />
                ))}
              </div>
            </div>
            
            {/* Very subtle measurement ticks on top horizontal divider */}
            <div className="absolute top-[138px] left-0 w-full h-[1px] flex justify-between px-12 pointer-events-none opacity-20 hidden lg:flex">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-[1px] h-[3px] bg-white/30" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};