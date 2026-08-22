import React from 'react';
import { motion } from 'framer-motion';
import rebarDetail from '@/assets/rebar-detail.jpg.asset.json';
import rebarWarehouse from '@/assets/rebar-warehouse.jpg.asset.json';
import wireCoils from '@/assets/wire-coils.jpg';
import decoiling from '@/assets/decoiling.jpg';

const businessAreas = [
  {
    index: "01",
    code: "TMT-550D",
    title: "TMT / REINFORCEMENT STEEL",
    description: "High-strength ribbed TMT reinforcement bars for structural construction, supplied in 5mm, 5.5mm and 6mm specifications.",
    image: rebarDetail.url,
    alt: "Close-up of ribbed TMT reinforcement steel bars supplied by Srinivasa Steel Corporation",
    meta: [
      { label: "SPEC", value: "FE-550D" },
      { label: "SIZES", value: "5–6 MM" }
    ]
  },
  {
    index: "02",
    code: "WIRE-SEC",
    title: "WIRE PRODUCTS",
    description: "Industrial-grade steel wire and binding wire coils engineered for precise reinforcement anchoring on site.",
    image: wireCoils,
    alt: "Tightly wound industrial steel wire coils in a steel processing facility",
    meta: [
      { label: "FORM", value: "COILS" },
      { label: "GRADE", value: "INDUSTRIAL" }
    ]
  },
  {
    index: "03",
    code: "PRC-DECOIL",
    title: "DECOILING",
    description: "Precision decoiling, straightening and cut-to-length processing from 2mm to 4.5mm, in lengths of 10 to 40 feet.",
    image: decoiling,
    alt: "Steel decoiling machine processing a large rolled steel coil",
    meta: [
      { label: "RANGE", value: "2–4.5 MM" },
      { label: "LENGTH", value: "10–40 FT" }
    ]
  },
  {
    index: "04",
    code: "DIST-NET",
    title: "STEEL SUPPLY",
    description: "Bulk industrial steel stock with timely supply from strategically located yards in Vijayawada, Gannavaram and Vizag.",
    image: rebarWarehouse.url,
    alt: "Industrial steel warehouse with stacked reinforcement bar inventory",
    meta: [
      { label: "YARDS", value: "3 LOCATIONS" },
      { label: "SINCE", value: "1994" }
    ]
  }
];

const SpecCard = ({ area, index }: { area: typeof businessAreas[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Specification Panel Surface */}
      <div className="relative h-full bg-[#0C121E] rounded-[20px] border border-white/[0.06] overflow-hidden flex flex-col shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-ssc-gold/30 group-hover:shadow-[0_30px_60px_-15px_rgba(197,160,89,0.12)]">

        {/* Brushed Metal Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none z-10" />

        {/* Image Area */}
        <div className="relative h-[220px] lg:h-[240px] overflow-hidden">
          <img
            src={area.image}
            alt={area.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C121E] via-transparent to-transparent" />

          {/* Index Chip */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#050A14]/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 group-hover:border-ssc-gold/40 transition-colors duration-500">
            <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.3em]">
              {area.index}
            </span>
          </div>

          {/* Technical Code */}
          <div className="absolute top-4 right-4">
            <span className="text-white/40 text-[8px] font-technical font-bold tracking-[0.3em] uppercase group-hover:text-ssc-gold/70 transition-colors duration-500">
              {area.code}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-20 flex-1 flex flex-col p-6 lg:p-7 pt-2">
          <h3 className="text-white font-heading font-extrabold text-[16px] lg:text-[17px] uppercase tracking-[0.04em] italic leading-tight mb-3 group-hover:text-ssc-gold transition-colors duration-500">
            {area.title}
          </h3>

          <p className="text-white/45 text-[12.5px] leading-relaxed font-medium mb-6 flex-1">
            {area.description}
          </p>

          {/* Industrial Metadata Row */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06]">
            {area.meta.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-white/25 text-[8px] font-technical font-bold tracking-[0.3em] uppercase">
                  {m.label}
                </span>
                <span className="text-ssc-gold/80 text-[10px] font-technical font-bold tracking-[0.15em] uppercase mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Accent Hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ssc-gold/0 to-transparent group-hover:via-ssc-gold/60 transition-all duration-700" />
      </div>
    </motion.div>
  );
};

export const AboutBusinessCards = () => {
  return (
    <section id="business-areas" className="relative py-20 lg:py-28 bg-[#080E1A] overflow-hidden">
      {/* Engineered Background System */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ssc-gold/20 to-transparent" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-ssc-gold/[0.04] blur-[120px]" />
      </div>

      <div className="container-wide relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[640px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-ssc-gold" />
              <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                What We Supply
              </span>
            </div>
            <h2 className="text-[36px] lg:text-[56px] text-white font-heading font-extrabold tracking-tighter uppercase italic leading-[0.9]">
              BUILT FOR EVERY <span className="text-ssc-gold">STRUCTURE.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col items-end text-right border-l border-white/10 pl-8"
          >
            <span className="text-white/30 text-[10px] font-technical uppercase tracking-[0.25em] mb-2">SSC / BUSINESS AREAS</span>
            <span className="text-ssc-gold/60 text-[10px] font-technical uppercase tracking-[0.25em] font-bold">04 DIVISIONS — EST. 1994</span>
          </motion.div>
        </div>

        {/* Specification Panel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {businessAreas.map((area, index) => (
            <SpecCard key={area.index} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
