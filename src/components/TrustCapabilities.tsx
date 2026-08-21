import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle2, Truck } from "lucide-react";

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
    icon: CheckCircle2
  },
  {
    index: "04",
    title: "DIRECT LOADS & SUPPLY",
    description: "Supply support for industrial and construction requirements across the company's service locations.",
    icon: Truck
  }
];

export const TrustCapabilities = () => {
  const imageUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="relative w-full bg-[#F4F6F8] section-spacing overflow-hidden border-t border-[#0B1B33]/5">
      {/* Technical Editorial Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #0B1B33 1px, transparent 1px), linear-gradient(to bottom, #0B1B33 1px, transparent 1px)',
             backgroundSize: '60px 60px'
           }} 
      />
      
      {/* Subtle Gold Rule (Technical Detail) */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-[#D9A000]/20 via-transparent to-transparent hidden lg:block" />

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch mb-24 lg:mb-32">
          
          {/* Left Content Area: Editorial Layout */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Top Branded Label */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[11px] font-technical font-bold tracking-[0.4em] text-[#D9A000] uppercase">
                  EST. 1994
                </span>
                <div className="w-12 h-[1px] bg-[#0B1B33]/15" />
                <span className="text-[10px] font-technical font-semibold tracking-[0.25em] text-[#0B1B33]/50 uppercase">
                  STEEL • TMT • SUPPLY • DECOILING
                </span>
              </div>

              {/* Main Headline: Dark Navy with Gold Accents */}
              <h2 className="text-[clamp(32px,6vw,54px)] font-heading font-extrabold text-[#0B1B33] leading-[1.05] mb-10 tracking-tight">
                BUILT ON <br />
                <span className="text-[#D9A000]">30+</span> YEARS OF <br />
                <span className="text-[#D9A000]">TRUST.</span>
              </h2>

              {/* Business Description */}
              <p className="text-[18px] text-[#0B1B33]/70 max-w-[540px] leading-[1.75] font-normal mb-0 border-l-2 border-[#D9A000]/20 pl-6 lg:pl-8">
                Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, specializing in TMT rebars, steel products, wire products and decoiling solutions.
              </p>
            </motion.div>
          </div>

          {/* Right Visual Area: Vertical Image with Technical Marks */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] lg:aspect-[3/4.2] overflow-hidden group shadow-2xl shadow-[#0B1B33]/10"
            >
              {/* Image Frame Details */}
              <div className="absolute top-0 left-0 w-full h-full border-[12px] border-white/5 z-20 pointer-events-none" />
              
              {/* Technical Measurement Grid Overlay on Image */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

              <img 
                src={imageUrl} 
                alt="High-quality industrial TMT steel" 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
              />
              
              {/* Bottom Gold Architectural Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#D9A000] z-30" />
              
              {/* Micro technical labels */}
              <div className="absolute bottom-6 left-8 z-30 flex flex-col gap-1">
                <span className="text-[8px] font-technical text-white/60 tracking-[0.3em] uppercase">MATERIAL_SPEC // TMT_GRADE</span>
                <span className="text-[8px] font-technical text-white/40 tracking-[0.3em] uppercase">VERIFIED SUPPLY CHAIN</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Capability Blocks: Four Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 lg:gap-y-0 relative">
          {/* Connecting Line for blocks on Desktop */}
          <div className="hidden lg:block absolute top-[6px] left-0 w-full h-[1px] bg-[#0B1B33]/5 z-0" />
          
          {CAPABILITIES.map((cap, idx) => (
            <motion.div
              key={cap.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="relative z-10 group"
            >
              {/* Index and Gold Progressive Indicator */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[12px] font-technical font-extrabold text-[#D9A000] tracking-wider bg-[#F4F6F8] pr-4 relative z-10">
                  {cap.index}
                </span>
                <div className="flex-grow h-[1px] bg-[#0B1B33]/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                    className="absolute inset-0 bg-[#D9A000]/40 group-hover:bg-[#D9A000]"
                  />
                </div>
              </div>

              {/* Content Box */}
              <div className="transition-all duration-300 group-hover:translate-y-[-4px]">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[16px] font-heading font-extrabold text-[#0B1B33] tracking-wider uppercase">
                    {cap.title}
                  </h3>
                  <cap.icon className="w-4 h-4 text-[#0B1B33]/20 group-hover:text-[#D9A000] transition-colors duration-300" strokeWidth={1.5} />
                </div>

                <p className="text-[14px] text-[#0B1B33]/60 leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};