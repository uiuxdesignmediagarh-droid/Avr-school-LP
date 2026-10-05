import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, ArrowRight } from 'lucide-react';

import sportsImg from '../assets/images/amber_sports_fitness_1791181242711.jpg';
import artsImg from '../assets/images/amber_arts_creativity_1791181265018.jpg';
import leadershipImg from '../assets/images/amber_leadership_life_1791181287182.jpg';
import experientialImg from '../assets/images/amber_middle_school_1791180811344.jpg';
import wellnessImg from '../assets/images/amber_wellness_yoga_1791181301608.jpg';
import natureImg from '../assets/images/amber_nature_campus_1791181326899.jpg';
import clubsImg from '../assets/images/amber_junior_school_1791180788269.jpg';
import communityImg from '../assets/images/amber_community_life_1791181353425.jpg';

interface LifeItem {
  id: number;
  category: 'sports' | 'arts' | 'leadership' | 'all';
  title: string;
  description: string;
  image: string;
}

const allItems: LifeItem[] = [
  {
    id: 1,
    category: 'sports',
    title: 'Sports & Fitness',
    description: 'From cricket and football to swimming, archery and other activities, students get regular opportunities to stay active, compete and work as a team.',
    image: sportsImg,
  },
  {
    id: 2,
    category: 'arts',
    title: 'Arts & Creativity',
    description: 'Pottery, art, music, dance and theatre give students the freedom to express themselves, explore their interests and discover new talents.',
    image: artsImg,
  },
  {
    id: 3,
    category: 'leadership',
    title: 'Leadership & Responsibility',
    description: 'Students take an active role in events, activities and school initiatives, learning how to communicate, collaborate and take responsibility.',
    image: leadershipImg,
  },
  {
    id: 4,
    category: 'leadership',
    title: 'Experiential Learning',
    description: 'Field trips, practical activities and real-world experiences help students connect what they learn in class with the world around them.',
    image: experientialImg,
  },
  {
    id: 5,
    category: 'sports',
    title: 'Wellness & Mindfulness',
    description: 'Yoga and wellness activities help students develop healthy routines, focus and awareness while maintaining a balanced lifestyle.',
    image: wellnessImg,
  },
  {
    id: 6,
    category: 'leadership',
    title: 'Nature & Environment',
    description: 'With a 45+ acre green campus, students have the space to explore nature and develop a deeper understanding of their surroundings.',
    image: natureImg,
  },
  {
    id: 7,
    category: 'leadership',
    title: 'Clubs & Student Activities',
    description: 'A range of activities and student-led initiatives encourages children to explore their interests, build friendships and become active members of the school community.',
    image: clubsImg,
  },
  {
    id: 8,
    category: 'leadership',
    title: 'Community & Campus Life',
    description: 'Residential life gives students opportunities to live, learn and grow together while developing independence, empathy and respect for others.',
    image: communityImg,
  },
];

interface LifeBeyondClassroomProps {
  onExploreStudentLife?: () => void;
}

type TabType = 'all' | 'sports' | 'arts' | 'leadership';

export const LifeBeyondClassroom: React.FC<LifeBeyondClassroomProps> = ({
  onExploreStudentLife,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [activeItemId, setActiveItemId] = useState<number>(1);

  const filteredItems = activeTab === 'all'
    ? allItems
    : allItems.filter((item) => item.category === activeTab);

  const activeItem = allItems.find((item) => item.id === activeItemId) || allItems[0];

  const handleItemClick = (id: number) => {
    setActiveItemId(id);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    const firstOfTab = tab === 'all'
      ? allItems[0]
      : allItems.find((item) => item.category === tab) || allItems[0];
    setActiveItemId(firstOfTab.id);
  };

  return (
    <section className="relative w-full bg-[#f4f7f8] text-[#131b2e] py-16 sm:py-24 px-4 sm:px-6 lg:px-12 font-p22">
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Top Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#737373] mb-2">
          Learning @ 360
        </p>

        {/* Main Heading */}
        <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#0f284a] leading-[1.15] mb-3">
          Learning Happens Beyond the Classroom
        </h2>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg text-[#525252] max-w-3xl leading-relaxed mb-8">
          At Amber Valley, children learn through experiences that build confidence, creativity, discipline and a sense of responsibility.
        </p>

        {/* Filter Pill Tabs (Matching Reference Image) */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => handleTabChange('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#c85a48] text-white shadow-md shadow-[#c85a48]/20 font-semibold'
                : 'bg-white text-[#525252] border border-neutral-200/80 hover:border-neutral-300 hover:text-[#131b2e]'
            }`}
          >
            All Programs
          </button>
          
          <button
            onClick={() => handleTabChange('sports')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'sports'
                ? 'bg-[#c85a48] text-white shadow-md shadow-[#c85a48]/20 font-semibold'
                : 'bg-white text-[#525252] border border-neutral-200/80 hover:border-neutral-300 hover:text-[#131b2e]'
            }`}
          >
            Sports & Fitness
          </button>

          <button
            onClick={() => handleTabChange('arts')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'arts'
                ? 'bg-[#c85a48] text-white shadow-md shadow-[#c85a48]/20 font-semibold'
                : 'bg-white text-[#525252] border border-neutral-200/80 hover:border-neutral-300 hover:text-[#131b2e]'
            }`}
          >
            Creative Arts
          </button>

          <button
            onClick={() => handleTabChange('leadership')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'leadership'
                ? 'bg-[#c85a48] text-white shadow-md shadow-[#c85a48]/20 font-semibold'
                : 'bg-white text-[#525252] border border-neutral-200/80 hover:border-neutral-300 hover:text-[#131b2e]'
            }`}
          >
            Leadership & Campus Life
          </button>
        </div>

        {/* Master Showcase Box (Large White Container with Accordion on Left & Image on Right) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-neutral-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Accordion List with Terracotta Highlights */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="divide-y divide-neutral-100">
                {filteredItems.map((item) => {
                  const isActive = item.id === activeItemId;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className="py-5 cursor-pointer group transition-all"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`font-serif-hero text-xl sm:text-2xl transition-colors ${
                            isActive
                              ? 'text-[#c85a48] font-bold'
                              : 'text-[#0f284a] group-hover:text-[#c85a48] font-medium'
                          }`}
                        >
                          {item.title}
                        </h3>

                        <div className="text-neutral-400 group-hover:text-[#c85a48] transition-colors shrink-0">
                          {isActive ? (
                            <Minus className="w-5 h-5 stroke-[2.5] text-[#c85a48]" />
                          ) : (
                            <Plus className="w-5 h-5 stroke-[2]" />
                          )}
                        </div>
                      </div>

                      {/* Active State Details & Accent Bar */}
                      {isActive && (
                        <div className="pt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                          <p className="text-sm sm:text-[15px] leading-relaxed text-[#525252]">
                            {item.description}
                          </p>
                          {/* Accent line under active item (from reference image) */}
                          <div className="w-24 h-0.5 bg-[#c85a48] mt-4" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Pill Button at Bottom Left of Card (matching reference image) */}
              <div className="pt-8">
                <button
                  onClick={onExploreStudentLife}
                  className="inline-flex items-center gap-2 bg-[#fbebe8] hover:bg-[#f8dbd6] text-[#c85a48] font-semibold text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer group border border-[#c85a48]/20"
                >
                  <span>EXPLORE STUDENT LIFE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Large High-Resolution Image Box */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-xl bg-neutral-100 border border-neutral-200/60">
                <img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center animate-in fade-in duration-400"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
