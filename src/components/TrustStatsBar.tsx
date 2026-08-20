import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, MapPin, Truck, Factory } from "lucide-react";

interface StatItemProps {
  number: number;
  suffix: string;
  label: string;
  icon: any;
  delay: number;
}

const StatItem = ({ number, suffix, label, icon: Icon, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = number;
      const duration = 2000;
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
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-12 h-12 bg-ssc-gold/10 rounded-full flex items-center justify-center mb-4 text-ssc-gold">
        <Icon size={24} />
      </div>
      <div className="text-4xl md:text-5xl font-display font-black text-white mb-2 tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-white/60 text-xs font-technical font-semibold uppercase tracking-[0.2em]">
        {label}
      </div>
    </motion.div>
  );
};

export const TrustStatsBar = () => {
  const stats = [
    { number: 30, suffix: "+", label: "Years of Trust", icon: Award },
    { number: 3, suffix: "", label: "Strategic Locations", icon: MapPin },
    { number: 5000, suffix: "+", label: "Tons Supply Capacity", icon: Factory },
    { number: 100, suffix: "%", label: "On-Time Delivery", icon: Truck },
  ];

  return (
    <div className="w-full bg-ssc-navy py-12 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};
