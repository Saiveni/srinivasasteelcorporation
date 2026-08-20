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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    return undefined;
  }, [isInView, number, shouldReduceMotion]);

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.1 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 + 0.2 }
    }
  };

  return (
    <div ref={ref} className="flex flex-col items-center text-center relative px-4 group">
      {/* Icon: Gold, Thin stroke, minimal */}
      <motion.div 
        variants={iconVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-ssc-gold mb-5"
      >
        <Icon size={28} strokeWidth={1} />
      </motion.div>

      {/* Number: Dark navy, premium modern sans-serif */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[44px] sm:text-[52px] lg:text-[64px] font-heading font-[500] text-[#111C2F] leading-none mb-3 tracking-tight"
      >
        {count}{suffix}
      </motion.div>

      {/* Label: Muted dark navy/gray, uppercase, letter-spacing */}
      <motion.div
        variants={labelVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#475569] font-technical font-[600] uppercase tracking-[0.22em] whitespace-nowrap mb-4"
      >
        {label}
      </motion.div>

      {/* Measurement line (Technical Detail) */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        className="w-8 h-[1px] bg-ssc-gold/40"
      />
      
      {/* Desktop Vertical Technical Divider */}
      {index < 3 && (
        <div className="hidden lg:flex absolute -right-[50%] top-1/2 -translate-y-1/2 items-center justify-center">
          <div className="h-[70px] w-[1px] bg-[#111C2F]/10" />
          <div className="absolute h-1 w-1 bg-ssc-gold rotate-45" />
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

  const headerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-[#E7EBF0] relative overflow-hidden flex flex-col items-center z-20">
      {/* CSS Brushed Metal Texture & Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #111C2F 1px, transparent 1px), linear-gradient(to bottom, #111C2F 1px, transparent 1px), repeating-linear-gradient(0deg, #111C2F, #111C2F 1px, transparent 1px, transparent 2px)',
             backgroundSize: '80px 80px, 80px 80px, 100% 2px'
           }} 
      />
      
      {/* Blueprint Coordinate Marks */}
      <div className="absolute top-4 left-4 text-[8px] font-mono text-[#111C2F]/20 select-none">32.441 N / 81.229 E</div>
      <div className="absolute bottom-4 right-4 text-[8px] font-mono text-[#111C2F]/20 select-none">MEASUREMENT: METRIC (MM)</div>

      {/* Top Separator Band */}
      <div className="w-full h-[1px] bg-[#111C2F]/20 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#E7EBF0]">
          <div className="w-2 h-2 bg-ssc-gold rotate-45 border-[1px] border-[#111C2F]/20" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] py-[64px] sm:py-[72px] lg:py-[84px]">
        {/* Technical Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="flex flex-col items-center mb-12 sm:mb-16"
        >
          <span className="text-ssc-gold text-[11px] sm:text-[12px] font-technical font-bold tracking-[0.22em] uppercase mb-4">
            ENGINEERED FOR PERFORMANCE
          </span>
          <div className="flex items-center gap-4 w-full max-w-[200px]">
            <div className="h-[1px] flex-1 bg-[#111C2F]/10" />
            <div className="w-1.5 h-1.5 bg-ssc-gold rounded-full" />
            <div className="h-[1px] flex-1 bg-[#111C2F]/10" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[56px] gap-x-6 lg:gap-0 items-center justify-center">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              {...stat} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
