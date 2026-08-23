import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: "1994",
    title: "ESTABLISHED",
    description: "Founded Srinivasa Steel Corporation in Hyderabad.",
  },
  {
    year: "2000s",
    title: "EXPANDED TO VIZAG",
    description: "Expanded operations to the Visakhapatnam steel market.",
  },
  {
    year: "2010s",
    title: "MOU DEALER STATUS",
    description: "Became MOU Dealer for Vizag Steel Plant.",
  },
  {
    year: "TODAY",
    title: "REGIONAL PRESENCE",
    description: "3 locations. 30+ years of trust. Thousands of tons delivered.",
  }
];

const SteelRebar = ({ isVertical = false }: { isVertical?: boolean }) => (
  <div 
    className={`relative ${isVertical ? 'w-3 h-full mx-auto' : 'w-full h-3 my-auto'} rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.1)]`}
    style={{
      background: 'linear-gradient(to bottom, #d1d5db, #9ca3af, #4b5563)',
      backgroundColor: '#9ca3af'
    }}
  >
    {/* Ribbed Texture Overlay */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: isVertical 
          ? 'repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(0,0,0,0.5) 8px, rgba(0,0,0,0.5) 10px)'
          : 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.5) 8px, rgba(0,0,0,0.5) 10px)',
      }}
    />
    {/* Metallic Highlight */}
    <div 
      className={`absolute inset-0 opacity-50 ${isVertical ? 'left-1/4 w-1/4 h-full' : 'top-1/4 h-1/4 w-full'} bg-white/30 blur-[1px]`}
    />
  </div>
);

const Connector = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className={`flex flex-col items-center ${isMobile ? 'absolute left-[19px] top-8 -translate-x-1/2' : 'mb-4'}`}>
    {/* The Hook/Clamp */}
    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-300 to-gray-600 border border-white/20 shadow-lg flex items-center justify-center relative z-20">
      <div className="w-2 h-2 rounded-full bg-ssc-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
    </div>
    {/* Connecting Rod */}
    <div className={`w-[2px] bg-gradient-to-b from-gray-400 to-transparent ${isMobile ? 'h-8' : 'h-6'}`} />
  </div>
);

export const SteelTimeline = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="timeline" ref={containerRef} className="relative py-16 lg:py-24 bg-ssc-navy overflow-hidden">
      <div className="container-wide relative z-10 mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5 lg:mb-7">
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
                <span className="text-micro text-ssc-gold/80">
                  Corporate Evolution
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
            </div>
            <h2 className="text-ssc-on-dark-primary">
              COMPANY <span className="text-ssc-gold">LEGACY</span>
            </h2>
          </motion.div>
        </div>

        {/* Desktop Version - Horizontal */}
        <div className="hidden lg:block relative mt-16 mb-12">
          {/* Steel TMT Bar */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 px-4 z-0">
            <SteelRebar />
          </div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                style={{ 
                  y: useTransform(scrollYProgress, [0, 1], [20, -20]),
                  opacity: useTransform(scrollYProgress, [0.1 + (idx * 0.1), 0.3 + (idx * 0.1)], [0, 1])
                }}
                className="relative flex flex-col items-center text-center group"
              >
                <Connector />
                
                <div className="bg-ssc-steel-dark border border-ssc-on-dark-primary/10 p-6 rounded-[12px] shadow-premium-strong w-full transition-all duration-500 group-hover:bg-ssc-steel-dark/90 group-hover:border-ssc-gold/30 group-hover:-translate-y-1">
                  <span className="text-micro text-ssc-gold block mb-2 uppercase font-bold tracking-widest">
                    {ms.year}
                  </span>
                  <h4 className="text-ssc-on-dark-primary mb-2 text-base font-bold">
                    {ms.title}
                  </h4>
                  <p className="text-sm text-ssc-on-dark-body leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Version - Vertical */}
        <div className="lg:hidden relative flex flex-col items-center pt-4">
          {/* Vertical Steel TMT Bar */}
          <div className="absolute left-6 top-0 bottom-0 -translate-x-1/2 z-0">
            <SteelRebar isVertical={true} />
          </div>
          
          <div className="flex flex-col gap-12 w-full relative z-10">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative flex items-start w-full pl-6 group"
              >
                <Connector isMobile={true} />
                
                <div className="bg-ssc-steel-dark border border-ssc-on-dark-primary/10 p-5 rounded-[12px] shadow-premium-strong w-full ml-10">
                  <span className="text-micro text-ssc-gold block mb-1 uppercase font-bold tracking-widest">
                    {ms.year}
                  </span>
                  <h4 className="text-ssc-on-dark-primary mb-2 text-sm font-bold">
                    {ms.title}
                  </h4>
                  <p className="text-xs text-ssc-on-dark-body leading-relaxed">
                    {ms.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};