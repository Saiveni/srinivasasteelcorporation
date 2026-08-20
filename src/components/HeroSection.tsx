import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-steel.jpg";

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.13, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[88vh] w-full overflow-hidden flex items-center"
    >
      {/* Background image with Ken-Burns zoom + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20 will-change-transform">
        <motion.img
          src={heroImage}
          alt="Stacked TMT steel rebar bundles in an industrial warehouse"
          width={1920}
          height={1088}
          className="h-[115%] w-full object-cover object-center"
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>

      {/* Readability overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#050B18]/92 via-[#050B18]/70 to-[#050B18]/25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#050B18]/85 via-transparent to-[#050B18]/40" />

      <motion.div
        style={{ y: textY }}
        className="container mx-auto px-6 py-28 md:py-32 relative z-10"
      >
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div custom={0} variants={lineVariants} className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-ssc-gold" />
            <span className="text-ssc-gold text-eyebrow">
              Since 1994
            </span>
          </motion.div>

          <h1 className="h1-fluid text-white mb-8 drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            <motion.span custom={1} variants={lineVariants} className="block">
              The Strength
            </motion.span>
            <motion.span custom={2} variants={lineVariants} className="block">
              Behind <span className="text-ssc-gold font-heading">Success.</span>
            </motion.span>
          </h1>

          <motion.p
            custom={3}
            variants={lineVariants}
            className="text-body-large text-white/80 max-w-2xl mb-10"
          >
            Premium TMT bars and industrial supplies for India's largest infrastructure projects.
          </motion.p>

          <motion.div custom={4.5} variants={lineVariants} className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-ssc-gold hover:bg-ssc-gold/90 text-white font-black uppercase px-8 py-7 rounded-xl text-lg shadow-premium transition-transform hover:-translate-y-1 font-display tracking-wide"
            >
              View Products <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/5 text-white font-black uppercase px-8 py-7 rounded-xl text-lg backdrop-blur-sm hover:bg-white hover:text-ssc-navy transition-colors font-display tracking-wide"
            >
              Get Quote
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
