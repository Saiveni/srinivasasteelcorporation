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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect py-3" : "bg-transparent py-5"
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
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-brushed-steel leading-[0.95] uppercase">
              SRINIVASA STEEL
            </span>
            <span className="text-[10px] md:text-xs font-black tracking-[0.25em] text-ssc-gold leading-none uppercase mt-0.5">
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
              className="text-sm font-bold text-ssc-navy/80 hover:text-ssc-gold transition-colors uppercase tracking-wider"
              activeProps={{ className: "text-ssc-gold" }}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-ssc-gold hover:bg-ssc-gold/90 text-white font-bold rounded-xl px-6 py-2 shadow-premium hover:shadow-premium-hover transition-all hover:-translate-y-0.5">
            Get Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-ssc-navy p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-white pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-ssc-navy flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight className="text-ssc-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <Button className="w-full bg-ssc-gold text-white font-bold py-4 rounded-xl mt-4">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
