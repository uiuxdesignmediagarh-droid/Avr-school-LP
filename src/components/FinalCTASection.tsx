import React from 'react';
import studentReadingImg from '../assets/images/amber_student_reading_cutout_1791185930098.jpg';

interface FinalCTAProps {
  onBookVisit?: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onBookVisit }) => {
  return (
    <section className="relative w-full bg-[#edf3f8] text-[#13233e] py-20 sm:py-28 px-4 sm:px-6 lg:px-12 font-dmsans overflow-hidden border-t border-[#dce5ee]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Grid Pane, Botanical Leaf Graphic & Student Cutout */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Soft Blue Window Pane Grid Box Backdrop */}
            <div className="absolute w-[280px] sm:w-[360px] h-[240px] sm:h-[300px] border-2 border-[#d0dde9] bg-white/60 rounded-2xl grid grid-cols-4 grid-rows-3 divide-x-2 divide-y-2 divide-[#d0dde9] shadow-sm pointer-events-none -translate-x-2 -translate-y-2" />

            {/* Stylized Terracotta Botanical Leaf Silhouette */}
            <svg
              viewBox="0 0 120 180"
              className="absolute right-6 sm:right-10 top-0 sm:top-2 w-24 sm:w-32 h-36 sm:h-48 text-[#D97D6E]/80 pointer-events-none fill-current drop-shadow-sm z-0"
            >
              <path d="M60 170 C60 110, 60 70, 60 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M60 40 C75 25, 95 30, 95 45 C95 60, 75 60, 60 55" />
              <path d="M60 75 C45 60, 25 65, 25 80 C25 95, 45 95, 60 90" />
              <path d="M60 110 C75 95, 100 100, 100 118 C100 132, 75 130, 60 125" />
              <path d="M60 145 C45 130, 20 135, 20 150 C20 165, 45 160, 60 158" />
              <path d="M60 20 C60 5, 60 0, 60 0 C60 0, 70 10, 60 20" />
            </svg>

            {/* Student Photo Card Frame */}
            <div className="relative z-10 w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-white/80 bg-white">
              <img
                src={studentReadingImg}
                alt="Student reading at Amber Valley Residential School"
                className="w-full h-auto object-cover object-center"
              />
            </div>

          </div>

          {/* Right Column: Reference Typographic & Action Lockup */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            
            {/* Small Pre-heading Eyebrow */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#6B7C96] mb-2.5">
              Admissions Open 2027–28
            </p>

            {/* Main Headline in Kaisei Opti */}
            <h2 className="font-kaisei font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#13233e] tracking-tight leading-[1.18] mb-4">
              Give Your Child a Place to Learn, Grow & Lead
            </h2>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-[17.5px] leading-relaxed text-[#50617a] font-normal mb-8 max-w-lg">
              Take the first step towards an education that goes beyond classrooms and prepares your child for life.
            </p>

            {/* Call to Action Button */}
            <div>
              <button
                onClick={onBookVisit}
                className="inline-flex items-center justify-center bg-[#C04838] hover:bg-[#A83C2E] active:scale-95 text-white font-bold text-sm sm:text-base tracking-[0.12em] uppercase px-8 sm:px-10 py-4 rounded-lg shadow-lg shadow-[#C04838]/25 transition-all duration-200 cursor-pointer"
              >
                BOOK A CAMPUS VISIT
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
