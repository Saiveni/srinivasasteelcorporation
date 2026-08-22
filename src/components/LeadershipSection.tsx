import React from 'react';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: "M.S.V. Bhaskar",
    designation: "Managing Partner",
    description: "Visionary leader driving the strategic growth and industrial excellence of Srinivasa Steel Corporation since inception.",
    initials: "MSVB"
  },
  {
    name: "M.V. Ramanakumar",
    designation: "Partner",
    description: "Expert in supply chain optimization and steel procurement, ensuring the highest standards of material quality.",
    initials: "MVR"
  },
  {
    name: "M.V.N.M. Yeshuvanth",
    designation: "Partner",
    description: "Focusing on modern engineering solutions and expanding the company's footprint across new industrial sectors.",
    initials: "MVNY"
  }
];

const LeaderCard = ({ leader, index }: { leader: typeof leaders[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.8, 
        ease: [0.21, 1, 0.36, 1] 
      }}
      className="relative group w-full"
    >
      {/* 3D Engineered Panel Card */}
      <div className="relative bg-[#0C121E] rounded-[24px] p-8 lg:p-10 border border-white/5 shadow-2xl overflow-hidden group-hover:translate-y-[-8px] transition-all duration-500">
        
        {/* Brushed Metal Texture */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
        
        {/* Engineering Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        {/* Beveled Edge Highlight */}
        <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[24px] pointer-events-none group-hover:border-ssc-gold/30 transition-colors duration-500" />
        
        {/* Inner Glow / Lighting */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Abstract Steel Monogram / Silhouette */}
          <div className="relative w-32 h-32 mb-8 group-hover:scale-110 transition-transform duration-700">
            {/* Machined Metal Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-ssc-gold/20 shadow-[0_0_20px_rgba(197,160,89,0.1)]" />
            
            {/* Metallic Inner Surface */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1A2333] to-[#050A14] flex items-center justify-center shadow-inner overflow-hidden">
               {/* Subtle metallic reflection line */}
               <motion.div 
                 animate={{ x: ['-100%', '100%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
               />
               <span className="text-ssc-gold font-heading text-2xl font-black tracking-tighter opacity-80">
                 {leader.initials}
               </span>
            </div>
            
            {/* Bolt Details */}
            {[0, 90, 180, 270].map((deg) => (
              <div 
                key={deg}
                className="absolute w-1.5 h-1.5 rounded-full bg-ssc-gold/30 shadow-inner"
                style={{ 
                  top: '50%', 
                  left: '50%', 
                  transform: `rotate(${deg}deg) translate(58px) rotate(-${deg}deg)` 
                }}
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="w-full">
            <h3 className="text-white text-2xl lg:text-3xl font-heading font-bold mb-2 tracking-tight group-hover:text-ssc-gold transition-colors duration-300">
              {leader.name}
            </h3>
            <div className="inline-block px-3 py-1 bg-ssc-gold/10 rounded-md mb-6">
              <span className="text-ssc-gold text-[10px] font-technical font-bold uppercase tracking-[0.2em]">
                {leader.designation}
              </span>
            </div>
            <p className="text-white/60 text-sm lg:text-base leading-relaxed font-medium">
              {leader.description}
            </p>
          </div>
        </div>

        {/* Bottom Gold Accent Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ssc-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      </div>

      {/* Deep Shadow */}
      <div className="absolute -inset-2 bg-black/40 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4" />
    </motion.div>
  );
};

export const LeadershipSection = () => {
  return (
    <section id="leadership" className="relative py-20 lg:py-24 bg-[#0C121E] overflow-hidden">
      {/* Background Engineering Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle vertical steel structures */}
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-gold/20 to-transparent" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>



      {/* Horizontal Steel Rebar Element (Foundation) */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 overflow-hidden opacity-20 hidden lg:block">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-ssc-gold/30 to-transparent" />
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-ssc-gold to-transparent opacity-50"
        />
      </div>

      <div className="container-wide relative z-10 px-6">
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-ssc-gold text-[11px] font-technical font-bold tracking-[0.4em] uppercase mb-4 block">
              The Pillars
            </span>
            <h2 className="text-[38px] lg:text-[72px] text-white font-heading font-extrabold tracking-tighter uppercase italic">
              OUR <span className="text-ssc-gold">LEADERSHIP</span>
            </h2>
            <div className="h-[2px] w-24 bg-ssc-gold/20 mx-auto mt-8" />
          </motion.div>
        </div>

        {/* Vertical Foundation Line for Mobile */}
        <div className="absolute left-1/2 top-[300px] bottom-20 w-[1px] bg-white/[0.05] lg:hidden -translate-x-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 max-w-[1200px] mx-auto relative">
          {leaders.map((leader, idx) => (
            <LeaderCard key={leader.name} leader={leader} index={idx} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-center mt-20 lg:mt-32"
        >
          <span className="text-white/20 text-[10px] font-technical font-bold tracking-[0.8em] uppercase">
            THREE PEOPLE • ONE FOUNDATION • ONE ORGANIZATION
          </span>
        </motion.div>
      </div>
    </section>
  );
};
