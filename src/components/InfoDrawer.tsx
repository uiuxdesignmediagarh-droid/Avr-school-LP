import React from 'react';
import { X, CheckCircle, Award, Compass, HeartHandshake, Trees, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

interface InfoDrawerProps {
  category: string | null;
  onClose: () => void;
  onBookVisit: () => void;
}

export const InfoDrawer: React.FC<InfoDrawerProps> = ({ category, onClose, onBookVisit }) => {
  if (!category) return null;

  const contentMap: Record<string, { title: string; subtitle: string; description: string; highlights: string[]; icon: React.ReactNode }> = {
    'Questplus': {
      title: 'Academic Excellence & ICSE Curriculum',
      subtitle: 'Nurturing Intellect, Critical Inquiry & Foundational Mastery',
      description: 'Amber Valley Residential School combines rigorous ICSE and ISC academic pedagogy with personalized mentor-student ratios. Our state-of-the-art STEM laboratories, smart classrooms, and individualized remedial guidance empower students to excel in national competitive examinations and global university placements.',
      highlights: [
        'ICSE / ISC Affiliation with 100% distinction track record',
        'Advanced Robotics, AI Labs, and Tinkering Spaces',
        'Expert faculty residing on-campus for evening study circles',
        'Integrated coaching for Olympiads, JEE, NEET, and CLAT',
      ],
      icon: <Award className="w-6 h-6 text-amber-400" />
    },
    'International Exchange Programme': {
      title: 'Global Perspectives & Student Exchange',
      subtitle: 'Expanding Horizons Beyond Geographic Boundaries',
      description: 'Our international exchange initiatives connect students with partner schools in the UK, Europe, and Southeast Asia. Students participate in global model UN conferences, cross-cultural immersion projects, and collaborative research initiatives.',
      highlights: [
        'Collaborative sister-school exchange programs',
        'International MUN and World Scholar’s Cup representation',
        'Foreign language electives: French, German, and Spanish',
        'Cross-cultural heritage immersion and study tours',
      ],
      icon: <Compass className="w-6 h-6 text-sky-400" />
    },
    'Social outreach': {
      title: 'Social Outreach & Community Leadership',
      subtitle: 'Building Empathy, Social Responsibility & Character',
      description: 'Leadership is rooted in empathy. Students at Amber Valley actively spearhead community welfare, environmental conservation in the Western Ghats, rural literacy workshops, and sustainable agricultural awareness initiatives in surrounding Chikmagalur villages.',
      highlights: [
        'Active participation in Chikmagalur Green Biosphere initiatives',
        'Rural tutoring and digital literacy outreach campaigns',
        'Student-led humanitarian drives and rotary youth clubs',
        'Holistic ethical grounding inspired by universal values',
      ],
      icon: <HeartHandshake className="w-6 h-6 text-rose-400" />
    },
    'The School': {
      title: 'About Amber Valley Residential School',
      subtitle: 'Chikmagalur’s Premier Residential Haven for Holistic Development',
      description: 'Nestled amidst the serene, pollution-free Western Ghats in Chikmagalur, Amber Valley is an idyllic co-educational boarding institution providing an unmatched blend of academic discipline, sports heritage, and character development on a 45+ acre green campus.',
      highlights: [
        '45+ Acre lush, eco-friendly Western Ghats campus',
        'Olympic-dimension swimming pool & equestrian arena',
        'Separate modern dormitories with 24/7 pastoral and medical care',
        'Wholesome organic multi-cuisine dining prepared on-site',
      ],
      icon: <Trees className="w-6 h-6 text-emerald-400" />
    },
    'Curriculum': {
      title: 'ICSE & ISC Comprehensive Framework',
      subtitle: 'Balancing Scholastic Rigour with Creative Expression',
      description: 'A forward-looking curriculum that integrates STEM, humanities, performing arts, and physical education into everyday student life, preparing young minds for 21st-century leadership.',
      highlights: [
        'Experiential learning models with real-world case studies',
        'Specialized music, classical dance, and fine arts academies',
        'Regular field explorations in botany, ecology, and astrophysics',
        'Structured daily prep and teacher-mentored study routines',
      ],
      icon: <BookOpen className="w-6 h-6 text-indigo-400" />
    },
    'Admissions': {
      title: 'Admissions Open 2027–28',
      subtitle: 'Embark on a Transformative Educational Journey',
      description: 'Admissions are now open for Grades 4 through 11 for the upcoming 2027–28 academic session. We invite parents and aspirants to tour our sprawling 45+ acre campus and experience our boarding culture firsthand.',
      highlights: [
        'Admissions Open for Grades 4 to 11 (Boarding & Day-Boarding)',
        'Merit-based scholarships available for outstanding talent',
        'Interactive aptitude assessment and friendly parent interaction',
        'Transparent admission guidance & hostel walkthroughs',
      ],
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
    },
  };

  const current = contentMap[category] || contentMap['The School'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 text-white rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-white/10 border border-white/15">
            {current.icon}
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Amber Valley Feature Spotlight
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-hero font-bold text-white">
              {current.title}
            </h3>
          </div>
        </div>

        <p className="text-sm font-medium text-amber-200/90 mb-3">
          {current.subtitle}
        </p>

        <p className="text-sm text-neutral-300 leading-relaxed mb-6">
          {current.description}
        </p>

        <div className="space-y-2.5 mb-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
            Key Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {current.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10 text-xs text-neutral-200">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-all cursor-pointer"
          >
            Back to Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onBookVisit();
            }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <span>Book Campus Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
