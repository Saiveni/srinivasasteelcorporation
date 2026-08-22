import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
        {/* Cylindrical gunmetal body — dark at edges, brighter along the light band */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isH
              ? 'linear-gradient(to bottom, #0c0f13 0%, #2b3239 12%, #6f7883 30%, #99a2ad 40%, #6a727c 55%, #363d45 76%, #14181d 92%, #05070a 100%)'
              : 'linear-gradient(to right, #0c0f13 0%, #2b3239 12%, #6f7883 30%, #99a2ad 40%, #6a727c 55%, #363d45 76%, #14181d 92%, #05070a 100%)',
          }}
        />

        {/* TMT diagonal rib geometry — dark valley + bright crest, curved by mask */}
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
        <div
          className={`absolute ${isH ? 'left-0 right-0 bottom-[24%] h-[2px]' : 'top-0 bottom-0 right-[24%] w-[2px]'} bg-black/50`}
        />

        {/* Specular highlight band */}
        <div
          className={`absolute ${isH ? 'left-0 right-0 top-[20%] h-[10%]' : 'top-0 bottom-0 left-[20%] w-[10%]'} bg-white/25 blur-[3px]`}
        />

        {/* Slow travelling sheen */}
        <motion.div
          animate={isH ? { x: ['-120%', '220%'] } : { y: ['-120%', '220%'] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
          className={`absolute inset-0 ${isH ? 'bg-gradient-to-r skew-x-[-25deg]' : 'bg-gradient-to-b'} from-transparent via-white/22 to-transparent`}
        />

        {/* Machined end faces */}
        <div
          className={`absolute ${isH ? 'left-0 top-0 bottom-0 w-10 bg-gradient-to-r' : 'top-0 left-0 right-0 h-10 bg-gradient-to-b'} from-black/85 to-transparent`}
        />
        <div
          className={`absolute ${isH ? 'right-0 top-0 bottom-0 w-10 bg-gradient-to-l' : 'bottom-0 left-0 right-0 h-10 bg-gradient-to-t'} from-black/85 to-transparent`}
        />
      </div>

      {/* Rim darkening to reinforce cylindrical silhouette */}
      <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_18px_rgba(0,0,0,0.85)]" />
    </div>
  );
};


/**
 * 3D Metal Information Card.
 * Dark charcoal brushed metal with gold border and realistic depth.
 */
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
      initial={{ opacity: 0, y: isH ? -60 : 0, x: isH ? 0 : isLeft ? -100 : 100 }}
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
          ? 'top-[calc(50%+108px)] -translate-x-1/2 w-[280px]' 
          : 'left-[calc(50%+65px)] sm:left-[calc(50%+80px)] -translate-y-1/2 w-[180px] xs:w-[220px] sm:w-[240px]'
      }`}
    >
      <div className="relative group">
        {/* Hanging Eyelets (where hooks connect) */}
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 flex gap-12 z-20">
          <div className="w-4 h-4 rounded-full border-[3px] border-[#c5a059] bg-[#0c0f13] shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
        </div>

        {/* The Card Body (3D Metal Plaque) */}
        <div className="relative bg-[#0c0f13] rounded-[18px] p-4 xs:p-5 lg:p-8 border border-[#c5a059]/40 shadow-[0_40px_80px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(255,255,255,0.05)] overflow-hidden">
          {/* Metal Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.18] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
          
          {/* Beveled edge simulation */}
          <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[18px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[#C5A059] text-[12px] font-technical font-bold tracking-widest opacity-80 bg-[#C5A059]/10 px-2 py-0.5 rounded">
                {number}
              </span>
              {/* Decorative corner element */}
              <div className="w-2 h-2 border-t border-r border-[#C5A059]/30" />
            </div>
            
            <h3 className="text-white text-[18px] xs:text-[22px] sm:text-[26px] lg:text-[32px] font-heading font-extrabold mb-0.5 sm:mb-1 tracking-tight">
              {year}
            </h3>
            <h4 className="text-[#C5A059] text-[9px] xs:text-[10px] sm:text-[11px] lg:text-[12px] font-technical font-bold uppercase tracking-[0.2em] mb-3 sm:mb-5 border-b border-[#C5A059]/20 pb-1 sm:pb-2">
              {title}
            </h4>
            <p className="text-white/70 text-[11px] xs:text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* Bottom gold bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent shadow-[0_0_15px_rgba(197,160,89,0.3)]" />
        </div>

        {/* Realistic drop shadow for depth */}
        <div className="absolute -inset-[4px] bg-black/60 blur-[12px] -z-10 rounded-[22px] translate-y-8" />
      </div>
    </motion.div>
  );
};

/**
 * Physical metal hardware: A brushed gold collar that wraps the cylindrical rod,
 * with a bolt detail and a heavy vertical suspension hook.
 */
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
      className="absolute z-20 [--hook-width:65px] sm:[--hook-width:80px]"
      style={isH ? { left: position, top: '50%', transform: 'translateY(-50%)' } : { top: position, left: '50%', transform: 'translateX(-50%)' }}
    >
      {/* Clamp & Hook Structure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: isH ? -10 : 0, x: isH ? 0 : isLeft ? 10 : -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: delay + 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* The Clamp (Collar) */}
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

          {/* Machined detail: Side bolts */}
          <div className={`absolute ${isH ? 'left-1 top-[15%] w-1.5 h-1.5' : 'top-1 left-[15%] w-1.5 h-1.5'} rounded-full bg-black/40 shadow-inner`} />
          <div className={`absolute ${isH ? 'right-1 top-[15%] w-1.5 h-1.5' : 'bottom-1 left-[15%] w-1.5 h-1.5'} rounded-full bg-black/40 shadow-inner`} />
          <div className={`absolute ${isH ? 'left-1 bottom-[15%] w-1.5 h-1.5' : 'top-1 right-[15%] w-1.5 h-1.5'} rounded-full bg-black/40 shadow-inner`} />
          <div className={`absolute ${isH ? 'right-1 bottom-[15%] w-1.5 h-1.5' : 'bottom-1 right-[15%] w-1.5 h-1.5'} rounded-full bg-black/40 shadow-inner`} />
        </div>

        {/* The Connection Hook */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          whileInView={
            isH 
              ? { height: '108px', opacity: 1 } 
              : { width: 'var(--hook-width)', opacity: 1, x: isLeft ? 'calc(-1 * var(--hook-width))' : 0 }
          }
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: delay + 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${
            isH 
              ? 'left-1/2 -bottom-[108px] -translate-x-1/2 flex flex-col items-center' 
              : isLeft
                ? 'top-1/2 left-0 -translate-y-1/2 flex items-center flex-row-reverse'
                : 'top-1/2 right-0 -translate-y-1/2 flex items-center'
          }`}
        >
          {/* Heavy metal vertical chain/rod */}
          <div
            className={`${isH ? 'w-[10px] h-[75px]' : 'h-[10px] w-[calc(var(--hook-width)-35px)]'} shadow-[4px_0_15px_rgba(0,0,0,0.5)] z-10`}
            style={{
              background: isH 
                ? 'linear-gradient(90deg, #8a6d3b 0%, #f4d088 50%, #8a6d3b 100%)'
                : 'linear-gradient(0deg, #8a6d3b 0%, #f4d088 50%, #8a6d3b 100%)',
            }}
          />
          {/* The Hook Hooking into the Eyelet */}
          <div
            className={`${
              isH 
                ? 'w-[32px] h-[32px] rounded-full border-[8px] border-t-transparent -mt-3' 
                : `w-[32px] h-[32px] rounded-full border-[8px] ${isLeft ? 'border-r-transparent -mr-3' : 'border-l-transparent -ml-3'}`
            } shadow-[4px_4px_15px_rgba(0,0,0,0.7)] z-30`}
            style={{ 
              borderColor: '#f4d088', 
              borderTopColor: isH ? 'transparent' : undefined, 
              borderLeftColor: isH ? undefined : isLeft ? undefined : 'transparent',
              borderRightColor: isLeft ? 'transparent' : undefined
            }}
          >
            {/* Inner ring for realism */}
            <div className="absolute inset-[2px] rounded-full border-2 border-[#8a6d3b]/50" />
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] opacity-60" />
      </motion.div>

      {/* The Information Card */}
      <div className={!isH ? (isLeft ? '-translate-x-[calc(100%+65px)] sm:-translate-x-[calc(100%+80px)]' : '') : ''}>
        <MetalCard
          {...cardData}
          delay={delay}
          orientation={orientation}
          isLeft={isLeft}
        />
      </div>
    </div>
  );
};


export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Animation constants removed as we use simple whileInView reveals per user request


  const milestones = [
    {
      number: '01',
      year: '1994',
      title: 'ESTABLISHED',
      description: 'Founded Srinivasa Steel Corporation in Hyderabad.',
    },
    {
      number: '02',
      year: '2000s',
      title: 'EXPANDED TO VIZAG',
      description: 'Expanded operations to Visakhapatnam steel market.',
    },
    {
      number: '03',
      year: '2010s',
      title: 'MOU DEALER STATUS',
      description: 'Became MoU Dealer for Vizag Steel Plant.',
    },
    {
      number: '04',
      year: 'TODAY',
      title: '3 LOCATIONS, 30+ YEARS',
      description: '3 locations. 30+ years of trust. Thousands of tons delivered.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 lg:py-44 bg-[#050A14] overflow-hidden"
    >
      {/* Architectural background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '110px 110px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,32,52,0.9)_0%,rgba(5,10,20,1)_75%)]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center mb-16 lg:mb-36 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#C5A059]/40" />
              <span className="text-[#C5A059] text-[11px] font-technical font-bold tracking-[0.5em] uppercase">
                OUR JOURNEY
              </span>
              <div className="w-8 h-[1px] bg-[#C5A059]/40" />
            </div>
            <h2 className="text-[32px] sm:text-[46px] lg:text-[100px] text-white font-heading font-extrabold leading-[1.1] sm:leading-[0.95] mb-8 lg:mb-12 tracking-tighter uppercase italic">
              STRONG ROOTS.<br />
              <span className="text-white">STRONGER </span>
              <span className="text-[#C5A059]">FUTURE.</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base lg:text-[20px] font-medium max-w-2xl mx-auto leading-relaxed px-4">
              From a strong beginning in 1994 to becoming a trusted steel supplier across multiple
              locations, our journey is built on quality, trust and consistent delivery.
            </p>
          </motion.div>
        </div>

        {/* THE STEEL ROD + CLAMPS + CARDS */}
        <div className="relative flex justify-center pb-80 lg:pb-[500px]">
          {/* Desktop: horizontal rod */}
          <div className="hidden lg:block max-w-[1300px] w-full overflow-visible relative">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-[1300px] relative"
            >
              <SteelRod orientation="horizontal" />
              
              {/* Clamps & Cards placed across the rod */}
              <ClampHook position="12%" orientation="horizontal" delay={0.8} cardData={milestones[0]!} />
              <ClampHook position="37%" orientation="horizontal" delay={1.1} cardData={milestones[1]!} />
              <ClampHook position="62%" orientation="horizontal" delay={1.4} cardData={milestones[2]!} />
              <ClampHook position="87%" orientation="horizontal" delay={1.7} cardData={milestones[3]!} />

            </motion.div>
          </div>

          {/* Mobile / tablet: vertical rod */}
          <div className="lg:hidden min-h-[1600px] sm:min-h-[1500px] w-full overflow-visible relative flex justify-center py-20">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '100%', opacity: 1 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-[1400px] sm:h-[1300px] relative"
            >
              <SteelRod orientation="vertical" />
              
              {/* Clamps & Cards placed along the rod with alternating visual rhythm */}
              <ClampHook position="8%" orientation="vertical" delay={0.8} cardData={milestones[0]!} offsetSide="right" />
              <ClampHook position="32%" orientation="vertical" delay={1.1} cardData={milestones[1]!} offsetSide="left" />
              <ClampHook position="56%" orientation="vertical" delay={1.4} cardData={milestones[2]!} offsetSide="right" />
              <ClampHook position="80%" orientation="vertical" delay={1.7} cardData={milestones[3]!} offsetSide="left" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

