import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Zap, Building2, Package } from 'lucide-react';

const trustPoints = [
  {
    title: "30+ YEARS EXPERIENCE",
    description: "Built on a foundation of trust and industrial expertise since 1994.",
    icon: Clock,
    angle: 0
  },
  {
    title: "MOU DEALER STATUS",
    description: "Direct supply relationships ensuring material authenticity and availability.",
    icon: Award,
    angle: 60
  },
  {
    title: "DECOILING SOLUTIONS",
    description: "Precision engineered processing for custom industrial requirements.",
    icon: Zap,
    angle: 120
  },
  {
    title: "STEEL & TMT SUPPLY",
    description: "Comprehensive range of high-grade construction and structural steel.",
    icon: Shield,
    angle: 180
  },
  {
    title: "REGIONAL PRESENCE",
    description: "Strategically located yards in Vijayawada, Gannavaram, and Vizag.",
    icon: Building2,
    angle: 240
  },
  {
    title: "WIRE PRODUCTS",
    description: "Extensive inventory of high-quality industrial and construction wire.",
    icon: Package,
    angle: 300
  }
];

const TrustPoint = ({ point, index }: { point: typeof trustPoints[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
      className="relative group"
    >
      <div className="bg-[#0C121E] border border-white/5 p-6 rounded-2xl relative overflow-hidden group-hover:border-ssc-gold/30 transition-all duration-500 hover:translate-y-[-5px]">
        {/* Subtle metal texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-ssc-gold/10 flex items-center justify-center mb-4 group-hover:bg-ssc-gold/20 transition-colors">
            <point.icon className="text-ssc-gold w-5 h-5" />
          </div>
          <h4 className="text-white font-heading font-bold text-sm tracking-[0.1em] uppercase mb-3">
            {point.title}
          </h4>
          <p className="text-white/50 text-xs leading-relaxed font-medium">
            {point.description}
          </p>
        </div>

        {/* Connection node point */}
        <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-ssc-gold/20 group-hover:bg-ssc-gold transition-colors" />
      </div>
    </motion.div>
  );
};

export const WhyChooseUs = () => {
  return (
    <section id="why-ssc" className="relative py-24 lg:py-32 bg-[#E8EBEF] overflow-hidden">
      {/* Background Engineering Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-ssc-navy/10" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#0B1B33 1px, transparent 1px), linear-gradient(90deg, #0B1B33 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>


      <div className="container-wide relative z-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-ssc-gold text-[11px] font-technical font-bold tracking-[0.4em] uppercase mb-4 block">
                The Advantage
              </span>
              <h2 className="text-[38px] lg:text-[72px] text-ssc-navy font-heading font-extrabold tracking-tighter uppercase italic leading-[0.9]">
                WHY BUILD WITH <span className="text-ssc-gold">SRINIVASA STEEL?</span>
              </h2>
              <p className="text-ssc-navy/60 text-base lg:text-xl leading-relaxed font-medium mt-8 max-w-2xl mx-auto">
                A dependable steel supply partner built around quality, relationships and consistent service.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Central Foundation Element (Desktop) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] items-center justify-center">
              {/* Machined Steel Ring */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full rounded-full border border-ssc-gold/10 relative flex items-center justify-center"
              >
                <div className="w-[85%] h-[85%] rounded-full border border-ssc-gold/20 flex items-center justify-center">
                   <div className="w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#1A2333] to-[#050A14] border border-ssc-gold/30 shadow-[0_0_50px_rgba(197,160,89,0.1)] flex items-center justify-center overflow-hidden relative">
                      {/* Technical detail: radial lines */}
                      <div className="absolute inset-0 opacity-10">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute top-1/2 left-1/2 w-full h-[1px] bg-white origin-left"
                            style={{ transform: `rotate(${i * 30}deg)` }}
                          />
                        ))}
                      </div>
                      <span className="text-ssc-gold text-4xl font-heading font-black italic tracking-tighter z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">SSC</span>
                   </div>
                </div>
                
                {/* Connection lines to cards (simplified as CSS pseudo-elements or absolute divs) */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 1 }}
                      className="absolute top-1/2 left-1/2 w-[300px] h-[1px] bg-gradient-to-r from-ssc-gold/40 to-transparent origin-left"
                      style={{ transform: `rotate(${i * 60}deg)` }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
              {trustPoints.map((point, idx) => (
                <TrustPoint key={point.title} point={point} index={idx} />
              ))}
            </div>
          </div>

          {/* Strong CTA (End of Story) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.2 }}
            className="mt-32 text-center"
          >
            <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-ssc-navy/20 to-transparent w-full max-w-4xl mb-16" />
            <h3 className="text-ssc-navy text-3xl lg:text-5xl font-heading font-extrabold italic uppercase mb-10 tracking-tighter">
              READY TO <span className="text-ssc-gold">STRENGTHEN</span> YOUR PROJECT?
            </h3>
            <button className="bg-ssc-gold text-ssc-navy px-12 py-5 rounded-full font-heading font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 shadow-[0_20px_40px_rgba(197,160,89,0.2)] hover:shadow-[0_25px_50px_rgba(197,160,89,0.3)] hover:scale-105">
              GET A CUSTOM QUOTE
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
