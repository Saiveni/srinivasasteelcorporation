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
      const duration = 1400; // between 1200-1600ms
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

  // Icons: fade + translateY(10px), Numbers: fade + translateY(14px), Labels: fade + translateY(10px)
  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
        delay: index * 0.1
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any, delay: index * 0.1 }
    }
  };

  const labelVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any, delay: index * 0.1 + 0.1 }
    }
  };

  return (
    <div ref={ref} className="flex flex-col items-center text-center relative group">
      {/* Icon: Gold, 26-32px, minimal */}
      <motion.div 
        variants={iconVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-ssc-gold mb-[18px] sm:mb-[20px]"
      >
        <Icon size={isMobileViewport() ? 26 : 30} strokeWidth={1.5} />
      </motion.div>

      {/* Number: Large, refined, professional, high contrast, white */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[40px] sm:text-[48px] lg:text-[64px] font-heading font-[600] text-white leading-none mb-[8px] sm:mb-[12px] tracking-[-0.01em]"
      >
        {count}{suffix}
      </motion.div>

      {/* Label: uppercase, letter-spacing, muted blue-gray */}
      <motion.div
        variants={labelVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#94A3B8] font-technical font-bold uppercase tracking-[0.24em] whitespace-nowrap"
      >
        {label}
      </motion.div>
      
      {/* Desktop Separator (between columns) */}
      {index < 3 && (
        <div className="hidden lg:block absolute -right-[50%] top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/10" />
      )}
    </div>
  );
};

// Helper for responsiveness check in component
const isMobileViewport = () => typeof window !== "undefined" && window.innerWidth < 1024;

export const TrustStatsBar = () => {
  const stats = [
    { number: 30, suffix: "+", label: "YEARS OF TRUST", icon: Award },
    { number: 3, suffix: "", label: "STRATEGIC LOCATIONS", icon: MapPin },
    { number: 500, suffix: "+", label: "TONS SUPPLY CAPACITY", icon: Factory },
    { number: 100, suffix: "%", label: "ON-TIME DELIVERY", icon: Truck },
  ];

  return (
    <section className="w-full bg-[#050B18] py-[56px] sm:py-[72px] lg:py-0 lg:h-[320px] flex items-center border-b border-white/5 relative z-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1500px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[40px] gap-x-[32px] lg:gap-0 items-center justify-center">
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
