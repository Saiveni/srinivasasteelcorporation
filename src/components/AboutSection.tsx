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
