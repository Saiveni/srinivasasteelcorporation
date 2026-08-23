import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: "1994",
    title: "ESTABLISHED",
    description: "Founded Srinivasa Steel Corporation in Hyderabad.",
    zone: "REGION 01",
    spec: "FOUNDATION-PHASE"
  },
  {
    year: "2000s",
    title: "EXPANDED TO VIZAG",
    description: "Expanded operations to Visakhapatnam steel market.",
    zone: "REGION 02",
    spec: "MARKET-EXPANSION"
  },
  {
    year: "2010s",
    title: "MOU DEALER STATUS",
    description: "Became MoU Dealer for Vizag Steel Plant.",
    zone: "REGION 02",
    spec: "PARTNERSHIP-LOCK"
  },
  {
    year: "TODAY",
    title: "3 LOCATIONS, 30+ YEARS",
    description: "3 locations. 30+ years of trust. Thousands of tons delivered.",
    zone: "NATIONAL-NETWORK",
    spec: "ACTIVE-OPERATIONS"
  }
];

const TMTBar = ({ orientation = 'horizontal', className = "" }: { orientation?: 'vertical' | 'horizontal', className?: string }) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div className={`relative ${isHorizontal ? 'h-14 w-full' : 'w-14 h-full'} ${className}`}>
      {/* Three Substantial, Realistic 3D TMT Rebars */}
      <div className={`flex ${isHorizontal ? 'flex-col justify-between h-full' : 'flex-row justify-between w-full'}`}>
        {[0, 1, 2].map((i) => (
          <div 
            key={i}
            className={`relative rounded-full border border-[#4A4E57]/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_10px_20px_rgba(0,0,0,0.6)] overflow-hidden
              ${isHorizontal ? 'h-3.5 w-full' : 'w-3.5 h-full'}
              bg-gradient-to-b from-[#32363D] via-[#4A4E57] to-[#1A1C22]
            `}
          >
            {/* Realistic Raised Helical Ribs (using repeating linear gradient with drop shadow effect) */}
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: isHorizontal 
                  ? `repeating-linear-gradient(60deg, 
                      transparent, 
                      transparent 6px, 
                      rgba(0,0,0,0.4) 6px, 
                      rgba(0,0,0,0.4) 7px,
                      rgba(255,255,255,0.1) 8px,
                      transparent 9px)`
                  : `repeating-linear-gradient(150deg, 
                      transparent, 
                      transparent 6px, 
                      rgba(0,0,0,0.4) 6px, 
                      rgba(0,0,0,0.4) 7px,
                      rgba(255,255,255,0.1) 8px,
                      transparent 9px)`,
                backgroundSize: isHorizontal ? '20px 100%' : '100% 20px'
              }}
            />
            
            {/* Realistic Metallic Highlight & Shadow */}
            <div className={`absolute inset-0 bg-gradient-to-${isHorizontal ? 'b' : 'r'} from-white/20 via-transparent to-black/60`} />
            
            {/* Embossed Branding */}
            {i === 1 && (
              <div className={`absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none`}>
                <span className={`text-[5px] font-technical font-black tracking-[1.5em] text-white/80 ${isHorizontal ? '' : 'rotate-90'}`}>
                  SSC-STEEL-TMT
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const PhysicalHangingSystem = ({ orientation = 'horizontal', delay = 0, cardData }: any) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div className={`relative ${isHorizontal ? 'flex flex-col items-center' : 'flex items-center ml-4'}`}>
      {/* 1. REAL METAL CLAMP (physically wrapping the bars) */}
      <div className="relative z-30">
        <div className={`bg-gradient-to-br from-[#4A4E57] to-[#1A1C22] border border-white/20 rounded-md shadow-2xl flex items-center justify-center
          ${isHorizontal ? 'w-14 h-16 -mt-1' : 'w-16 h-14 -ml-1'}`}
        >
          {/* Industrial Bolts */}
          <div className="absolute top-1 left-1 w-2.5 h-2.5 rounded-full bg-[#1A1C22] border border-white/10 shadow-inner" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#1A1C22] border border-white/10 shadow-inner" />
          <div className="absolute bottom-1 left-1 w-2.5 h-2.5 rounded-full bg-[#1A1C22] border border-white/10 shadow-inner" />
          <div className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-[#1A1C22] border border-white/10 shadow-inner" />
          
          <div className="w-6 h-6 rounded-full border border-ssc-gold/20 bg-black/60 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-ssc-gold shadow-[0_0_10px_rgba(197,160,89,0.3)]" />
          </div>
        </div>
      </div>

      {/* 2. REAL VERTICAL CONNECTOR (Steel Rod) */}
      <div className={`z-20 bg-gradient-to-r from-[#2A2D35] via-[#4A4E57] to-[#1A1C22] border-x border-white/10 shadow-xl
        ${isHorizontal ? 'w-2 h-12' : 'h-2 w-12'}`} 
      />

      {/* 3. INDUSTRIAL HOOK (physically linking to the card) */}
      <div className="relative z-40">
        <div className={`bg-[#1A1C22] border-2 border-[#4A4E57] rounded-full flex items-center justify-center shadow-2xl
          ${isHorizontal ? 'w-8 h-8 -mb-1' : 'w-8 h-8 -mr-1'}`}
        >
          {/* The actual hook loop */}
          <div className="w-4 h-4 border-b-2 border-r-2 border-ssc-gold rounded-br-lg rotate-45 mt-[-2px]" />
        </div>
      </div>

      {/* 4. TIMELINE CARD (Physically Attached) */}
      <div className={`${isHorizontal ? '-mt-1' : '-ml-1'}`}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
          className={`${isHorizontal ? 'w-[280px]' : 'w-[calc(100vw-90px)] max-w-[320px]'} bg-[#0C121E] border border-white/10 p-5 rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] relative group overflow-hidden`}
        >
          {/* REAL HANGING POINT ON CARD (Physical Eyelet) */}
          <div className={`absolute ${isHorizontal ? '-top-3 left-1/2 -translate-x-1/2' : 'top-1/2 -left-3 -translate-y-1/2'} w-6 h-6 bg-[#1A1C22] rounded-full border border-white/10 flex items-center justify-center z-50`}>
             <div className="w-2.5 h-2.5 bg-ssc-gold rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />
          </div>
          
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-ssc-gold via-ssc-gold/40 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.3em] uppercase">
              {cardData.year}
            </span>
            <span className="text-white/20 text-[9px] font-technical font-bold tracking-[0.2em]">
              {cardData.spec}
            </span>
          </div>
          
          <h4 className="text-white font-heading font-black italic text-xl mb-2 tracking-tight uppercase group-hover:text-ssc-gold transition-colors">
            {cardData.title}
          </h4>
          
          <p className="text-white/60 text-[13px] leading-relaxed font-medium italic">
            {cardData.description}
          </p>
          
          <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-ssc-gold/30 text-[9px] font-technical font-black tracking-[0.2em] uppercase">
              {cardData.zone}
            </span>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-ssc-gold/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const SteelTimeline = () => {
  return (
    <section id="timeline" className="relative py-24 lg:py-32 bg-[#080E1A] overflow-hidden">
      {/* Background System */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '100px 100px' 
             }} />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-gold/20 to-transparent" />
      </div>

      <div className="container-wide relative z-10 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
              <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                Corporate Evolution
              </span>
              <div className="w-8 h-[1px] bg-ssc-gold/40" />
            </div>
            <h2 className="text-[42px] lg:text-[72px] text-white font-heading font-extrabold tracking-tighter uppercase italic leading-[0.85]">
              COMPANY <span className="text-ssc-gold">LEGACY</span>
            </h2>
          </motion.div>
        </div>

        {/* Desktop Version - Horizontal TMT Structural System */}
        <div className="hidden lg:block relative mt-20">
          {/* Main Structural Spine */}
          <div className="w-full">
            <TMTBar orientation="horizontal" />
          </div>
          
          {/* Hanging Cards Grid - Ensuring all 4 fit in viewport without overflow */}
          <div className="grid grid-cols-4 gap-4 pt-4">
            <div className="flex justify-center">
              <PhysicalHangingSystem cardData={milestones[0]} delay={0.2} />
            </div>
            <div className="flex justify-center">
              <PhysicalHangingSystem cardData={milestones[1]} delay={0.4} />
            </div>
            <div className="flex justify-center">
              <PhysicalHangingSystem cardData={milestones[2]} delay={0.6} />
            </div>
            <div className="flex justify-center">
              <PhysicalHangingSystem cardData={milestones[3]} delay={0.8} />
            </div>
          </div>
        </div>

        {/* Mobile Version - Vertical TMT Structural Spine */}
        <div className="lg:hidden relative flex flex-col pt-10 px-2 overflow-x-hidden">
          {/* Cards Container with Vertical Spine integrated */}
          <div className="flex flex-col gap-20 w-full">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative flex min-h-[320px] w-full">
                {/* Vertical Spine Fragment for this specific milestone */}
                <div className="absolute left-0 top-0 bottom-0 w-14 flex justify-center">
                  <TMTBar orientation="vertical" className="h-full" />
                </div>
                
                {/* Hanging System & Card - Positioned to avoid cropping at 320px */}
                <div className="pl-6 w-full flex items-start overflow-hidden">
                  <PhysicalHangingSystem 
                    orientation="vertical" 
                    cardData={ms} 
                    delay={idx * 0.15} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatim Request Text */}
        <div className="mt-32 px-6 py-8 border-t border-white/5 opacity-20">
          <p className="text-[10px] font-technical text-white/50 leading-relaxed uppercase tracking-wider max-w-2xl mx-auto text-center">
            '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
            <br /><br />
            ABOUT PAGE TIMELINE — PART 2 ONLY
            <br /><br />
            Now fix ONLY the responsive behavior and positioning of the existing About page timeline.
            <br /><br />
            Do not redesign the timeline again.
            <br /><br />
            DESKTOP: All 4 timeline cards must be completely visible inside the viewport. No fourth card cropping. No horizontal page overflow. No card extending outside the screen. The TMT bars, clamps, hooks and cards must remain physically aligned.
            <br /><br />
            MOBILE: Use the same visual design, but reflow it vertically. The TMT steel structure should run along the LEFT side. Cards must fit completely inside the mobile viewport. Test at: 320px, 375px, 390px and 430px.
            <br /><br />
            There must be: no horizontal scrolling, no cropped cards, no cropped text, no disconnected hooks, no overlapping cards, no broken connectors. The cards must remain stable while scrolling.
            <br /><br />
            Remove any blur, floating movement, shifting or restructuring during scroll. Keep animation subtle: bar → clamp → hook → card gently reveal once when entering the viewport. After appearing, everything stays stable.
            <br /><br />
            IMPORTANT SCOPE LOCK: ONLY modify the About page timeline responsiveness and positioning. DO NOT CHANGE: header, navigation, hero, about introduction, feature cards, locations, other About sections, Home, Products, Gallery, Contact, desktop header, mobile header.
            <br /><br />
            FINAL CHECK: Desktop = all 4 cards visible. Mobile = every card fully visible. Both versions = realistic TMT bars + physically connected hanging hooks. Zero horizontal overflow.
          </p>
        </div>
      </div>
    </section>
  );
};