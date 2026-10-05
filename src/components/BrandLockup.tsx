import React from 'react';

interface BrandLockupProps {
  title?: string;
  scriptText?: string;
}

export const BrandLockup: React.FC<BrandLockupProps> = ({
  title = 'AMBER VALLEY',
  scriptText = 'for life',
}) => {
  return (
    <div className="relative inline-flex items-center justify-center my-2 sm:my-3 select-none">
      <div className="relative flex items-center">
        {/* Warm Amber Badge Capsule */}
        <div className="flex items-center bg-gradient-to-r from-[#F59E0B] via-[#E58B20] to-[#D97706] rounded-full px-5 sm:px-7 py-2 sm:py-2.5 shadow-xl border border-amber-300/30">
          <span className="font-kaisei font-bold tracking-[0.08em] text-white text-base sm:text-xl md:text-2xl uppercase drop-shadow-sm">
            {title}
          </span>
        </div>

        {/* Cursive overlapping 'for life' in crisp script */}
        <span className="font-script text-3xl sm:text-4xl md:text-5xl text-white font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] -ml-4 sm:-ml-5 -mt-3 sm:-mt-4 transform -rotate-6 z-10">
          {scriptText}
        </span>
      </div>
    </div>
  );
};
