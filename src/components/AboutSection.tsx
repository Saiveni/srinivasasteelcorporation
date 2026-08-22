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
            backgroundImage: `repeating-linear-gradient(${isH ? '118deg' : '28deg'},
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
}: {
  number: string;
  year: string;
  title: string;
  description: string;
  delay?: number;
  orientation?: 'horizontal' | 'vertical';
}) => {
  const isH = orientation === 'horizontal';

  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: delay + 0.6, 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        y: { type: "spring", stiffness: 40, damping: 15 } // Settling movement
      }}
      className={`absolute ${
        isH ? 'top-[calc(50%+108px)] -translate-x-1/2 w-[280px]' : 'left-[calc(50%+115px)] -translate-y-1/2 w-[240px]'
      }`}
    >
      <div className="relative group">
        {/* The Card Body (3D Metal Plaque) */}
        <div className="relative bg-[#0c0f13] rounded-[18px] p-8 border border-[#c5a059]/30 shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(255,255,255,0.05)] overflow-hidden">
          {/* Metal Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
          
          {/* Subtle gold edge highlight (simulated bevel) */}
          <div className="absolute inset-[1px] border border-white/5 rounded-[17px] pointer-events-none" />
          
          <div className="relative z-10">
            <span className="block text-[#C5A059] text-[12px] font-technical font-bold tracking-widest mb-4 opacity-70">
              {number}
            </span>
            <h3 className="text-white text-[28px] font-heading font-bold mb-2 tracking-tight">
              {year}
            </h3>
            <h4 className="text-[#C5A059] text-[13px] font-technical font-bold uppercase tracking-wider mb-5">
              {title}
            </h4>
            <p className="text-white/60 text-[15px] leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* Bottom sheen effect */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
        </div>

        {/* Realistic extrusion shadow */}
        <div className="absolute -inset-[2px] bg-black/50 blur-[8px] -z-10 rounded-[20px] translate-y-4" />
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
}: {
  position: string;
  orientation?: 'horizontal' | 'vertical';
  delay?: number;
  cardData: { number: string; year: string; title: string; description: string };
}) => {

  const isH = orientation === 'horizontal';

  return (
    <div
      className="absolute z-20"
      style={isH ? { left: position, top: '50%', transform: 'translateY(-50%)' } : { top: position, left: '50%', transform: 'translateX(-50%)' }}
    >
      {/* Clamp & Hook Structure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: isH ? -10 : 0, x: isH ? 0 : -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: delay + 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* The Clamp (Collar) */}
        <div
          className={`relative ${isH ? 'w-[48px] h-[82px]' : 'w-[68px] h-[48px]'} rounded-[4px] shadow-[0_15px_35px_rgba(0,0,0,0.7)] overflow-hidden`}
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
          initial={{ height: 0, width: 0, opacity: 0 }}
          whileInView={isH ? { height: '55px', opacity: 1 } : { width: '55px', opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: delay + 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute ${isH ? 'left-1/2 -bottom-[55px] -translate-x-1/2 flex flex-col items-center' : 'top-1/2 -right-[55px] -translate-y-1/2 flex items-center'}`}
        >
          <div
            className={`${isH ? 'w-[8px] h-[35px]' : 'h-[8px] w-[35px]'} shadow-[4px_0_10px_rgba(0,0,0,0.4)]`}
            style={{
              background: 'linear-gradient(90deg, #8a6d3b 0%, #c5a059 50%, #8a6d3b 100%)',
            }}
          />
          <div
            className={`${isH ? 'w-[24px] h-[24px] rounded-full border-[7px] border-t-transparent -mt-2' : 'w-[24px] h-[24px] rounded-full border-[7px] border-l-transparent -ml-2'} shadow-[2px_2px_12px_rgba(0,0,0,0.6)]`}
            style={{ borderColor: '#c5a059', borderTopColor: 'transparent', borderLeftColor: isH ? undefined : 'transparent' }}
          />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] opacity-60" />
      </motion.div>

      {/* The Information Card */}
      <MetalCard
        {...cardData}
        delay={delay}
        orientation={orientation}
      />
    </div>
  );
};


export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rodReveal = useTransform(scrollYProgress, [0.08, 0.45], ['0%', '100%']);
  const rodOpacity = useTransform(scrollYProgress, [0.06, 0.14], [0, 1]);

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
        <div className="text-center mb-24 lg:mb-36">
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
            <h2 className="text-[42px] lg:text-[88px] text-white font-heading font-extrabold leading-[1] mb-10 tracking-tight uppercase">
              STRONG ROOTS.<br />
              <span className="text-white">STRONGER </span>
              <span className="text-[#C5A059]">FUTURE.</span>
            </h2>
            <p className="text-white/70 text-base lg:text-[20px] font-medium max-w-2xl mx-auto leading-relaxed">
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
          <div className="lg:hidden h-[1300px] overflow-visible relative">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '100%', opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1300px] relative"
            >
              <SteelRod orientation="vertical" />
              
              {/* Clamps & Cards placed along the rod */}
              <ClampHook position="10%" orientation="vertical" delay={0.8} cardData={milestones[0]!} />
              <ClampHook position="35%" orientation="vertical" delay={1.1} cardData={milestones[1]!} />
              <ClampHook position="60%" orientation="vertical" delay={1.4} cardData={milestones[2]!} />
              <ClampHook position="85%" orientation="vertical" delay={1.7} cardData={milestones[3]!} />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

