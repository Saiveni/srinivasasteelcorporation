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
    <section id="why-ssc" className="relative py-24 lg:py-32 bg-ssc-steel-light overflow-hidden">
      {/* Precision Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: 'linear-gradient(#0B1320 1px, transparent 1px), linear-gradient(90deg, #0B1320 1px, transparent 1px)',
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
                <div className="w-12 h-[2px] bg-foreground" />
                <span className="text-primary text-micro">
                  Business Strengths
                </span>
              </div>
              <h2 className="text-foreground italic uppercase">
                WHY BUILD WITH <br />
                <span className="text-primary">SRINIVASA STEEL?</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <p className="text-ssc-gray-body text-body-large max-w-xl">
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
              className="bg-ssc-steel-dark border border-white/10 p-8 lg:p-10 rounded-[12px] shadow-premium-soft relative group overflow-hidden"
            >
              {/* Technical Header Strip */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                <span className="text-primary/40 text-micro">
                  {item.label}
                </span>
                <span className="text-primary text-micro bg-primary/5 px-2 py-0.5 rounded">
                  {item.spec}
                </span>
              </div>

              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-lg bg-ssc-steel-dark border border-primary/20 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-500">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h4 className="text-white italic text-xl sm:text-2xl uppercase">
                  {item.title}
                </h4>
              </div>

              <p className="text-ssc-gray-muted text-small">
                {item.description}
              </p>

              {/* Bolt detail */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/20" />
            </motion.div>
          ))}
        </div>

        {/* Final CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-ssc-navy rounded-[24px] p-10 lg:p-20 overflow-hidden shadow-premium-strong border border-white/10"
        >
          {/* Subtle background detail */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left bg-ssc-steel-dark p-10 lg:p-16 rounded-[12px]">
            <div>
              <h3 className="text-white italic uppercase leading-none tracking-tighter mb-4">
                READY TO <span className="text-primary">STRENGTHEN</span><br />
                YOUR PROJECTS?
              </h3>
              <p className="text-white/40 text-micro">
                30+ Years of Proven Industrial Quality
              </p>
            </div>
            
            <button className="whitespace-nowrap bg-primary text-ssc-navy px-12 py-5 rounded-lg font-semibold text-small uppercase hover:bg-white transition-all duration-500 shadow-premium-medium hover:scale-105">
              GET A CUSTOM QUOTE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
