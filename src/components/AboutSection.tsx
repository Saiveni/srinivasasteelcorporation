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
 * Physical metal hardware: A brushed gold collar that wraps the cylindrical rod,
 * with a bolt detail and a heavy vertical suspension hook.
 */
const ClampHook = ({
  position,
  orientation = 'horizontal',
  delay = 0,
}: {
  position: string;
  orientation?: 'horizontal' | 'vertical';
  delay?: number;
}) => {
  const isH = orientation === 'horizontal';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute z-20"
      style={isH ? { left: position, top: '50%', transform: 'translateY(-50%)' } : { top: position, left: '50%', transform: 'translateX(-50%)' }}
    >
      <div className="relative group">
        {/* The Clamp (Collar) */}
        <div
          className={`relative ${isH ? 'w-[48px] h-[82px]' : 'w-[68px] h-[48px]'} rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden`}
          style={{
            background: isH
              ? 'linear-gradient(to bottom, #8a6d3b 0%, #c5a059 25%, #f4d088 45%, #c5a059 65%, #8a6d3b 100%)'
              : 'linear-gradient(to right, #8a6d3b 0%, #c5a059 25%, #f4d088 45%, #c5a059 65%, #8a6d3b 100%)',
          }}
        >
          {/* Metallic highlights & brushed texture */}
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
        <div className={`absolute ${isH ? 'left-1/2 -bottom-[50px] -translate-x-1/2 flex flex-col items-center' : 'top-1/2 -right-[50px] -translate-y-1/2 flex items-center'}`}>
          {/* Main shank */}
          <div
            className={`${isH ? 'w-[8px] h-[35px]' : 'h-[8px] w-[35px]'} shadow-[4px_0_10px_rgba(0,0,0,0.4)]`}
            style={{
              background: 'linear-gradient(90deg, #8a6d3b 0%, #c5a059 50%, #8a6d3b 100%)',
            }}
          />
          {/* C-Hook end */}
          <div
            className={`${isH ? 'w-[20px] h-[20px] rounded-full border-[6px] border-t-transparent -mt-1' : 'w-[20px] h-[20px] rounded-full border-[6px] border-l-transparent -ml-1'} shadow-[2px_2px_8px_rgba(0,0,0,0.5)]`}
            style={{ borderColor: '#c5a059', borderTopColor: 'transparent', borderLeftColor: isH ? undefined : 'transparent' }}
          />
        </div>

        {/* Deep contact shadow on the rod */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] opacity-60" />
      </div>
    </motion.div>
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

        {/* THE STEEL ROD */}
        <div className="relative flex justify-center">
          {/* Desktop: horizontal rod */}
          <motion.div
            style={{ width: rodReveal, opacity: rodOpacity }}
            className="hidden lg:block max-w-[1300px] w-full overflow-hidden"
          >
            <div className="w-[1300px]">
              <SteelRod orientation="horizontal" />
            </div>
          </motion.div>

          {/* Mobile / tablet: vertical rod */}
          <motion.div
            style={{ height: rodReveal, opacity: rodOpacity }}
            className="lg:hidden h-[520px] overflow-hidden"
          >
            <div className="h-[520px]">
              <SteelRod orientation="vertical" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
