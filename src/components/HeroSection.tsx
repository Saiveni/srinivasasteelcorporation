import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#F7F7F4] pt-[80px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row items-stretch lg:h-[600px]">
          
          {/* Left Content Area: 46% Width */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center py-16 lg:py-0 z-30 lg:pl-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[560px]"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-heading font-semibold tracking-[0.25em] text-[#0B1B33] uppercase">
                  SINCE 1994
                </span>
                <span className="text-[#0B1B33]/20">—</span>
                <span className="text-[11px] font-technical font-semibold tracking-[0.15em] text-[#D9A000] uppercase">
                  TMT / STEEL / SUPPLY
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-heading font-semibold leading-[0.98] text-[#0B1B33] mb-7 tracking-tight">
                <span className="block mb-1">STRONGER STEEL.</span>
                <span className="block">
                  STRONGER <span className="text-[#D9A000]">TOMORROW.</span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-[17px] text-[#0B1B33]/70 max-w-[500px] mb-8 leading-[1.65] font-normal">
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
                  className="border-[#0B1B33] bg-white text-[#0B1B33] hover:bg-[#0B1B33]/5 px-9 h-[56px] rounded-none text-[13px] font-heading font-bold uppercase tracking-[0.15em]"
                >
                  GET A QUOTE
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side Steel Image: 54% Width */}
          <div className="w-full lg:w-[54%] relative mt-8 lg:mt-0 min-h-[400px] lg:min-h-full">
            {/* 
              Clean Inward Architectural Curve 
              We use a clip-path on the image container to create 
              the visual transition using the panel boundary as requested.
            */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full relative overflow-hidden"
              style={{
                clipPath: 'ellipse(100% 100% at 100% 50%)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
                alt="Bundles of premium ribbed TMT reinforcement steel bars"
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.9]"
              />
              {/* Subtle Metallic Color Overlay */}
              <div className="absolute inset-0 bg-[#0B1B33]/10 mix-blend-multiply" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
