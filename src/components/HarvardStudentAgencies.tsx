import React from 'react';
import { ArrowRight, Lightbulb, MessageSquare, Compass, Briefcase } from 'lucide-react';

import showcaseImg from '../assets/images/amber_harvard_showcase_1791182941090.jpg';

interface HarvardProps {
  onKnowMore?: () => void;
}

const pillars = [
  {
    icon: Lightbulb,
    title: 'Entrepreneurial Thinking',
    description: 'Understanding business, innovation and problem-solving.',
  },
  {
    icon: MessageSquare,
    title: 'Effective Communication',
    description: 'Building confidence to express ideas and communicate clearly.',
  },
  {
    icon: Compass,
    title: 'Leadership Skills',
    description: 'Learning to take initiative, collaborate and make responsible decisions.',
  },
  {
    icon: Briefcase,
    title: 'Real-World Learning',
    description: 'Applying classroom learning to practical business challenges.',
  },
];

export const HarvardStudentAgencies: React.FC<HarvardProps> = ({ onKnowMore }) => {
  return (
    <section className="relative w-full bg-white text-[#131b2e] py-18 sm:py-24 px-4 sm:px-6 lg:px-12 font-p22 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* 2-Column Split: Image on Left, UI Stack on Right (Matching Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: Large Showcase Visual */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-full min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] rounded-[28px] overflow-hidden shadow-xl bg-neutral-100 border border-neutral-200/80">
              <img
                src={showcaseImg}
                alt="Harvard Student Agencies Entrepreneurship Program"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Title, Italic Subtitle, 4 Soft Pill Card Rows, and CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Harvard Student Agencies Badge & Crest */}
            <div className="flex items-center gap-3 mb-3">
              {/* Harvard Veritas Crimson Shield SVG */}
              <svg
                viewBox="0 0 100 115"
                className="w-8 h-10 shrink-0 drop-shadow-sm"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 0C50 0 100 2 100 35C100 85 50 115 50 115C50 115 0 85 0 35C0 2 50 0 50 0Z"
                  fill="#A51C30"
                />
                <path
                  d="M50 4C50 4 96 6 96 36C96 82 50 110 50 110C50 110 4 82 4 36C4 6 50 4 50 4Z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  fill="none"
                />
                <rect x="22" y="24" width="22" height="16" rx="2" fill="#FFFFFF" />
                <rect x="56" y="24" width="22" height="16" rx="2" fill="#FFFFFF" />
                <rect x="39" y="52" width="22" height="16" rx="2" fill="#FFFFFF" />
                <text x="33" y="36" fontFamily="serif" fontSize="9" fontWeight="bold" fill="#A51C30" textAnchor="middle">VE</text>
                <text x="67" y="36" fontFamily="serif" fontSize="9" fontWeight="bold" fill="#A51C30" textAnchor="middle">RI</text>
                <text x="50" y="64" fontFamily="serif" fontSize="9" fontWeight="bold" fill="#A51C30" textAnchor="middle">TAS</text>
              </svg>

              <div>
                <span className="block font-serif-hero text-xs font-bold tracking-[0.16em] uppercase text-[#A51C30] leading-none">
                  Harvard Student Agencies
                </span>
                <span className="block text-[10px] text-[#737373] tracking-wider uppercase mt-1">
                  Global Leadership & Entrepreneurship
                </span>
              </div>
            </div>

            {/* Main Heading (Matching Reference Typography Style) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#0c2340] leading-[1.14] mb-3">
              Empowering Future Leaders with Harvard Student Agencies
            </h2>

            {/* Subtitle in Italic Format (Exact Reference match) */}
            <p className="italic text-[15px] sm:text-[16px] text-[#4a5568] leading-relaxed mb-7">
              Learning at Amber Valley goes beyond textbooks. Through its association with Harvard Student Agencies, students gain exposure to entrepreneurship and business fundamentals while developing skills they can use in the real world.
            </p>

            {/* 4 Soft Card Rows (Exact Reference Design: Warm Sand Background, Direct Line-Art Icons) */}
            <div className="space-y-4 mb-8">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-5 sm:gap-6 p-5 sm:p-5.5 rounded-[20px] bg-[#FAF5EC] hover:bg-[#F4ECE0] transition-colors"
                  >
                    {/* Direct Clean Line Icon */}
                    <Icon className="w-9 h-9 sm:w-11 sm:h-11 stroke-[1.6] text-[#0c2340] shrink-0" />

                    {/* Content */}
                    <div className="text-left">
                      <h3 className="text-base sm:text-[17.5px] font-bold text-[#0c2340] tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[14px] text-[#4a5568] mt-0.5 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button: KNOW MORE → */}
            <div>
              <button
                onClick={onKnowMore}
                className="inline-flex items-center gap-2 bg-[#A51C30] hover:bg-[#851626] active:scale-95 text-white font-bold text-sm tracking-[0.16em] uppercase px-9 py-3.5 rounded-xl shadow-md shadow-[#A51C30]/20 transition-all duration-200 cursor-pointer"
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
