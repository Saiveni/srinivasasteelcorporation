import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight, ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

// Business-accurate assets from src/assets/
const assets = {
  rebarCoils: "/__l5e/assets-v1/9ef7dec9-abc6-4ce5-9c16-6a23ce6690a0/rebar-coils.jpg",
  rebarDetail: "/__l5e/assets-v1/78d0b873-517d-4e9e-94e3-16a1777f3314/rebar-detail.jpg",
  rebarStraight: "/__l5e/assets-v1/101bdc6a-039b-4ee6-a74f-e5066ea1b13f/rebar-straight.jpg",
  rebarWarehouse: "/__l5e/assets-v1/a0858a50-e67d-4b6f-8d47-99f99d27c286/rebar-warehouse.jpg",
  // Fallbacks for variety using specific Unsplash steel imagery that meets the "Steel visible" rule
  steelCoils: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
  steelStock: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
  steelLoading: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  wireProducts: "https://images.unsplash.com/photo-1530982011887-3cc11bb8641a?q=80&w=1200&auto=format&fit=crop",
};

const galleryItems = [
  {
    id: 1,
    category: "TMT REBARS",
    image: assets.rebarStraight,
    title: "Straight Length TMT Rebars",
    size: "large", // Feature image
  },
  {
    id: 2,
    category: "WIRE PRODUCTS",
    image: assets.wireProducts,
    title: "Binding Wire Coils",
    size: "medium",
  },
  {
    id: 3,
    category: "TMT REBARS",
    image: assets.rebarDetail,
    title: "Ribbed Reinforcement Detail",
    size: "tall",
  },
  {
    id: 4,
    category: "DECOILING",
    image: assets.steelCoils,
    title: "Steel Coil Processing",
    size: "wide",
  },
  {
    id: 5,
    category: "STOCK & YARD",
    image: assets.rebarWarehouse,
    title: "Organized Steel Warehouse",
    size: "medium",
  },
  {
    id: 6,
    category: "STEEL PRODUCTS",
    image: assets.steelStock,
    title: "Industrial Steel Rods",
    size: "medium",
  },
  {
    id: 7,
    category: "TMT REBARS",
    image: assets.rebarCoils,
    title: "Bundled Reinforcement Steel",
    size: "wide",
  },
  {
    id: 8,
    category: "STOCK & YARD",
    image: assets.steelLoading,
    title: "Supply Operations & Loading",
    size: "tall",
  }
];

const categories = ["ALL", "TMT REBARS", "STEEL PRODUCTS", "WIRE PRODUCTS", "DECOILING", "STOCK & YARD"];

export const SteelGallery = () => {
  const [filter, setFilter] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = filter === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const currentItem = selectedImage !== null 
    ? galleryItems.find(item => item.id === selectedImage) 
    : null;

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex < 0) nextIndex = galleryItems.length - 1;
    if (nextIndex >= galleryItems.length) nextIndex = 0;
    
    const nextItem = galleryItems[nextIndex];
    if (nextItem) {
      setSelectedImage(nextItem.id);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F4F6F8]">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-ssc-gold text-[12px] font-technical font-bold tracking-[0.4em] uppercase mb-6 block">
                OUR GALLERY
              </span>
              <h1 className="text-[56px] lg:text-[72px] font-heading leading-[1] font-medium tracking-tight uppercase mb-8 text-ssc-navy">
                STEEL.<br />
                IN ITS ELEMENT.
              </h1>
              <p className="text-ssc-navy/60 text-lg max-w-md">
                A closer look at our products, steel stock and processing capabilities.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] rounded-[32px] overflow-hidden shadow-2xl">
              <img 
                src={assets.rebarWarehouse} 
                alt="Srinivasa Steel Stock"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1280px]">
          <div className="mb-12">
             <p className="text-[15px] text-ssc-navy/60 font-technical uppercase tracking-widest border-l-2 border-ssc-gold pl-6 py-1 italic max-w-2xl">
              "From reinforcement steel to decoiling and stock handling, every image reflects the materials and capabilities behind Srinivasa Steel Corporation."
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mb-16 border-b border-black/5 pb-6 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[11px] font-technical font-bold tracking-[0.2em] uppercase transition-all duration-300 relative py-2 whitespace-nowrap ${
                  filter === cat ? "text-ssc-navy" : "text-ssc-navy/40 hover:text-ssc-navy/70"
                }`}
              >
                {cat}
                {filter === cat && (
                  <motion.div 
                    layoutId="filter-accent"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-ssc-gold"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[200px]">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedImage(item.id)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500
                    ${item.size === 'large' ? 'lg:col-span-8 lg:row-span-2' : ''}
                    ${item.size === 'medium' ? 'lg:col-span-4 lg:row-span-2' : ''}
                    ${item.size === 'tall' ? 'lg:col-span-4 lg:row-span-3' : ''}
                    ${item.size === 'wide' ? 'lg:col-span-8 lg:row-span-2' : ''}
                  `}
                >
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[500ms] group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full bg-ssc-navy/5 flex items-center justify-center">
                      <ImageIcon className="text-ssc-navy/20" size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-ssc-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-ssc-gold text-[9px] font-technical font-bold tracking-[0.3em] uppercase mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-lg font-heading font-medium tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ssc-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ssc-gold/[0.05] to-transparent" />
        <div className="container mx-auto px-6 max-w-[1280px] relative z-10 text-center">
          <h2 className="text-[32px] lg:text-[48px] font-heading font-medium tracking-tight text-white uppercase mb-6">
            LOOKING FOR STEEL FOR YOUR <br />NEXT REQUIREMENT?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 font-technical tracking-wide">
            Talk to Srinivasa Steel Corporation about TMT, steel products and decoiling requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              asChild
              className="h-[64px] px-10 bg-ssc-gold hover:bg-ssc-gold/90 text-ssc-navy rounded-xl font-technical font-black uppercase tracking-widest transition-all hover:scale-105"
            >
              <a href="#contact">GET A QUOTE <ArrowRight className="ml-2" size={18} /></a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="h-[64px] px-10 border-white/20 text-white hover:bg-white/10 rounded-xl font-technical font-bold uppercase tracking-widest"
            >
              <Link to="/products">VIEW PRODUCTS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-ssc-gold transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-ssc-gold transition-colors z-[110]"
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-ssc-gold transition-colors z-[110]"
            >
              <ChevronRight size={48} />
            </button>

            <div className="relative max-w-6xl w-full flex flex-col items-center">
              <motion.img 
                key={currentItem.image}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={currentItem.image} 
                alt={currentItem.title}
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-8 text-center">
                <span className="text-ssc-gold text-[10px] font-technical font-bold tracking-[0.4em] uppercase mb-2 block">
                  {currentItem.category}
                </span>
                <h3 className="text-white text-2xl font-heading font-medium tracking-tight">
                  {currentItem.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
