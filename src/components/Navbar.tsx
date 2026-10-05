import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onBookVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookVisit,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#EBDCCB] px-6 sm:px-10 lg:px-14 py-3 sm:py-4 transition-all duration-300 font-dmsans shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Official Amber Valley Logo */}
        <div className="flex items-center group cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src="https://ambervalleyschool.com/images/amber-valley-residential-school-logo.png"
              alt="Amber Valley Residential School Chikmagalur Logo"
              className="h-12 sm:h-14 md:h-15 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            {/* Fallback typography */}
            <div className="hidden flex-col text-left">
              <span className="font-kaisei text-xl sm:text-2xl font-bold tracking-tight text-[#4A0E17] leading-none">
                Amber Valley
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#B45309] tracking-[0.18em] font-semibold uppercase mt-0.5">
                Residential School
              </span>
              <span className="text-[9px] text-[#7A1C28] tracking-[0.25em] font-medium uppercase">
                CHIKMAGALUR
              </span>
            </div>
          </div>
        </div>

        {/* Right: Uppercase Nav Links + Amber Gold Rounded Hamburger Button */}
        <div className="flex items-center gap-5 sm:gap-7">
          <button
            onClick={onBookVisit}
            className="text-[12px] sm:text-[14px] font-semibold tracking-[0.14em] uppercase text-[#4A0E17] hover:text-[#B45309] transition-colors cursor-pointer"
          >
            ADMISSIONS 2027–28
          </button>

          <button
            onClick={onBookVisit}
            className="hidden md:inline-block text-[12px] sm:text-[14px] font-semibold tracking-[0.14em] uppercase text-[#4A0E17] hover:text-[#B45309] transition-colors cursor-pointer"
          >
            APPLY NOW
          </button>

          {/* Warm Amber-Gold Themed Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] hover:from-[#E58B20] hover:to-[#B45309] active:scale-95 transition-all text-[#4A0D15] shadow-md flex items-center justify-center cursor-pointer border border-[#FEF3C7]/60"
            aria-label="Navigation Menu"
          >
            {menuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Menu Overlay with Light Theme & Logo Accents */}
      {menuOpen && (
        <div className="fixed inset-x-6 top-20 z-50 max-w-md ml-auto bg-white/98 backdrop-blur-2xl p-6 rounded-2xl border border-[#E8DCCF] shadow-2xl text-[#2D1418] animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 text-sm font-normal tracking-wide">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B45309] pb-2 border-b border-neutral-200">
              Amber Valley Navigation
            </span>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 font-medium hover:text-[#B45309] transition-colors">Home</button>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 font-medium hover:text-[#B45309] transition-colors">The School & Heritage</button>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 font-medium hover:text-[#B45309] transition-colors">ICSE & ISC Curriculum</button>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 font-medium hover:text-[#B45309] transition-colors">45+ Acre Boarding Campus</button>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 font-medium hover:text-[#B45309] transition-colors">Sports & Leadership</button>
            <div className="pt-3 border-t border-neutral-200">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onBookVisit();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:from-[#E58B20] hover:to-[#92400E] transition-all cursor-pointer"
              >
                <span>Book A Campus Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
