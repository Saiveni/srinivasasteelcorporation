import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const contacts = [
  { name: "M.S.V. Bhaskar", phone: "9440170453" },
  { name: "M.V. Ramana Kumar", phone: "9849600403" },
  { name: "M.V.N.M. Yeshwanth", phone: "8125397453" }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-ssc-navy text-white relative overflow-hidden">
      {/* Decorative Technical Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ssc-gold/[0.03] to-transparent" />
      <div className="absolute top-10 right-10 flex gap-2">
        <div className="w-1 h-1 rounded-full bg-ssc-gold/20" />
        <div className="w-1 h-1 rounded-full bg-ssc-gold/20" />
        <div className="w-1 h-1 rounded-full bg-ssc-gold/20" />
      </div>

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.4em] uppercase mb-6 block">
              Inquiry Management
            </span>
            <h2 className="text-[48px] lg:text-[64px] font-heading leading-[1] font-medium tracking-tight uppercase mb-8">
              Let's Talk <br />
              <span className="text-ssc-gold">Steel</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md mb-12">
              Tell us what steel products or processing support you need. Our team will provide precise technical specifications and competitive quoting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-[10px] font-technical font-bold tracking-widest uppercase text-white/40">Direct Contacts</h4>
                {contacts.map((contact) => (
                  <div key={contact.phone} className="group">
                    <div className="flex items-center gap-4 mb-1">
                      <User size={16} className="text-ssc-gold" />
                      <span className="text-sm font-bold tracking-tight">{contact.name}</span>
                    </div>
                    <div className="flex items-center gap-4 pl-8">
                      <Phone size={14} className="text-white/20" />
                      <a href={`tel:${contact.phone}`} className="text-ssc-gold font-technical text-sm hover:underline">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h4 className="text-[10px] font-technical font-bold tracking-widest uppercase text-white/40">Electronic Mail</h4>
                <div className="flex items-start gap-4">
                  <Mail size={16} className="text-ssc-gold mt-1" />
                  <div>
                    <span className="text-sm font-bold tracking-tight block mb-1">General Inquiries</span>
                    <a href="mailto:srinivasasteelcorporationvja@gmail.com" className="text-ssc-gold font-technical text-sm hover:underline break-all">
                      srinivasasteelcorporationvja@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick CTA Card */}
          <div className="w-full lg:w-1/2 flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full bg-white/5 backdrop-blur-xl rounded-[32px] p-10 border border-white/10"
            >
              <h3 className="text-2xl font-heading font-medium mb-8">Request Material Quote</h3>
              <div className="space-y-6 mb-10">
                <div className="h-[60px] bg-white/[0.03] rounded-xl border border-white/10 flex items-center px-6 text-white/40 text-sm font-technical uppercase tracking-widest">
                  Name / Organization
                </div>
                <div className="h-[60px] bg-white/[0.03] rounded-xl border border-white/10 flex items-center px-6 text-white/40 text-sm font-technical uppercase tracking-widest">
                  Product Category
                </div>
                <div className="h-[120px] bg-white/[0.03] rounded-xl border border-white/10 flex items-start p-6 text-white/40 text-sm font-technical uppercase tracking-widest">
                  Requirement Details
                </div>
              </div>
              <Button className="w-full h-[70px] bg-ssc-gold hover:bg-ssc-gold/90 text-ssc-navy rounded-2xl font-technical font-black uppercase text-lg tracking-widest shadow-2xl shadow-ssc-gold/20">
                Get A Quote <ArrowRight className="ml-3" size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};