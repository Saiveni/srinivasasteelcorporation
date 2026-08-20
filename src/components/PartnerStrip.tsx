import { ScrollReveal } from "./SharedLayout";

const partners = [
  { 
    name: "Vizag Steel", 
    brand: "VIZAG STEEL", 
    tagline: "RINL",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 opacity-50">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.24l-8 4-8-4V8.76l8-4 8 4v7.48z" />
        <path d="M12 7l-5 2.5v5l5 2.5 5-2.5v-5L12 7z" />
      </svg>
    )
  },
  { 
    name: "Jindal Panther", 
    brand: "JINDAL PANTHER", 
    tagline: "TMT REBARS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 opacity-50">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" />
      </svg>
    )
  },
  { 
    name: "Simhadri TMT", 
    brand: "SIMHADRI TMT", 
    tagline: "STEEL",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 opacity-50">
        <path d="M13 2v8h8V2h-8zm6 6h-4V4h4v4zm-6 4v10h8V12h-8zm6 8h-4v-6h4v6zM2 12h8v10H2V12zm2 8h4v-6H4v6zM2 2h8v8H2V2zm2 6h4V4H4v4z" />
      </svg>
    )
  },
];

export const PartnerStrip = () => {
  return (
    <div className="w-full bg-ssc-gray-light py-20 border-y border-black/5">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-[0.4em]">
              '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            Continue from the current Srinivasa Steel Corporation homepage.

Make ONLY one change: improve the partner/brand presentation.

Do NOT change anything else on the website.

Keep these three partner names:

VIZAG STEEL — RINL

JINDAL PANTHER — TMT REBARS

SIMHADRI TMT — STEEL

Remove the current generic pill-shaped grey backgrounds.

Create a clean premium industrial partner strip using restrained typographic wordmarks.

If verified official logo assets already exist in the project, use those assets.

If official logo assets are not available, DO NOT invent or fabricate logos. Use elegant typography instead.

Design direction:

minimal

premium

B2B industrial

monochrome/steel-grey

generous spacing

subtle divider

no oversized icons

no fake logos

no colorful badges

no pill containers

Preserve the current section position, spacing and overall page structure.

Do not modify the hero, products, statistics, cards, navigation or footer.

Verify desktop and mobile before finishing.
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="group flex items-center transition-all duration-700 hover:scale-105"
              >
                <div className="flex items-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100">
                  {partner.icon}
                  <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-heading leading-none text-ssc-navy tracking-tighter">
                      {partner.brand}
                    </span>
                    <span className="text-[8px] font-technical font-black text-ssc-gold tracking-[0.2em] mt-1">
                      {partner.tagline}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
