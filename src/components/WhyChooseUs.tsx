import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const strengths = [
  {
    title: "30+ YEARS EXPERIENCE",
    description: "Built on a foundation of trust and industrial expertise since 1994.",
    label: "FOUNDATION-94",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200", // Foundation / Industrial yard
    alt: "Premium steel stockyard representing 30 years of excellence"
  },
  {
    title: "STEEL & TMT SUPPLY",
    description: "Comprehensive range of high-grade construction and structural steel.",
    label: "SPEC-550D",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop", // TMT Rebars
    alt: "High-quality TMT reinforcement steel rebars"
  },
  {
    title: "WIRE PRODUCTS",
    description: "Extensive inventory of high-quality industrial and construction wire.",
    label: "WIRE-SEC-01",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", // Wire coils
    alt: "Industrial steel wire coils"
  },
  {
    title: "DECOILING SOLUTIONS",
    description: "Precision engineered processing for custom industrial requirements.",
    label: "PROC-DECOIL",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Processing / Machinery
    alt: "Industrial steel processing machinery"
  },
  {
    title: "MOU / DEALER RELATIONS",
    description: "Direct supply relationships ensuring material authenticity and availability.",
    label: "PARTNER-CERT",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop", // Professional distribution
    alt: "Professional steel distribution and warehouse"
  },
  {
    title: "REGIONAL PRESENCE",
    description: "Strategically located yards in Vijayawada, Gannavaram, and Vizag.",
    label: "DIST-NETWORK",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop", // Logistics
    alt: "Steel logistics and regional distribution center"
  }
];

const StrengthCard = ({ item }: { item: typeof strengths[0] }) => (
  <div className="bg-white border border-ssc-navy/10 rounded-xl overflow-hidden shadow-premium-soft flex flex-col h-full group">
    <div className="relative h-48 sm:h-56 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ssc-navy/20 to-transparent opacity-60" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <span className="text-micro text-ssc-gold-dark mb-2">
        {item.label}
      </span>
      <h4 className="text-ssc-navy font-bold text-lg mb-3">
        {item.title}
      </h4>
      <p className="text-ssc-gray-body text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  </div>
);

export const WhyChooseUs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="why-ssc" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Structural Background Detail */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(var(--ssc-navy) 1px, transparent 1px), linear-gradient(90deg, var(--ssc-navy) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-wide relative z-10 mx-auto px-6">
        {/* Unified Heading Composition */}
        <div className="max-w-2xl mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-micro text-ssc-gold-dark mb-4 block">
              BUSINESS STRENGTHS
            </span>
            <h2 className="text-ssc-navy mb-6">
              WHY BUILD WITH <br />
              <span className="text-ssc-gold-dark">SRINIVASA STEEL?</span>
            </h2>
            <p className="text-ssc-gray-body max-w-xl text-lg">
              From premium TMT rebar to industrial decoiling, we provide the physical foundation for regional infrastructure development.
            </p>
          </motion.div>
        </div>

        {/* Desktop Grid (Locked) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {strengths.map((item) => (
            <StrengthCard key={item.title} item={item} />
          ))}
        </div>

        {/* Mobile Swipe Carousel */}
        <div className="lg:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {strengths.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <StrengthCard item={item} />
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {strengths.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-ssc-gold-dark' : 'w-2 bg-ssc-navy/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Final CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 lg:mt-32 relative bg-ssc-navy rounded-[24px] overflow-hidden shadow-premium-strong border border-white/10"
        >
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left p-10 lg:p-20">
            <div>
              <h3 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                READY TO <span className="text-ssc-gold">STRENGTHEN</span><br />
                YOUR PROJECTS?
              </h3>
              <p className="text-white/40 text-micro">
                30+ Years of Proven Industrial Quality
              </p>
            </div>
            
            <button className="whitespace-nowrap bg-ssc-gold text-ssc-navy px-12 py-5 rounded-lg font-bold text-sm uppercase hover:bg-white transition-all duration-500 shadow-premium-medium hover:scale-105 cursor-pointer">
              GET A CUSTOM QUOTE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
