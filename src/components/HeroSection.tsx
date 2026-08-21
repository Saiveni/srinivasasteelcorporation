import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";


const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
    alt: "Premium architectural steel structures",
    position: "center center"
  },
  {
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop",
    alt: "High-grade ribbed TMT reinforcement steel bars",
    position: "center center"
  },
  {
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop",
    alt: "Industrial steel manufacturing and logistics",
    position: "center center"
  },
  {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
    alt: "Steel warehousing and industrial supply chain",
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
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0"
      >
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5.5, ease: "linear" }}
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
    <section className="relative w-full bg-white pt-0 overflow-hidden lg:h-[700px] flex items-center">
      {/* Mobile Background - Full Bleed */}
      <div className="absolute inset-0 z-0 lg:hidden">
        {imageElement}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="container-wide relative z-10 w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full py-20 lg:py-0">
          
          {/* Content Block */}
          <div className="w-full lg:w-[48%] z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[620px]"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-ssc-gold/40" />
                <span className="text-[12px] font-technical font-bold tracking-[0.3em] text-ssc-gold uppercase">
                  EST. 1994
                </span>
                <span className="text-black/10 lg:block hidden">|</span>
                <span className="text-[11px] font-technical font-medium tracking-[0.15em] text-black/50 uppercase lg:block hidden">
                  Architectural • Industrial • Civil
                </span>
              </div>
              
              <h1 className="text-[clamp(44px,8vw,82px)] font-heading font-extrabold leading-[0.9] text-white lg:text-ssc-navy mb-8 tracking-tighter">
                PRECISION <br/>
                <span className="text-ssc-gold">STRENGTH</span> <br/>
                LEGACY
              </h1>
              
              <p className="text-[19px] text-white/90 lg:text-ssc-navy/60 max-w-[480px] mb-12 leading-relaxed font-light">
                Engineering excellence through premium TMT solutions and industrial expertise. We build the foundations of a stronger tomorrow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Link to="/products">
                  <Button className="h-16 px-10 rounded-none bg-ssc-navy text-white hover:bg-ssc-gold hover:text-ssc-navy transition-all duration-500 text-[13px] tracking-widest font-bold">
                    OUR SOLUTIONS <ArrowRight className="ml-3 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact" search={{ product: "" }}>
                  <Button variant="outline" className="h-16 px-10 rounded-none border-ssc-navy/20 text-white lg:text-ssc-navy hover:bg-ssc-navy hover:text-white transition-all duration-500 text-[13px] tracking-widest font-bold">
                    PARTNER WITH US
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Architectural Image Container */}
          <div className="hidden lg:flex w-[48%] h-[580px] relative items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full h-full relative"
            >
              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-[1px] border-ssc-gold/20 z-0" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-ssc-gray-light z-0" />
              
              {/* Main Image Mask */}
              <div className="w-full h-full relative z-10 overflow-hidden shadow-[40px_40px_80px_-20px_rgba(11,27,51,0.15)]">
                {imageElement}
                
                {/* Visual Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[6px] bg-ssc-gold z-20" />
              </div>
              
              {/* Caption Overlay */}
              <div className="absolute -bottom-10 right-0 bg-ssc-navy p-6 z-30 min-w-[240px]">
                <p className="text-[10px] text-ssc-gold tracking-[0.3em] font-bold uppercase mb-1">Material Spec</p>
                <p className="text-white text-[14px] font-heading font-medium">FE 550D TMT Grade Steel</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
