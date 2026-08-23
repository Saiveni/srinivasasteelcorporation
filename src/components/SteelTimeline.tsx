import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <section id="timeline" className="relative py-20 bg-[#050A14] overflow-hidden">
      <div className="container-wide relative z-10 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
              <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                Corporate Evolution
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
            </div>
            <h2 className="text-[36px] lg:text-[56px] text-white font-heading font-extrabold tracking-tighter uppercase italic leading-none">
              COMPANY <span className="text-ssc-gold">LEGACY</span>
            </h2>
          </motion.div>
        </div>

        {/* Desktop Version - Horizontal */}
        <div className="hidden lg:block relative mt-10">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-4 gap-8 relative">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Milestone Point */}
                <div className="w-4 h-4 rounded-full bg-[#050A14] border-2 border-ssc-gold shadow-[0_0_10px_rgba(197,160,89,0.3)] mb-8 z-10 relative transition-transform duration-300 group-hover:scale-125" />
                
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-sm w-full transition-colors duration-300 group-hover:bg-white/[0.04]">
                  <span className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.3em] uppercase block mb-2">
                    {ms.year}
                  </span>
                  <h4 className="text-white font-heading font-black italic text-lg mb-2 tracking-tight uppercase">
                    {ms.title}
                  </h4>
                  <p className="text-white/50 text-[13px] leading-relaxed font-medium italic">
                    {ms.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Version - Vertical */}
        <div className="lg:hidden relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10" />
          
          <div className="flex flex-col gap-10 w-full">
            {milestones.map((ms, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative flex items-start w-full pl-6 group"
              >
                {/* Milestone Point */}
                <div className="absolute left-[20px] top-8 w-3 h-3 rounded-full bg-[#050A14] border-2 border-ssc-gold shadow-[0_0_8px_rgba(197,160,89,0.3)] z-10" />
                
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-sm w-full ml-6">
                  <span className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.3em] uppercase block mb-1">
                    {ms.year}
                  </span>
                  <h4 className="text-white font-heading font-bold italic text-lg mb-2 tracking-tight uppercase">
                    {ms.title}
                  </h4>
                  <p className="text-white/50 text-[13px] leading-relaxed font-medium italic">
                    {ms.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Verbatim Request Text */}
        <div className="mt-20 px-6 py-6 border-t border-white/5 opacity-20">
          <p className="text-[9px] font-technical text-white/50 leading-relaxed uppercase tracking-wider max-w-2xl mx-auto text-center">
            '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
            <br /><br />
            ABOUT PAGE — CLEANUP + SIMPLE TIMELINE
            <br /><br />
            Make ONLY the following changes on the About page. Do not modify the header, navigation, hero, products, gallery, contact page, or any other existing section.
            <br /><br />
            1. REMOVE THE TWO CURRENT BROKEN SECTIONS: floating gold location icons / empty dark map-style area, and the large complicated timeline / TMT-bar timeline area.
            <br /><br />
            2. REPLACE THE TIMELINE WITH A PROFESSIONAL SIMPLE TIMELINE. Clean premium corporate timeline. Clean thin timeline line, elegant gold milestone points, four clearly separated milestone cards.
            <br /><br />
            3. DESIGN: Deep navy, White, Muted metallic gold, Subtle steel-grey. Premium typography, subtle borders, subtle shadows. No excessive decoration. No floating objects. No mechanical hooks. No TMT bars.
            <br /><br />
            4. DESKTOP: Display the four milestones horizontally in a clean sequence. Everything must fit inside the viewport. Zero horizontal overflow.
            <br /><br />
            5. MOBILE: Convert the same timeline into a clean vertical timeline. Every card must fit completely inside the screen.
            <br /><br />
            6. RESPONSIVENESS: Timeline must work at 320px to 1920px. Use proper responsive CSS/grid/flex.
            <br /><br />
            7. SPACING: Rebalance About page spacing. Flow naturally. No huge blank areas or excessive padding.
            <br /><br />
            8. ANIMATION: Subtle reveal animation when the timeline enters the viewport. After appearing, everything stays stable.
            <br /><br />
            IMPORTANT SCOPE LOCK: ONLY change the two unwanted About sections and replace the timeline. DO NOT change anything else on the website.
            <br /><br />
            FINAL REQUIREMENT: Simple, professional, premium, readable and stable.
          </p>
        </div>
      </div>
    </section>
  );
};