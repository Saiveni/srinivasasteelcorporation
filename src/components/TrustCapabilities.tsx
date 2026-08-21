import { motion } from "framer-motion";

export const TrustCapabilities = () => {
  const steelImageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"; // Premium industrial steel focus

  return (
    <section className="relative w-full bg-[#0B1B33] py-24 lg:py-40 overflow-hidden">
      {/* Sophisticated Industrial Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Metallic Grain/Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        
        {/* Architectural Beams / Framework Geometry (CSS Drawing) */}
        <div className="absolute top-0 right-0 w-[40%] h-full opacity-[0.05] pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[1px] h-[80%] bg-white" />
          <div className="absolute top-[20%] right-0 w-full h-[1px] bg-white transform -rotate-12" />
          <div className="absolute bottom-[20%] right-0 w-full h-[1px] bg-white transform rotate-12" />
        </div>

        {/* Abstract Steel Rod Geometry (Subtle 3D feel) */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 opacity-[0.07] blur-sm">
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 mb-4" />
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 mb-4 ml-10" />
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 mb-4 ml-20" />
        </div>

        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B33] via-[#0C1E3A] to-[#081426]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Content */}
          <div className="w-full lg:w-[48%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Editorial Detail */}
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[12px] font-technical font-bold tracking-[0.4em] text-[#C5A059] uppercase">
                  01 / COMPANY
                </span>
                <div className="w-12 h-[1px] bg-[#C5A059]/40" />
              </div>

              {/* Main Heading */}
              <h2 className="text-[clamp(40px,7vw,76px)] font-heading font-extrabold text-white leading-[0.92] mb-10 tracking-tighter uppercase">
                BUILT ON <br />
                <span className="text-[#C5A059]">30+ YEARS</span> <br />
                OF TRUST.
              </h2>

              {/* Accurate Company Description */}
              <div className="relative group">
                <div className="absolute -left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C5A059] to-transparent opacity-50" />
                <p className="text-[19px] text-white/70 max-w-[500px] leading-[1.75] font-light">
                  Srinivasa Steel Corporation is an established steel supplier serving construction and industrial requirements, specializing in <span className="text-white font-medium">TMT rebars</span>, steel products, wire products and decoiling solutions.
                </p>
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-technical text-[#C5A059] tracking-widest uppercase mb-1">Established</span>
                    <span className="text-[18px] font-heading font-bold text-white tracking-wider">1994</span>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-technical text-[#C5A059] tracking-widest uppercase mb-1">Focus</span>
                    <span className="text-[18px] font-heading font-bold text-white tracking-wider uppercase">Steel Supply</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visual Area */}
          <div className="w-full lg:w-[52%] relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Image Container with Sophisticated Edge/Curve Treatment */}
              <div className="relative z-10 aspect-[16/12] lg:aspect-[14/11] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] group">
                <div className="absolute inset-0 z-20 border-[1px] border-white/10 pointer-events-none" />
                
                {/* Subtle Architectural Curve Mask Effect */}
                <div className="absolute inset-0 overflow-hidden" 
                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
                  <img 
                    src={steelImageUrl} 
                    alt="High-end industrial steel engineering" 
                    className="w-full h-full object-cover grayscale-[0.3] contrast-[1.1] transition-transform duration-[5s] group-hover:scale-105"
                  />
                  {/* Subtle Lighting Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1B33]/40 via-transparent to-transparent" />
                </div>

                {/* Overlapping Architectural Element */}
                <div className="absolute -top-10 -left-10 w-32 h-32 border-t-[1px] border-l-[1px] border-[#C5A059]/30 z-0" />
                <div className="absolute -bottom-6 -right-6 w-48 h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent z-30" />
              </div>

              {/* Technical Marker */}
              <div className="absolute -bottom-12 left-10 z-20">
                <span className="text-[9px] font-technical text-white/30 tracking-[0.4em] uppercase block transform -rotate-90 origin-left">
                  SSC_IND_SPEC_2026
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};