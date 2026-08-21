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
        <div className="flex flex-col lg:flex-row items-stretch min-h-[560px] lg:min-h-[650px]">
          
          {/* Left Content: 45% */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center py-12 lg:py-20 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[12px] font-heading font-bold tracking-[0.3em] text-[#0B1B33]/60 uppercase block">
                  SINCE 1994
                </span>
                <div className="h-[1px] w-8 bg-[#D9A000]/40" />
                <span className="text-[10px] font-technical font-bold tracking-[0.1em] text-[#D9A000] uppercase">
                  TMT / STEEL / SUPPLY
                </span>
              </div>
              
              <h1 className="text-[48px] sm:text-[58px] lg:text-[72px] font-heading font-semibold leading-[1.05] text-[#0B1B33] mb-8 tracking-tight">
                STRONGER <span className="text-[#0B1B33]">STEEL.</span> <br />
                STRONGER <span className="text-[#D9A000]">TOMORROW.</span>
              </h1>
              
              <p className="text-[17px] sm:text-[19px] text-[#0B1B33]/75 max-w-[520px] mb-10 leading-relaxed font-medium">
                Trusted supplier of TMT rebars, steel products and decoiling solutions for construction and industrial requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Button
                  size="lg"
                  className="bg-[#D9A000] hover:bg-[#D9A000]/90 text-white px-8 h-[58px] rounded-none text-[13px] font-heading font-bold uppercase tracking-[0.15em] transition-all group shadow-lg shadow-[#D9A000]/20"
                >
                  EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#0B1B33]/20 bg-white/50 text-[#0B1B33] hover:bg-[#0B1B33]/5 px-8 h-[58px] rounded-none text-[13px] font-heading font-bold uppercase tracking-[0.15em] backdrop-blur-sm"
                >
                  GET A QUOTE
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image Container: 55% */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0 min-h-[400px]">
            {/* Curved Mask Transition (Desktop) */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[180px] -ml-[90px] z-20 pointer-events-none">
              <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className="w-full h-full fill-[#F7F7F4]"
              >
                <path d="M100,0 C30,0 30,100 100,100 L100,100 L100,0 Z" transform="scale(-1, 1) translate(-100, 0)" />
              </svg>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
                alt="Premium bundles of ribbed TMT reinforcement steel bars in industrial stockyard"
                className="w-full h-full object-cover contrast-[1.08] brightness-[0.98]"
              />
              {/* Subtle lighting overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F4]/20 via-transparent to-transparent lg:from-[#F7F7F4]/30" />
              {/* Gold accent line along the curve area */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-[#D9A000]/20 z-10" 
                   style={{ 
                     clipPath: 'path("M1,0 C0.3,0 0.3,100 1,100")',
                     left: '0px'
                   }} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};