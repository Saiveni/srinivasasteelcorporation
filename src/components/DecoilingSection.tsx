import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const DecoilingSection = () => {
  const specs = [
    "Approximately 2mm–4.5mm material",
    "10–36 feet lengths",
    "TMT/Decoiling lengths up to 10–40 feet",
    "Precision straightening support"
  ];

  return (
    <section id="decoiling" className="relative py-24 lg:py-32 bg-[#0A121E] overflow-hidden">
      {/* Background Photography with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516216628859-9bccecad13fc?auto=format&fit=crop&q=80&w=2000" 
          alt="Precision industrial steel coil processing line"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A121E] via-[#0A121E]/95 to-[#0A121E]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ 
             backgroundImage: 'linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)',
             backgroundSize: '60px 60px'
           }} 
      />

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-ssc-gold text-[12px] lg:text-[13px] font-technical font-bold uppercase tracking-[0.25em] mb-4 block">
                Services
              </span>
              <h2 className="text-[38px] lg:text-[56px] text-white font-heading leading-[1.1] mb-8 font-[500] tracking-tight uppercase">
                Decoiling & <br /> Cut-to-Length
              </h2>
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 font-[400] max-w-[540px]">
                Steel decoiling and processing support for specified steel/wire requirements, with lengths and material ranges based on our precision industrial specifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle2 className="text-ssc-gold w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-white/80 text-sm font-technical uppercase tracking-wider">{spec}</span>
                  </div>
                ))}
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 text-[12px] font-technical font-bold text-ssc-gold uppercase tracking-[0.3em] group"
                >
                  Request Specifications
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Premium Machine/Coil Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square sm:aspect-video lg:aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=1200" 
                alt="Grayscale industrial machine for steel processing"
                className="w-full h-full object-cover contrast-[1.1] grayscale"
              />
              {/* Inner Glow/Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A121E]/40 via-transparent to-white/5 pointer-events-none" />
              
              {/* Technical markers */}
              <div className="absolute top-8 right-8 flex flex-col items-end gap-1">
                <span className="text-[8px] font-technical font-bold text-white/40 tracking-[0.2em] uppercase">Machine Ref // DC-04</span>
                <span className="text-[8px] font-technical font-bold text-ssc-gold/60 tracking-[0.2em] uppercase">Operating Precision</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};