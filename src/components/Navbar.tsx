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
            transition-all duration-300
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
                  <span className="w-5 h-[1.5px] bg-[#0B1B33] rounded-full block" />
                  <span className="w-4 h-[1.5px] bg-[#0B1B33] rounded-full block" />
                  <span className="w-5 h-[1.5px] bg-[#0B1B33] rounded-full block" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <X className="text-[#0B1B33]" size={20} strokeWidth={2} />
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
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[105] lg:hidden bg-black/20 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[12px] right-[12px] left-[12px] z-[110] lg:hidden 
                         bg-[#F7F7F4] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.18)] 
                         border border-[#0B1B33]/15 overflow-hidden max-h-[calc(100vh-24px)] flex flex-col"
            >
              {/* Engineering Texture Overlays */}
              <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, #0B1B33 1px, transparent 1px), linear-gradient(to bottom, #0B1B33 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} 
              />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-[0.06] pointer-events-none" />
              
              {/* Subtle TMT Ribbing inspired detail at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 opacity-[0.08] pointer-events-none" 
                   style={{ background: 'repeating-linear-gradient(45deg, #0B1B33, #0B1B33 2px, transparent 2px, transparent 8px)' }} />

              {/* Menu Header Area */}
              <div className="flex items-center justify-between px-5 sm:px-7 h-[72px] border-b border-[#0B1B33]/10 relative z-10 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 shrink-0">
                    <img 
                      src={sscLogo.url} 
                      alt="SSC Logo" 
                      className="h-full w-full object-contain filter brightness-0" 
                    />
                  </div>
                  <div className="flex flex-col justify-center border-l border-[#0B1B33]/15 pl-3 h-8">
                    <span className="text-[13px] font-heading font-bold tracking-[0.04em] text-[#0B1B33] leading-none uppercase">
                      SRINIVASA <span className="text-[#0B1B33]/80 font-medium">STEEL</span>
                    </span>
                    <span className="text-[9px] font-technical font-extrabold tracking-[0.2em] text-[#C5A059] leading-none uppercase mt-0.5">
                      CORPORATION
                    </span>
                  </div>
                </div>

                {/* Close Button - Machined Metal Look */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="relative w-9 h-9 rounded-lg flex items-center justify-center 
                             bg-white border border-[#0B1B33]/15 shadow-sm
                             hover:bg-[#F7F7F4] active:scale-95 transition-all group"
                >
                  <X className="text-[#0B1B33]/70 group-hover:text-[#0B1B33]" size={16} strokeWidth={2} />
                  <div className="absolute inset-0 rounded-lg border border-white/40 pointer-events-none" />
                </button>
              </div>

              {/* Navigation Items - Compact & Refined */}
              <div className="flex flex-col py-8 px-6 sm:px-8 relative z-10">
                <div className="flex flex-col gap-4 sm:gap-5">
                  {navLinks.map((link, i) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                      >
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center gap-4 py-0.5"
                        >
                          <div className="w-8 h-8 rounded bg-[#0B1B33]/5 flex items-center justify-center 
                                        border border-[#0B1B33]/5 group-hover:border-[#C5A059]/30 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
                            <Icon size={14} className="text-[#C5A059]" strokeWidth={2} />
                          </div>
                          <span className="text-[1.15rem] font-heading font-semibold text-[#0B1B33] uppercase tracking-[0.03em] group-hover:text-[#C5A059] transition-colors">
                            {link.name}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-8"
                >
                  <Link to="/contact" search={{ product: "" }} onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-[56px] text-[13px] tracking-[0.25em] font-technical font-bold 
                                     bg-[#C5A059] hover:bg-[#B38E48] text-[#0A0F1A] border-none 
                                     shadow-[0_8px_20px_rgba(197,160,89,0.25)] rounded-lg relative overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        GET A QUOTE <ArrowRight size={14} />
                      </span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>
                  </Link>
                </motion.div>
                
                {/* Engineering Detail Footer */}
                <div className="mt-8 pt-6 border-t border-[#0B1B33]/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-[#C5A059]/40" />
                    <span className="text-[8px] font-technical font-bold text-[#0B1B33]/30 uppercase tracking-[0.4em]">
                      Precision Built
                    </span>
                  </div>
                  <span className="text-[8px] font-technical text-[#0B1B33]/20 tracking-[0.1em]">VER. 2.4.0</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};