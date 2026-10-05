import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, BookOpen, X } from 'lucide-react';

import reel1 from '../assets/images/amber_reel_1_1791185669395.jpg';
import reel2 from '../assets/images/amber_reel_2_1791185687490.jpg';
import reel3 from '../assets/images/amber_reel_3_1791185718081.jpg';
import reel4 from '../assets/images/amber_reel_4_1791185750206.jpg';

interface ReelItem {
  id: string;
  thumbnail: string;
  videoId: string;
}

const reels: ReelItem[] = [
  { id: '1', thumbnail: reel1, videoId: '2me-WX-oIQk' },
  { id: '2', thumbnail: reel2, videoId: '2me-WX-oIQk' },
  { id: '3', thumbnail: reel3, videoId: '2me-WX-oIQk' },
  { id: '4', thumbnail: reel4, videoId: '2me-WX-oIQk' },
];

export const StudentVoicesCarousel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll moving reel carousel
  useEffect(() => {
    if (!isPlaying || isHovered || activeReel !== null) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, activeReel]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 260;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-full bg-[#FAF5EE] text-[#2D1418] py-20 sm:py-28 px-4 sm:px-6 lg:px-12 font-dmsans overflow-hidden border-t border-[#E8DCCF]">
      
      {/* Background Soft Amber and Rosé Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#E58B20]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7A1C28]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="text-left max-w-2xl">
            
            {/* AmberZine Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8EE] border border-[#E8DCCF] text-[#B45309] text-xs font-bold tracking-[0.16em] uppercase mb-4 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#D97706]" />
              <span>AmberZine • Student Voices</span>
            </div>

            {/* Main Heading in Kaisei Opti */}
            <h2 className="font-kaisei font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#4A0E17] tracking-tight leading-[1.16] mb-3">
              Hear It From Our Students
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#525252] font-normal leading-relaxed">
              Real experiences. Real stories. Real voices from the students who live and learn at Amber Valley every day.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-[#4A0E17] shadow-sm transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause auto-scroll' : 'Play auto-scroll'}
              title={isPlaying ? 'Pause Carousel' : 'Auto Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-[#B45309]" /> : <Play className="w-4 h-4 text-[#4A0E17]" />}
            </button>
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-[#4A0E17] shadow-sm transition-colors cursor-pointer"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-[#4A0E17] shadow-sm transition-colors cursor-pointer"
              aria-label="Next reel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Small Reel Format Containers Carousel (Without Text Content) */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth select-none scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.concat(reels).map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setActiveReel(item)}
              className="snap-start shrink-0 w-[170px] sm:w-[210px] md:w-[230px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer border-2 border-white shadow-lg hover:shadow-2xl hover:border-[#D97706] transition-all duration-300 hover:-translate-y-2 bg-neutral-900"
            >
              {/* Vertical Reel Thumbnail Image */}
              <img
                src={item.thumbnail}
                alt="Amber Valley Student Life Reel"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Center Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#4A0D15] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E58B20] group-hover:text-white transition-all duration-300 shadow-xl">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                </div>
              </div>

              {/* Minimal Reel Corner Indicator */}
              <div className="absolute top-3 right-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E58B20] shadow-[0_0_8px_#E58B20] animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reel Modal Player */}
      {activeReel && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActiveReel(null)}
        >
          <div 
            className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer border border-white/20 backdrop-blur-sm"
              aria-label="Close reel player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded Reel Player */}
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeReel.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Amber Valley Student Reel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
