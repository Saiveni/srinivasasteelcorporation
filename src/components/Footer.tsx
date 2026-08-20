import { Link } from "@tanstack/react-router";
import sscLogo from "@/assets/ssc-logo.png.asset.json";
import { FacebookIcon, TwitterIcon, LinkedinIcon, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const partners = [
    { name: "Vizag Steel", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Rashtriya_Ispat_Nigam_Logo.svg/1200px-Rashtriya_Ispat_Nigam_Logo.svg.png" },
    { name: "Jindal Panther", logo: "https://www.jindalpanther.com/images/jindal-panther-logo.png" },
    { name: "Simhadri TMT", logo: "https://simhadritmt.com/wp-content/uploads/2021/05/simhadri-logo.png" },
  ];

  return (
    <footer className="bg-ssc-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={sscLogo.url} alt="SSC Logo" className="h-14 w-14 brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tighter leading-none">SRINIVASA</span>
                <span className="text-sm font-bold tracking-[0.2em] text-ssc-gold leading-none">STEEL CORP</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Building the nation's foundation since 1994. Premium TMT steel and industrial supply solutions for enterprise-grade infrastructure.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ssc-gold transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ssc-gold font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-ssc-gold font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <MapPin className="text-ssc-gold shrink-0" size={20} />
                <span className="text-sm">Main Industrial Area, Hyderabad, Telangana, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-ssc-gold shrink-0" size={20} />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-ssc-gold shrink-0" size={20} />
                <span className="text-sm">info@srinivasasteel.com</span>
              </li>
            </ul>
          </div>

          {/* Trusted Partners */}
          <div>
            <h4 className="text-ssc-gold font-bold uppercase tracking-widest text-sm mb-6">Our Partners</h4>
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner) => (
                <div key={partner.name} className="bg-white/5 rounded-lg p-3 flex items-center justify-center hover:bg-white/10 transition-colors group">
                  <span className="text-[10px] font-bold text-white/40 group-hover:text-white/80 uppercase">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
          <p>© {currentYear} SRINIVASA STEEL CORPORATION. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ssc-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ssc-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
