import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";

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
  }, [location.pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "GALLERY", href: "/gallery" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center bg-[#F7F7F4] transition-all duration-300 ${
        scrolled ? "h-[80px] shadow-sm border-b border-[#0B1B33]/5" : "h-[80px] border-b border-[#0B1B33]/5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 relative z-[100] group">
          <div className="h-10 w-10 sm:h-11 sm:w-11 shrink-0">
            <img
              src={sscLogo.url}
              alt="SSC Logo"
              className="h-full w-full object-contain filter drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col justify-center border-l border-[#0B1B33]/10 pl-3 h-9 sm:h-10">
            <span className="text-[14px] sm:text-[16px] font-heading font-semibold tracking-tight text-[#0B1B33] leading-none uppercase">
              SRINIVASA STEEL
            </span>
            <span className="text-[9px] sm:text-[10px] font-technical font-bold tracking-[0.2em] text-[#D9A000] leading-none uppercase mt-1">
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
                  {isActive && link.name === "HOME" && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9A000]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          
          <Button 
            className="bg-[#D9A000] hover:bg-[#D9A000]/90 text-white font-heading font-bold uppercase rounded-none px-6 h-[44px] text-[12px] tracking-[0.15em] shadow-lg shadow-[#D9A000]/10 transition-all flex items-center gap-2"
          >
            GET QUOTE <ArrowRight size={14} />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#0B1B33] p-2 relative z-[100]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] lg:hidden bg-[#F7F7F4] flex flex-col pt-[80px] px-6"
          >
            <div className="flex flex-col gap-6 py-12 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-semibold text-[#0B1B33] uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="mt-4 w-full bg-[#D9A000] text-white font-heading font-bold uppercase h-[60px] rounded-sm text-lg"
              >
                GET QUOTE
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};