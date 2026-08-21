import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#F7F7F4] pt-[80px] overflow-hidden">
      {/* Background Engineering Details */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#0B1B33 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[560px] lg:min-h-[650px]">
          
          {/* Left Content: 45% */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center py-12 lg:py-20 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[12px] font-heading font-bold tracking-[0.3em] text-[#0B1B33]/60 uppercase mb-6 block">
                SINCE 1994
              </span>
              
              <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-heading font-semibold leading-[1.1] text-[#0B1B33] mb-8 tracking-tight">
                STRONGER STEEL. <br />
                STRONGER <span className="text-[#D9A000]">TOMORROW.</span>
              </h1>
              
              <p className="text-[16px] sm:text-[18px] text-[#0B1B33]/70 max-w-[480px] mb-10 leading-relaxed font-medium">
                Trusted supplier of TMT rebars, steel products and decoiling solutions for construction and industrial requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#D9A000] hover:bg-[#D9A000]/90 text-white px-8 h-[56px] rounded-sm text-[13px] font-heading font-bold uppercase tracking-[0.1em] transition-all group"
                >
                  EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0B1B33]/10 bg-transparent text-[#0B1B33] hover:bg-[#0B1B33]/5 px-8 h-[56px] rounded-sm text-[13px] font-heading font-bold uppercase tracking-[0.1em]"
                >
                  GET A QUOTE
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image Container: 55% */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
            {/* Curved Mask Transition (Desktop) */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[150px] -ml-[75px] z-20 pointer-events-none">
              <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className="w-full h-full fill-[#F7F7F4]"
              >
                <path d="M100,0 C20,0 20,100 100,100 L100,100 L100,0 Z" transform="scale(-1, 1) translate(-100, 0)" />
              </svg>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-[400px] lg:h-full relative overflow-hidden lg:rounded-r-[40px]"
            >
              {/* This image area is for industrial photography. No castles. */}
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop"
                alt="Srinivasa Steel Corporation industrial yard with bundles of TMT rebars"
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
              />
              {/* Subtle architectural overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F4]/20 to-transparent lg:from-[#F7F7F4]/10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};