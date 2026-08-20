import { useRef, useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue,
  useReducedMotion 
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-steel.jpg";

const lineVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(8px)"
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      delay: 0.8 + i * 0.2, 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] as const 
    },
  }),
};

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Parallax ranges (limited to ~10px)
  const bgMouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["10px", "-10px"]);
  const bgMouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["10px", "-10px"]);
  const textMouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["-4px", "4px"]);
  const textMouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["-4px", "4px"]);

  // Scroll Animations
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const bgParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!shouldReduceMotion && !isMobile && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[75vh] sm:min-h-[85vh] lg:min-h-[92vh] w-full overflow-hidden flex items-center bg-[#050B18]"
    >
      {/* Background image container with Scroll Parallax + Scale */}
      <motion.div 
        style={{ 
          y: bgParallax,
          scale: scrollScale,
          opacity: scrollOpacity
        }} 
        className="absolute inset-0 -z-20 will-change-transform"
      >
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : bgMouseX,
            y: shouldReduceMotion ? 0 : bgMouseY,
          }}
          className="w-full h-full relative"
        >
          <motion.img
            src={heroImage}
            alt="Premium TMT steel rebars"
            className="h-[120%] w-[120%] -left-[10%] -top-[10%] relative object-cover object-center lg:object-center"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 2.5, 
              ease: [0.22, 1, 0.36, 1],
              opacity: { duration: 1.5, delay: 0.2 }
            }}
          />
        </motion.div>
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Main Gradient */}
        <motion.div
          style={{ opacity: scrollOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#050B18]/60 lg:via-[#050B18]/60 to-[#050B18]/40 lg:to-transparent"
        />
        {/* Bottom Fade for section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-[#050B18]/40" />
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
      </div>

      <motion.div
        style={{ 
          y: shouldReduceMotion ? 0 : textMouseY,
          x: shouldReduceMotion ? 0 : textMouseX,
          opacity: scrollOpacity,
          translateY: scrollY
        }}
        className="container mx-auto px-6 py-20 sm:py-28 md:py-32 relative z-10"
      >
        <motion.div initial="hidden" animate="visible" className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div custom={0} variants={lineVariants} className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-ssc-gold" />
            <span className="text-ssc-gold text-eyebrow tracking-[0.2em] font-semibold">
              SINCE 1994
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-white mb-10 leading-[1.1] drop-shadow-2xl font-heading text-[clamp(42px,13vw,64px)] lg:text-8xl">
            <motion.span custom={1} variants={lineVariants} className="block">
              The Strength
            </motion.span>
            <motion.span custom={2} variants={lineVariants} className="block">
              Behind
            </motion.span>
            <motion.span 
              custom={3} 
              variants={{
                ...lineVariants,
                visible: (i: number) => ({
                  ...lineVariants.visible(i),
                  transition: { 
                    ...lineVariants.visible(i).transition,
                    duration: 1.5
                  }
                })
              }} 
              className="block text-ssc-gold"
            >
              Success.
            </motion.span>
          </h1>

          {/* Paragraph */}
          <motion.p
            custom={4}
            variants={lineVariants}
            className="text-[16px] sm:text-body-large text-white/70 max-w-2xl mb-12 leading-relaxed"
          >
            Powering India's infrastructure with premium TMT rebars and industrial supplies. 
            Three decades of engineering excellence and unmatched reliability.
          </motion.p>

          {/* Buttons */}
          <motion.div custom={5} variants={lineVariants} className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-ssc-gold hover:bg-ssc-gold/90 text-white font-black uppercase px-10 py-8 rounded-xl text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 font-display tracking-widest min-h-[44px]"
            >
              View Products <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 bg-white/5 text-white font-black uppercase px-10 py-8 rounded-xl text-lg backdrop-blur-md hover:bg-white hover:text-[#050B18] transition-all font-display tracking-widest min-h-[44px]"
            >
              Get Quote
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
