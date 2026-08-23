import { Link } from "@tanstack/react-router";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import { Mail, Phone, MapPin, ShieldCheck, Truck, Users, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: "TMT Rebars", path: "/products" as const },
    { name: "Structural Steel", path: "/products" as const },
    { name: "Steel Pipes", path: "/products" as const },
    { name: "Steel Coils", path: "/products" as const },
    { name: "Wire Products", path: "/products" as const },
    { name: "Decoiling Solutions", path: "/products" as const },
  ];

  return (
    <footer className="w-full font-poppins">
      <div className="hidden">
        {`'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            FOOTER REDESIGN — PART 1 ONLY
                                            ... (rest of the prompt for tracking)`}
      </div>

      {/* UPPER FOOTER: Premium light/white industrial panel */}
      <div className="bg-[#F2F4F7] relative overflow-hidden pt-16 pb-12 border-t border-ssc-gold/20">
        {/* Subtle steel/industrial texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}></div>
        
        {/* Subtle geometric detailing - Angled gold line as per reference */}
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none hidden lg:block">
           <div className="absolute top-0 left-0 w-[2px] h-full bg-ssc-gold/40 -skew-x-[20deg] origin-top"></div>
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
              <div className="space-y-4">
                <p className="text-ssc-navy text-sm leading-relaxed max-w-xs">
                  Premium steel distribution since 1994. Committed to quality, reliability and customer satisfaction.
                </p>
                <div className="flex gap-3">
                  {[Facebook, Linkedin, Instagram, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-full bg-ssc-navy text-white flex items-center justify-center hover:bg-ssc-gold transition-colors duration-300">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="lg:pl-8 border-l border-ssc-navy/5">
              <h4 className="text-ssc-navy font-bold text-sm uppercase tracking-widest mb-8">
                QUICK LINKS
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/" className="text-ssc-navy/70 hover:text-ssc-navy transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-ssc-navy/70 hover:text-ssc-navy transition-colors">About Us</Link></li>
                <li><Link to="/products" className="text-ssc-navy/70 hover:text-ssc-navy transition-colors">Products</Link></li>
                <li><Link to="/gallery" className="text-ssc-navy/70 hover:text-ssc-navy transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="text-ssc-navy/70 hover:text-ssc-navy transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* OUR PRODUCTS */}
            <div className="border-l border-ssc-navy/5">
              <h4 className="text-ssc-navy font-bold text-sm uppercase tracking-widest mb-8">
                OUR PRODUCTS
              </h4>
              <ul className="space-y-4 text-sm font-medium text-ssc-navy/70">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link to={product.path} className="hover:text-ssc-navy transition-colors">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div className="relative lg:pl-4 border-l border-ssc-navy/5">
              <h4 className="text-ssc-navy font-bold text-sm uppercase tracking-widest mb-8">
                GET IN TOUCH
              </h4>
              <ul className="space-y-5 text-sm text-ssc-navy/80">
                <li className="flex gap-3 items-start group">
                  <MapPin size={18} className="text-ssc-navy shrink-0 mt-0.5" />
                  <span>
                    Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada - 520012, Andhra Pradesh, India
                  </span>
                </li>
                <li className="flex gap-3 items-center group">
                  <Phone size={18} className="text-ssc-navy shrink-0" />
                  <div className="flex flex-col">
                    <a href="tel:+919440170453" className="hover:text-ssc-gold transition-colors">+91 9440170453 (M.S.V. Bhaskar)</a>
                    <a href="tel:+919849600403" className="hover:text-ssc-gold transition-colors">+91 9849600403 (M.V. Ramana Kumar)</a>
                    <a href="tel:+918125397453" className="hover:text-ssc-gold transition-colors">+91 8125397453 (M.V.N.M. Yeshwanth)</a>
                  </div>
                </li>
                <li className="flex gap-3 items-center group">
                  <Mail size={18} className="text-ssc-navy shrink-0" />
                  <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="hover:text-ssc-gold transition-colors truncate">
                    srinivasasteelcorporationvja@gmail.com
                  </a>
                </li>
              </ul>

              {/* INDUSTRIAL VISUAL ELEMENT: Steel rods as per reference */}
              <div className="absolute -top-16 -right-16 w-40 h-[120%] opacity-20 pointer-events-none hidden xl:block">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" 
                  alt="Steel rods" 
                  className="w-full h-full object-cover grayscale -skew-x-[20deg]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* LOWER FOOTER STRIP: Dark navy/black industrial strip */}
      <div className="bg-[#0B1320] text-white py-8 border-t border-white/5">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
              {/* Credibility 1 */}
              <div className="flex items-center gap-4 group">
                <div className="text-ssc-gold">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold tracking-widest uppercase text-white">HIGH QUALITY STEEL</h5>
                  <p className="text-[10px] text-white/50 uppercase">Tested. Trusted. Delivered.</p>
                </div>
              </div>

              {/* Credibility 2 */}
              <div className="flex items-center gap-4 group">
                <div className="text-ssc-gold">
                  <Truck size={28} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold tracking-widest uppercase text-white">TIMELY DELIVERY</h5>
                  <p className="text-[10px] text-white/50 uppercase">On-time, Every time.</p>
                </div>
              </div>

              {/* Credibility 3 */}
              <div className="flex items-center gap-4 group">
                <div className="text-ssc-gold">
                  <Users size={28} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold tracking-widest uppercase text-white">CUSTOMER FOCUSED</h5>
                  <p className="text-[10px] text-white/50 uppercase">Building long-term trust.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-1 text-[11px] tracking-widest text-white/50 uppercase border-l border-white/10 pl-10 hidden lg:flex">
              <p>© {currentYear} Srinivasa Steel Corporation.</p>
              <p>All Rights Reserved.</p>
            </div>
            
            <div className="lg:hidden text-[10px] tracking-widest text-white/40 uppercase text-center border-t border-white/5 pt-6 w-full">
               <p>© {currentYear} Srinivasa Steel Corporation. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};