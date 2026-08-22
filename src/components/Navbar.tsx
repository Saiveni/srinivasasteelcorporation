import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Home, Info, Package, Image as ImageIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import sscLogo3D from "@/assets/ssc-logo-3d.png.asset.json";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.searchStr]);

  const navLinks = [
    { name: "HOME", href: "/", icon: Home },
    { name: "ABOUT", href: "/about", icon: Info },
    { name: "PRODUCTS", href: "/products", icon: Package },
    { name: "GALLERY", href: "/gallery", icon: ImageIcon },
    { name: "CONTACT", href: "/contact", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "h-[72px] bg-[#F7F7F4]/98 backdrop-blur-md border-b border-[#0B1B33]/15 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)]" 
          : "h-[82px] bg-[#F7F7F4] border-b border-[#0B1B33]/5"
      }`}
    >
      <div className="container-wide h-full flex items-center justify-between px-6 sm:px-8">
        {/* Logo Section */}
        <Link 
          to="/" 
          onClick={() => {
            if (location.pathname === "/") {
              window.location.reload();
            }
          }}
          className="flex items-center gap-2.5 sm:gap-3 relative z-[100] group"
        >
          <div className="h-9 w-9 sm:h-11 sm:w-11 shrink-0">
            <img
              src={sscLogo.url}
              alt="SSC Logo"
              className="h-full w-full object-contain filter brightness-0"
            />
          </div>
          <div className="flex flex-col justify-center border-l border-[#0B1B33]/15 pl-3 sm:pl-4 h-9 sm:h-11">
            <span className="text-[13px] sm:text-[17px] font-heading font-bold tracking-[0.05em] text-[#0B1B33] leading-none uppercase">
              SRINIVASA <span className="text-[#0B1B33]/90 font-medium">STEEL</span>
            </span>
            <span className="text-[9px] sm:text-[11px] font-technical font-extrabold tracking-[0.25em] text-[#C5A059] leading-none uppercase mt-1 sm:mt-1.5 opacity-90">
              CORPORATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <div className="flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-[12px] font-heading font-medium tracking-[0.1em] transition-colors py-2 ${
                    isActive ? "text-[#0B1B33]" : "text-[#0B1B33]/60 hover:text-[#0B1B33]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <Link to="/contact" search={{ product: "" }}>
            <Button>
              GET A QUOTE <ArrowRight size={14} />
            </Button>
          </Link>
        </div>

        {/* Premium Mobile Menu Trigger - Engineered Hardware Look */}
        <button
          className="lg:hidden relative z-[120] group outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className={`
            relative w-12 h-12 rounded-lg flex flex-col items-center justify-center gap-[5px]
            bg-[#0B1B33] shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)]
            border border-[#C5A059]/40 transition-all duration-300
            ${isOpen ? 'rotate-90' : 'hover:scale-105 active:scale-95'}
          `}>
            {/* Structural Detail Line */}
            <div className="absolute top-[6px] left-3 right-3 h-[1px] bg-[#C5A059]/20" />
            
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div 
                  key="hamburger"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col gap-[5px]"
                >
                  <span className="w-5 h-[1.5px] bg-white rounded-full block" />
                  <span className="w-4 h-[1.5px] bg-white rounded-full block" />
                  <span className="w-5 h-[1.5px] bg-white rounded-full block" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <X className="text-white" size={20} strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Physical Depth Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent rounded-lg pointer-events-none" />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay - Premium Rebuild */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[110] lg:hidden bg-[#0A0F1A]"
          >
            {/* Engineering Grid & Brushed Surface Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.07] pointer-events-none" 
              style={{ 
                backgroundImage: `linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} 
            />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />
            
            {/* Overlay Header Lockup */}
            <div className="flex items-center px-6 sm:px-8 h-[82px] border-b border-white/5 relative z-10">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 grayscale invert brightness-200">
                  <img src={sscLogo.url} alt="SSC Logo" className="h-full w-full object-contain" />
                </div>
                <div className="flex flex-col justify-center border-l border-white/10 pl-3 h-9">
                  <span className="text-[14px] font-heading font-bold tracking-[0.05em] text-white leading-none uppercase">
                    SRINIVASA <span className="text-white/60 font-medium">STEEL</span>
                  </span>
                  <span className="text-[10px] font-technical font-extrabold tracking-[0.25em] text-[#C5A059] leading-none uppercase mt-1">
                    CORPORATION
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Navigation List */}
            <div className="flex flex-col h-[calc(100%-82px)] justify-between py-12 px-8 sm:px-12 overflow-y-auto relative z-10">
              <div className="flex flex-col gap-8 sm:gap-10 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-5"
                    >
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.15 + i * 0.1 }}
                        className="text-[11px] font-technical font-bold text-[#C5A059] tracking-[0.3em]"
                      >
                        0{i + 1}
                      </motion.span>
                      <span className="text-[2.75rem] sm:text-[3.5rem] font-heading font-bold text-white uppercase tracking-[-0.04em] group-hover:text-[#C5A059] group-hover:pl-2 transition-all duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 sm:mt-24 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Link to="/contact" search={{ product: "" }} onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-[72px] text-[16px] tracking-[0.3em] font-technical font-bold bg-[#C5A059] hover:bg-[#B38E48] text-[#0A0F1A] border-none shadow-[0_12px_40px_rgba(197,160,89,0.25)] rounded-none relative overflow-hidden group">
                      <span className="relative z-10">GET A QUOTE</span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>
                  </Link>
                </motion.div>
                
                {/* Architectural Brand Footnote */}
                <div className="border-t border-white/5 pt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[10px] font-technical font-bold text-white/20 uppercase tracking-[0.5em]">
                    <div className="w-10 h-[1px] bg-[#C5A059]/30" />
                    ENGINEERED PRECISION
                  </div>
                  <span className="text-[9px] font-technical text-white/10 tracking-[0.2em]">© 2024 SSC</span>
                </div>
              </div>
            </div>

            {/* Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0F1A] via-transparent to-transparent opacity-60 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};