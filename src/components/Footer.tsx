import { Link } from "@tanstack/react-router";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import { Mail, Phone, MapPin, ShieldCheck, Truck, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lucide-react sometimes has issues with specific exports depending on version, 
// using generic SVG paths for social icons to ensure build stability and match the visual reference perfectly.
const SocialIcon = ({ type }: { type: 'fb' | 'li' | 'ig' | 'yt' }) => {
  const paths = {
    fb: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    li: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
    ig: "rect width='20' height='20' x='2' y='2' rx='5' ry='5' / path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' / line x1='17.5' x2='17.51' y1='6.5' y2='6.5' /",
    yt: "path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' / polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' /"
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      width="16" 
      height="16" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {type === 'ig' ? (
        <>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </>
      ) : type === 'yt' ? (
        <>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
        </>
      ) : (
        <path d={paths[type as 'fb' | 'li']} />
      )}
    </svg>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const products = [
    { name: "TMT Rebars", path: "/products" as const },
    { name: "Structural Steel", path: "/products" as const },
    { name: "Steel Pipes", path: "/products" as const },
    { name: "Steel Coils", path: "/products" as const },
    { name: "Accessories", path: "/products" as const },
  ];

  const quickLinks = [
    { name: "Home", path: "/" as const },
    { name: "About Us", path: "/about" as const },
    { name: "Products", path: "/products" as const },
    { name: "Gallery", path: "/gallery" as const },
    { name: "Contact Us", path: "/contact" as const },
  ];

  return (
    <footer className="w-full font-poppins bg-[#050B15] text-white">
      {/* MAIN FOOTER SECTION */}
      <div className="container-wide pt-20 pb-12 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 relative z-10">
          
          {/* LEFT: Logo & Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-ssc-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={sscLogo.url} alt="SSC Logo" className="h-16 w-16 object-contain relative z-10" />
              </div>
              <div className="flex flex-col border-l border-white/20 pl-4 py-1">
                <span className="text-xl font-bold tracking-[0.1em] uppercase text-white leading-tight">
                  SRINIVASA <span className="text-ssc-gold">STEEL</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase leading-none mt-1">
                  CORPORATION
                </span>
              </div>
            </Link>
            
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Trusted steel and TMT supplier serving construction and industrial requirements since 1994.
            </p>
            
            <div className="flex gap-4">
              {(['fb', 'li', 'ig', 'yt'] as const).map((type) => (
                <a 
                  key={type} 
                  href="#" 
                  aria-label={`Follow us on ${type}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-ssc-gold hover:text-ssc-navy hover:border-ssc-gold transition-all duration-300"
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-10 relative inline-block">
              QUICK LINKS
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" />
            </h4>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-ssc-gold text-[15px] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-ssc-gold transition-all duration-300 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Products */}
          <div>
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-10 relative inline-block">
              OUR PRODUCTS
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" />
            </h4>
            <ul className="space-y-5">
              {products.map((product) => (
                <li key={product.name}>
                  <Link 
                    to={product.path} 
                    className="text-white/70 hover:text-ssc-gold text-[15px] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-ssc-gold opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">›</span>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Us */}
          <div className="relative">
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-10 relative inline-block">
              CONTACT US
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" />
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start group">
                <MapPin size={20} className="text-ssc-gold shrink-0 mt-1" />
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-widest text-ssc-gold/80 uppercase">HEAD OFFICE</span>
                  <a 
                    href="https://maps.google.com/?q=Srinivasa+Steel+Corporation+Vijayawada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-white/70 hover:text-white transition-colors text-[14px] leading-relaxed"
                  >
                    Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada - 520012, Andhra Pradesh, India
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <Phone size={20} className="text-ssc-gold shrink-0 mt-1" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+919440170453" className="text-white/70 hover:text-ssc-gold transition-colors text-[14px] flex flex-col">
                    <span className="font-bold">+91 9440170453</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">(M.S.V. Bhaskar)</span>
                  </a>
                  <a href="tel:+919849600403" className="text-white/70 hover:text-ssc-gold transition-colors text-[14px] flex flex-col">
                    <span className="font-bold">+91 9849600403</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">(M.V. Ramana Kumar)</span>
                  </a>
                  <a href="tel:+918125397453" className="text-white/70 hover:text-ssc-gold transition-colors text-[14px] flex flex-col">
                    <span className="font-bold">+91 8125397453</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">(M.V.N.M. Yeshwanth)</span>
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-center group">
                <Mail size={20} className="text-ssc-gold shrink-0" />
                <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-white/70 hover:text-ssc-gold transition-colors text-[14px] break-all">
                  srinivasasteelcorporationvja@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* INDUSTRIAL VISUAL ELEMENT: Blended steel rebar image */}
        <div className="absolute top-0 right-0 w-[45%] h-full opacity-30 pointer-events-none hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050B15]/80 to-[#050B15] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" 
            alt="Steel rods industrial visual" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* CREDIBILITY STRIP */}
      <div className="border-t border-white/5 py-12 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                title: "QUALITY ASSURED", 
                desc: "Tested. Certified. Trusted.", 
                icon: <ShieldCheck size={28} strokeWidth={1.5} /> 
              },
              { 
                title: "RELIABLE SUPPLY", 
                desc: "Consistent quality & uninterrupted supply.", 
                icon: <Truck size={28} strokeWidth={1.5} /> 
              },
              { 
                title: "ON-TIME DELIVERY", 
                desc: "Delivered on time, every time.", 
                icon: <Users size={28} strokeWidth={1.5} /> // Using Users for reliability/focus as placeholder for custom clock
              },
              { 
                title: "CUSTOMER FOCUSED", 
                desc: "Building long-term relationships.", 
                icon: <Users size={28} strokeWidth={1.5} /> 
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 group">
                <div className="text-ssc-gold group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h5 className="text-[12px] font-bold tracking-[0.2em] uppercase text-white">{item.title}</h5>
                  <p className="text-[11px] text-white/40 uppercase tracking-wider">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Subtle gold line accent */}
        <div className="absolute bottom-0 right-0 w-48 h-1 bg-ssc-gold skew-x-[-45deg] translate-x-12 translate-y-0.5" />
      </div>

      {/* COPYRIGHT ROW */}
      <div className="bg-[#03070E] py-8 border-t border-white/5">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] tracking-[0.15em] text-white/30 uppercase font-medium">
            <p>© {currentYear} Srinivasa Steel Corporation. All Rights Reserved.</p>
            <div className="flex items-center gap-8">
              <Link to="/contact" search={{ product: "" }} className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <Link to="/contact" search={{ product: "" }} className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};