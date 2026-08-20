import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-effect h-[68px] md:h-[76px] flex items-center ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 py-1 select-none relative z-[100]">
          <img
            src={sscLogo.url}
            alt="Srinivasa Steel Corporation logo"
            className="h-9 w-9 sm:h-11 sm:w-11 md:h-13 md:w-13 object-contain shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="text-base sm:text-lg md:text-xl font-heading tracking-tight text-brushed-steel leading-[0.95] uppercase whitespace-nowrap">
              SRINIVASA STEEL
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs font-technical font-semibold tracking-[0.25em] text-ssc-gold leading-none uppercase mt-0.5 whitespace-nowrap">
              CORPORATION
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Hidden below 1024px (lg) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-technical font-semibold text-ssc-navy/80 hover:text-ssc-gold transition-colors uppercase tracking-[0.15em]"
              activeProps={{ className: "text-ssc-gold" }}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-ssc-gold hover:bg-ssc-gold/90 text-white font-display font-black uppercase rounded-xl px-6 py-2 shadow-premium hover:shadow-premium-hover transition-all hover:-translate-y-0.5 tracking-wide">
            Get Quote
          </Button>
        </div>

        {/* Mobile Toggle Button - 44x44px min target */}
        <button
          className="lg:hidden text-ssc-navy p-2 min-w-[44px] min-h-[44px] flex items-center justify-center relative z-[100] transition-transform active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[90] lg:hidden bg-white flex flex-col"
          >
            {/* Header spacer to prevent overlap with logo/toggle which are at z-100 */}
            <div className="h-[68px] md:h-[76px] w-full shrink-0" />
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 pb-12 overflow-y-auto w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-heading text-ssc-navy hover:text-ssc-gold active:text-ssc-gold transition-colors tracking-tight uppercase"
                >
                  {link.name}
                </Link>
              ))}
              
              <Button 
                onClick={() => setIsOpen(false)}
                className="w-full max-w-sm bg-ssc-gold text-white font-display font-black uppercase py-8 rounded-xl text-xl shadow-xl mt-4 active:scale-[0.98] transition-transform"
              >
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
