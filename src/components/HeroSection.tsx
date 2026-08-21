import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#F7F7F4] pt-[80px] overflow-hidden">
      {/* Background Engineering Grid (Subtle) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{ 
          backgroundImage: 'radial-gradient(#0B1B33 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px] lg:min-h-[650px]">
          
          {/* Left Content: Fixed Safe Area for Typography */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center py-12 lg:py-16 z-10 lg:pl-16 lg:pr-12 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[560px]"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[11px] font-heading font-semibold tracking-[0.25em] text-[#0B1B33] uppercase">
                  SINCE 1994
                </span>
                <span className="text-[#0B1B33]/20">—</span>
                <span className="text-[11px] font-technical font-semibold tracking-[0.15em] text-[#D9A000] uppercase">
                  TMT / STEEL / SUPPLY
                </span>
              </div>
              
              {/* Headline: Sophisticated Architectural Hierarchy */}
              <h1 className="text-[42px] sm:text-[52px] lg:text-[66px] font-heading font-medium leading-[1.0] text-[#0B1B33] mb-8 tracking-tight">
                <span className="block mb-2">STRONGER STEEL.</span>
                <span className="block">
                  STRONGER <span className="text-[#D9A000]">TOMORROW.</span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-[17px] text-[#0B1B33]/70 max-w-[500px] mb-12 leading-[1.65] font-normal">
                Trusted supplier of TMT rebars, steel products and decoiling solutions for construction and industrial requirements.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <Button
                  className="bg-[#D9A000] hover:bg-[#D9A000]/90 text-white px-9 h-[56px] rounded-none text-[13px] font-heading font-bold uppercase tracking-[0.15em] transition-all group shadow-lg shadow-[#D9A000]/15"
                >
                  EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#0B1B33]/15 bg-white text-[#0B1B33] hover:bg-[#0B1B33]/5 px-9 h-[56px] rounded-none text-[13px] font-heading font-bold uppercase tracking-[0.15em]"
                >
                  GET A QUOTE
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image Container: Dominate 54% */}
          <div className="w-full lg:w-[54%] relative mt-8 lg:mt-0 min-h-[450px] lg:min-h-full overflow-hidden lg:overflow-visible">
            {/* Custom Architectural Sweeping Curve (Concave) */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[400px] -ml-[200px] z-20 pointer-events-none">
              <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className="w-full h-full fill-[#F7F7F4]"
              >
                <path d="M100,0 Q30,0 30,50 T100,100 L100,100 L100,0 Z" transform="scale(-1, 1) translate(-100, 0)" />
              </svg>
            </div>
            
            {/* Steel Image Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative overflow-hidden bg-[#0B1B33] lg:rounded-l-[0px]"
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
                alt="Bundles of premium ribbed TMT reinforcement steel bars"
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.15] brightness-[0.85] origin-center"
              />
              
              {/* Metallic Color Grade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1B33]/40 via-transparent to-transparent mix-blend-overlay" />
              
              {/* Subtle Gold Line Highlight on the Curve (Desktop) */}
              <div 
                className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-[#D9A000]/30 z-30 opacity-40" 
                style={{ 
                  clipPath: 'path("M1,0 Q0.3,0 0.3,50 T1,100")',
                }} 
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};