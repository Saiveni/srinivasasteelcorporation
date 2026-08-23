import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      className="group relative h-full"
    >
      {/* Specification Panel Surface */}
      <div className="relative h-full bg-ssc-steel-dark rounded-[14px] border border-white/10 overflow-hidden flex flex-col shadow-premium-soft transition-all duration-300 lg:group-hover:-translate-y-2 lg:group-hover:border-primary/30 lg:group-hover:shadow-premium-medium transform-gpu">

        {/* Brushed Metal Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none z-10" />

        {/* Image Area */}
        <div className="relative h-[220px] lg:h-[240px] overflow-hidden">
          <img
            src={area.image}
            alt={area.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F26] via-transparent to-transparent" />

          {/* Index Chip */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0B1320]/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 lg:group-hover:border-ssc-gold/40 transition-colors duration-500">
            <span className="text-primary text-micro">
              {area.index}
            </span>
          </div>

          {/* Technical Code */}
          <div className="absolute top-4 right-4">
            <span className="text-white/40 text-micro lg:group-hover:text-primary/70 transition-colors duration-500">
              {area.code}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-20 flex-1 flex flex-col p-6 lg:p-7 pt-2">
          <h3 className="text-h4 text-white mb-3 lg:group-hover:text-primary transition-colors duration-500 uppercase">
            {area.title}
          </h3>

          <p className="text-body text-white/60 flex-1">
            {area.description}
          </p>

          {/* Industrial Metadata Row */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/10">
            {area.meta.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-white/25 text-micro">
                  {m.label}
                </span>
                <span className="text-primary/80 text-small font-semibold uppercase mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Accent Hairline */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent lg:group-hover:via-primary/60 transition-all duration-700" />
      </div>
    </motion.div>
  );
};

const MobileCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = businessAreas.length;

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const gap = 16; // 4 * 4 (gap-4)
      const targetScroll = index * (cardWidth + gap);
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, activeIndex - 1);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(totalCards - 1, activeIndex + 1);
    scrollToIndex(nextIndex);
  };

  const onScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, offsetWidth } = containerRef.current;
      const cardWidth = offsetWidth * 0.85;
      const gap = 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      if (index !== activeIndex && index >= 0 && index < totalCards) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <div className="lg:hidden w-full overflow-hidden mt-10">
      <div 
        ref={containerRef}
        onScroll={onScroll}
        className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
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

      {/* Navigation Controls */}
      <div className="flex flex-col items-center gap-6 mt-10">
        {/* Indicators */}
        <div className="flex justify-center items-center gap-2">
          {businessAreas.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 transition-all duration-500 rounded-full ${
                activeIndex === idx 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>

        {/* Premium Industrial Arrows */}
        <div className="flex items-center gap-12">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-ssc-steel-dark shadow-premium-medium transition-all active:scale-95 ${
              activeIndex === 0 ? 'opacity-30' : 'active:border-primary/50'
            }`}
            aria-label="Previous card"
          >
            <ChevronLeft className={`w-6 h-6 ${activeIndex === 0 ? 'text-white/20' : 'text-primary'}`} />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === totalCards - 1}
            className={`w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-ssc-steel-dark shadow-premium-medium transition-all active:scale-95 ${
              activeIndex === totalCards - 1 ? 'opacity-30' : 'active:border-primary/50'
            }`}
            aria-label="Next card"
          >
            <ChevronRight className={`w-6 h-6 ${activeIndex === totalCards - 1 ? 'text-white/20' : 'text-primary'}`} />
          </button>
        </div>
      </div>
      
      {/* Technical Data End */}
      <div className="mt-8 px-6 pb-2 opacity-[0.05] border-t border-white/10 pt-4 mb-2">
        <div className="w-8 h-[1px] bg-white mb-2" />
        <span className="text-micro text-white">END-SYS-OUTPUT</span>
      </div>
    </div>
  );
};

export const AboutBusinessCards = () => {
  return (
    <section id="business-areas" className="relative py-12 lg:py-28 bg-background overflow-hidden">
      {/* Engineered Background System */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary/[0.04] blur-[120px]" />
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
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-primary text-micro uppercase">
                DISCOVER OUR CAPABILITIES
              </span>
            </div>
            <h2 className="text-h2 text-white mb-8 uppercase">
              ENGINEERED <span className="text-primary">STEEL</span> SOLUTIONS.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col items-end text-right border-l border-white/10 pl-8"
          >
            <span className="text-white/30 text-micro mb-2">SSC / BUSINESS AREAS</span>
            <span className="text-primary/60 text-micro font-bold">06 DIVISIONS — EST. 1994</span>
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
