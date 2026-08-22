import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/AboutSection";
import { AboutHero } from "@/components/AboutHero";
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const locations = [
  {
    city: "VIJAYAWADA",
    type: "HEAD OFFICE & GODOWN",
    address: "Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram, Vijayawada – 520012",
  },
  {
    city: "GANNAVARAM",
    type: "YARD",
    address: "Gannavaram Yard, Nuzividu Road, Gannavaram – 521101",
  },
  {
    city: "VIZAG",
    type: "YARD",
    address: "S. No. 156, Plot No. 163A, 163B, AIE Pedagantyada, Vizag – 530044",
  }
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Srinivasa Steel Corporation | Established 1994" },
      { name: "description", content: "Learn about Srinivasa Steel Corporation, established in 1994 and serving steel, TMT and related construction requirements." },
      { property: "og:title", content: "About Srinivasa Steel Corporation | Established 1994" },
      { property: "og:description", content: "Learn about Srinivasa Steel Corporation, established in 1994 and serving steel, TMT and related construction requirements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="pt-[80px]">
      <AboutSection />
      
      {/* Inline Locations Section */}
      <section id="locations" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/3">
              <span className="text-ssc-gold text-[11px] font-technical font-bold tracking-[0.4em] uppercase mb-4 block">
                Supply Infrastructure
              </span>
              <h2 className="text-[38px] text-ssc-navy font-heading font-medium tracking-tight uppercase mb-8">
                Our Locations
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-8">
                Strategically located across Andhra Pradesh to ensure rapid delivery and efficient material handling for all industrial and construction requirements.
              </p>
              <div className="h-[2px] w-24 bg-ssc-gold/20" />
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((loc, idx) => (
                <motion.div
                  key={loc.address}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 rounded-[24px] bg-[#F8F9FA] border border-black/5 hover:border-ssc-gold/30 hover:shadow-xl hover:shadow-ssc-navy/[0.02] transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-ssc-navy group-hover:text-white transition-colors duration-500">
                      <MapPin size={20} />
                    </div>
                    <span className="text-[9px] font-technical font-black text-ssc-gold tracking-[0.2em] uppercase">
                      {loc.type}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-heading font-bold text-ssc-navy mb-4 tracking-tight">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-ssc-navy/60 leading-relaxed font-medium">
                    {loc.address}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-technical font-bold text-ssc-navy opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 cursor-pointer">
                    VIEW ON MAP <ArrowUpRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
