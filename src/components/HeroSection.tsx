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
    <section className="relative w-full bg-ssc-steel-light pt-0 min-h-[600px] lg:min-h-0">
      {/* Mobile Hero Background (Full Bleed Carousel) */}
      <div className="absolute inset-0 z-0 lg:hidden">
        {imageElement}
        {/* Cinematic Dark Navy Overlay for Mobile */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(180deg, rgba(11,19,32,0.6) 0%, rgba(11,19,32,0.75) 55%, rgba(11,19,32,0.9) 100%)'
          }} 
        />
      </div>

      <div className="container-ssc relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-stretch lg:h-[600px] h-full pt-[64px] lg:pt-0">
          
          {/* Content Area: 46% Width on Desktop, Full Width on Mobile */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center py-16 lg:py-0 z-30 lg:px-0 relative h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[650px]"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center gap-3 mb-5 lg:mb-7">
                <span className="text-micro text-white lg:text-ssc-navy uppercase tracking-[0.16em]">
                  ENGINEERED FOR STRENGTH
                </span>
                <span className="text-white/20 lg:text-ssc-navy/20">—</span>
                <span className="text-micro text-ssc-gold-dark">
                  EST. 1994
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-h1 text-white lg:text-ssc-navy mb-7 lg:mb-10 uppercase tracking-[-1px] lg:tracking-[-1.5px] leading-[1.05]">
                <span className="block mb-1">BUILDING STRENGTH.</span>
                <span className="block">
                  SHAPING <span className="text-ssc-gold-dark">TOMORROW.</span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-body-large text-white/90 lg:text-ssc-gray-body max-w-[560px] mb-8 lg:mb-12">
                Engineered steel products for construction and industrial requirements. Reliable supply across Andhra Pradesh since 1994.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-stretch sm:items-start">
                <Link to="/products">
                  <Button className="w-full sm:w-auto bg-ssc-gold text-ssc-navy hover:bg-ssc-on-dark-primary">
                    EXPLORE PRODUCTS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact" search={{ product: "" }}>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-white lg:border-ssc-gold-dark text-white lg:text-ssc-gold-dark hover:bg-white/20 lg:hover:bg-ssc-gold-dark/10"
                  >
                    GET A QUOTE
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side Steel Image Carousel: 54% Width - Desktop Only */}
          <div className="hidden lg:block lg:w-[55%] relative min-h-full -mt-2">
            <div 
              className="w-full h-full relative overflow-hidden"
              style={{
                clipPath: 'ellipse(100% 100% at 100% 50%)'
              }}
            >
              {imageElement}
              
              {/* Subtle Metallic Color Overlay */}
              <div className="absolute inset-0 bg-ssc-navy/10 mix-blend-multiply z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
