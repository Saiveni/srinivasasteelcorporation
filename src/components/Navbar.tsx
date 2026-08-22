import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import steelIconsAssetV2 from "@/assets/steel-nav-icons-v2.png.asset.json";

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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
      className="fixed left-0 right-0 z-[100] transition-all duration-500 top-0 px-3 sm:px-4 md:px-0 pt-3 sm:pt-4 md:pt-0"
    >
      {/* Premium Engineered Steel Header Panel */}
      <div className={`
        relative mx-auto w-full md:max-w-none flex items-center justify-between px-4 sm:px-8 xl:px-12
        transition-all duration-500 ease-in-out
        ${scrolled 
          ? "h-[62px] sm:h-[72px] md:h-[76px] shadow-[0_8px_30px_rgba(0,0,0,0.2)]" 
          : "h-[68px] sm:h-[78px] md:h-[82px] shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
        }
        rounded-2xl md:rounded-none overflow-hidden border border-white/40 md:border-none md:border-b md:border-white/10
      `}>
        {/* Brushed Silver / Aluminium Surface */}
        <div className="absolute inset-0 bg-[#E8EAEF]" />
        
        {/* Realistic Metal Texture (Brushed) */}
        <div 
          className="absolute inset-0 opacity-[0.35] pointer-events-none z-[1]" 
          style={{ 
            backgroundImage: `url('https://www.transparenttextures.com/patterns/brushed-alum.png')`,
            backgroundSize: '300px 300px',
            filter: 'contrast(1.1)'
          }} 
        />

        {/* Integrated TMT Rebar Imagery - Part of Background */}
        <div 
          className="absolute inset-0 opacity-[0.09] mix-blend-multiply pointer-events-none grayscale z-[2]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            filter: 'contrast(1.2) brightness(0.9)'
          }}
        />
        
        {/* Premium Highlights & Tonal Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-black/5 pointer-events-none z-[3]" />
        
        {/* Refined Metallic Bevel Edge */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/90 pointer-events-none z-[4]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/15 pointer-events-none z-[4]" />

        {/* Logo & Brand Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 py-2">
          <Link 
            to="/" 
            onClick={() => {
              if (location.pathname === "/") {
                window.location.reload();
              }
            }}
            className="flex items-center gap-3 sm:gap-4 relative group shrink-0"
          >
            <div className="h-9 w-9 sm:h-12 sm:w-12 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              <img
                src={sscLogo.url}
                alt="SSC Logo"
                className="h-full w-full object-contain opacity-95"
              />
            </div>
            
            {/* Metallic Vertical Divider */}
            <div className="w-[1px] h-7 sm:h-10 bg-[#0B1B33]/20 shadow-[0.5px_0_0_rgba(255,255,255,0.6)]" />

            <div className="flex flex-col justify-center">
              <span className="text-[13px] sm:text-[18px] lg:text-[20px] font-heading font-extrabold tracking-[0.01em] text-[#0B1B33] leading-none uppercase">
                SRINIVASA <span className="font-bold">STEEL</span>
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-[12px] font-technical font-black tracking-[0.25em] sm:tracking-[0.3em] text-[#C5A059] leading-none uppercase mt-1 sm:mt-1 drop-shadow-sm">
                CORPORATION
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Navigation & CTA Section */}
        <div className="flex items-center gap-4 xl:gap-10 relative z-10">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.div key={link.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 * i }}>
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

          {/* Desktop CTA */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hidden md:block">
            <Link to="/contact" search={{ product: "" }}>
              <Button className="h-10 lg:h-11 px-4 lg:px-6 bg-[#0B1B33] text-white hover:bg-[#0B1B33]/90 rounded-lg text-[10px] lg:text-[11px] tracking-[0.1em] font-technical font-bold group shadow-sm hover:shadow-md transition-all">
                GET A QUOTE
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Machined Gold Menu Trigger - Mobile ONLY */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden relative z-[120] group outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className={`
              relative w-11 h-10 sm:w-13 sm:h-12 rounded-[12px]
              flex flex-col items-center justify-center
              transition-all duration-300
              ${isOpen ? 'rotate-90' : 'hover:-translate-y-[1px] active:translate-y-[0.5px]'}
              bg-gradient-to-b from-[#F2D7A5] via-[#D4AF37] to-[#B8860B]
              shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1.5px_1px_rgba(0,0,0,0.2)]
              border border-[#8B6914]/40
            `}>
              {/* Machined Bevel Inset */}
              <div className="absolute inset-[1.5px] rounded-[10.5px] border border-white/30 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div 
                    key="hamburger"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col gap-[4px]"
                  >
                    <span className="w-5 h-[2px] bg-[#0B1B33] rounded-full block shadow-[0_0.5px_1px_rgba(255,255,255,0.3)]" />
                    <span className="w-5 h-[2px] bg-[#0B1B33] rounded-full block shadow-[0_0.5px_1px_rgba(255,255,255,0.3)]" />
                    <span className="w-5 h-[2px] bg-[#0B1B33] rounded-full block shadow-[0_0.5px_1px_rgba(255,255,255,0.3)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                  >
                    <X className="text-[#0B1B33] w-6 h-6" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Premium Engineered Reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 z-[110] bg-[#0B1B33] flex flex-col"
          >
            {/* Overlay Header Mirror for Continuity */}
            <div className="h-[68px] sm:h-[78px] w-full flex items-center justify-between px-4 sm:px-8 bg-[#E8EAEF] relative border-b border-[#0B1B33]/20 shadow-lg shrink-0">
              {/* Surface Mirroring Primary Header */}
              <div 
                className="absolute inset-0 opacity-[0.35] pointer-events-none z-[1]" 
                style={{ 
                  backgroundImage: `url('https://www.transparenttextures.com/patterns/brushed-alum.png')`,
                  backgroundSize: '300px 300px',
                }} 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/5 pointer-events-none z-[2]" />
              
              <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                <div className="h-9 w-9 sm:h-12 sm:w-12">
                  <img src={sscLogo.url} alt="SSC" className="h-full w-full object-contain opacity-95" />
                </div>
                <div className="w-[1px] h-7 sm:h-10 bg-[#0B1B33]/20" />
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-[18px] font-heading font-extrabold text-[#0B1B33] uppercase leading-none">SRINIVASA STEEL</span>
                  <span className="text-[9px] sm:text-[10px] font-technical font-black text-[#C5A059] uppercase tracking-[0.2em] mt-1">CORPORATION</span>
                </div>
              </div>

              {/* Gold Machined Close Button at Top */}
              <button 
                onClick={() => setIsOpen(false)}
                className="w-11 h-10 sm:w-13 sm:h-12 flex items-center justify-center rounded-[12px] bg-gradient-to-b from-[#F2D7A5] via-[#D4AF37] to-[#B8860B] shadow-[0_4px_10px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.4)] border border-[#8B6914]/40 relative z-10"
              >
                <div className="absolute inset-[1.5px] rounded-[10.5px] border border-white/20 pointer-events-none" />
                <X className="text-[#0B1B33] w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
              </button>
            </div>

            {/* Content Area with Deep Navy / Steel Blue Background */}
            <div className="flex-1 relative overflow-hidden bg-[#0B1B33]">
              {/* Engineering Grid Lines */}
              <div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none z-[1]" 
                style={{ 
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }} 
              />
              
              {/* Subtle TMT/Rebar Texture */}
              <div 
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none grayscale z-[2]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Restrained Gold Accents */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent z-[3]" />
              
              {/* Navigation Items - Sequential Reveal */}
              <div className="relative z-10 h-full flex flex-col py-8 px-6 sm:px-12 overflow-y-auto">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-6 py-4 border-b border-white/[0.05]"
                      >
                        {/* 3D Realistic Metallic Steel Icons - Circular Form */}
                        <div className="w-14 h-14 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.05)] group-hover:border-[#C5A059]/40 transition-all duration-300">
                          <div 
                            className="w-10 h-10 scale-[1.3] drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
                            style={{
                              backgroundImage: `url('${steelIconsAssetV2.url}')`,
                              backgroundSize: '100% 500%',
                              backgroundPosition: `0 ${link.icon * 25}%`,
                            }}
                          />
                        </div>
                        <span className="text-[1.4rem] sm:text-[1.7rem] font-heading font-black text-white uppercase tracking-[0.08em] group-hover:text-[#C5A059] transition-colors duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA - GET A QUOTE */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.6 }}
                  className="mt-12 mb-10"
                >
                  <Link to="/contact" search={{ product: "" }} onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-[64px] text-[14px] tracking-[0.25em] font-technical font-black 
                                     bg-[#C5A059] text-[#0B1B33] hover:bg-[#D6B570] rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.4)] group transition-all border border-[#C5A059]/20">
                      GET A QUOTE 
                      <ArrowRight size={22} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
