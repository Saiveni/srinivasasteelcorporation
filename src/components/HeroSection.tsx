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

// Premium industrial photography of TMT bars in a yard
const tmtHeroImage = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000";

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
  
  const textMouseX = useTransform(smoothMouseX, [-0.5, 0.5], ["-2px", "2px"]);
  const textMouseY = useTransform(smoothMouseY, [-0.5, 0.5], ["-2px", "2px"]);

  // Scroll Animations
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] lg:min-h-[90vh] w-full flex items-center bg-[#F8F9FA] overflow-hidden"
    >
      {/* Background Content Layout */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {/* Left Content Area (Light) */}
        <div className="w-full lg:w-[45%] bg-[#F8F9FA]" />
        
        {/* Right Image Area with Curved Transition */}
        <div className="relative w-full lg:w-[55%] h-[45vh] lg:h-auto overflow-hidden">
          {/* Curved architectural transition (Desktop Only) */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[120px] -ml-[60px] z-10">
            <svg 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none" 
              className="w-full h-full fill-[#F8F9FA]"
            >
              <path d="M100,0 C40,0 40,100 100,100 L100,100 L100,0 Z" transform="scale(-1, 1) translate(-100, 0)" />
            </svg>
          </div>
          
          <motion.div 
            style={{ opacity: scrollOpacity }}
            className="w-full h-full will-change-transform"
          >
            <motion.img
              src={tmtHeroImage}
              alt="Ribbed TMT reinforcement bars bundles in a professional steel yard"
              className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05]"
              initial={{ scale: 1.04, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 1 }
              }}
            />
            {/* Subtle overlay for realism */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA]/20 to-transparent lg:from-[#F8F9FA]/10" />
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 relative z-20">
        <motion.div
          style={{ 
            y: shouldReduceMotion ? 0 : textMouseY,
            x: shouldReduceMotion ? 0 : textMouseX,
            opacity: scrollOpacity,
            translateY: scrollY
          }}
          className="max-w-[1400px] mx-auto"
        >
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
            className="max-w-[620px] pt-12 lg:pt-0"
          >
            {/* EST Detail */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-technical font-bold text-ssc-gold tracking-[0.25em] uppercase">
                EST. 1994
              </span>
              <span className="w-8 h-[1px] bg-ssc-gold/40" />
              <span className="text-[11px] font-technical font-bold text-ssc-navy/40 tracking-[0.25em] uppercase">
                STEEL / TMT / SUPPLY
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-ssc-navy/60 text-[13px] tracking-[0.22em] font-technical font-bold uppercase">
                SINCE 1994
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-ssc-navy mb-8 leading-[1.1] font-heading text-[48px] sm:text-[64px] lg:text-[82px] font-[500] tracking-[-0.02em]">
              <motion.span variants={itemVariants} className="block">
                QUALITY STEEL.
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                RELIABLE SUPPLY.
              </motion.span>
            </h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] sm:text-[18px] lg:text-[19px] text-ssc-navy/70 max-w-[520px] mb-10 leading-[1.6] font-[400]"
            >
              Trusted steel supply, TMT products and decoiling solutions for construction and industrial requirements.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-ssc-gold hover:bg-ssc-gold/90 text-ssc-navy px-10 h-[58px] rounded-sm text-[13px] font-technical font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                View Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-ssc-navy/10 bg-white/50 text-ssc-navy hover:bg-white px-10 h-[58px] rounded-sm text-[13px] font-technical font-bold uppercase tracking-[0.1em] transition-all duration-300"
              >
                Get a Quote
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {!isMobile && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-[22.5%] -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-ssc-navy/20 w-5 h-5" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};