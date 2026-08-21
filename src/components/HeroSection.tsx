import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";


const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
    alt: "Premium TMT reinforcement steel coils",
    position: "center center"
  },
  {
    url: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
    alt: "Bundled TMT steel bars ready for dispatch",
    position: "center center"
  },
  {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    alt: "Industrial steel reinforcement stock warehouse",
    position: "center center"
  },
  {
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    alt: "High-quality ribbed TMT reinforcement steel detail",
    position: "center center"
  }
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload images
    HERO_IMAGES.forEach((img) => {
      if (img.url) {
        const image = new Image();
        image.src = img.url;
      }
    });

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = HERO_IMAGES[currentIndex] || HERO_IMAGES[0];
  const imageUrl = currentImage?.url || "";
  const imageAlt = currentImage?.alt || "";
  const imagePos = currentImage?.position || "center center";

  const imageElement = (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "linear" }}
        className="absolute inset-0"
      >
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 5, ease: "linear" }}
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] brightness-[0.9]"
          style={{ objectPosition: imagePos }}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          fetchPriority={currentIndex === 0 ? "high" : "low"}
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="relative w-full bg-[#F7F7F4] pt-0 overflow-hidden min-h-[720px] lg:min-h-0">
      {/* Mobile Hero Background (Full Bleed Carousel) */}
      <div className="absolute inset-0 z-0 lg:hidden">
        {imageElement}
        {/* Cinematic Dark Navy Overlay for Mobile */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(180deg, rgba(5,18,35,0.48) 0%, rgba(5,18,35,0.62) 55%, rgba(5,18,35,0.78) 100%)'
          }} 
        />
      </div>

      <div className="container-wide relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-stretch lg:h-[600px] h-full pt-[80px] lg:pt-0">
          
          {/* Content Area: 46% Width on Desktop, Full Width on Mobile */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center py-20 sm:py-24 lg:py-0 z-30 lg:pl-16 relative h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[560px]"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-heading font-semibold tracking-[0.25em] text-white lg:text-[#0B1B33] uppercase">
                  SINCE 1994
                </span>
                <span className="text-white/20 lg:text-[#0B1B33]/20">—</span>
                <span className="text-[11px] font-technical font-semibold tracking-[0.15em] text-[#D9A000] uppercase">
                  VIJAYAWADA • VIZAG • GANNAVARAM
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-[clamp(42px,11vw,58px)] lg:text-[64px] font-heading font-semibold leading-[0.98] text-white lg:text-[#0B1B33] mb-7 tracking-[-0.03em]">
                <span className="block mb-1">STRONGER STEEL.</span>
                <span className="block">
                  STRONGER <span className="text-[#D9A000]">TOMORROW.</span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-[17px] text-white/90 lg:text-[#0B1B33]/70 max-w-[500px] mb-8 leading-[1.65] font-normal">
                Trusted supplier of TMT rebars, steel products and decoiling solutions for construction and industrial requirements since 1994.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-stretch sm:items-start">
                <Link to="/products">
                  <Button className="w-full sm:w-auto">
                    EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact" search={{ product: "" }}>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-white lg:border-[#0B1B33] bg-white/10 lg:bg-white text-white lg:text-[#0B1B33] hover:bg-white/20 lg:hover:bg-[#0B1B33]/5"
                  >
                    GET A QUOTE
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side Steel Image Carousel: 54% Width - Desktop Only */}
          <div className="hidden lg:block lg:w-[54%] relative min-h-full -mt-2">
            <div 
              className="w-full h-full relative overflow-hidden"
              style={{
                clipPath: 'ellipse(100% 100% at 100% 50%)'
              }}
            >
              {imageElement}
              
              {/* Subtle Metallic Color Overlay */}
              <div className="absolute inset-0 bg-[#0B1B33]/10 mix-blend-multiply z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
