import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const shouldReduceMotion = useReducedMotion();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center bg-white/95 backdrop-blur-md border-b border-black/5 ${
        scrolled ? "h-[70px] shadow-sm" : "h-[84px]"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section / Brand Lockup */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4 py-1 select-none relative z-[100] group">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0">
            <img
              src={sscLogo.url}
              alt="SSC Logo"
              className="h-full w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center border-l border-black/10 pl-3 sm:pl-4 h-10 sm:h-12">
            <span className="text-[15px] sm:text-[18px] md:text-[20px] font-heading font-bold tracking-tight text-ssc-navy leading-[0.95] uppercase whitespace-nowrap">
              SRINIVASA STEEL
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-technical font-bold tracking-[0.18em] text-ssc-gold leading-none uppercase mt-1 whitespace-nowrap">
              CORPORATION
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Hidden below 1024px (lg) */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-[13px] font-technical font-bold transition-colors uppercase tracking-[0.10em] py-2 ${
                    isActive ? "text-ssc-gold" : "text-ssc-navy/70 hover:text-ssc-navy"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-ssc-gold"
                      initial={shouldReduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="w-[1px] h-8 bg-black/10 mx-2" />
          
          <Button 
            className="bg-ssc-gold hover:bg-ssc-gold/90 text-ssc-navy font-technical font-bold uppercase rounded-lg px-7 h-[48px] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 text-[13px] tracking-[0.08em]"
          >
            Get Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle Button - Technical Hamburger */}
        <button
          className="lg:hidden text-ssc-navy w-[44px] h-[44px] flex flex-col items-center justify-center gap-[6px] relative z-[100] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-7 h-[2px] bg-ssc-navy block transition-all"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-7 h-[2px] bg-ssc-navy block transition-all"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-7 h-[2px] bg-ssc-navy block transition-all"
          />
        </button>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] lg:hidden bg-white flex flex-col pt-[72px]"
          >
            <div className="flex-1 flex flex-col px-8 py-12 gap-8 overflow-y-auto w-full max-w-md mx-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-heading font-bold text-ssc-navy hover:text-ssc-gold active:text-ssc-gold transition-colors tracking-tight uppercase flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-ssc-gold" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-ssc-gold text-ssc-navy font-technical font-bold uppercase h-[60px] rounded-xl text-lg shadow-lg active:scale-[0.98] transition-transform"
                >
                  Get Quote
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-8 border-t border-black/5"
              >
                <p className="text-[10px] font-technical font-bold text-black/40 tracking-[0.2em] uppercase">
                  Premium Engineering Since 1994
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
