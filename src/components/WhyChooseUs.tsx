import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Zap, Building2, Package, Settings, Layers } from 'lucide-react';

const trustPoints = [
  {
    title: "30+ YEARS EXPERIENCE",
    description: "Built on a foundation of trust and industrial expertise since 1994.",
    icon: Clock,
    label: "FOUNDATION-94",
    x: -340, y: -180
  },
  {
    title: "STEEL & TMT SUPPLY",
    description: "Comprehensive range of high-grade construction and structural steel.",
    icon: Shield,
    label: "SPEC-550D",
    x: 340, y: -180
  },
  {
    title: "WIRE PRODUCTS",
    description: "Extensive inventory of high-quality industrial and construction wire.",
    icon: Package,
    label: "WIRE-SEC-01",
    x: -380, y: 0
  },
  {
    title: "DECOILING SOLUTIONS",
    description: "Precision engineered processing for custom industrial requirements.",
    icon: Layers,
    label: "PROC-DECOIL",
    x: 380, y: 0
  },
  {
    title: "MOU / DEALER RELATIONS",
    description: "Direct supply relationships ensuring material authenticity and availability.",
    icon: Award,
    label: "PARTNER-CERT",
    x: -340, y: 180
  },
  {
    title: "REGIONAL PRESENCE",
    description: "Strategically located yards in Vijayawada, Gannavaram, and Vizag.",
    icon: Building2,
    label: "DIST-NETWORK",
    x: 340, y: 180
  }
];

const InfoPanel = ({ point, index }: { point: typeof trustPoints[0], index: number }) => {
  const isLeft = point.x < 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
      className="absolute z-20"
      style={{ 
        left: `calc(50% + ${point.x}px)`, 
        top: `calc(50% + ${point.y}px)`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-[280px] bg-[#0C121E] border border-ssc-gold/20 p-5 rounded-xl shadow-2xl relative group hover:border-ssc-gold/50 transition-all duration-500">
        {/* Technical Label */}
        <div className="absolute -top-3 left-4 px-2 bg-[#0C121E] border-x border-ssc-gold/30">
          <span className="text-ssc-gold/40 text-[8px] font-technical font-bold tracking-[0.3em] uppercase">
            {point.label}
          </span>
        </div>

        {/* Brushed metal overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded bg-ssc-gold/10 flex items-center justify-center border border-ssc-gold/20">
              <point.icon className="text-ssc-gold w-4 h-4" />
            </div>
            <h4 className="text-white font-heading font-bold text-[13px] tracking-[0.05em] uppercase leading-tight">
              {point.title}
            </h4>
          </div>
          <p className="text-white/50 text-[11px] leading-relaxed font-medium">
            {point.description}
          </p>
        </div>

        {/* Machined connection point */}
        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-[1px] bg-ssc-gold/30 ${isLeft ? '-right-4' : '-left-4'}`} />
        <div className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-ssc-gold/50 bg-[#0C121E] ${isLeft ? '-right-5' : '-left-5'}`} />
      </div>
    </motion.div>
  );
};

export const WhyChooseUs = () => {
  return (
    <section id="why-ssc" className="relative py-24 lg:py-32 bg-[#E8EBEF] overflow-hidden min-h-[900px] flex flex-col items-center">
      {/* Engineered Background System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Precision Engineering Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'linear-gradient(#0B1B33 1px, transparent 1px), linear-gradient(90deg, #0B1B33 1px, transparent 1px)', 
               backgroundSize: '80px 80px' 
             }} />
        
        {/* Technical Depth Lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-navy/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-navy/10 to-transparent" />
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1400px] w-full">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-ssc-navy/20" />
              <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                The Advantage
              </span>
              <div className="w-10 h-[1px] bg-ssc-navy/20" />
            </div>
            
            <h2 className="text-[42px] lg:text-[72px] text-ssc-navy font-heading font-extrabold tracking-tighter uppercase italic leading-[0.85] mb-8">
              WHY BUILD WITH <br />
              <span className="text-ssc-gold">SRINIVASA STEEL?</span>
            </h2>
          </motion.div>
        </div>

        {/* Premium Structural Composition (Desktop) */}
        <div className="hidden lg:block relative h-[600px] w-full max-w-[1200px] mx-auto">
          {/* Central Rebar/Steel Foundation Element */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] h-[320px] flex items-center justify-center"
            >
              {/* Radial Technical Grid Background */}
              <div className="absolute inset-0 rounded-full border border-ssc-navy/[0.03] animate-spin-slow" />
              
              {/* Machined Steel Foundation */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1A2333] to-[#050A14] border-2 border-ssc-gold/30 shadow-[0_0_80px_rgba(197,160,89,0.15)] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
                
                {/* Structural Rebar Ribbing Effect */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                   {[...Array(18)].map((_, i) => (
                     <div 
                       key={i} 
                       className="absolute w-full h-[2px] bg-ssc-gold/40 origin-center"
                       style={{ transform: `rotate(${i * 20}deg)` }}
                     />
                   ))}
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-ssc-gold text-6xl font-heading font-black italic tracking-tighter drop-shadow-2xl">SSC</span>
                  <div className="mt-2 h-[1px] w-12 bg-ssc-gold/50" />
                  <span className="text-white/30 text-[9px] font-technical font-bold tracking-[0.5em] uppercase mt-2">Foundation</span>
                </div>
              </div>

              {/* Connecting Steel Rods to Panels */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {trustPoints.map((point, i) => (
                  <motion.line
                    key={i}
                    x1="50%" y1="50%"
                    x2={`calc(50% + ${point.x}px)`} y2={`calc(50% + ${point.y}px)`}
                    stroke="rgba(197,160,89,0.2)"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  />
                ))}
              </svg>
            </motion.div>
          </div>

          {/* Engineered Info Panels */}
          {trustPoints.map((point, idx) => (
            <InfoPanel key={point.title} point={point} index={idx} />
          ))}
        </div>

        {/* Mobile Layout (Precision Industrial List) */}
        <div className="lg:hidden flex flex-col gap-6 w-full max-w-[480px] mx-auto px-4 pb-20">
           {trustPoints.map((point, idx) => (
             <motion.div
               key={point.title}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-[#0C121E] border border-ssc-gold/20 p-6 rounded-2xl relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-ssc-gold/10 rounded-tr-2xl" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-ssc-gold/10 flex items-center justify-center border border-ssc-gold/20">
                    <point.icon size={20} className="text-ssc-gold" />
                  </div>
                  <div>
                    <span className="text-ssc-gold/40 text-[8px] font-technical font-bold tracking-[0.3em] uppercase block mb-1">
                      {point.label}
                    </span>
                    <h4 className="text-white font-heading font-bold text-base tracking-[0.05em] uppercase">
                      {point.title}
                    </h4>
                  </div>
                </div>
                <p className="text-white/50 text-[13px] leading-relaxed font-medium">
                  {point.description}
                </p>
             </motion.div>
           ))}
        </div>

        {/* Final CTA / Strong Foundation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center pt-20 border-t border-ssc-navy/5"
        >
          <h3 className="text-ssc-navy text-[32px] lg:text-[56px] font-heading font-extrabold italic uppercase mb-10 tracking-tighter leading-tight">
            READY TO <span className="text-ssc-gold">STRENGTHEN</span> <br className="lg:hidden" /> YOUR PROJECT?
          </h3>
          <button className="bg-ssc-navy text-white px-12 py-5 rounded-full font-heading font-black text-sm tracking-[0.2em] uppercase hover:bg-ssc-gold hover:text-ssc-navy transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95">
            GET A CUSTOM QUOTE
          </button>
        </motion.div>
      </div>
    </section>
  );
};