import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";

// @ts-ignore
import rebarCoils from "@/assets/rebar-coils.jpg.asset.json";
// @ts-ignore
import rebarStraight from "@/assets/rebar-straight.jpg.asset.json";
// @ts-ignore
import rebarWarehouse from "@/assets/rebar-warehouse.jpg.asset.json";
// @ts-ignore
import rebarDetail from "@/assets/rebar-detail.jpg.asset.json";

const HERO_IMAGES = [
  (rebarCoils as any)?.url,
  (rebarStraight as any)?.url,
  (rebarWarehouse as any)?.url,
  (rebarDetail as any)?.url,
].filter(Boolean);

interface PreloaderProps {
  onComplete?: () => void;
  showIntro?: boolean;
}

export const BrandPreloader = ({ onComplete, showIntro = true }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = "hidden";

    // Preload images
    const preloadAssets = async () => {
      const promises = HERO_IMAGES.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      await Promise.all(promises);
    };

    preloadAssets();

    // Progress animation (approx 4.5s total)
    // 0.8s to start, finishes around 4.3s
    const startTime = Date.now();
    const duration = 3500; // 3.5 seconds for the actual bar growth
    const delay = 800; // start after 0.8s

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed < delay) {
        setProgress(0);
      } else {
        const p = Math.min(100, ((elapsed - delay) / duration) * 100);
        setProgress(p);
        
        if (elapsed >= 4500) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }, 200);
        }
      }
    }, 16);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center w-full max-w-[90vw] sm:max-w-none">
            {/* Logo and Name Lockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 sm:gap-6 mb-12"
            >
              {/* Logo */}
              <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] flex items-center justify-center">
                <img
                  src={sscLogo.url}
                  alt="SSC Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Lockup */}
              <div className="flex flex-col justify-center border-l border-white/10 pl-4 sm:pl-6 py-1">
                <h1 className="text-white text-[18px] sm:text-[24px] font-heading font-semibold tracking-[0.15em] leading-tight uppercase">
                  SRINIVASA STEEL
                </h1>
                <h2 className="text-[#D9A400] text-[10px] sm:text-[12px] font-technical font-bold tracking-[0.3em] leading-tight uppercase mt-1">
                  CORPORATION
                </h2>
              </div>
            </motion.div>

            {/* Loading Bar Section */}
            <div className="w-[200px] sm:w-[280px] flex flex-col items-center">
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#D9A400]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-4 text-[8px] sm:text-[9px] text-white/40 font-technical tracking-[0.25em] uppercase"
              >
                INITIALIZING EXPERIENCE
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
