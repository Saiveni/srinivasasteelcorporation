import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Zap, Building2, Package, Layers, CheckCircle2 } from 'lucide-react';

const strengths = [
  {
    title: "30+ YEARS EXPERIENCE",
    description: "Built on a foundation of trust and industrial expertise since 1994.",
    icon: Clock,
    label: "FOUNDATION-94",
    spec: "LEGACY CORE"
  },
  {
    title: "STEEL & TMT SUPPLY",
    description: "Comprehensive range of high-grade construction and structural steel.",
    icon: Shield,
    label: "SPEC-550D",
    spec: "TMT REBAR"
  },
  {
    title: "WIRE PRODUCTS",
    description: "Extensive inventory of high-quality industrial and construction wire.",
    icon: Package,
    label: "WIRE-SEC-01",
    spec: "INDUSTRIAL WIRE"
  },
  {
    title: "DECOILING SOLUTIONS",
    description: "Precision engineered processing for custom industrial requirements.",
    icon: Layers,
    label: "PROC-DECOIL",
    spec: "CUSTOM CUTS"
  },
  {
    title: "MOU / DEALER RELATIONS",
    description: "Direct supply relationships ensuring material authenticity and availability.",
    icon: Award,
    label: "PARTNER-CERT",
    spec: "VIZAG STEEL MOU"
  },
  {
    title: "REGIONAL PRESENCE",
    description: "Strategically located yards in Vijayawada, Gannavaram, and Vizag.",
    icon: Building2,
    label: "DIST-NETWORK",
    spec: "3 HUB NETWORK"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="why-ssc" className="relative py-24 lg:py-32 bg-[#E8EBEF] overflow-hidden">
      {/* Precision Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: 'linear-gradient(#0B1B33 1px, transparent 1px), linear-gradient(90deg, #0B1B33 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-end mb-20 lg:mb-32">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-ssc-navy" />
                <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                  Business Strengths
                </span>
              </div>
              <h2 className="text-[48px] sm:text-[72px] lg:text-[90px] text-ssc-navy font-heading font-black tracking-tighter uppercase italic leading-[0.85]">
                WHY BUILD WITH <br />
                <span className="text-ssc-gold">SRINIVASA STEEL?</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <p className="text-ssc-navy/70 text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
              From premium TMT rebar to industrial decoiling, we provide the physical foundation for regional infrastructure development.
            </p>
          </div>
        </div>

        {/* Strengths Grid - Industrial Spec Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {strengths.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-[#0C121E] border border-white/5 p-8 lg:p-10 rounded-[24px] shadow-2xl relative group overflow-hidden"
            >
              {/* Technical Header Strip */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                <span className="text-ssc-gold/40 text-[9px] font-technical font-bold tracking-[0.2em]">
                  {item.label}
                </span>
                <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.1em] uppercase bg-ssc-gold/5 px-2 py-0.5 rounded">
                  {item.spec}
                </span>
              </div>

              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#0C121E] border border-ssc-gold/20 flex items-center justify-center shadow-lg group-hover:border-ssc-gold transition-colors duration-500">
                  <item.icon size={24} className="text-ssc-gold" />
                </div>
                <h4 className="text-white font-heading font-black italic text-xl sm:text-2xl leading-tight tracking-tight">
                  {item.title}
                </h4>
              </div>

              <p className="text-white/50 text-sm lg:text-base leading-relaxed font-medium">
                {item.description}
              </p>

              {/* Bolt detail */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-ssc-gold/20" />
            </motion.div>
          ))}
        </div>

        {/* Final CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-[#050A14] rounded-[32px] p-10 lg:p-20 overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Subtle background detail */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left bg-[#0C121E] p-10 lg:p-16 rounded-[24px]">
            <div>
              <h3 className="text-white text-[38px] lg:text-[64px] font-heading font-black italic uppercase leading-none tracking-tighter mb-4">
                READY TO <span className="text-ssc-gold">STRENGTHEN</span><br />
                YOUR PROJECTS?
              </h3>
              <p className="text-white/40 font-technical text-sm tracking-[0.4em] uppercase">
                30+ Years of Proven Industrial Quality
              </p>
            </div>
            
            <button className="whitespace-nowrap bg-ssc-gold text-ssc-navy px-12 py-5 rounded-full font-heading font-black text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 shadow-[0_20px_40px_rgba(197,160,89,0.2)] hover:scale-105">
              GET A CUSTOM QUOTE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
