import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
import rebarDetail from '@/assets/rebar-detail.jpg.asset.json';
import rebarWarehouse from '@/assets/rebar-warehouse.jpg.asset.json';
import wireCoils from '@/assets/wire-coils.jpg';
import decoiling from '@/assets/decoiling.jpg';
import tmtRebars from '@/assets/tmt-rebars.jpg';

const businessAreas = [
  {
    index: "01",
    code: "EXP-30Y",
    title: "30+ YEARS EXPERIENCE",
    description: "A legacy of trust and excellence in the steel industry since 1994, delivering unmatched reliability across South India.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200", // Foundation rebar
















    alt: "Premium steel industrial facility representing 30 years of excellence",
    meta: [
      { label: "ESTABLISHED", value: "1994" },
      { label: "LEGACY", value: "3 DECADES" }
    ]
  },

  {
    index: "02",
    code: "TMT-550D",
    title: "STEEL & TMT SUPPLY",
    description: "Primary distributor of high-strength TMT reinforcement bars (FE-550D) for residential and commercial infrastructure.",
    image: tmtRebars,
    alt: "High-quality TMT reinforcement steel rebars supplied by Srinivasa Steel Corporation",
    meta: [
      { label: "GRADE", value: "FE-550D" },
      { label: "STANDARD", value: "IS 1786" }
    ]
  },
  {
    index: "03",
    code: "WIRE-SEC",
    title: "WIRE PRODUCTS",
    description: "Comprehensive range of industrial-grade steel wires and binding coils for precise reinforcement anchoring.",
    image: wireCoils,
    alt: "Industrial steel wire coils in a processing facility",
    meta: [
      { label: "TYPE", value: "GI / BINDING" },
      { label: "FINISH", value: "MACHINED" }
    ]
  },
  {
    index: "04",
    code: "PRC-DECOIL",
    title: "DECOILING SOLUTIONS",
    description: "Precision automated decoiling and straightening services from 2mm to 4.5mm with technical accuracy.",
    image: decoiling,
    alt: "Automated steel decoiling machine in operation",
    meta: [
      { label: "TOLERANCE", value: "+/- 0.5MM" },
      { label: "CAPACITY", value: "HIGH VOL" }
    ]
  },
  {
    index: "05",
    code: "CORP-MOU",
    title: "MOU / DEALER RELATIONS",
    description: "Authorized strategic partnerships with India's leading steel manufacturers ensuring consistent supply chains.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200", // Industrial partnership visual
    alt: "Industrial steel supply chain partnership representation",
    meta: [
      { label: "PARTNERS", value: "TOP TIER" },
      { label: "STATUS", value: "AUTHORIZED" }
    ]
  },
  {
    index: "06",
    code: "REG-NET",
    title: "REGIONAL PRESENCE",
    description: "Robust logistical network spanning Vijayawada, Gannavaram, and Vizag for efficient regional distribution.",
    image: rebarWarehouse.url,
    alt: "Industrial distribution center for steel logistics",
    meta: [
      { label: "HUBS", value: "3 MAJOR" },
      { label: "NETWORK", value: "SOUTH INDIA" }
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

const MobileCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  // Constants for carousel movement
  const totalCards = businessAreas.length;
  
  // Handle auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const scroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        // Continuous slow movement
        const newScrollLeft = scrollLeft + 0.5;
        
        if (newScrollLeft >= scrollWidth - clientWidth) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft = newScrollLeft;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handleInteraction = () => {
    setIsPaused(true);
    // Resume after 3 seconds of no interaction
    const timer = setTimeout(() => setIsPaused(false), 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="lg:hidden w-full overflow-hidden mt-10">
      <div 
        ref={containerRef}
        className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={handleInteraction}
        onScroll={(e) => {
          const scrollLeft = (e.target as HTMLDivElement).scrollLeft;
          const cardWidth = (e.target as HTMLDivElement).offsetWidth * 0.85;
          const index = Math.round(scrollLeft / cardWidth);
          setActiveIndex(index % totalCards);
        }}
      >
        {businessAreas.map((area, index) => (
          <div 
            key={area.index} 
            className="flex-shrink-0 w-[85%] snap-center"
          >
            <SpecCard area={area} index={index} />
          </div>
        ))}
      </div>

      {/* Premium Progress Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {businessAreas.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 transition-all duration-500 rounded-full ${
              activeIndex === idx 
                ? 'w-8 bg-ssc-gold' 
                : 'w-2 bg-white/10'
            }`}
          />
        ))}
      </div>
    </div>
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

      <div className="container-wide relative z-10 max-w-[1400px] mx-auto px-6 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[640px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-ssc-gold" />
              <span className="text-ssc-gold text-[10px] lg:text-[12px] font-technical font-bold tracking-[0.5em] uppercase">
                What We Supply
              </span>
            </div>
            <h2 className="text-[32px] lg:text-[56px] text-white font-heading font-extrabold tracking-tighter uppercase italic leading-[0.95] lg:leading-[0.9]">
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
            <span className="text-ssc-gold/60 text-[10px] font-technical uppercase tracking-[0.25em] font-bold">06 DIVISIONS — EST. 1994</span>
          </motion.div>
        </div>

        {/* Desktop/Tablet Specification Panel Grid (Locked) */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">


          {businessAreas.map((area, index) => (
            <SpecCard key={area.index} area={area} index={index} />
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <MobileCarousel />
      </div>
    </section>
  );
};
