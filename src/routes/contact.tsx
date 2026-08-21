import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";
import { Phone, Mail, User, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Srinivasa Steel Corporation" },
      { name: "description", content: "Contact Srinivasa Steel Corporation for TMT rebars, oil rods, and decoiling requirements. Established in 1994, serving with 30+ years of trust." },
    ],
  }),
});

const team = [
  { name: "M.S.V. Bhaskar", phone: "9440170453" },
  { name: "M.V. Ramana Kumar", phone: "9849600403" },
  { name: "M. Yeswanth", phone: "8125397453" },
];

function ContactPage() {
  const heroImageUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-ssc-navy pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImageUrl} 
            alt="Srinivasa Steel Corporation industrial yard" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ssc-navy via-ssc-navy/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.4em] uppercase mb-6 block">
              CONTACT SRINIVASA STEEL CORPORATION
            </span>
            <h1 className="text-[clamp(48px,8vw,86px)] font-heading font-extrabold text-white leading-[0.95] mb-8 tracking-tighter uppercase">
              LET'S TALK <br />
              <span className="text-ssc-gold">STEEL.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed font-light">
              Have a steel, TMT or decoiling requirement? Share your requirement with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form & Team Info */}
      <section className="py-24 bg-[#F7F7F4]">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Quote Form - Left Column (8 cols) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5"
              >
                <h2 className="text-3xl font-heading font-bold text-ssc-navy mb-10 tracking-tight uppercase">
                  REQUEST A QUOTE
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Full Name</label>
                      <Input placeholder="YOUR NAME" className="h-14 rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Company Name</label>
                      <Input placeholder="ORGANIZATION NAME" className="h-14 rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Phone Number</label>
                      <Input type="tel" placeholder="+91 00000 00000" className="h-14 rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Email Address</label>
                      <Input type="email" placeholder="EMAIL@DOMAIN.COM" className="h-14 rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Product / Requirement</label>
                      <Select>
                        <SelectTrigger className="h-14 rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy uppercase text-[12px] tracking-wide">
                          <SelectValue placeholder="SELECT PRODUCT" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-black/5">
                          <SelectItem value="tmt" className="uppercase text-[12px]">TMT Rebars</SelectItem>
                          <SelectItem value="wire" className="uppercase text-[12px]">Binding Wire</SelectItem>
                          <SelectItem value="rods" className="uppercase text-[12px]">Oil Rods</SelectItem>
                          <SelectItem value="decoiled" className="uppercase text-[12px]">Decoiled Steel</SelectItem>
                          <SelectItem value="other" className="uppercase text-[12px]">Other Steel Requirement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Quantity</label>
                      <Input placeholder="E.G. 10 TONS" className="h-14 rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Required Length / Size</label>
                      <Input placeholder="SPECIFICATIONS" className="h-14 rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Delivery Location</label>
                      <Input placeholder="CITY / YARD" className="h-14 rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest ml-1">Message</label>
                    <Textarea 
                      placeholder="TELL US ABOUT YOUR PROJECT REQUIREMENTS..." 
                      className="min-h-[150px] rounded-xl border-black/5 bg-[#F8F9FA] focus:bg-white transition-all text-ssc-navy resize-none"
                    />
                  </div>

                  <Button className="w-full h-16 bg-ssc-navy hover:bg-ssc-navy/90 text-white font-technical font-black uppercase text-lg tracking-[0.2em] rounded-xl shadow-xl shadow-ssc-navy/10 transition-all flex items-center justify-center gap-3">
                    REQUEST QUOTE <ArrowRight size={20} className="text-ssc-gold" />
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Contact Team & Info - Right Column (5 cols) */}
            <div className="lg:col-span-5 space-y-12">
              {/* Contact Our Team */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[12px] font-technical font-bold tracking-[0.4em] text-ssc-gold uppercase mb-8">
                  CONTACT OUR TEAM
                </h3>
                <div className="space-y-6">
                  {team.map((person) => (
                    <div key={person.phone} className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-black/5 hover:border-ssc-gold/30 transition-all group">
                      <div className="w-12 h-12 rounded-full bg-ssc-navy/5 flex items-center justify-center group-hover:bg-ssc-navy transition-colors">
                        <User size={20} className="text-ssc-navy group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-technical font-bold text-ssc-navy uppercase tracking-tight">{person.name}</p>
                        <a href={`tel:${person.phone}`} className="text-lg font-heading font-medium text-ssc-navy hover:text-ssc-gold transition-colors">
                          {person.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-black/5 hover:border-ssc-gold/30 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-ssc-navy/5 flex items-center justify-center group-hover:bg-ssc-navy transition-colors">
                      <Mail size={20} className="text-ssc-navy group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-technical font-bold text-ssc-navy uppercase tracking-tight">Email Inquiries</p>
                      <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-base font-heading font-medium text-ssc-navy hover:text-ssc-gold transition-colors break-all">
                        srinivasasteelcorporationvja@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Business Requirements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-ssc-navy p-10 rounded-[32px] text-white"
              >
                <h3 className="text-xl font-heading font-bold mb-8 uppercase tracking-tight">Requirement Scope</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.2em] uppercase mb-4">TMT REBARS</h4>
                    <ul className="grid grid-cols-2 gap-3 text-sm text-white/70">
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> 5 mm</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> 5.5 mm</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> 5.5 mm TMT</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> 6 mm TMT</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.2em] uppercase mb-4">DECOILING</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Custom cutting and straightening for applicable steel sizes and lengths.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.2em] uppercase mb-4">OTHER PRODUCTS</h4>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> Binding wire</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> Oil rods</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-ssc-gold" /> Other steel requirements</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Direct Loads */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-5 p-8 bg-ssc-gold/10 rounded-2xl border border-ssc-gold/20"
              >
                <MapPin size={24} className="text-ssc-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-ssc-navy font-heading font-bold text-sm uppercase tracking-tight mb-2">Direct Loads Available</h4>
                  <p className="text-ssc-navy/70 text-sm leading-relaxed">
                    Direct loads available for Raipur, Vizag, Gannavaram and Orissa.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 border-t border-black/5 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold text-ssc-navy mb-6 tracking-tight uppercase">
              30+ YEARS OF <span className="text-ssc-gold">TRUST.</span>
            </h2>
            <p className="text-ssc-navy/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Serving steel and TMT requirements since 1994.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA / Address */}
      <section className="bg-ssc-navy py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.3em] uppercase mb-2">HEAD OFFICE</h4>
            <p className="text-white text-sm">Plot No. 90, Iron Complex, Bhavanipuram, Vijayawada – 520012</p>
          </div>
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white/5 hover:bg-white/10 text-white font-technical font-bold uppercase text-[10px] tracking-widest px-8 h-12 rounded-full border border-white/10 transition-all"
          >
            BACK TO TOP ↑
          </Button>
        </div>
      </section>
    </div>
  );
}
