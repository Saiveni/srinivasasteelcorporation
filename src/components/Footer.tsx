import { Link } from "@tanstack/react-router";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import { Mail, Phone, MapPin, ShieldCheck, Truck, Users } from "lucide-react";

// Lucide-react sometimes has issues with specific exports depending on version, 
// using generic SVG paths for social icons to ensure build stability and match the visual reference perfectly.
const SocialIcon = ({ type }: { type: 'fb' | 'li' | 'ig' | 'yt' }) => {
  const paths = {
    fb: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    li: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
    ig: "rect width='20' height='20' x='2' y='2' rx='5' ry='5' / path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' / line x1='17.5' x2='17.51' y1='6.5' y2='6.5' /", // Simplified for brevity in this mock-up
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
      {/* UPPER FOOTER: Premium light/white industrial panel */}
      <div className="bg-[#F2F4F7] relative overflow-hidden pt-12 md:pt-16 pb-12 border-t border-ssc-gold/20">
        {/* Subtle steel/industrial texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}
        />
        
        {/* Subtle geometric detailing - Angled gold line as per reference */}
        <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none hidden lg:block">
           <div className="absolute top-0 left-0 w-[2px] h-full bg-ssc-gold/40 -skew-x-[20deg] origin-top"></div>
        </div>

        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap gap-12 lg:gap-8">
            
            {/* BRAND COLUMN */}
            <div className="w-full lg:w-[45%] xl:w-1/4 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
              <Link to="/" className="flex items-center gap-3">
                <img src={sscLogo.url} alt="SSC Logo" className="h-14 w-14 md:h-16 md:w-16 object-contain" />
                <div className="flex flex-col border-l border-ssc-navy/10 pl-4 py-1 text-left">
                  <span className="text-base md:text-lg font-bold tracking-[0.05em] leading-none uppercase text-ssc-navy">
                    SRINIVASA <span className="font-medium opacity-80">STEEL</span>
                  </span>
                  <span className="text-[10px] md:text-micro text-ssc-gold leading-none mt-2 uppercase">
                    CORPORATION
                  </span>
                </div>
              </Link>
              <div className="space-y-6 w-full max-w-sm md:max-w-xs">
                <p className="text-ssc-navy text-sm leading-relaxed">
                  Premium steel distribution since 1994. Committed to quality, reliability and customer satisfaction.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  {(['fb', 'li', 'ig', 'yt'] as const).map((type) => (
                    <a 
                      key={type} 
                      href="#" 
                      aria-label={`Follow us on ${type}`}
                      className="w-10 h-10 rounded-full bg-ssc-navy text-white flex items-center justify-center hover:bg-ssc-gold hover:-translate-y-1 transition-all duration-300 shadow-lg"
                    >
                      <SocialIcon type={type} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] xl:w-[15%] lg:pl-8 lg:border-l border-ssc-navy/5">
              <h4 className="text-ssc-navy font-bold text-sm uppercase tracking-widest mb-6 md:mb-8 text-center sm:text-left">
                QUICK LINKS
              </h4>
              <ul className="space-y-4 text-sm font-medium flex flex-col items-center sm:items-start">
                <li><Link to="/" className="text-ssc-navy/70 hover:text-ssc-gold hover:translate-x-1 transition-all inline-block">Home</Link></li>
                <li><Link to="/about" className="text-ssc-navy/70 hover:text-ssc-gold hover:translate-x-1 transition-all inline-block">About Us</Link></li>
                <li><Link to="/products" className="text-ssc-navy/70 hover:text-ssc-gold hover:translate-x-1 transition-all inline-block">Products</Link></li>
                <li><Link to="/gallery" className="text-ssc-navy/70 hover:text-ssc-gold hover:translate-x-1 transition-all inline-block">Gallery</Link></li>
                <li><Link to="/contact" search={{ product: "" }} className="text-ssc-navy/70 hover:text-ssc-gold hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
              </ul>
            </div>

            {/* OUR PRODUCTS */}
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] xl:w-[20%] lg:border-l border-ssc-navy/5">
              <h4 className="text-ssc-navy font-bold text-sm uppercase tracking-widest mb-6 md:mb-8 text-center sm:text-left">
                OUR PRODUCTS
              </h4>
              <ul className="space-y-4 text-sm font-medium text-ssc-navy/70 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-4">
                {products.map((product) => (
                  <li key={product.name} className="flex justify-center sm:justify-start">
                    <Link to={product.path} className="hover:text-ssc-gold hover:translate-x-1 transition-all inline-block text-center sm:text-left">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div className="w-full md:w-[60%] lg:w-[45%] xl:w-[30%] relative lg:pl-4 lg:border-l border-ssc-navy/5">
              <h4 className="text-ssc-navy font-bold text-sm uppercase tracking-widest mb-6 md:mb-8 text-center md:text-left">
                GET IN TOUCH
              </h4>
              <ul className="space-y-5 text-sm text-ssc-navy/80">
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded bg-ssc-navy/5 flex items-center justify-center shrink-0 group-hover:bg-ssc-gold/10 transition-colors">
                    <MapPin size={18} className="text-ssc-navy group-hover:text-ssc-gold transition-colors" />
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Srinivasa+Steel+Corporation+Vijayawada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-ssc-gold transition-colors leading-relaxed"
                  >
                    Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada - 520012, Andhra Pradesh, India
                  </a>
                </li>
                <li className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded bg-ssc-navy/5 flex items-center justify-center shrink-0 group-hover:bg-ssc-gold/10 transition-colors">
                    <Phone size={18} className="text-ssc-navy group-hover:text-ssc-gold transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919440170453" className="hover:text-ssc-gold transition-colors font-semibold">+91 9440170453 <span className="font-normal text-xs opacity-70">(M.S.V. Bhaskar)</span></a>
                    <a href="tel:+919849600403" className="hover:text-ssc-gold transition-colors font-semibold">+91 9849600403 <span className="font-normal text-xs opacity-70">(M.V. Ramana Kumar)</span></a>
                    <a href="tel:+918125397453" className="hover:text-ssc-gold transition-colors font-semibold">+91 8125397453 <span className="font-normal text-xs opacity-70">(M.V.N.M. Yeshwanth)</span></a>
                  </div>
                </li>
                <li className="flex gap-4 items-center group">
                  <div className="w-10 h-10 rounded bg-ssc-navy/5 flex items-center justify-center shrink-0 group-hover:bg-ssc-gold/10 transition-colors">
                    <Mail size={18} className="text-ssc-navy group-hover:text-ssc-gold transition-colors" />
                  </div>
                  <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="hover:text-ssc-gold transition-colors break-all">
                    srinivasasteelcorporationvja@gmail.com
                  </a>
                </li>
              </ul>

              {/* INDUSTRIAL VISUAL ELEMENT: Steel rods */}
              <div className="absolute -top-16 -right-16 md:-right-8 lg:-right-16 w-32 md:w-40 h-[130%] opacity-10 md:opacity-20 pointer-events-none overflow-hidden skew-x-[-15deg] md:skew-x-[-20deg]">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop" 
                  alt="Steel rods background element" 
                  className="w-full h-full object-cover grayscale brightness-125 md:brightness-100"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* LOWER FOOTER STRIP: Dark navy/black industrial strip */}
      <div className="bg-[#0B1320] text-white py-8 md:py-10 border-t border-white/5">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-12">
            
            <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {/* Credibility 1 */}
              <div className="flex items-center gap-4 group justify-center sm:justify-start">
                <div className="text-ssc-gold shrink-0 bg-white/5 p-2 rounded-lg group-hover:bg-ssc-gold group-hover:text-ssc-navy transition-all duration-300">
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white mb-0.5">HIGH QUALITY STEEL</h5>
                  <p className="text-[10px] text-white/40 uppercase font-medium">Tested. Trusted. Delivered.</p>
                </div>
              </div>

              {/* Credibility 2 */}
              <div className="flex items-center gap-4 group justify-center sm:justify-start">
                <div className="text-ssc-gold shrink-0 bg-white/5 p-2 rounded-lg group-hover:bg-ssc-gold group-hover:text-ssc-navy transition-all duration-300">
                  <Truck size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white mb-0.5">TIMELY DELIVERY</h5>
                  <p className="text-[10px] text-white/40 uppercase font-medium">On-time, Every time.</p>
                </div>
              </div>

              {/* Credibility 3 */}
              <div className="flex items-center gap-4 group justify-center sm:justify-start">
                <div className="text-ssc-gold shrink-0 bg-white/5 p-2 rounded-lg group-hover:bg-ssc-gold group-hover:text-ssc-navy transition-all duration-300">
                  <Users size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold tracking-[0.15em] uppercase text-white mb-0.5">CUSTOMER FOCUSED</h5>
                  <p className="text-[10px] text-white/40 uppercase font-medium">Building long-term trust.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-1.5 text-[10px] md:text-[11px] tracking-[0.1em] text-white/30 uppercase text-center lg:text-right border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 w-full lg:w-auto">
              <p>© {currentYear} Srinivasa Steel Corporation. All Rights Reserved.</p>
              <p className="hidden md:block">Engineered for Excellence in Construction.</p>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};