import { createFileRoute } from "@tanstack/react-router";

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

      {/* Our Locations Section */}
      <section className="py-24 bg-white border-t border-black/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-ssc-navy mb-4 tracking-tight uppercase">
              OUR <span className="text-ssc-gold">LOCATIONS</span>
            </h2>
            <div className="w-20 h-1 bg-ssc-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Head Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F7F7F4] p-10 rounded-[32px] border border-black/5 hover:border-ssc-gold/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-ssc-navy/5 flex items-center justify-center mb-8 group-hover:bg-ssc-navy transition-colors">
                <MapPin size={24} className="text-ssc-navy group-hover:text-white" />
              </div>
              <h3 className="text-[12px] font-technical font-bold tracking-[0.2em] text-ssc-gold uppercase mb-6">HEAD OFFICE</h3>
              <p className="text-ssc-navy font-heading font-medium leading-relaxed">
                Plot No. 90,<br />
                Iron Complex,<br />
                Godown Block No. 36/3,<br />
                Bhavanipuram,<br />
                Vijayawada – 520012
              </p>
            </motion.div>

            {/* Gannavaram Yard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F7F7F4] p-10 rounded-[32px] border border-black/5 hover:border-ssc-gold/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-ssc-navy/5 flex items-center justify-center mb-8 group-hover:bg-ssc-navy transition-colors">
                <MapPin size={24} className="text-ssc-navy group-hover:text-white" />
              </div>
              <h3 className="text-[12px] font-technical font-bold tracking-[0.2em] text-ssc-gold uppercase mb-6">GANNAVARAM YARD</h3>
              <p className="text-ssc-navy font-heading font-medium leading-relaxed">
                Gannavaram Yard,<br />
                Nuzividu Road,<br />
                Gannavaram – 521101
              </p>
            </motion.div>

            {/* Vizag Branch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F7F7F4] p-10 rounded-[32px] border border-black/5 hover:border-ssc-gold/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-ssc-navy/5 flex items-center justify-center mb-8 group-hover:bg-ssc-navy transition-colors">
                <MapPin size={24} className="text-ssc-navy group-hover:text-white" />
              </div>
              <h3 className="text-[12px] font-technical font-bold tracking-[0.2em] text-ssc-gold uppercase mb-6">VIZAG BRANCH</h3>
              <p className="text-ssc-navy font-heading font-medium leading-relaxed">
                S. No. 156,<br />
                Plot No. 163A, 163B,<br />
                AIE Pedagantyada,<br />
                Vizag – 530044
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Heritage Bar */}
      <section className="py-12 bg-[#F7F7F4] border-t border-black/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12"
          >
            <div>
              <span className="text-ssc-navy font-heading font-black text-3xl uppercase tracking-tighter">30+ YEARS</span>
              <p className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest mt-1">OF INDUSTRY TRUST</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-black/10" />
            <div>
              <span className="text-ssc-navy font-heading font-black text-3xl uppercase tracking-tighter">EST. 1994</span>
              <p className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-widest mt-1">SRINIVASA STEEL CORP</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Closing Section */}
      <section className="bg-ssc-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight uppercase">
              HAVE A STEEL <span className="text-ssc-gold">REQUIREMENT?</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-12 font-light leading-relaxed">
              Tell us what you need. Our team is ready to discuss your steel, TMT or decoiling requirement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={() => window.scrollTo({ top: document.getElementById('quote-form')?.offsetTop || 500, behavior: 'smooth' })}
                className="w-full sm:w-auto h-16 bg-ssc-gold hover:bg-ssc-gold/90 text-ssc-navy font-technical font-black uppercase px-12 text-lg tracking-[0.2em] rounded-xl transition-all shadow-xl shadow-ssc-gold/10"
              >
                REQUEST A QUOTE →
              </Button>
              <a 
                href="tel:9440170453"
                className="w-full sm:w-auto h-16 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-technical font-black uppercase px-12 text-lg tracking-[0.2em] rounded-xl border border-white/20 transition-all"
              >
                CALL OUR TEAM
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer Info */}
      <section className="bg-ssc-navy border-t border-white/10 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.3em] uppercase mb-2">SRINIVASA STEEL CORPORATION</h4>
            <p className="text-white/50 text-xs">Serving industrial and construction requirements since 1994.</p>
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
