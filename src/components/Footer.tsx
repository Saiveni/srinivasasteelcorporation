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
      {/* DESKTOP FOOTER */}
      <div className="hidden md:block container-wide pt-20 pb-12 relative overflow-hidden">
        <div className="grid grid-cols-4 gap-12 relative z-10">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative"><img src={sscLogo.url} alt="SSC Logo" className="h-16 w-16 object-contain" /></div>
              <div className="flex flex-col border-l border-white/20 pl-4 py-1">
                <span className="text-xl font-bold tracking-[0.1em] uppercase text-white leading-tight">SRINIVASA <span className="text-ssc-gold">STEEL</span></span>
                <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase leading-none mt-1">CORPORATION</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">Trusted steel and TMT supplier serving construction and industrial requirements since 1994.</p>
            <div className="flex gap-4">
              {(['fb', 'li', 'ig', 'yt'] as const).map((type) => (
                <a key={type} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-ssc-gold hover:text-ssc-navy transition-all"><SocialIcon type={type} /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-10 relative inline-block">QUICK LINKS<span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" /></h4>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.name}><Link to={link.path} className="text-white/70 hover:text-ssc-gold text-[15px] flex items-center gap-2"><span className="w-0 h-[1px] bg-ssc-gold group-hover:w-3 transition-all" />{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-10 relative inline-block">OUR PRODUCTS<span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" /></h4>
            <ul className="space-y-5">
              {products.map((p) => (
                <li key={p.name}><Link to={p.path} className="text-white/70 hover:text-ssc-gold text-[15px] flex items-center gap-2"><span className="text-ssc-gold">›</span>{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <h4 className="text-ssc-gold font-bold text-sm uppercase tracking-[0.2em] mb-10 relative inline-block">CONTACT US<span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-ssc-gold" /></h4>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start"><MapPin size={20} className="text-ssc-gold shrink-0 mt-1" /><div><span className="text-[11px] font-bold tracking-widest text-ssc-gold/80 uppercase">HEAD OFFICE</span><a href="#" className="block text-white/70 hover:text-white text-[14px] leading-relaxed">Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada - 520012, Andhra Pradesh, India</a></div></li>
              <li className="flex gap-4 items-start"><Phone size={20} className="text-ssc-gold shrink-0 mt-1" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+919440170453" className="text-white/70 hover:text-ssc-gold text-[14px] flex flex-col"><span className="font-bold">+91 9440170453</span><span className="text-[10px] text-white/40 uppercase">(M.S.V. Bhaskar)</span></a>
                  <a href="tel:+919849600403" className="text-white/70 hover:text-ssc-gold text-[14px] flex flex-col"><span className="font-bold">+91 9849600403</span><span className="text-[10px] text-white/40 uppercase">(M.V. Ramana Kumar)</span></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden pt-12 pb-8 px-4 space-y-6">
        <div className="text-center space-y-6 mb-8"><img src={sscLogo.url} alt="SSC Logo" className="h-16 w-16 mx-auto" /><p className="text-white/70 text-sm">Trusted steel and TMT supplier serving construction and industrial requirements since 1994.</p><div className="flex justify-center gap-4">{(['fb', 'li', 'ig', 'yt'] as const).map((t) => <a key={t} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"><SocialIcon type={t} /></a>)}</div></div>
        {[
          { id: 'quick', title: 'QUICK LINKS', items: quickLinks.map(l => l.name) },
          { id: 'prod', title: 'OUR PRODUCTS', items: products.map(p => p.name) },
          { id: 'contact', title: 'CONTACT US', content: 'Vijayawada Head Office...' }
        ].map((sec) => (
          <div key={sec.id} className="border-b border-white/10 pb-4"><button onClick={() => toggleAccordion(sec.id)} className="w-full flex justify-between items-center text-ssc-gold font-bold text-sm uppercase">{sec.title} {activeAccordion === sec.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</button>
            <AnimatePresence>
              {activeAccordion === sec.id && (<motion.ul initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} className="overflow-hidden mt-4 space-y-3">{sec.items?.map((item, i) => <li key={i} className="text-white/70 text-[14px]">{item}</li>)}</motion.ul>)}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 py-8"><div className="container-wide"><div className="grid grid-cols-2 lg:grid-cols-4 gap-6">{[
        {t:'QUALITY ASSURED', i:<ShieldCheck />}, {t:'RELIABLE SUPPLY', i:<Truck />}, {t:'ON-TIME DELIVERY', i:<Users />}, {t:'CUSTOMER FOCUSED', i:<Users />}
      ].map((i, k) => <div key={k} className="flex items-center gap-3"><div className="text-ssc-gold">{i.i}</div><span className="text-[10px] font-bold text-white">{i.t}</span></div>)}</div></div></div>
      <div className="bg-[#03070E] py-6 text-center text-[10px] text-white/30 tracking-widest uppercase">© 2026 Srinivasa Steel Corporation. All Rights Reserved.</div>
    </footer>
  );
};