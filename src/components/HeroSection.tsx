import { useRef, useEffect, useState } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue,
  useReducedMotion,
  AnimatePresence
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const desktopHero = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000";
const mobileHero = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000";

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  
  // Mouse Parallax Setup (Desktop Only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const textMouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["-4px", "4px"]);
  const textMouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["-4px", "4px"]);

  // Scroll Animations
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    if (!shouldReduceMotion && window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };


  return (
    <section
      ref={ref}
      className="relative isolate min-h-[78vh] sm:min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden flex items-center bg-[#050B18]"
    >
      {/* Background Motion */}
      <motion.div 
        style={{ 
          scale: scrollScale,
          opacity: scrollOpacity
        }} 
        className="absolute inset-0 -z-20 will-change-transform"
      >
        <motion.img
          src={isMobile ? mobileHero : desktopHero}
          alt="Premium industrial steel processing facility"
          className="w-full h-full object-cover object-center sm:object-right-center"
          initial={{ scale: 1, opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { 
            scale: isMobile ? 1.01 : 1.025, 
            opacity: 1 
          }}
          transition={{ 
            scale: {
              duration: isMobile ? 12 : 18,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            },
            opacity: { duration: 1.5, ease: "easeOut" }
          }}
        />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Main Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B18]/95 via-[#050B18]/60 to-transparent" />
        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-[#050B18]/30" />
        {/* Mobile Specific Overlay refinement */}
        {isMobile && <div className="absolute inset-0 bg-gradient-to-b from-[#050B18]/70 via-[#050B18]/40 to-[#050B18]/80" />}
      </div>

      <motion.div
        style={{ 
          y: shouldReduceMotion ? 0 : textMouseY,
          x: shouldReduceMotion ? 0 : textMouseX,
          opacity: scrollOpacity,
          translateY: scrollY
        }}
        className="container mx-auto px-6 sm:px-12 py-20 relative z-10"
      >
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
          className="max-w-4xl text-left"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-8 sm:w-12 h-[2px] bg-ssc-gold" />
            <span className="text-ssc-gold text-[12px] sm:text-[14px] tracking-[0.22em] font-technical font-bold uppercase">
              SINCE 1994
            </span>
          </motion.div>

          {/* Headline Reveal line by line */}
          <h1 className="text-white mb-8 sm:mb-10 leading-[0.98] sm:leading-[1.02] font-heading text-[clamp(42px,11.5vw,60px)] lg:text-[clamp(64px,6.5vw,108px)] font-[700] tracking-[-0.025em] lg:tracking-[-0.035em]">
            <motion.span variants={headlineVariants} className="block">
              The Strength
            </motion.span>
            <motion.span variants={headlineVariants} className="block">
              Behind
            </motion.span>
            <motion.span 
              variants={headlineVariants} 
              className="block text-ssc-gold"
            >
              Success.
            </motion.span>
          </h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[14px] sm:text-[18px] text-white/80 max-w-2xl mb-10 sm:mb-12 leading-[1.65] font-[450]"
          >
            Powering India's infrastructure with premium TMT rebars and industrial supplies. 
            Three decades of engineering excellence and unmatched reliability.
          </motion.p>

          {/* Buttons Stack on Mobile */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-ssc-gold hover:bg-ssc-gold/90 text-white px-8 sm:px-10 h-[56px] sm:h-[64px] rounded-xl text-[13px] shadow-premium active:scale-[0.98] transition-all font-heading font-bold uppercase tracking-[0.04em]"
            >
              View Products <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/20 bg-white/5 text-white px-8 sm:px-10 h-[56px] sm:h-[64px] rounded-xl text-[13px] backdrop-blur-sm hover:bg-white hover:text-[#050B18] active:scale-[0.98] transition-all font-heading font-bold uppercase tracking-[0.04em]"
            >
              Get Quote
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {!isMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-[10px] font-technical font-bold text-white/40 tracking-[0.3em] uppercase">
              Scroll to Explore
            </span>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="text-ssc-gold w-5 h-5 opacity-60" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

