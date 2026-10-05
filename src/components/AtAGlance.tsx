import React from 'react';

import topCollabImg from '../assets/images/amber_glance_collab_1791182177483.jpg';
import chessImg from '../assets/images/amber_glance_chess_1791182192301.jpg';
import sprintImg from '../assets/images/amber_glance_sprint_1791182209428.jpg';

interface MetricItem {
  value: string;
  label: string;
}

const metrics: MetricItem[] = [
  {
    value: '45+ Acres',
    label: 'Green Campus',
  },
  {
    value: '10:1',
    label: 'Student–Faculty Ratio',
  },
  {
    value: '20+ Years',
    label: 'Educational Journey',
  },
  {
    value: 'ICSE / ISC',
    label: 'Curriculum',
  },
  {
    value: 'Harvard',
    label: 'Entrepreneurship Certification',
  },
  {
    value: 'Residential',
    label: 'Learning & Living Experience',
  },
];

export const AtAGlance: React.FC = () => {
  return (
    <section className="relative w-full bg-[#f8f9fa] text-[#131b2e] py-18 sm:py-24 px-4 sm:px-6 lg:px-12 font-p22 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric 2-Column Split Matching Reference Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle & Numbers Grid */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#d8a752] mb-3">
              Amber Valley at a Glance
            </p>

            {/* Main Heading */}
            <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0b1d3a] leading-[1.18] mb-4">
              Built on Values. Growing with Possibilities.
            </h2>

            {/* Subtle Gold Accent Underline */}
            <div className="w-14 h-1 bg-[#d8a752] mb-5 rounded-full" />

            {/* Description Subtitle */}
            <p className="text-base sm:text-lg text-[#525252] leading-relaxed mb-8 max-w-xl">
              Every number reflects the space, support and experiences that shape life at Amber Valley.
            </p>

            {/* Divider Line */}
            <div className="w-full border-t border-neutral-300/80 mb-8" />

            {/* Metrics Grid (2 columns matching reference design) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-9">
              {metrics.map((item) => (
                <div key={item.label} className="flex flex-col text-left">
                  <span className="font-serif-hero text-2xl sm:text-3xl font-bold text-[#0b1d3a] tracking-tight leading-tight">
                    {item.value}
                  </span>
                  <span className="text-sm text-[#737373] mt-1 font-normal leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3-Image Photography Collage (Exact Reference Architecture) */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
            
            {/* Top Large Full-Width Image */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md bg-neutral-100 border border-neutral-200/70 group">
              <img
                src={topCollabImg}
                alt="Amber Valley Collaborative Science Art Project"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>

            {/* Bottom Two Side-by-Side Images */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              
              {/* Bottom Left Image (Chess / Indoor Academic Activity) */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md bg-neutral-100 border border-neutral-200/70 group">
                <img
                  src={chessImg}
                  alt="Amber Valley Chess Strategy Tournament"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Right Image (Athletics / Sports Sprint) */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md bg-neutral-100 border border-neutral-200/70 group">
                <img
                  src={sprintImg}
                  alt="Amber Valley Student Athletics Sprint Race"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
