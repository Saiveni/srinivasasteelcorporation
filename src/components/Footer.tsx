import { Link } from "@tanstack/react-router";
import sscLogo from "@/assets/ssc-logo-transparent.png.asset.json";
import sscLogo3D from "@/assets/ssc-logo-3d.png.asset.json";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const partners = [
    { name: "Vizag Steel", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Rashtriya_Ispat_Nigam_Logo.svg/1200px-Rashtriya_Ispat_Nigam_Logo.svg.png" },
    { name: "Jindal Panther", logo: "https://www.jindalpanther.com/images/jindal-panther-logo.png" },
    { name: "Simhadri TMT", logo: "https://simhadritmt.com/wp-content/uploads/2021/05/simhadri-logo.png" },
  ];

  return (
    <footer className="bg-ssc-navy text-white pt-20 pb-10">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={sscLogo.url} alt="SSC Logo" className="h-16 w-16 object-contain filter brightness-0 invert" />
              <div className="flex flex-col border-l border-white/10 pl-4 py-1">
                <span className="text-[22px] font-heading font-bold tracking-[0.05em] leading-none uppercase text-white">
                  SRINIVASA <span className="font-medium opacity-80 text-[20px]">STEEL</span>
                </span>
                <span className="text-[11px] font-technical font-extrabold tracking-[0.3em] text-[#C5A059] leading-none mt-2 uppercase">
                  CORPORATION
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Trusted steel and TMT supplier serving construction and industrial requirements since 1994.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C5A059] text-eyebrow mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" search={{ product: "" }} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" search={{ product: "" }} className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/products" search={{ product: "" }} className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/gallery" search={{ product: "" }} className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" search={{ product: "" }} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C5A059] text-eyebrow mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <MapPin className="text-[#C5A059] shrink-0" size={20} />
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-white mb-1">Head Office</span>
                  <span className="text-sm">Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada – 520012</span>
                </div>
              </li>
              <li className="flex gap-3 pt-2">
                <Phone className="text-[#C5A059] shrink-0" size={20} />
                <div className="flex flex-col">
                  <a href="tel:9440170453" className="text-sm hover:text-[#C5A059] transition-colors">9440170453 (M.S.V. Bhaskar)</a>
                  <a href="tel:9849600403" className="text-sm hover:text-[#C5A059] transition-colors">9849600403 (M.V. Ramana Kumar)</a>
                  <a href="tel:8125397453" className="text-sm hover:text-[#C5A059] transition-colors">8125397453 (M.V.N.M. Yeshwanth)</a>
                </div>
              </li>
              <li className="flex gap-3 pt-2">
                <Mail className="text-[#C5A059] shrink-0" size={20} />
                <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-sm hover:text-[#C5A059] transition-colors">srinivasasteelcorporationvja@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Trusted Partners */}
          <div>
            <h4 className="text-[#C5A059] text-eyebrow mb-6">Our Partners</h4>
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner) => (
                <div key={partner.name} className="bg-white/5 rounded-lg p-3 flex items-center justify-center hover:bg-white/10 transition-colors group">
                  <span className="text-[10px] font-bold text-white/40 group-hover:text-white/80 uppercase">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[13px] font-technical font-bold text-white tracking-[0.1em]">SRINIVASA STEEL CORPORATION</p>
            <p className="text-[10px] font-technical text-white/40 tracking-[0.2em] mt-1 uppercase">Premium Steel Distribution Since 1994</p>
          </div>
          <p className="text-[11px] font-technical text-white/40 uppercase tracking-[0.15em]">
            © {currentYear} ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
