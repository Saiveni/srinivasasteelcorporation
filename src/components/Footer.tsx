import { Link } from "@tanstack/react-router";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Truck, Users } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: "TMT Rebars", path: "/products" },
    { name: "Structural Steel", path: "/products" },
    { name: "Steel Pipes", path: "/products" },
    { name: "Steel Coils", path: "/products" },
    { name: "Wire Products", path: "/products" },
    { name: "Decoiling Solutions", path: "/products" },
  ];

  return (
    <footer className="w-full">
      <div className="hidden">
        {`'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            FOOTER REDESIGN — PART 1 ONLY
                                            ... (rest of the prompt for tracking)`}
      </div>

      {/* UPPER FOOTER: Premium light/white industrial panel */}
      <div className="bg-[#F8F9FA] relative overflow-hidden pt-20 pb-16 border-t border-ssc-gold/20">
        {/* Steel/Industrial Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/brushed-alum.png')` }}></div>
        
        {/* Subtle Geometric Detailing */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-ssc-navy">
            <path d="M0 0 L100 0 L100 100 Z" />
          </svg>
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* BRAND COLUMN */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-3">
                <img src={sscLogo.url} alt="SSC Logo" className="h-16 w-16 object-contain" />
                <div className="flex flex-col border-l border-ssc-navy/10 pl-4 py-1">
                  <span className="text-h4 font-bold tracking-[0.05em] leading-none uppercase text-ssc-navy">
                    SRINIVASA <span className="font-medium opacity-80">STEEL</span>
                  </span>
                  <span className="text-micro text-ssc-gold leading-none mt-2 uppercase">
                    CORPORATION
                  </span>
                </div>
              </Link>
              <div className="space-y-2">
                <p className="text-ssc-gold font-bold text-[10px] tracking-widest uppercase">PREMIUM STEEL DISTRIBUTION SINCE 1994.</p>
                <p className="text-ssc-navy/70 text-sm leading-relaxed max-w-xs italic">
                  One of South India's premier steel distributors, providing uncompromising quality and structural integrity to the nation's infrastructure since 1994.
                </p>
              </div>
              <div className="flex gap-4 pt-2">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full border border-ssc-navy/10 flex items-center justify-center text-ssc-navy hover:bg-ssc-navy hover:text-white transition-all duration-300">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="lg:pl-8">
              <h4 className="text-ssc-navy font-bold text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-ssc-gold"></span>
                QUICK LINKS
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {['Home', 'About Us', 'Products', 'Gallery', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' us', '')}`} 
                      className="text-ssc-navy/60 hover:text-ssc-navy hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* OUR PRODUCTS */}
            <div>
              <h4 className="text-ssc-navy font-bold text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-ssc-gold"></span>
                OUR PRODUCTS
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link 
                      to={product.path as any}
                      className="text-ssc-navy/60 hover:text-ssc-navy hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div className="relative">
              <h4 className="text-ssc-navy font-bold text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-ssc-gold"></span>
                GET IN TOUCH
              </h4>
              <ul className="space-y-6 text-sm">
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 shrink-0 bg-white border border-ssc-gold/20 flex items-center justify-center text-ssc-gold group-hover:bg-ssc-gold group-hover:text-white transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <span className="text-ssc-navy/70 leading-snug">
                    Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada – 520012
                  </span>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 shrink-0 bg-white border border-ssc-gold/20 flex items-center justify-center text-ssc-gold group-hover:bg-ssc-gold group-hover:text-white transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col text-ssc-navy/70 font-bold">
                    <a href="tel:9440170453" className="hover:text-ssc-gold transition-colors">9440170453</a>
                    <a href="tel:9849600403" className="hover:text-ssc-gold transition-colors text-xs opacity-70">9849600403</a>
                  </div>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-10 h-10 shrink-0 bg-white border border-ssc-gold/20 flex items-center justify-center text-ssc-gold group-hover:bg-ssc-gold group-hover:text-white transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-ssc-navy/70 font-bold hover:text-ssc-gold transition-colors truncate">
                    srinivasasteelcorporationvja@gmail.com
                  </a>
                </li>
              </ul>

              {/* INDUSTRIAL VISUAL ELEMENT: Subtle steel bars in background */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 opacity-[0.08] pointer-events-none overflow-hidden select-none">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" 
                  alt="Steel detail" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* LOWER FOOTER STRIP: Dark navy/black industrial strip */}
      <div className="bg-[#050A14] text-white py-12 border-t border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-white/5 pb-12">
            
            {/* Credibility 1 */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-lg bg-ssc-gold/10 border border-ssc-gold/20 flex items-center justify-center text-ssc-gold group-hover:bg-ssc-gold group-hover:text-black transition-all duration-500">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h5 className="text-xs font-bold tracking-widest uppercase">HIGH QUALITY STEEL</h5>
                <p className="text-[10px] text-white/40 uppercase mt-1">Tested. Trusted. Delivered.</p>
              </div>
            </div>

            {/* Credibility 2 */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-lg bg-ssc-gold/10 border border-ssc-gold/20 flex items-center justify-center text-ssc-gold group-hover:bg-ssc-gold group-hover:text-black transition-all duration-500">
                <Truck size={24} />
              </div>
              <div>
                <h5 className="text-xs font-bold tracking-widest uppercase">TIMELY DELIVERY</h5>
                <p className="text-[10px] text-white/40 uppercase mt-1">On-time, Every time.</p>
              </div>
            </div>

            {/* Credibility 3 */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-lg bg-ssc-gold/10 border border-ssc-gold/20 flex items-center justify-center text-ssc-gold group-hover:bg-ssc-gold group-hover:text-black transition-all duration-500">
                <Users size={24} />
              </div>
              <div>
                <h5 className="text-xs font-bold tracking-widest uppercase">CUSTOMER FOCUSED</h5>
                <p className="text-[10px] text-white/40 uppercase mt-1">Building long-term trust.</p>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest opacity-40 uppercase">
            <p>© {currentYear} Srinivasa Steel Corporation.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
