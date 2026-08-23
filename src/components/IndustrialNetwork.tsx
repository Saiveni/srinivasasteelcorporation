import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Warehouse, Factory, Target } from 'lucide-react';

const locations = [
  {
    id: "vijayawada",
    city: "VIJAYAWADA",
    type: "HEAD OFFICE & GODOWN",
    icon: Building2,
    address: "Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada – 520012",
    coords: { x: "28%", y: "22%" },
  },
  {
    id: "gannavaram",
    city: "GANNAVARAM",
    type: "YARD",
    icon: Warehouse,
    address: "Gannavaram Yard, Nuzividu Road, Gannavaram – 521101",
    coords: { x: "38%", y: "68%" },
  },
  {
    id: "vizag",
    city: "VIZAG",
    type: "YARD",
    icon: Factory,
    address: "S. No. 156, Plot No. 163A, 163B, AIE Pedagantyada, Vizag – 530044",
    coords: { x: "78%", y: "55%" },
  }
];

export const IndustrialNetwork = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="locations" className="relative py-24 lg:py-32 bg-[#050A14] overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '100px 100px' 
             }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05)_0%,rgba(5,10,20,1)_80%)]" />
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
              <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                Regional Presence
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
            </div>
            <h2 className="text-[42px] lg:text-[72px] text-white font-heading font-extrabold tracking-tighter uppercase italic leading-[0.85]">
              STEEL SUPPLY <span className="text-ssc-gold">NETWORK</span>
            </h2>
          </motion.div>
        </div>

        {/* Network Map / Interactive Visualization */}
        <div className="relative w-full aspect-[16/9] lg:h-[700px] bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden group/map shadow-2xl">
          {/* Map Grid Detail */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full">
              <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(197,160,89,0.3)" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>

          {/* Network Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 28% 22% L 38% 68% L 78% 55%"
              fill="none"
              stroke="rgba(197,160,89,0.2)"
              strokeWidth="1.5"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Markers & Interaction Nodes */}
          {locations.map((loc) => {
            const Icon = loc.icon;
            const isActive = activeId === loc.id;
            
            return (
              <div 
                key={loc.id}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left: loc.coords.x, top: loc.coords.y }}
              >
                <div 
                  className="relative cursor-pointer"
                  onMouseEnter={() => setActiveId(loc.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onClick={() => setActiveId(isActive ? null : loc.id)}
                >
                  {/* Machined Metallic Marker */}
                  <motion.div 
                    animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                    className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#1A2333] to-[#050A14] border-2 border-ssc-gold shadow-[0_0_20px_rgba(197,160,89,0.3)] flex items-center justify-center relative z-10 transition-all"
                  >
                    <Icon size={isActive ? 20 : 16} className="text-ssc-gold" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-ssc-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  {/* Marker Pulse */}
                  <motion.div 
                    animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-[-10px] rounded-full border border-ssc-gold/40 z-0"
                  />

                  {/* Desktop Hover Card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className={`absolute z-[100] w-[280px] sm:w-[340px] bg-[#0C121E] border border-ssc-gold/30 p-6 rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] pointer-events-none hidden lg:block
                          ${parseFloat(loc.coords.x) > 60 ? '-left-[360px]' : 'left-20'}
                          ${parseFloat(loc.coords.y) > 70 ? 'bottom-0' : 'top-0'}
                        `}
                      >
                        {/* Connecting visual line */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-[1px] bg-ssc-gold/30 ${parseFloat(loc.coords.x) > 60 ? '-right-8' : '-left-8'}`} />
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1 h-3 bg-ssc-gold" />
                          <span className="text-ssc-gold text-[9px] font-technical font-black tracking-[0.2em] uppercase">
                            {loc.type}
                          </span>
                        </div>
                        <h4 className="text-white font-heading font-black italic text-2xl mb-2 tracking-tight">
                          {loc.city}
                        </h4>
                        <p className="text-white/60 text-xs leading-relaxed font-medium mb-4 italic">
                          {loc.address}
                        </p>
                        <div className="flex items-center gap-2 text-[8px] font-technical font-bold text-ssc-gold/40 uppercase tracking-[0.3em]">
                          INDUSTRIAL CORE • {loc.id === 'vijayawada' ? 'ZONE 01' : 'ZONE 02'}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Locations List */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:hidden">
          {locations.map((loc, idx) => {
            const Icon = loc.icon;
            return (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0C121E] border border-white/5 p-8 rounded-[24px] shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-ssc-gold/10 rounded-tr-[24px]" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ssc-gold/10 flex items-center justify-center border border-ssc-gold/20">
                    <Icon size={20} className="text-ssc-gold" />
                  </div>
                  <div>
                    <span className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.2em] uppercase">
                      {loc.type}
                    </span>
                    <h4 className="text-white font-heading font-bold text-xl tracking-tight">
                      {loc.city}
                    </h4>
                  </div>
                </div>
                <p className="text-white/50 text-[13px] leading-relaxed font-medium">
                  {loc.address}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
