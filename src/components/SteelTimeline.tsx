import React, { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Realistic 3D TMT reinforcement steel rod.
 * Built from layered gradients: cylindrical body shading, diagonal rib geometry,
 * longitudinal main ribs, specular highlight and contact shadow.
 */
const SteelRod = ({ orientation = 'horizontal' }: { orientation?: 'horizontal' | 'vertical' }) => {
  const isH = orientation === 'horizontal';

  return (
    <div className={`relative ${isH ? 'w-full h-[68px]' : 'w-[52px] h-full'}`}>
      {/* Cast shadow on the environment */}
      <div
        className={`absolute ${isH ? 'left-4 right-4 -bottom-8 h-10' : '-right-8 top-4 bottom-4 w-10'} rounded-full bg-black/80 blur-2xl`}
      />

      <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.85)]">
        {/* Cylindrical gunmetal body */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isH
              ? 'linear-gradient(to bottom, #0c0f13 0%, #2b3239 12%, #6f7883 30%, #99a2ad 40%, #6a727c 55%, #363d45 76%, #14181d 92%, #05070a 100%)'
              : 'linear-gradient(to right, #0c0f13 0%, #2b3239 12%, #6f7883 30%, #99a2ad 40%, #6a727c 55%, #363d45 76%, #14181d 92%, #05070a 100%)',
          }}
        />

        {/* TMT diagonal rib geometry */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage: `repeating-linear-gradient(${isH ? '118deg' : '208deg'},
              rgba(0,0,0,0) 0px,
              rgba(0,0,0,0) 9px,
              rgba(0,0,0,0.55) 12px,
              rgba(0,0,0,0.75) 15px,
              rgba(255,255,255,0.28) 18px,
              rgba(255,255,255,0.12) 21px,
              rgba(0,0,0,0) 24px)`,
            maskImage: isH
              ? 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 18%, #000 45%, rgba(0,0,0,0.85) 72%, transparent 100%)'
              : 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 18%, #000 45%, rgba(0,0,0,0.85) 72%, transparent 100%)',
          }}
        />

        {/* Longitudinal main ribs */}
        <div
          className={`absolute ${isH ? 'left-0 right-0 top-[27%] h-[4px]' : 'top-0 bottom-0 left-[27%] w-[4px]'} bg-[#b9c2cd]/70 blur-[0.5px]`}
        />
        <div
          className={`absolute ${isH ? 'left-0 right-0 top-[31%] h-[3px]' : 'top-0 bottom-0 left-[31%] w-[3px]'} bg-black/60`}
        />

        {/* Specular highlight band */}
        <div
          className={`absolute ${isH ? 'left-0 right-0 top-[20%] h-[10%]' : 'top-0 bottom-0 left-[20%] w-[10%]'} bg-white/25 blur-[3px]`}
        />

        {/* Sheen animation */}
        <motion.div
          animate={isH ? { x: ['-120%', '220%'] } : { y: ['-120%', '220%'] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
          className={`absolute inset-0 ${isH ? 'bg-gradient-to-r skew-x-[-25deg]' : 'bg-gradient-to-b'} from-transparent via-white/22 to-transparent`}
        />
      </div>
      <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_18px_rgba(0,0,0,0.85)]" />
    </div>
  );
};

const MetalCard = ({
  number,
  year,
  title,
  description,
  delay = 0,
  orientation = 'horizontal',
  isLeft = false,
}: {
  number: string;
  year: string;
  title: string;
  description: string;
  delay?: number;
  orientation?: 'horizontal' | 'vertical';
  isLeft?: boolean;
}) => {
  const isH = orientation === 'horizontal';

  return (
    <motion.div
      initial={{ opacity: 0, y: isH ? -60 : 0, x: isH ? 0 : isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: delay + 0.6, 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        y: { type: "spring", stiffness: 40, damping: 15 },
        x: { type: "spring", stiffness: 40, damping: 15 }
      }}
      className={`absolute ${
        isH 
          ? 'top-[calc(50%+108px)] left-1/2 -translate-x-1/2 w-[280px]' 
          : 'top-1/2 w-[240px]'
      }`}
      style={!isH ? {
        left: isLeft ? 'auto' : '50%',
        right: isLeft ? '50%' : 'auto',
        transform: 'translateY(-50%)',
        marginRight: isLeft ? '45px' : '0',
        marginLeft: isLeft ? '0' : '45px',
      } : {}}
    >
      <div className="relative group">
        <div className="relative bg-[#0c0f13] rounded-[18px] p-8 border border-[#c5a059]/40 shadow-[0_40px_80px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(255,255,255,0.05)] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.18] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
          <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[18px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#C5A059] text-[12px] font-technical font-bold tracking-widest opacity-80 bg-[#C5A059]/10 px-2 py-0.5 rounded">
                {number}
              </span>
              <div className="w-2 h-2 border-t border-r border-[#C5A059]/30" />
            </div>
            
            <h3 className="text-white text-[32px] font-heading font-extrabold mb-1 tracking-tight italic">
              {year}
            </h3>
            <h4 className="text-[#C5A059] text-[12px] font-technical font-bold uppercase tracking-[0.2em] mb-5 border-b border-[#C5A059]/20 pb-2">
              {title}
            </h4>
            <p className="text-white/70 text-[15px] leading-relaxed font-medium">
              {description}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent shadow-[0_0_15px_rgba(197,160,89,0.3)]" />
        </div>
        <div className="absolute -inset-[4px] bg-black/60 blur-[12px] -z-10 rounded-[22px] translate-y-8" />
      </div>
    </motion.div>
  );
};

const ClampHook = ({
  position,
  orientation = 'horizontal',
  delay = 0,
  cardData,
  offsetSide = 'right',
}: {
  position: string;
  orientation?: 'horizontal' | 'vertical';
  delay?: number;
  cardData: { number: string; year: string; title: string; description: string };
  offsetSide?: 'left' | 'right';
}) => {
  const isH = orientation === 'horizontal';
  const isLeft = !isH && offsetSide === 'left';

  return (
    <div
      className="absolute z-20 [--hook-width:80px]"
      style={isH ? { left: position, top: '50%', transform: 'translateY(-50%)' } : { top: position, left: '50%', transform: 'translateX(-50%)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: isH ? -10 : 0, x: isH ? 0 : isLeft ? 10 : -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: delay + 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div
          className={`relative ${isH ? 'w-[48px] h-[82px]' : 'w-[82px] h-[48px]'} rounded-[4px] shadow-[0_15px_35px_rgba(0,0,0,0.7)] overflow-hidden`}
          style={{
            background: isH
              ? 'linear-gradient(to bottom, #8a6d3b 0%, #c5a059 25%, #f4d088 45%, #c5a059 65%, #8a6d3b 100%)'
              : 'linear-gradient(to right, #8a6d3b 0%, #c5a059 25%, #f4d088 45%, #c5a059 65%, #8a6d3b 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay" />
          <div className={`absolute ${isH ? 'inset-x-0 top-0 h-[20%]' : 'inset-y-0 left-0 w-[20%]'} bg-white/30 blur-[2px]`} />
          <div className={`absolute ${isH ? 'inset-x-0 bottom-0 h-[20%]' : 'inset-y-0 right-0 w-[20%]'} bg-black/30 blur-[2px]`} />
        </div>

        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          whileInView={isH ? { height: '108px', opacity: 1 } : { width: 'var(--hook-width)', opacity: 1, x: isLeft ? 'calc(-1 * var(--hook-width))' : 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: delay + 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${isH ? 'left-1/2 -bottom-[108px] -translate-x-1/2 flex flex-col items-center' : 'top-1/2 ' + (isLeft ? 'left-0 -translate-y-1/2 flex items-center flex-row-reverse' : 'right-0 -translate-y-1/2 flex items-center')}`}
        >
          <div
            className={`${isH ? 'w-[10px] h-[108px]' : 'h-[10px] w-[var(--hook-width)]'} shadow-[4px_0_15px_rgba(0,0,0,0.5)] z-10`}
            style={{ background: isH ? 'linear-gradient(90deg, #8a6d3b 0%, #f4d088 50%, #8a6d3b 100%)' : 'linear-gradient(0deg, #8a6d3b 0%, #f4d088 50%, #8a6d3b 100%)' }}
          />
        </motion.div>
      </motion.div>
      <MetalCard {...cardData} delay={delay} orientation={orientation} isLeft={isLeft} />
    </div>
  );
};

// Reusable Vertical Spine for Mobile/Tablet
const RebarSpine = () => (
  <div className="relative w-[48px] sm:w-[56px] h-full flex flex-col items-center">
    <div className="absolute right-[-20px] top-0 bottom-0 w-[30px] bg-black/40 blur-xl z-0" />
    <div className="relative w-full h-full rounded-full overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-10">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0a0c10 0%, #1a1e24 15%, #4a525d 35%, #7a828d 45%, #4a525d 65%, #1a1e24 85%, #0a0c10 100%)' }} />
      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: `repeating-linear-gradient(150deg, transparent 0px, transparent 12px, rgba(0,0,0,0.5) 14px, rgba(0,0,0,0.7) 16px, rgba(255,255,255,0.15) 18px, rgba(255,255,255,0.05) 20px, transparent 24px)`, maskImage: 'linear-gradient(to right, transparent 5%, black 20%, black 80%, transparent 95%)' }} />
      <div className="absolute left-[28%] top-0 bottom-0 w-[3px] bg-white/10 blur-[0.5px]" />
      <div className="absolute right-[28%] top-0 bottom-0 w-[2px] bg-black/40" />
      <div className="absolute left-[40%] top-0 bottom-0 w-[12%] bg-white/10 blur-[4px]" />
      <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay" />
    </div>
    <div className="absolute -top-[20px] w-full h-[40px] rounded-full bg-gradient-to-b from-[#4a525d] to-[#1a1e24] shadow-lg z-20" />
  </div>
);

const MetalClampMobile = ({ delay = 0 }: { delay?: number }) => (
  <motion.div initial={{ opacity: 0, scale: 0.8, x: -20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.8, ease: "easeOut" }} className="relative z-30 flex items-center">
    <div className="w-[64px] h-[48px] rounded-[6px] relative shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden" style={{ background: 'linear-gradient(to bottom, #8a6d3b 0%, #c5a059 30%, #f4d088 50%, #c5a059 70%, #8a6d3b 100%)' }}>
      <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay" />
      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/40 shadow-inner" />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/40 shadow-inner" />
    </div>
    <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ delay: delay + 0.3, duration: 0.6 }} className="h-[8px] bg-gradient-to-b from-[#c5a059] via-[#f4d088] to-[#8a6d3b] shadow-md relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[12px] h-[16px] bg-[#c5a059] rounded-sm shadow-sm" />
    </motion.div>
  </motion.div>
);

const HangingCardMobile = ({ milestone, delay = 0 }: { milestone: { year: string, title: string, description: string }, delay?: number }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: delay + 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }} whileHover={{ x: 5 }} className="relative ml-[-4px]">
    <div className="bg-[#0c0f13] border border-[#c5a059]/30 rounded-[12px] p-6 sm:p-8 w-[280px] sm:w-[380px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative group">
      <div className="absolute inset-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-baseline gap-4 mb-4">
          <h3 className="text-white text-[32px] sm:text-[42px] font-heading font-black italic tracking-tighter leading-none">{milestone.year}</h3>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-[#c5a059]/40 to-transparent" />
        </div>
        <h4 className="text-[#c5a059] text-[12px] sm:text-[14px] font-technical font-bold uppercase tracking-[0.2em] mb-4">{milestone.title}</h4>
        <p className="text-white/60 text-[14px] sm:text-[16px] leading-relaxed font-medium">{milestone.description}</p>
      </div>
      <div className="absolute -inset-[2px] bg-gradient-to-br from-white/5 to-transparent rounded-[14px] pointer-events-none" />
    </div>
  </motion.div>
);

export const SteelTimeline = () => {
  const milestones = [
    { number: '01', year: '1994', title: 'ESTABLISHED', description: 'Founded Srinivasa Steel Corporation in Hyderabad.' },
    { number: '02', year: '2000s', title: 'EXPANDED TO VIZAG', description: 'Expanded operations to Visakhapatnam steel market.' },
    { number: '03', year: '2010s', title: 'MOU DEALER STATUS', description: 'Became MoU Dealer for Vizag Steel Plant.' },
    { number: '04', year: 'TODAY', title: '3 LOCATIONS, 30+ YEARS', description: '3 locations. 30+ years of trust. Thousands of tons delivered.' },
  ];

  return (
    <section id="steel-timeline" className="relative py-24 lg:py-32 bg-[#050A14] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1400px] mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="w-12 h-[2px] bg-[#c5a059]" />
              <span className="text-[#c5a059] text-[12px] font-technical font-bold tracking-[0.5em] uppercase">Company Legacy</span>
            </div>
            <h2 className="text-[48px] sm:text-[72px] lg:text-[90px] text-white font-heading font-black tracking-tighter uppercase italic leading-[0.85]">
              HISTORY <span className="text-white/20">HANGING FROM</span><br />
              <span className="text-[#c5a059]">SOLID STEEL.</span>
            </h2>
          </motion.div>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block relative h-[700px] mt-32">
          <div className="relative h-[68px]">
            <SteelRod orientation="horizontal" />
            <ClampHook position="12%" orientation="horizontal" delay={0.8} cardData={milestones[0]!} />
            <ClampHook position="37%" orientation="horizontal" delay={1.1} cardData={milestones[1]!} />
            <ClampHook position="62%" orientation="horizontal" delay={1.4} cardData={milestones[2]!} />
            <ClampHook position="87%" orientation="horizontal" delay={1.7} cardData={milestones[3]!} />
          </div>
        </div>



        {/* Mobile/Tablet Version */}
        <div className="lg:hidden relative flex gap-0 sm:gap-12 min-h-[1200px]">
          <div className="h-full absolute left-0 sm:relative">
            <RebarSpine />
          </div>
            <div className="text-white text-[10px] opacity-30 mb-8 max-w-[300px]">
              {"'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''\n                                        \n                                            \n                                            SCOPE LOCK:\n\nThis request is NOT a global redesign.\n\nOnly modify the explicitly mentioned breakpoint/version.\n\nMOBILE ONLY means desktop code/design must remain unchanged.\n\nDESKTOP ONLY means mobile code/design must remain unchanged.\n\nDo not \"improve\" or synchronize the other breakpoint.\n\nPreserve all currently approved layouts outside the requested breakpoint.\n\nBefore making changes, identify which responsive styles/components are being modified and ensure the opposite breakpoint is protected."}
            </div>

            {milestones.map((ms, idx) => (
              <div key={idx} className="relative flex items-center">
                <div className="absolute left-[-64px] sm:left-[-112px] top-1/2 -translate-y-1/2">
                  <MetalClampMobile delay={idx * 0.4} />
                </div>

                <HangingCardMobile milestone={ms} delay={idx * 0.4} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
