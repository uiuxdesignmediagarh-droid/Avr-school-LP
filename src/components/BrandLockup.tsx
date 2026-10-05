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
    <div className="relative inline-flex items-center justify-center my-3 sm:my-4 select-none">
      <svg
        viewBox="0 0 620 160"
        className="w-[310px] sm:w-[480px] md:w-[560px] lg:w-[620px] h-auto overflow-visible drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="amberPillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#E58B20" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Background Warm Amber Pill Bar */}
        <rect
          x="40"
          y="58"
          width="540"
          height="54"
          rx="27"
          fill="url(#amberPillGrad)"
        />

        {/* Left Bold Serif Text: White Font */}
        <text
          x="75"
          y="95"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="36"
          fontWeight="800"
          letterSpacing="0.06em"
          fill="#ffffff"
        >
          {title}
        </text>

        {/* Cursive Script Text: for life in White Font with subtle shadow */}
        <g transform="translate(325, 0)">
          <text
            x="30"
            y="108"
            fontFamily="'Alex Brush', 'Dancing Script', cursive"
            fontSize="98"
            fontWeight="400"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="1.2"
            letterSpacing="0.02em"
          >
            {scriptText}
          </text>
        </g>
      </svg>
    </div>
  );
};
