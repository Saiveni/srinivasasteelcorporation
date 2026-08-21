import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="relative section-spacing bg-[#F8F9FA] overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: Editorial Image */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[24px] overflow-hidden shadow-2xl shadow-ssc-navy/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop" 
                alt="Srinivasa Steel Corporation yard with bundles of TMT reinforcement bars"
                className="w-full aspect-[4/5] object-cover grayscale-[0.2] contrast-[1.05]"
              />
              {/* Technical marker */}
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-technical font-bold text-white tracking-[0.3em] uppercase">Est. 1994</span>
                  <div className="w-8 h-[1px] bg-white/40" />
                  <span className="text-[10px] font-technical font-bold text-white tracking-[0.3em] uppercase">Present</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.3em] uppercase mb-4 block">
                Heritage & Presence
              </span>
              <h2 className="text-[38px] lg:text-[56px] text-ssc-navy font-heading leading-[1.1] mb-8 font-[600] tracking-tight uppercase">
                About Srinivasa Steel Corporation
              </h2>
              
              <div className="space-y-6 text-[#4A5568] text-base lg:text-lg leading-relaxed font-[450]">
                <p>
                  Operating since 1994, Srinivasa Steel Corporation has established itself as a trusted name in regional steel supply and distribution. Our business is built on long-standing dealer and MoU supply relationships, ensuring a consistent and reliable flow of high-quality materials.
                </p>
                <p>
                  We are a steel supplier specializing in TMT rebars, steel wire products, oil rods, and decoiling solutions. With a strong regional presence across Vijayawada, Vizag, and Gannavaram, we serve the construction and industrial sectors with professional integrity.
                </p>
              </div>

              {/* Timeline Marker */}
              <div className="mt-12 pt-8 border-t border-black/5 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[24px] font-heading text-ssc-navy font-bold">1994</span>
                  <span className="text-[10px] font-technical text-ssc-navy/40 uppercase tracking-widest">Established</span>
                </div>
                <div className="w-12 h-[1px] bg-ssc-gold/40" />
                <div className="flex flex-col">
                  <span className="text-[24px] font-heading text-ssc-navy font-bold">PRESENT</span>
                  <span className="text-[10px] font-technical text-ssc-navy/40 uppercase tracking-widest">Growth</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};