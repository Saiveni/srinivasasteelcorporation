import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const locations = [
  {
    id: "vijayawada",
    city: "VIJAYAWADA",
    type: "HEAD OFFICE & GODOWN",
    address: "Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada – 520012",
    coords: { x: "25%", y: "30%" },
    mobileOrder: 1
  },
  {
    id: "gannavaram",
    city: "GANNAVARAM",
    type: "YARD",
    address: "Gannavaram Yard, Nuzividu Road, Gannavaram – 521101",
    coords: { x: "25%", y: "70%" },
    mobileOrder: 2
  },
  {
    id: "vizag",
    city: "VIZAG",
    type: "YARD",
    address: "S. No. 156, Plot No. 163A, 163B, AIE Pedagantyada, Vizag – 530044",
    coords: { x: "75%", y: "70%" },
    mobileOrder: 3
  }
];

const LocationNode = ({ location, isHovered, onHover, onLeave }: any) => {
  return (
    <div 
      className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ left: location.coords.x, top: location.coords.y }}
      onMouseEnter={() => onHover(location.id)}
      onMouseLeave={onLeave}
    >
      {/* Machined Steel Node */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Outer Ring */}
        <div className={`absolute inset-0 rounded-full border border-ssc-gold/30 transition-all duration-500 ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`} />
        
        {/* Core Node */}
        <div className={`w-4 h-4 rounded-full bg-ssc-gold shadow-[0_0_15px_rgba(197,160,89,0.5)] transition-transform duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`} />
        
        {/* Technical Label */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[10px] font-technical font-bold text-white tracking-[0.2em] uppercase opacity-60">
            {location.city}
          </span>
        </div>
      </div>
      
      {/* Floating Info Panel (Desktop) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-16 left-1/2 -translate-x-1/2 w-[280px] bg-[#0C121E] border border-ssc-gold/30 p-6 rounded-xl shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-ssc-gold text-[9px] font-technical font-black tracking-[0.2em] uppercase mb-2 block">
                {location.type}
              </span>
              <h4 className="text-white font-heading font-bold text-lg mb-3 tracking-tight">
                {location.city}
              </h4>
              <p className="text-white/60 text-xs leading-relaxed mb-4 font-medium">
                {location.address}
              </p>
              <div className="flex items-center gap-2 text-[9px] font-technical font-bold text-ssc-gold uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity">
                GET DIRECTIONS <ArrowUpRight size={12} />
              </div>
            </div>
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-ssc-gold/20 rounded-tr-xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const IndustrialNetwork = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="locations" className="relative py-32 lg:py-48 bg-[#050A14] overflow-hidden">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '80px 80px' 
             }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,32,52,0.8)_0%,rgba(5,10,20,1)_100%)]" />
      </div>

      <div className="container-wide relative z-10 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="text-ssc-gold text-[11px] font-technical font-bold tracking-[0.4em] uppercase mb-4 block">
                  Regional Presence
                </span>
                <h2 className="text-[38px] lg:text-[64px] text-white font-heading font-extrabold tracking-tighter uppercase italic leading-[0.9] mb-8">
                  OUR INDUSTRIAL <span className="text-ssc-gold">NETWORK</span>
                </h2>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed font-medium mb-10 max-w-md mx-auto lg:mx-0">
                  Strategically positioned to support construction and industrial requirements across our operating region.
                </p>
                <div className="h-[1px] w-24 bg-ssc-gold/30 mx-auto lg:mx-0" />
                
                <div className="mt-12 hidden lg:flex flex-col gap-4">
                  {['STRATEGIC PRESENCE', 'FAST SUPPLY', 'REGIONAL CONNECTIVITY'].map((stat) => (
                    <div key={stat} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold" />
                      <span className="text-[10px] font-technical font-bold text-white/40 tracking-[0.3em] uppercase">{stat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Network Visualization (Desktop) */}
            <div className="w-full lg:w-2/3 hidden lg:block aspect-[4/3] relative bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden">
              {/* Fine technical lines */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-white" />
                <div className="absolute top-0 bottom-0 left-[75%] w-[1px] bg-white" />
                <div className="absolute left-0 right-0 top-[30%] h-[1px] bg-white" />
                <div className="absolute left-0 right-0 top-[70%] h-[1px] bg-white" />
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Vijayawada to Gannavaram */}
                <line 
                  x1="25%" y1="30%" x2="25%" y2="70%" 
                  className={`stroke-ssc-gold/20 transition-all duration-500 ${activeNode === 'vijayawada' || activeNode === 'gannavaram' ? 'stroke-ssc-gold opacity-100' : ''}`}
                  strokeWidth="2" 
                />
                {/* Gannavaram to Vizag */}
                <line 
                  x1="25%" y1="70%" x2="75%" y2="70%" 
                  className={`stroke-ssc-gold/20 transition-all duration-500 ${activeNode === 'gannavaram' || activeNode === 'vizag' ? 'stroke-ssc-gold opacity-100' : ''}`}
                  strokeWidth="2" 
                />
              </svg>

              {/* Nodes */}
              {locations.map((loc) => (
                <LocationNode 
                  key={loc.id} 
                  location={loc} 
                  isHovered={activeNode === loc.id}
                  onHover={setActiveNode}
                  onLeave={() => setActiveNode(null)}
                />
              ))}
            </div>

            {/* Network Visualization (Mobile) */}
            <div className="w-full lg:hidden flex flex-col items-center relative">
              {/* Vertical Route Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-ssc-gold/20 -translate-x-1/2" />
              
              <div className="flex flex-col gap-12 w-full max-w-[340px] relative z-10">
                {locations.sort((a,b) => a.mobileOrder - b.mobileOrder).map((loc) => (
                  <motion.div
                    key={loc.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Central Node Dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-ssc-gold z-20 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
                    
                    {/* Industrial Panel */}
                    <div className="bg-[#0C121E] border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
                      <span className="text-ssc-gold text-[8px] font-technical font-black tracking-[0.2em] uppercase mb-2 block">
                        {loc.type}
                      </span>
                      <h4 className="text-white font-heading font-bold text-base mb-2 tracking-tight">
                        {loc.city}
                      </h4>
                      <p className="text-white/60 text-[11px] leading-relaxed font-medium">
                        {loc.address}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
