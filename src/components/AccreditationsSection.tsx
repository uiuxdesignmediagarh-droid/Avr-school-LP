import React from 'react';
import { Leaf, Award, ShieldCheck, Globe, Sparkles } from 'lucide-react';

interface RecognitionItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const recognitions: RecognitionItem[] = [
  {
    id: 'greening-partnership',
    badge: 'Global Sustainability Initiative',
    title: 'Greening Education Partnership',
    description: 'Committed to creating a more sustainable, climate-conscious learning environment.',
    icon: Leaf,
    accentColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'national-rank',
    badge: 'National Distinction',
    title: '8th Rank — National Green School Ranking',
    description: 'Recognised among leading green schools for its focus on environmental responsibility and sustainable campus practices.',
    icon: Award,
    accentColor: 'from-amber-600 to-amber-700',
  },
];

export const AccreditationsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF7F2] text-[#131b2e] py-18 sm:py-24 px-4 sm:px-6 lg:px-12 font-p22 border-t border-[#E8DFC8]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#d8a752] mb-2">
            Accreditations & Recognition
          </p>

          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0b1d3a] leading-[1.18] max-w-3xl">
            Recognised for Responsible Education & a Greener Future
          </h2>

          <div className="w-14 h-1 bg-[#d8a752] mt-4 mb-2 rounded-full" />
        </div>

        {/* 2-Column Recognition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {recognitions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DFC8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1"
              >
                <div>
                  {/* Top Badge & Icon Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#FAF5EC] border border-[#E8DFC8] text-[#8E4A1E]">
                      <Sparkles className="w-3 h-3 text-[#E58B20]" />
                      {item.badge}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 text-[#0b1d3a] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#E58B20]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-hero text-2xl sm:text-[26px] font-bold text-[#0b1d3a] tracking-tight leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-[16.5px] leading-relaxed text-[#525252] font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Trust Seal Strip */}
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-medium text-[#737373]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Environmental Benchmark • Amber Valley</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
