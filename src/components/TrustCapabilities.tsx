import { motion } from "framer-motion";

export const TrustCapabilities = () => {
  const steelImageUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop"; // Premium industrial TMT rebar focus

  return (
    <section className="relative w-full bg-[#F4F6F8] py-20 lg:py-32 overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* LEFT: Content */}
          <div className="w-full lg:w-[46%]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow / Technical Specification */}
              <div className="flex flex-col gap-2 mb-10">
                <span className="text-[12px] font-technical font-bold tracking-[0.4em] text-[#C5A059] uppercase">
                  EST. 1994
                </span>
                <div className="w-16 h-[1px] bg-[#0B1B33]/20 my-2" />
                <span className="text-[11px] font-technical font-semibold tracking-[0.2em] text-[#0B1B33]/60 uppercase">
                  STEEL • TMT • SUPPLY • DECOILING
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-[48px] lg:text-[72px] font-heading font-extrabold text-[#0B1B33] leading-[0.95] mb-8 tracking-tighter uppercase">
                BUILT ON <br />
                <span className="text-[#C5A059]">30+ YEARS</span> <br />
                OF TRUST.
              </h2>

              {/* Accurate Company Description */}
              <p className="text-[18px] text-[#0B1B33]/80 max-w-[520px] leading-[1.7] font-medium border-l-4 border-[#C5A059] pl-6">
                Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, specializing in TMT rebars, steel products, wire products and decoiling solutions.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Asymmetric Architectural Visual */}
          <div className="w-full lg:w-[54%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Architectural Layout: Large Main Image + Cutouts */}
              <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-[2px] shadow-2xl">
                <img 
                  src={steelImageUrl} 
                  alt="Premium TMT reinforcement steel products in industrial environment" 
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                />
                
                {/* Overlay Technical Grid */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]" 
                     style={{ 
                       backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                       backgroundSize: '40px 40px'
                     }} 
                />
              </div>
              
              {/* Asymmetric Architectural Accents */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#0B1B33] -z-10 rounded-sm" />
              <div className="absolute -top-6 -right-6 w-32 h-[2px] bg-[#C5A059]" />
              <div className="absolute top-10 -right-10 w-[1px] h-40 bg-[#0B1B33]/10" />
              
              {/* Engineering Detail Label */}
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 border-l-2 border-[#C5A059]">
                <span className="text-[10px] font-technical font-bold text-[#0B1B33] tracking-[0.2em] uppercase">
                  SSC_REF: INDUSTRIAL_GRADE_REBAR
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};