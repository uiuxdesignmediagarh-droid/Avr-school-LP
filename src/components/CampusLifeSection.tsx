import React from 'react';

import polaroidCampusImg from '../assets/images/amber_polaroid_campus_1791183387928.jpg';

interface CampusLifeProps {
  onExploreCampus?: () => void;
}

export const CampusLifeSection: React.FC<CampusLifeProps> = () => {
  return (
    <section className="relative w-full bg-[#E8DCcb] text-[#231614] py-20 sm:py-28 px-4 sm:px-6 lg:px-12 font-p22 overflow-hidden border-t border-[#D9CAAF]">
      
      {/* Wood Texture / Warm Surface Grain Overlay Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(180, 150, 120, 0.08) 0px,
            rgba(180, 150, 120, 0.08) 1px,
            transparent 1px,
            transparent 4px
          ), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, rgba(210,190,165,0.2) 100%)`
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* 2-Column Layout matching the Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Tilted Polaroid Frame with Realistic Paper Shadow */}
          <div className="md:col-span-6 flex justify-center md:justify-end">
            <div className="relative transform -rotate-3 sm:-rotate-4 hover:rotate-0 transition-transform duration-500 ease-out bg-white p-3.5 sm:p-4 pb-12 sm:pb-14 shadow-[0_20px_45px_rgba(40,25,15,0.22)] rounded-[2px] max-w-md w-full border border-neutral-100">
              
              {/* Photo Viewport */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={polaroidCampusImg}
                  alt="Amber Valley Residential School Campus Life"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Polaroid Bottom Subtle Caption Note */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] tracking-wider text-neutral-400 uppercase font-mono">
                <span>AVRS CAMPUS</span>
                <span>CHIKMAGALUR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reference Typographic Lockup */}
          <div className="md:col-span-6 text-left flex flex-col justify-center">
            
            {/* Cursive Handwriting Header (Campus life at) */}
            <p className="font-serif italic text-3xl sm:text-4xl lg:text-[46px] text-[#8E4A1E] font-normal leading-tight tracking-normal mb-1">
              Campus life at
            </p>

            {/* Giant Condensed Bold Headline */}
            <h2 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[62px] text-[#221411] tracking-tight uppercase leading-[0.95] mb-3">
              AMBER VALLEY
            </h2>

            {/* Uppercase Subtitle */}
            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#3D251F] mb-4">
              More Than a Campus. A Place to Belong.
            </p>

            {/* Fine Accent Line */}
            <div className="w-16 h-0.5 bg-[#8E4A1E]/40 mb-5" />

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-[#473029] leading-relaxed max-w-lg font-normal">
              From sports and creative pursuits to friendships, celebrations and everyday residential life, Amber Valley gives students the space to learn, explore, connect and grow.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
