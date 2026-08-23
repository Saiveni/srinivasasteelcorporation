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
      className="fixed left-0 right-0 z-[100] transition-all duration-500 top-0 px-3 sm:px-4 md:px-0 pt-3 sm:pt-4 md:pt-4"
    >
      {/* Premium Engineered Steel Header Panel - Unified Global Design */}
      <div className={`
        relative mx-auto w-full md:max-w-[94%] lg:max-w-[1280px] flex items-center justify-between px-4 sm:px-6 md:px-8
        transition-all duration-500 ease-in-out
        ${scrolled 
          ? "h-[62px] sm:h-[68px] md:h-[72px] shadow-[0_12px_40px_rgba(0,0,0,0.3)]" 
          : "h-[62px] sm:h-[68px] md:h-[72px] shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
        }
        rounded-[12px] overflow-hidden border border-white/40

      `}>
        {/* Brushed Silver / Aluminium Surface */}
        <div className="absolute inset-0 bg-ssc-steel-light" />
        
        {/* Realistic Metal Texture (Brushed) */}
        <div 
          className="absolute inset-0 opacity-[0.35] pointer-events-none z-[1]" 
          style={{ 
            backgroundImage: `url('https://www.transparenttextures.com/patterns/brushed-alum.png')`,
            backgroundSize: '300px 300px',
            filter: 'contrast(1.1)'
          }} 
        />

        {/* Integrated TMT Rebar Imagery - Visual Specification */}
        <div 
          className="absolute inset-0 opacity-[0.12] mix-blend-multiply pointer-events-none grayscale z-[2]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            filter: 'contrast(1.2) brightness(0.9)'
          }}
        />
        
        {/* Premium Highlights & Tonal Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-black/10 pointer-events-none z-[3]" />
        
        {/* Refined Metallic Bevel Edge */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-white/95 pointer-events-none z-[4]" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.2px] bg-black/20 pointer-events-none z-[4]" />

        {/* Logo & Brand Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 py-2">
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-4 relative group shrink-0 cursor-pointer"
          >
            <div className="h-9 w-9 sm:h-12 sm:w-12 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
              <img
                src={sscLogo.url}
                alt="SSC Logo"
                className="h-full w-full object-contain opacity-95 filter brightness-[0.9]"
              />
            </div>
            
            {/* Metallic Vertical Divider */}
            <div className="w-[1px] h-7 sm:h-10 bg-ssc-navy/20 shadow-[0.5px_0_0_rgba(255,255,255,0.6)]" />

            <div className="flex flex-col justify-center">
              <span className="text-h4 font-bold text-ssc-navy leading-none uppercase">
                SRINIVASA <span className="font-bold">STEEL</span>
              </span>
              <span className="text-micro text-ssc-gold-dark leading-none mt-1 uppercase drop-shadow-sm">
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
                    activeOptions={{ exact: link.href === '/' }}
                    className={`relative text-micro transition-all py-2 whitespace-nowrap cursor-pointer ${
                      isActive ? "text-ssc-navy" : "text-ssc-navy/70 hover:text-ssc-navy"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ssc-gold rounded-full shadow-[0_1px_3px_rgba(212,175,55,0.3)]"
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
              <Button size="sm" className="bg-ssc-navy text-ssc-on-dark-primary hover:bg-ssc-navy/90 border-none shadow-premium-soft">
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
            type="button"
          >
            <div className={`
              relative w-11 h-10 sm:w-13 sm:h-12 rounded-[12px]
              flex flex-col items-center justify-center
              transition-all duration-300
              ${isOpen ? 'rotate-90' : 'hover:-translate-y-[1px] active:translate-y-[0.5px]'}
              bg-gradient-to-b from-[#F2D7A5] via-ssc-gold to-ssc-gold-dark
              shadow-premium-medium
              border border-ssc-gold-dark/40
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
                    <span className="w-5 h-[2px] bg-ssc-navy rounded-full block shadow-[0_0.5px_1px_rgba(255,255,255,0.3)]" />
                    <span className="w-5 h-[2px] bg-ssc-navy rounded-full block shadow-[0_0.5px_1px_rgba(255,255,255,0.3)]" />
                    <span className="w-5 h-[2px] bg-ssc-navy rounded-full block shadow-[0_0.5px_1px_rgba(255,255,255,0.3)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                  >
                    <X className="text-ssc-navy w-6 h-6" strokeWidth={2.5} />
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
            className="fixed inset-0 z-[110] bg-white flex flex-col light-theme pointer-events-auto"
          >
            {/* Overlay Header Mirror */}
            <div className="h-[68px] sm:h-[78px] w-full flex items-center justify-between px-4 sm:px-8 bg-white relative border-b border-black/5 shrink-0">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 sm:gap-4 relative z-10 cursor-pointer">
                <div className="h-8 w-8 sm:h-12 sm:w-12">
                  <img src={sscLogo.url} alt="SSC" className="h-full w-full object-contain opacity-95" />
                </div>
                <div className="w-[1px] h-6 sm:h-10 bg-ssc-navy/20" />
                <div className="flex flex-col text-left">
                  <span className="text-h4 font-bold text-ssc-navy uppercase leading-none">SRINIVASA STEEL</span>
                  <span className="text-micro text-ssc-gold-dark uppercase mt-1">CORPORATION</span>
                </div>
              </Link>

              {/* Close Button Trigger */}
              <button 
                onClick={() => setIsOpen(false)}
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 bg-white shadow-sm relative z-10 cursor-pointer"
              >
                <X className="text-black/40 w-5 h-5" strokeWidth={2} />
              </button>
            </div>

            {/* Content Area with White Engineering Grid */}
            <div className="flex-1 relative overflow-hidden bg-ssc-steel-light">
              <div 
                className="absolute inset-0 opacity-[0.2] pointer-events-none z-[1]" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, var(--ssc-navy) 0.05, transparent 1px), linear-gradient(to bottom, var(--ssc-navy) 0.05, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} 
              />
              
              {/* Navigation Items */}
              <div className="relative z-10 h-full flex flex-col py-6 px-8 overflow-y-auto">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                      >
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          activeOptions={{ exact: link.href === '/' }}
                          className={`group flex items-center gap-5 py-3 cursor-pointer transition-colors ${
                            isActive ? "text-ssc-gold-dark" : ""
                          }`}
                        >
                          {/* 3D Realistic Metallic Icons - Pure Object Visibility */}
                          <div className="w-12 h-12 flex items-center justify-center shrink-0">
                            <div 
                              className="w-12 h-12 scale-[1.1] drop-shadow-[0_8px_12px_rgba(0,0,0,0.2)]"
                              style={{
                                backgroundImage: `url('${steelIconsAssetV2.url}')`,
                                backgroundSize: '100% 500%',
                                backgroundPosition: `0 ${link.icon * 25}%`,
                                filter: isActive ? 'contrast(1.1) brightness(1.1) drop-shadow(0 0 8px rgba(212,175,55,0.4))' : 'contrast(1.05) brightness(1.02)'
                              }}
                            />
                          </div>
                          <span className={`text-body font-bold transition-colors uppercase ${
                            isActive ? "text-ssc-gold-dark" : "text-ssc-navy group-hover:text-ssc-gold-dark"
                          }`}>
                            {link.name}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* GET A QUOTE Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-8 mb-10"
                >
                  <Link to="/contact" search={{ product: "" }} onClick={() => setIsOpen(false)}>
                    <Button className="w-full h-[54px] text-small font-bold 
                                     bg-ssc-gold text-ssc-navy hover:bg-ssc-gold/90 rounded-xl shadow-premium-medium border-b-4 border-ssc-gold-dark active:border-b-0 active:translate-y-1 transition-all uppercase">
                      GET A QUOTE <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>
                
                {/* Precision Built Label */}
                <div className="mt-auto pb-4 flex items-center justify-between opacity-30">
                  <span className="text-[8px] font-body tracking-[0.2em] uppercase">PRECISION BUILT</span>
                  <span className="text-[8px] font-body tracking-[0.2em] uppercase">VER 2.4.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
