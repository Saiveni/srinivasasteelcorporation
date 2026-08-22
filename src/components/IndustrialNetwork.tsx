import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Building2, Warehouse, Factory } from 'lucide-react';

const locations = [
  {
    id: "vijayawada",
    city: "VIJAYAWADA",
    type: "HEAD OFFICE & GODOWN",
    icon: Building2,
    address: "Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada – 520012",
    coords: { x: "28%", y: "25%" },
    mobileOrder: 1
  },
  {
    id: "gannavaram",
    city: "GANNAVARAM",
    type: "YARD",
    icon: Warehouse,
    address: "Gannavaram Yard, Nuzividu Road, Gannavaram – 521101",
    coords: { x: "32%", y: "65%" },
    mobileOrder: 2
  },
  {
    id: "vizag",
    city: "VIZAG",
    type: "YARD",
    icon: Factory,
    address: "S. No. 156, Plot No. 163A, 163B, AIE Pedagantyada, Vizag – 530044",
    coords: { x: "72%", y: "60%" },
    mobileOrder: 3
  }
];

const LocationNode = ({ location, isHovered, onHover, onLeave }: any) => {
  const Icon = location.icon;
  
  return (
    <div 
      className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
      style={{ left: location.coords.x, top: location.coords.y }}
    >
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={() => onHover(location.id)}
        onMouseLeave={onLeave}
      >
        {/* Connection Node */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Animated Pulse */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-ssc-gold/40"
          />
          
          {/* Machined Steel Node */}
          <div className={`w-8 h-8 rounded-full bg-[#0C121E] border-2 border-ssc-gold flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all duration-500 ${isHovered ? 'scale-110 shadow-ssc-gold/50' : ''}`}>
            <Icon size={14} className="text-ssc-gold" />
          </div>
          
          {/* Technical Label */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[9px] font-technical font-bold text-white tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
              {location.city}
            </span>
          </div>
        </div>

        {/* Info Panel (Desktop) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className={`absolute z-[100] w-[300px] bg-[#0C121E]/95 backdrop-blur-xl border border-ssc-gold/30 p-6 rounded-xl shadow-2xl pointer-events-none
                ${parseFloat(location.coords.x) > 70 ? 'right-16' : 'left-16'}
                ${parseFloat(location.coords.y) > 70 ? 'bottom-0' : 'top-0'}
              `}
            >
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-3 bg-ssc-gold" />
                  <span className="text-ssc-gold text-[9px] font-technical font-black tracking-[0.2em] uppercase">
                    {location.type}
                  </span>
                </div>
                <h4 className="text-white font-heading font-bold text-lg mb-2 tracking-tight">
                  {location.city}
                </h4>
                <p className="text-white/60 text-xs leading-relaxed mb-4 font-medium italic">
                  {location.address}
                </p>
                <div className="flex items-center gap-2 text-[9px] font-technical font-bold text-ssc-gold/60 uppercase tracking-widest">
                  COORDINATES: {location.coords.x} / {location.coords.y}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-ssc-gold/20 rounded-tr-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const IndustrialNetwork = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };


  return (
    <section id="locations" className="relative py-24 lg:py-32 bg-[#050A14] overflow-hidden min-h-[800px]">
      {/* Engineered Background System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Gold Divider */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-gold/30 to-transparent" />
        
        {/* Technical Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '60px 60px' 
             }} />
        
        {/* Radial Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(12,18,30,0.8)_0%,rgba(5,10,20,1)_100%)]" />
        
        {/* Industrial Markers */}
        <div className="absolute top-10 left-10 text-white/5 font-technical text-[10px] tracking-[0.5em] uppercase vertical-text">
          SSC-NETWORK-DENSITY-01
        </div>
        <div className="absolute bottom-10 right-10 text-white/5 font-technical text-[10px] tracking-[0.5em] uppercase">
          SEC-LOCATIONS-VERIFIED-3
        </div>
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Regional Presence */}
          <div className="w-full lg:w-[40%] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <div className="w-8 h-[1px] bg-ssc-gold" />
                <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                  Regional Presence
                </span>
              </div>
              
              <h2 className="text-[42px] lg:text-[72px] text-white font-heading font-extrabold tracking-tighter uppercase italic leading-[0.85] mb-8">
                OUR INDUSTRIAL<br />
                <span className="text-ssc-gold">NETWORK</span>
              </h2>
              
              <p className="text-white/60 text-base lg:text-lg leading-relaxed font-medium mb-12 max-w-lg mx-auto lg:mx-0">
                A precision-engineered distribution infrastructure designed for rapid material deployment and logistical excellence across the region.
              </p>
              
              <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto lg:mx-0">
                {[
                  { label: 'STRATEGIC PRESENCE', desc: 'Primary hubs at Bhavanipuram & Vizag' },
                  { label: 'FAST SUPPLY', desc: 'Integrated logistics for TMT & Structural' },
                  { label: 'REGIONAL CONNECTIVITY', desc: 'Direct access to major industrial zones' }
                ].map((item) => (
                  <div key={item.label} className="group flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full border border-ssc-gold group-hover:bg-ssc-gold transition-colors" />
                    <div className="text-left">
                      <span className="text-[11px] font-technical font-bold text-white tracking-[0.3em] uppercase block mb-1">
                        {item.label}
                      </span>
                      <span className="text-[10px] text-white/30 uppercase font-medium tracking-wider">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Network Visualization (Desktop) */}
          <div className="w-full lg:w-[60%] hidden lg:block relative aspect-[16/11] bg-white/[0.02] border border-white/5 rounded-[20px] overflow-hidden group/network">
            {/* Engineering Grid Lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-white/50" />
              <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-white/50" />
              <div className="absolute top-0 bottom-0 left-[75%] w-[1px] bg-white/50" />
              <div className="absolute left-0 right-0 top-[25%] h-[1px] bg-white/50" />
              <div className="absolute left-0 right-0 top-[50%] h-[1px] bg-white/50" />
              <div className="absolute left-0 right-0 top-[75%] h-[1px] bg-white/50" />
            </div>

            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <motion.path
                d="M 28% 25% L 32% 65% L 72% 60%"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#C5A059" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C5A059" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Node Rendering */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              {locations.map((loc) => (
                <LocationNode 
                  key={loc.id} 
                  location={loc} 
                  isHovered={activeNode === loc.id}
                  onHover={setActiveNode}
                  onLeave={() => setActiveNode(null)}
                />
              ))}
            </motion.div>
          </div>

          {/* Network Visualization (Mobile: Vertical Supply Route) */}
          <div className="w-full lg:hidden flex flex-col items-center relative py-10">
            {/* Vertical Supply Route Line */}
            <div className="absolute top-0 bottom-0 left-[24px] w-[2px] bg-gradient-to-b from-transparent via-ssc-gold/40 to-transparent" />
            
            <div className="flex flex-col gap-12 w-full relative z-10 px-4">
              {locations.sort((a,b) => a.mobileOrder - b.mobileOrder).map((loc, idx) => {
                const Icon = loc.icon;
                return (
                  <motion.div
                    key={loc.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex items-start gap-8"
                  >
                    {/* Node Dot with Icon */}
                    <div className="relative shrink-0 mt-6">
                      <div className="w-12 h-12 rounded-full bg-[#0C121E] border border-ssc-gold flex items-center justify-center shadow-[0_0_15px_rgba(197,160,89,0.3)] z-20 relative">
                        <Icon size={16} className="text-ssc-gold" />
                      </div>
                      <div className="absolute -inset-2 bg-ssc-gold/5 blur-xl rounded-full" />
                    </div>
                    
                    {/* Industrial Info Panel */}
                    <div className="flex-1 bg-[#0C121E] border border-white/5 p-6 rounded-2xl relative overflow-hidden shadow-xl">
                      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-3 bg-ssc-gold" />
                        <span className="text-ssc-gold text-[9px] font-technical font-black tracking-[0.2em] uppercase">
                          {loc.type}
                        </span>
                      </div>
                      <h4 className="text-white font-heading font-bold text-lg mb-2 tracking-tight">
                        {loc.city}
                      </h4>
                      <p className="text-white/60 text-xs leading-relaxed font-medium italic">
                        {loc.address}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
