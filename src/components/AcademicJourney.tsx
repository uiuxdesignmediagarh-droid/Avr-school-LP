import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import juniorImg from '../assets/images/amber_junior_school_1791180788269.jpg';
import middleImg from '../assets/images/amber_middle_school_1791180811344.jpg';
import seniorImg from '../assets/images/amber_senior_school_1791180829273.jpg';

interface StageData {
  title: string;
  badgeCode: string;
  badgeLabel: string;
  grades: string;
  summary: string;
  listHeader: string;
  points: string[];
  image: string;
}

const stages: StageData[] = [
  {
    title: 'Junior School',
    badgeCode: 'ICSE',
    badgeLabel: 'Primary Wing',
    grades: 'GRADES 1–5',
    summary: 'Curiosity & Strong Foundations',
    listHeader: 'CURRICULUM & HIGHLIGHTS',
    points: [
      'ICSE Curriculum',
      'Experiential Learning',
      'Creative & Activity-Based Learning',
    ],
    image: juniorImg,
  },
  {
    title: 'Middle School',
    badgeCode: 'CISCE',
    badgeLabel: 'Middle Wing',
    grades: 'GRADES 6–8',
    summary: 'Independence & Exploration',
    listHeader: 'CURRICULUM & HIGHLIGHTS',
    points: [
      'Strong Academic Foundation',
      'Leadership & Life Skills',
      'Science, Sports & Activities',
    ],
    image: middleImg,
  },
  {
    title: 'Senior School',
    badgeCode: 'ISC',
    badgeLabel: 'Senior Wing',
    grades: 'GRADES 9–12',
    summary: 'Academic Excellence & Future Readiness',
    listHeader: 'CURRICULUM & HIGHLIGHTS',
    points: [
      'ICSE / ISC Curriculum',
      'Harvard Entrepreneurship Program',
      'Career & Higher Education Guidance',
    ],
    image: seniorImg,
  },
];

interface AcademicJourneyProps {
  onSelectCurriculum?: (stageTitle: string) => void;
}

export const AcademicJourney: React.FC<AcademicJourneyProps> = ({ onSelectCurriculum }) => {
  const [selectedStage, setSelectedStage] = useState<StageData | null>(null);

  return (
    <section className="relative w-full bg-white text-[#131b2e] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 font-p22">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Matching Exact Reference Layout) */}
        <div className="mb-12 sm:mb-16 text-left">
          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0b1d3a] leading-[1.15]">
            The Stages of Learning
          </h2>
          
          {/* Subtle Golden Accent Underline Bar */}
          <div className="w-14 h-1 bg-[#d8a752] mt-4 mb-4 rounded-full" />

          <p className="text-base sm:text-lg text-[#525252] max-w-3xl leading-relaxed">
            A structured academic journey that helps children learn, explore and grow at every stage.
          </p>
        </div>

        {/* Cards Grid (Exact matching Reference Image layout & typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="bg-white rounded-[5px] border border-[#e5e5e5] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden text-left"
            >
              {/* Card Image (Aspect 16:10 / 4:3 with pristine crop) */}
              <div className="w-full h-60 sm:h-64 overflow-hidden bg-neutral-100 rounded-t-[5px]">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Card Content Area */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                
                <div className="space-y-4">
                  {/* Title & Affiliation Logo/Badge Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0b1d3a] tracking-tight leading-snug">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-[#737373] mt-1 font-normal">
                        {stage.grades}
                      </p>
                    </div>

                    {/* Logo/Crest Emblem Box (as seen on the right in reference image) */}
                    <div className="flex flex-col items-center justify-center px-2.5 py-1.5 rounded bg-neutral-50 border border-neutral-200/80 shrink-0">
                      <span className="font-serif-hero text-xs font-bold text-[#0b1d3a] tracking-wider uppercase">
                        {stage.badgeCode}
                      </span>
                      <span className="text-[9px] text-[#737373] tracking-tight leading-none uppercase mt-0.5">
                        {stage.badgeLabel}
                      </span>
                    </div>
                  </div>

                  {/* Stage Summary Description Paragraph */}
                  <p className="text-[15px] leading-relaxed text-[#404040] pt-1">
                    {stage.summary}
                  </p>

                  {/* Uppercase List Heading */}
                  <div className="pt-2">
                    <p className="text-[11px] font-bold tracking-[0.15em] text-[#171717] uppercase mb-3">
                      {stage.listHeader}
                    </p>

                    {/* Bullet Items with neat round bullet markers */}
                    <ul className="space-y-2.5">
                      {stage.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-[14px] leading-snug text-[#404040]">
                          <span className="text-[#0b1d3a] text-sm leading-none mt-0.5 select-none">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom View Curriculum Link */}
                <div className="pt-6 mt-6 border-t border-neutral-100">
                  <button
                    onClick={() => {
                      if (onSelectCurriculum) {
                        onSelectCurriculum(stage.title);
                      } else {
                        setSelectedStage(stage);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0b1d3a] hover:text-[#d8a752] transition-colors cursor-pointer group"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Curriculum Modal */}
      {selectedStage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 text-[#131b2e] shadow-2xl border border-neutral-200 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <div>
                <h4 className="font-serif-hero text-2xl font-bold text-[#0b1d3a]">{selectedStage.title}</h4>
                <span className="text-xs font-semibold text-[#d8a752] tracking-wider uppercase">{selectedStage.grades}</span>
              </div>
              <button
                onClick={() => setSelectedStage(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <span className="text-xs uppercase font-bold tracking-widest text-[#737373]">Focus</span>
                <p className="text-base font-semibold text-[#0b1d3a] mt-0.5">{selectedStage.summary}</p>
              </div>

              <div className="space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{selectedStage.listHeader}</span>
                {selectedStage.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-100 text-sm font-medium text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedStage(null)}
                className="w-full py-3 rounded-xl bg-[#0b1d3a] hover:bg-[#162f59] text-white font-semibold text-sm transition-all cursor-pointer"
              >
                Close Curriculum Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
