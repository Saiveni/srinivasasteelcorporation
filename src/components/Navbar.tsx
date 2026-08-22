import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
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
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-500 ${
        scrolled 
          ? "h-[70px] bg-[#F7F7F4]/95 backdrop-blur-md border-b border-[#0B1B33]/10 shadow-lg" 
          : "h-[80px] bg-[#F7F7F4] border-b border-[#0B1B33]/5"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
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

        {/* Premium Mobile Menu Trigger */}
        <button
          className="lg:hidden relative z-[100] group outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className={`
            relative w-11 h-11 rounded-lg flex flex-col items-center justify-center gap-1.5
            bg-ssc-navy shadow-[0_4px_12px_rgba(11,27,51,0.3)]
            border border-ssc-gold/40 transition-all duration-300
            ${isOpen ? 'rotate-90 scale-95' : 'hover:scale-105'}
          `}>
            {/* Subtle Gold Accent Top Line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-ssc-gold/30" />
            
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white rounded-full block"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-4 h-[1.5px] bg-white rounded-full block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white rounded-full block"
            />
            
            {/* Texture/Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-lg pointer-events-none" />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] lg:hidden bg-[#F7F7F4]"
          >
            {/* Architectural Grid Background for Menu */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ 
                backgroundImage: `linear-gradient(to right, #0B1B33 1px, transparent 1px), linear-gradient(to bottom, #0B1B33 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} 
            />
            
            <div className="flex flex-col h-full justify-center px-10 gap-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4"
                    >
                      <span className="text-[10px] font-technical font-bold text-ssc-gold tracking-widest opacity-60">0{i + 1}</span>
                      <span className="text-3xl font-heading font-bold text-ssc-navy uppercase tracking-tighter group-hover:text-ssc-gold transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact" search={{ product: "" }} onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-14 text-sm tracking-[0.2em] font-technical font-bold">
                    GET A QUOTE
                  </Button>
                </Link>
              </motion.div>
              
              {/* Industrial Milestone Detail */}
              <div className="absolute bottom-12 left-10 border-l border-ssc-navy/10 pl-6">
                <p className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-[0.3em]">
                  Quality Engineering Since 1994
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};