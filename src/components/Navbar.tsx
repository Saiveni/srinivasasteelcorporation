import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import steelIconsAsset from "@/assets/steel-menu-icons.png.asset.json";

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
    { name: "HOME", href: "/", icon: 0 },
    { name: "ABOUT", href: "/about", icon: 1 },
    { name: "PRODUCTS", href: "/products", icon: 2 },
    { name: "GALLERY", href: "/gallery", icon: 3 },
    { name: "CONTACT", href: "/contact", icon: 4 },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as any,
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[96%] max-w-[1400px] transition-all duration-500 ${scrolled ? 'top-2 sm:top-3' : 'top-3 sm:top-5'}`}
    >
      {/* Precision Engineered Header Panel */}
      <div className={`
        relative w-full flex items-center justify-between px-4 sm:px-8 xl:px-10
        rounded-xl sm:rounded-2xl overflow-hidden
        border border-white/20
        transition-all duration-500 ease-in-out
        ${scrolled 
          ? "h-[64px] sm:h-[76px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]" 
          : "h-[68px] sm:h-[82px] shadow-[0_10px_35px_-10px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)]"
        }
      `}>
        {/* Realistic Brushed Metal Surface */}
        <div className="absolute inset-0 bg-[#E2E4E9]" />
        
        {/* Extremely subtle horizontal brushed-metal texture */}
        <div 
          className="absolute inset-0 opacity-[0.35] pointer-events-none" 
          style={{ 
            backgroundImage: `url('https://www.transparenttextures.com/patterns/brushed-alum.png')`,
            backgroundSize: '400px 400px'
          }} 
        />
        
        {/* Tonal variations & highlights */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        
        {/* Subtle Edge Reflection */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/10 pointer-events-none" />

        {/* Logo & Brand Section */}
        <motion.div variants={itemVariants}>
          <Link 
            to="/" 
            onClick={() => {
              if (location.pathname === "/") {
                window.location.reload();
              }
            }}
            className="flex items-center gap-2 sm:gap-4 relative z-10 group shrink-0"
          >
            <div className="h-9 w-9 sm:h-12 sm:w-12 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              <img
                src={sscLogo.url}
                alt="SSC Logo"
                className="h-full w-full object-contain filter brightness-[0.25]"
              />
            </div>
            
            {/* Metallic Divider */}
            <div className="w-[1px] h-7 sm:h-10 bg-black/15 shadow-[1px_0_0_rgba(255,255,255,0.4)]" />

            <div className="flex flex-col justify-center">
              <span className="text-[12px] sm:text-[18px] lg:text-[20px] font-heading font-extrabold tracking-[0.02em] text-[#0B1B33] leading-none uppercase">
                SRINIVASA <span className="font-bold opacity-90">STEEL</span>
              </span>
              <span className="text-[8px] sm:text-[10px] lg:text-[12px] font-technical font-black tracking-[0.2em] sm:tracking-[0.3em] text-[#C5A059] leading-none uppercase mt-1 sm:mt-1.5 drop-shadow-sm">
                CORPORATION
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Navigation & CTA Section */}
        <div className="flex items-center gap-4 xl:gap-10 relative z-10">
          {/* Desktop/Tablet Navigation Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    to={link.href}
                    className={`relative text-[10px] lg:text-[11px] font-technical font-bold tracking-[0.1em] lg:tracking-[0.15em] transition-all py-2 whitespace-nowrap ${
                      isActive ? "text-[#0B1B33]" : "text-[#0B1B33]/60 hover:text-[#0B1B33]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full shadow-[0_1px_3px_rgba(197,160,89,0.3)]"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop/Tablet CTA */}
          <motion.div variants={itemVariants} className="hidden sm:block">
            <Link to="/contact" search={{ product: "" }}>
              <Button className="h-10 lg:h-11 px-4 lg:px-6 bg-[#0B1B33] text-white hover:bg-[#0B1B33]/90 rounded-lg text-[10px] lg:text-[11px] tracking-[0.1em] font-technical font-bold group shadow-sm hover:shadow-md transition-all">
                GET A QUOTE
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Custom Machined Gold Menu Trigger */}
          <motion.button
            variants={itemVariants}
            className="relative z-[120] group outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className={`
              relative w-10 h-10 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl 
              flex flex-col items-center justify-center gap-[4px] sm:gap-[5px]
              transition-all duration-300
              ${isOpen ? 'rotate-90' : 'hover:-translate-y-[1px] active:translate-y-[1px]'}
              bg-gradient-to-b from-[#EED5A5] via-[#C5A059] to-[#997232]
              shadow-[0_4px_12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(0,0,0,0.2)]
              border border-[#8B6914]/40
            `}>
              {/* Gold Bevel & Highlight */}
              <div className="absolute inset-[1px] rounded-[7px] sm:rounded-[10px] border border-white/20 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30 rounded-t-lg pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div 
                    key="hamburger"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col gap-[4px] sm:gap-[5px] md:gap-[6px]"
                  >
                    <span className="w-4 sm:w-5 md:w-6 h-[2px] bg-[#0B1B33]/90 rounded-full block shadow-[0_0.5px_0_rgba(255,255,255,0.2)]" />
                    <span className="w-4 sm:w-5 md:w-6 h-[2px] bg-[#0B1B33]/90 rounded-full block shadow-[0_0.5px_0_rgba(255,255,255,0.2)]" />
                    <span className="w-4 sm:w-5 md:w-6 h-[2px] bg-[#0B1B33]/90 rounded-full block shadow-[0_0.5px_0_rgba(255,255,255,0.2)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                  >
                    <X className="text-[#0B1B33]/90 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[105] bg-black/40 backdrop-blur-md"
              style={{ top: '-1rem', left: '-5%', width: '110vw', height: '110vh' }}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
              className="absolute top-[76px] sm:top-[90px] left-0 right-0 z-[110] 
                         bg-white rounded-2xl overflow-hidden shadow-2xl border border-black/5
                         flex flex-col"
            >
              {/* Engineering Texture Overlays */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, #0B1B33 1px, transparent 1px), linear-gradient(to bottom, #0B1B33 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }} 
              />
              
              {/* Navigation Items */}
              <div className="flex flex-col py-8 px-6 relative z-10">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                      >
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center gap-5 py-3 border-b border-black/5 last:border-0"
                        >
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F4F6F8] flex items-center justify-center 
                                        transition-all duration-300 group-hover:bg-[#E5E7EB] group-hover:scale-105 p-2 shadow-inner">
                            <div className="w-full h-full overflow-hidden relative">
                              <img 
                                src={steelIconsAsset.url} 
                                alt={link.name}
                                className="absolute max-w-none"
                                style={{
                                  height: '500%', 
                                  top: `-${link.icon * 100}%`,
                                  left: '0',
                                  width: 'auto'
                                }}
                              />
                            </div>
                          </div>
                          <span className="text-[1rem] sm:text-[1.1rem] font-heading font-bold text-[#0B1B33] uppercase tracking-[0.05em] group-hover:text-[#C5A059] transition-colors">
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
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-8"
                >
                  <Link to="/contact" search={{ product: "" }} onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-[56px] sm:h-[60px] text-[11px] sm:text-[12px] tracking-[0.2em] font-technical font-black 
                                     bg-[#0B1B33] hover:bg-[#0B1B33]/90 text-white border-none 
                                     shadow-lg rounded-xl relative overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        GET A QUOTE <ArrowRight size={14} />
                      </span>
                      <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>
                  </Link>
                </motion.div>
                
                {/* Engineering Detail Footer */}
                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-[#C5A059]/40" />
                    <span className="text-[8px] sm:text-[9px] font-technical font-bold text-[#0B1B33]/40 uppercase tracking-[0.3em]">
                      Precision Built
                    </span>
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-technical text-[#0B1B33]/30 tracking-[0.1em]">SSC-OS 2.5</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
