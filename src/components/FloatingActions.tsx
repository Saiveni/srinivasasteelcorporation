import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";

export const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "9440170453"; // Reusing M.S.V. Bhaskar's number from contact.tsx
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClass = `
    w-12 h-12 rounded-full flex items-center justify-center
    bg-[#0B1320] text-ssc-gold border border-ssc-gold/30
    shadow-premium-medium backdrop-blur-md
    transition-all duration-300 hover:scale-110 active:scale-95
    hover:border-ssc-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]
  `;

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3">
      {/* Back to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className={buttonClass}
            aria-label="Back to top"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Phone Call */}
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        href={`tel:${phoneNumber}`}
        className={buttonClass}
        aria-label="Call us"
      >
        <Phone size={20} strokeWidth={2.5} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} bg-[#25D366]/10 !border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/20 hover:!border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]`}
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} strokeWidth={2.5} />
      </motion.a>
    </div>
  );
};
