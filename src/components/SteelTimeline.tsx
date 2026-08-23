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

export const SteelTimeline = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animated position for the gold dot
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
        <div className="hidden lg:block relative mt-16 mb-24">
          {/* Silver Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-400/30 -translate-y-1/2 z-0">
            <motion.div 
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-200 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            />
            {/* Moving Gold Dot (Horizontal for Desktop) */}
            <motion.div 
              style={{ left: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-ssc-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-20 border-2 border-ssc-navy"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group pt-8"
              >
                {/* Connector Point */}
                <div className="w-3 h-3 rounded-full bg-ssc-navy border border-gray-400 absolute top-[-7px] z-10" />
                
                <div className="bg-ssc-steel-dark border border-ssc-on-dark-primary/10 p-6 rounded-[12px] shadow-premium-strong w-full transition-all duration-500 group-hover:bg-ssc-steel-dark/90 group-hover:border-ssc-gold/30">
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
          {/* Silver Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-400/30 -translate-x-1/2 z-0">
            {/* Animated Silver Path */}
            <motion.div 
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-200 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            />
            {/* Moving Gold Dot */}
            <motion.div 
              style={{ top: dotY }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-ssc-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] z-20 border-2 border-ssc-navy"
            />
          </div>
          
          <div className="flex flex-col gap-10 w-full relative z-10">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative flex items-start w-full pl-6 group"
              >
                {/* Static Milestone Dot */}
                <div className="absolute left-[24px] top-6 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-400/50 z-10" />
                
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