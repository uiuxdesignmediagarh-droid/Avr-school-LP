import React, { useState } from 'react';

import fallbackTrusteeImg from '../assets/images/aisshwarya_dks_hegde_1791184189541.jpg';

export const LeadershipVision: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('https://ambervalleyschool.com/images/team/team2.jpeg');

  return (
    <section className="relative w-full bg-[#f8f9fa] text-[#131b2e] py-18 sm:py-24 px-4 sm:px-6 lg:px-12 font-p22 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Tag */}
        <div className="text-left mb-8">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#d8a752] mb-1">
            Leadership & Vision
          </p>
        </div>

        {/* Master Card Box (Exact Reference Image Design) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Portrait Photo */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[400px] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm border border-neutral-100">
                <img
                  src={imgSrc}
                  alt="Aisshwarya DKS Hegde - Executive Trustee, SVGH Education Trust"
                  onError={() => setImgSrc(fallbackTrusteeImg)}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right Column: Quote, Attribution & Core Message */}
            <div className="lg:col-span-7 text-left flex flex-col justify-center">
              
              {/* Bold Quote Heading */}
              <h2 className="font-serif-hero text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0b1d3a] tracking-tight leading-[1.22] mb-6">
                “Education is not preparation for life; education is life itself.”
              </h2>

              {/* Leader Attribution Name & Title */}
              <div className="mb-6">
                <p className="text-lg sm:text-xl font-bold text-[#7A1C28] tracking-tight font-serif-hero">
                  Aisshwarya DKS Hegde
                </p>
                <p className="text-sm text-[#737373] italic mt-0.5">
                  Executive Trustee, SVGH Education Trust
                </p>
              </div>

              {/* Vision Statement Message */}
              <p className="text-sm sm:text-[15.5px] leading-relaxed text-[#525252] font-normal">
                At Amber Valley, we believe education is about more than academic achievement. It is about helping children grow into confident, compassionate and responsible individuals, with the values and skills they need to make a meaningful difference in the world.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
