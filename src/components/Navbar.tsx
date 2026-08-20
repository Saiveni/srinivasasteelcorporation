import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
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
        <Link to="/" className="flex items-center gap-3 py-1 select-none">
          <img
            src={sscLogo.url}
            alt="Srinivasa Steel Corporation logo"
            width={52}
            height={52}
            className="h-11 w-11 md:h-13 md:w-13 object-contain shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="text-lg md:text-xl font-heading tracking-tight text-brushed-steel leading-[0.95] uppercase">
              SRINIVASA STEEL
            </span>
            <span className="text-[10px] md:text-xs font-technical font-semibold tracking-[0.25em] text-ssc-gold leading-none uppercase mt-0.5">
              CORPORATION
            </span>
          </div>
        </Link>


        {/* Desktop Nav */}
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

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-ssc-navy p-3 min-w-[44px] min-h-[44px] flex items-center justify-center relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden bg-white pt-24 pb-12 px-6 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col gap-8 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-heading text-ssc-navy hover:text-ssc-gold transition-colors tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                onClick={() => setIsOpen(false)}
                className="w-full max-w-xs bg-ssc-gold text-white font-display font-black uppercase py-6 rounded-xl text-lg shadow-xl"
              >
                Get Quote
              </Button>
            </div>
            
            {/* Close button at bottom for easier reachability if needed, 
                but we already have the hamburger 'X' at top right which is common. 
                The requirements say "close when a navigation item is selected" (done)
                and "close when the close button is clicked". 
                The toggle button becomes an 'X' via line 76 logic. 
            */}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
