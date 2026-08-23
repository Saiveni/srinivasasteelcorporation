import { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, MapPin, Factory, Settings2 } from "lucide-react";

interface StatItemProps {
  number?: string;
  suffix?: string;
  label: string;
  subLabel: string;
  icon: any;
  index: number;
}

const StatItem = ({ number, suffix, label, subLabel, icon: Icon, index }: StatItemProps) => {
  const displayValue = number;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left px-6 py-4 group"
    >
      <div className="text-micro text-ssc-gold uppercase mb-4">
        {subLabel}
      </div>

      <div className="text-ssc-gold mb-6 transition-transform duration-500 group-hover:scale-110">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      <div className="text-ssc-on-dark-primary leading-none mb-3 text-[32px] lg:text-[40px] font-bold">
        {displayValue}{suffix}
      </div>

      <div className="text-micro text-ssc-on-dark-body uppercase">
        {label}
      </div>
    </motion.div>
  );
};

export const TrustStatsBar = () => {
  const stats = [
    { number: "30", suffix: "+", label: "Years of Trust", subLabel: "01 / HERITAGE", icon: Award },
    { number: "3", suffix: "", label: "Business Locations", subLabel: "02 / NETWORK", icon: MapPin },
    { number: "STEEL", suffix: "", label: "Supply", subLabel: "03 / MATERIAL", icon: Factory },
    { number: "DECOILING", suffix: "", label: "Services", subLabel: "04 / CAPABILITY", icon: Settings2 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full relative z-20 bg-ssc-navy section-spacing overflow-hidden border-t border-ssc-on-dark-primary/5">
      {/* Technical Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, var(--ssc-gold) 1px, transparent 1px), linear-gradient(to bottom, var(--ssc-gold) 1px, transparent 1px)',
             backgroundSize: '100px 100px'
           }} 
      />
      
      {/* Subtle Metallic/Measurement Marks */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-10 left-10 w-20 h-[1px] bg-ssc-on-dark-primary" />
        <div className="absolute top-10 left-10 w-[1px] h-20 bg-ssc-on-dark-primary" />
        <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-ssc-on-dark-primary" />
        <div className="absolute bottom-10 right-10 w-[1px] h-20 bg-ssc-on-dark-primary" />
        
        {/* Horizontal Measurement Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-ssc-on-dark-primary/20 flex justify-between px-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-[1px] h-4 bg-ssc-on-dark-primary/40 -mt-2" />
          ))}
        </div>
      </div>

      <div className="container-wide relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full mx-auto backdrop-blur-2xl bg-ssc-on-dark-primary/5 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-ssc-on-dark-primary/10 overflow-hidden"
        >
          {/* Inner Highlight & Gold Accent */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-ssc-on-dark-primary/10 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-ssc-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]" />

          <div className="px-8 py-12 lg:px-16 lg:py-20">
            {/* Header Area */}
            <div className="mb-16 border-b border-ssc-on-dark-primary/5 pb-12">
              <h3 className="text-micro mb-4">
                COMPANY CREDIBILITY
              </h3>
              <h2 className="text-ssc-on-dark-primary">
                ESTABLISHED QUALITY. RELIABLE PERFORMANCE.
              </h2>
            </div>

            {/* Grid Area */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 relative">
              {/* Dividers */}
              <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-[1px] bg-ssc-on-dark-primary/5" />
              <div className="hidden lg:block absolute left-2/4 top-0 bottom-0 w-[1px] bg-ssc-on-dark-primary/5" />
              <div className="hidden lg:block absolute left-3/4 top-0 bottom-0 w-[1px] bg-ssc-on-dark-primary/5" />

              {stats.map((stat, index) => (
                <StatItem 
                  key={index} 
                  {...stat} 
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Micro-annotations */}
          <div className="absolute bottom-6 left-16 hidden lg:block">
            <span className="text-[8px] text-ssc-on-dark-primary/20 font-body tracking-[0.3em] uppercase">SYSTEM // AUTH_VERIFIED</span>
          </div>
          <div className="absolute bottom-6 right-16 hidden lg:block">
            <span className="text-[8px] text-ssc-on-dark-primary/20 font-body tracking-[0.3em] uppercase">VIJAYAWADA • VIZAG • GANNAVARAM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};