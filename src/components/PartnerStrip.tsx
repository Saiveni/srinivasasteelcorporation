import { ScrollReveal } from "./SharedLayout";

const partners = [
  { name: "Vizag Steel", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Rashtriya_Ispat_Nigam_Logo.svg/1200px-Rashtriya_Ispat_Nigam_Logo.svg.png" },
  { name: "Jindal Panther", logo: "https://www.jindalpanther.com/images/jindal-panther-logo.png" },
  { name: "Simhadri TMT", logo: "https://simhadritmt.com/wp-content/uploads/2021/05/simhadri-logo.png" },
];

export const PartnerStrip = () => {
  return (
    <div className="w-full bg-ssc-gray-light py-16 border-y border-black/5">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-[10px] font-technical font-bold text-ssc-navy/40 uppercase tracking-[0.3em]">
              Trusted By / Authorized Dealer For
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            {partners.map((partner) => (
              <div 
                key={partner.name} 
                className="group relative grayscale hover:grayscale-0 transition-all duration-500 flex flex-col items-center"
              >
                <div className="h-12 md:h-16 flex items-center justify-center">
                  {/* Since external logos can be unpredictable, using stylized text as backup/overlay if img fails or for premium look */}
                  <span className="text-lg md:text-xl font-heading text-ssc-navy/60 group-hover:text-ssc-navy transition-colors">
                    {partner.name}
                  </span>
                </div>
                <div className="absolute -bottom-2 w-0 h-[2px] bg-ssc-gold group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
