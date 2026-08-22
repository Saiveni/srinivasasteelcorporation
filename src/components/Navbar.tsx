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
      className={`fixed left-0 right-0 z-[100] transition-all duration-500 top-0 sm:px-4 md:px-0`}
    >
      {/* Premium Engineered Steel Header Panel */}
      <div className={`
        relative w-full flex items-center justify-between px-4 sm:px-8 xl:px-12
        transition-all duration-500 ease-in-out border-b border-white/10
        ${scrolled 
          ? "h-[64px] sm:h-[76px] shadow-[0_4px_20px_rgba(0,0,0,0.2)]" 
          : "h-[74px] sm:h-[82px] shadow-[0_2px_15px_rgba(0,0,0,0.15)]"
        }
        md:rounded-none sm:rounded-b-2xl overflow-hidden
      `}>
        {/* Brushed Silver / Light Steel Surface */}
        <div className="absolute inset-0 bg-[#D8DCE3]" />
        
        {/* Diagonal Brushed Metal Texture */}
        <div 
          className="absolute inset-0 opacity-[0.45] pointer-events-none z-[1]" 
          style={{ 
            backgroundImage: `url('https://www.transparenttextures.com/patterns/brushed-alum.png')`,
            backgroundSize: '400px 400px',
            transform: 'rotate(-5deg) scale(1.2)'
          }} 
        />

        {/* Integrated TMT Rebar Imagery - Part of the Background */}
        <div 
          className="absolute inset-0 opacity-[0.12] mix-blend-multiply pointer-events-none grayscale z-[2]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            filter: 'contrast(1.4) brightness(0.85)'
          }}
        />
        
        {/* Depth & Tonal Highlights */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/10 pointer-events-none z-[3]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/5 pointer-events-none z-[3]" />
        
        {/* Refined Metallic Edges */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/80 pointer-events-none z-[4]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20 pointer-events-none z-[4]" />

        {/* Logo & Brand Section */}
        <motion.div variants={itemVariants} className="relative z-10">
          <Link 
            to="/" 
            onClick={() => {
              if (location.pathname === "/") {
                window.location.reload();
              }
            }}
            className="flex items-center gap-2 sm:gap-4 relative group shrink-0"
          >
            <div className="h-8 w-8 sm:h-12 sm:w-12 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
              <img
                src={sscLogo.url}
                alt="SSC Logo"
                className="h-full w-full object-contain filter brightness-[0.2]"
              />
            </div>
            
            {/* Metallic Divider */}
            <div className="w-[1px] h-7 sm:h-10 bg-black/20 shadow-[1px_0_0_rgba(255,255,255,0.4)]" />

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
          <motion.div variants={itemVariants} className="hidden md:block">
            <Link to="/contact" search={{ product: "" }}>
              <Button className="h-10 lg:h-11 px-4 lg:px-6 bg-[#0B1B33] text-white hover:bg-[#0B1B33]/90 rounded-lg text-[10px] lg:text-[11px] tracking-[0.1em] font-technical font-bold group shadow-sm hover:shadow-md transition-all">
                GET A QUOTE
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Custom Machined Gold Menu Trigger - Mobile/Tablet Only */}
          <motion.button
            variants={itemVariants}
            className="md:hidden relative z-[120] group outline-none"
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

      {/* Mobile Menu Overlay - Full Screen Top-Down Reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 z-[90] bg-[#F4F6F8] flex flex-col pt-[100px] sm:pt-[120px]"
          >
            {/* Engineering Texture Overlays */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ 
                backgroundImage: `linear-gradient(to right, #0B1B33 1px, transparent 1px), linear-gradient(to bottom, #0B1B33 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} 
            />
            
            <div 
              className="absolute inset-0 opacity-[0.05] pointer-events-none" 
              style={{ 
                backgroundImage: `url('https://www.transparenttextures.com/patterns/brushed-alum.png')`,
                backgroundSize: '400px 400px'
              }} 
            />

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col py-8 px-6 sm:px-12 relative z-10 overflow-y-auto">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => {
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-6 py-4 border-b border-black/5 last:border-0"
                      >
                        {/* Rounded Steel Icons */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                          {/* Inner Bevel Shadow */}
                          <div className="absolute inset-0 rounded-full bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_1px_2px_rgba(255,255,255,0.8)] z-0" />
                          
                          <div className="absolute inset-[3px] rounded-full bg-[#E5E7EB] flex items-center justify-center 
                                        transition-all duration-300 group-hover:bg-[#D1D5DB] group-hover:scale-105 p-2 shadow-md overflow-hidden z-10 border border-white/50">
                            <div className="w-full h-full relative">
                              <img 
                                src={steelIconsAsset.url} 
                                alt={link.name}
                                className="absolute max-w-none w-auto"
                                style={{
                                  height: '500%', 
                                  top: `-${link.icon * 100}%`,
                                  left: '50%',
                                  transform: 'translateX(-50%)',
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[1.2rem] sm:text-[1.4rem] font-heading font-black text-[#0B1B33] uppercase tracking-[0.1em] group-hover:text-[#C5A059] transition-colors leading-tight">
                            {link.name}
                          </span>
                          <span className="text-[10px] font-technical font-bold text-[#0B1B33]/40 tracking-[0.2em] uppercase mt-0.5">
                            0{i + 1}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12"
              >
                <Link to="/contact" search={{ product: "" }} onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-[64px] text-[12px] tracking-[0.25em] font-technical font-black 
                                   bg-[#0B1B33] hover:bg-[#0B1B33]/90 text-white border-none 
                                   shadow-xl rounded-2xl relative overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      GET A QUOTE <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </Link>
              </motion.div>
              
              {/* Engineering Detail Footer */}
              <div className="mt-auto pt-10 pb-8 flex flex-col gap-6">
                <div className="flex items-center justify-between border-t border-black/5 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-[#C5A059]" />
                    <span className="text-[10px] font-technical font-black text-[#0B1B33]/60 uppercase tracking-[0.4em]">
                      Precision Built
                    </span>
                  </div>
                  <span className="text-[10px] font-technical text-[#0B1B33]/40 tracking-[0.1em]">VER. 2.5.0-SSC</span>
                </div>
                
                {/* Visual Engineering Marks */}
                <div className="flex justify-between px-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-[1px] h-3 bg-black/10" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
