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
      <div className="relative bg-ssc-steel-dark rounded-[24px] p-8 lg:p-10 border border-white/5 shadow-2xl overflow-hidden group-hover:translate-y-[-8px] transition-all duration-500">
        
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
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1A2333] to-ssc-navy flex items-center justify-center shadow-inner overflow-hidden">
               {/* Subtle metallic reflection line */}
               <motion.div 
                 animate={{ x: ['-100%', '100%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
               />
               <span className="text-ssc-gold text-h3 font-bold opacity-80">
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
            <h3 className="text-h3 text-ssc-on-dark-primary mb-2 group-hover:text-ssc-gold transition-colors duration-300 uppercase">
              {leader.name}
            </h3>
            <div className="inline-block px-3 py-1 bg-ssc-gold/10 rounded-md mb-6">
              <span className="text-micro text-ssc-gold uppercase">
                {leader.designation}
              </span>
            </div>
            <p className="text-body text-ssc-on-dark-body">
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
    <section id="leadership" className="relative py-16 lg:py-24 bg-ssc-steel-light overflow-hidden">
      {/* Precision Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(var(--ssc-navy) 1px, transparent 1px), linear-gradient(90deg, var(--ssc-navy) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      {/* Background Engineering Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5 lg:mb-7">
              <div className="w-8 h-[1px] bg-ssc-gold-dark/40" />
              <span className="text-micro text-ssc-gold-dark uppercase tracking-[0.16em]">
                LEADERSHIP TEAM
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold-dark/40" />
            </div>
            <h2 className="text-h2 text-ssc-navy uppercase">
              OUR <span className="text-ssc-gold-dark">LEADERSHIP</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[1200px] mx-auto relative">
          {leaders.map((leader, idx) => (
            <LeaderCard key={leader.name} leader={leader} index={idx} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-center mt-20"
        >
          <span className="text-ssc-navy/20 text-[10px] font-body font-bold tracking-[0.6em] uppercase">
            THREE PEOPLE • ONE FOUNDATION • ONE ORGANIZATION
          </span>
        </motion.div>
      </div>
    </section>

  );
};
