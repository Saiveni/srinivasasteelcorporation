import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#F7F7F4] pt-[80px] overflow-hidden">
      {/* Background Engineering Details */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#0B1B33 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[610px]">
          
          {/* Left Content: ~45% */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center py-12 lg:py-16 z-10 lg:pr-[80px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] font-heading font-semibold tracking-[0.2em] text-[#0B1B33] uppercase">
                  SINCE 1994
                </span>
                <span className="text-[#0B1B33]/20">—</span>
                <span className="text-[11px] font-technical font-semibold tracking-[0.1em] text-[#D9A000]/80 uppercase">
                  TMT / STEEL / SUPPLY
                </span>
              </div>
              
              <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-heading font-medium leading-[1.02] text-[#0B1B33] mb-8 tracking-tight">
                <span className="block whitespace-nowrap">STRONGER STEEL.</span>
                <span className="block mt-1">
                  STRONGER <span className="text-[#D9A000]">TOMORROW.</span>
                </span>
              </h1>
              
              <p className="text-[17px] text-[#0B1B33]/70 max-w-[520px] mb-10 leading-[1.6] font-normal">
                Trusted supplier of TMT rebars, steel products and decoiling solutions for construction and industrial requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-[#D9A000] hover:bg-[#D9A000]/90 text-white px-8 h-[54px] rounded-none text-[13px] font-heading font-bold uppercase tracking-[0.12em] transition-all group border-none"
                >
                  EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#0B1B33]/15 bg-white text-[#0B1B33] hover:bg-[#0B1B33]/5 px-8 h-[54px] rounded-none text-[13px] font-heading font-bold uppercase tracking-[0.12em]"
                >
                  GET A QUOTE
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image Container: ~55% */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0 min-h-[450px] lg:min-h-full">
            {/* Architectural Curved Transition (Desktop) */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[240px] -ml-[120px] z-20 pointer-events-none">
              <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className="w-full h-full fill-[#F7F7F4]"
              >
                <path d="M100,0 C20,0 20,100 100,100 L100,100 L100,0 Z" transform="scale(-1, 1) translate(-100, 0)" />
              </svg>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative overflow-hidden bg-[#0B1B33]"
            >
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
                alt="Bundles of high-quality ribbed TMT reinforcement steel bars"
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.85]"
              />
              {/* Professional Steel Color Grade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1B33]/30 via-transparent to-transparent mix-blend-multiply" />
              
              {/* Subtle technical line along the curve */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-[#D9A000]/30 z-10 opacity-50" 
                   style={{ 
                     clipPath: 'path("M1,0 C0.2,0 0.2,100 1,100")',
                   }} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};