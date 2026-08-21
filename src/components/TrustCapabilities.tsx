import { motion } from "framer-motion";
import { Check, Shield, Zap, Truck } from "lucide-react";
// @ts-ignore
import rebarStraight from "@/assets/rebar-straight.jpg.asset.json";

const CAPABILITIES = [
  {
    index: "01",
    title: "TMT REBARS",
    description: "High-quality reinforcement steel products for construction requirements.",
    icon: Shield
  },
  {
    index: "02",
    title: "STEEL & WIRE PRODUCTS",
    description: "Steel bars, binding wire, GI wire and related steel products.",
    icon: Zap
  },
  {
    index: "03",
    title: "DECOILING",
    description: "Decoiling solutions for specified steel sizes and lengths.",
    icon: Check
  },
  {
    index: "04",
    title: "DIRECT LOADS & SUPPLY",
    description: "Supply support for requirements across the company's established service locations.",
    icon: Truck
  }
];

export const TrustCapabilities = () => {
  const imageUrl = (rebarStraight as any)?.url || "";

  return (
    <section className="relative w-full bg-[#F8F9FA] py-24 lg:py-32 overflow-hidden">
      {/* Technical Engineering Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #0B1B33 1px, transparent 1px), linear-gradient(to bottom, #0B1B33 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-24">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Top Label */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] font-technical font-bold tracking-[0.3em] text-[#D9A000] uppercase">
                  EST. 1994
                </span>
                <div className="w-8 h-[1px] bg-[#0B1B33]/10" />
                <span className="text-[10px] font-technical font-medium tracking-[0.2em] text-[#0B1B33]/60 uppercase">
                  STEEL • TMT • SUPPLY • DECOILING
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-[36px] lg:text-[48px] font-heading font-bold text-[#0B1B33] leading-[1.1] mb-8 tracking-tight">
                BUILT ON <br />
                <span className="text-[#D9A000]">30+</span> YEARS OF <span className="text-[#D9A000]">TRUST.</span>
              </h2>

              {/* Description */}
              <p className="text-[17px] text-[#0B1B33]/70 max-w-[520px] leading-[1.7] mb-0 font-normal">
                Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, with expertise in TMT rebars, steel products, wire products and decoiling solutions.
              </p>
            </motion.div>
          </div>

          {/* Right Visual: Vertical Steel Product Photograph */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
            >
              {/* Technical Measurement Marks */}
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-1 opacity-40">
                <div className="w-8 h-[1px] bg-white" />
                <div className="w-[1px] h-8 bg-white" />
              </div>
              <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end gap-1 opacity-40">
                <div className="w-[1px] h-8 bg-white" />
                <div className="w-8 h-[1px] bg-white" />
              </div>

              <img 
                src={imageUrl} 
                alt="High-quality TMT steel products" 
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
              />
              
              {/* Subtle Gold Rule at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D9A000]" />
            </motion.div>
          </div>
        </div>

        {/* Capability Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-default"
            >
              {/* Header: Index and Divider */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-technical font-bold text-[#D9A000] tracking-wider">
                  {cap.index}
                </span>
                <div className="flex-grow h-[1px] bg-[#0B1B33]/10 transition-colors group-hover:bg-[#D9A000]/30" />
              </div>

              {/* Title and Icon */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-[15px] font-heading font-bold text-[#0B1B33] tracking-wide uppercase">
                  {cap.title}
                </h3>
                <cap.icon className="w-4 h-4 text-[#D9A000]/40 group-hover:text-[#D9A000] transition-colors duration-300" />
              </div>

              {/* Description */}
              <p className="text-[13px] text-[#0B1B33]/60 leading-relaxed transition-transform duration-300 group-hover:translate-y-[-2px]">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};