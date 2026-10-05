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
    <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 lg:px-14 py-4 sm:py-5 transition-all duration-300 font-p22">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Official Amber Valley Logo from website */}
        <div className="flex items-center group cursor-pointer">
          <div className="flex items-center">
            <img
              src="https://ambervalleyschool.com/images/amber-valley-residential-school-logo.png"
              alt="Amber Valley Residential School Chikmagalur Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] group-hover:scale-102 transition-transform duration-300"
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
              <span className="font-serif-hero text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                Amber Valley
              </span>
              <span className="font-p22 text-[10px] sm:text-[11px] text-[#FDE68A] tracking-[0.18em] font-normal uppercase mt-0.5">
                Residential School
              </span>
              <span className="font-p22 text-[9px] text-[#E58B20] tracking-[0.25em] font-medium uppercase">
                CHIKMAGALUR
              </span>
            </div>
          </div>
        </div>

        {/* Right: Uppercase Nav Links + Amber Gold Rounded Hamburger Button */}
        <div className="flex items-center gap-6 sm:gap-8">
          <button
            onClick={onBookVisit}
            className="font-p22 text-[13px] sm:text-[15px] font-medium tracking-[0.14em] uppercase text-white hover:text-[#F59E0B] transition-colors cursor-pointer"
          >
            ADMISSIONS 2027–28
          </button>

          <button
            onClick={onBookVisit}
            className="hidden md:inline-block font-p22 text-[13px] sm:text-[15px] font-medium tracking-[0.14em] uppercase text-white hover:text-[#F59E0B] transition-colors cursor-pointer"
          >
            APPLY NOW
          </button>

          {/* Warm Amber-Gold Themed Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] hover:from-[#E58B20] hover:to-[#B45309] active:scale-95 transition-all text-[#4A0D15] shadow-xl shadow-black/50 flex items-center justify-center cursor-pointer border border-[#FEF3C7]/30"
            aria-label="Navigation Menu"
          >
            {menuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Menu Overlay with Amber/Maroon Theme */}
      {menuOpen && (
        <div className="fixed inset-x-6 top-24 z-50 max-w-md ml-auto bg-[#1a0f0f]/95 backdrop-blur-xl p-6 rounded-2xl border border-[#E58B20]/40 shadow-2xl text-white animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 text-sm font-normal tracking-wide">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F59E0B] pb-2 border-b border-white/10">
              Amber Valley Navigation
            </span>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 hover:text-[#F59E0B] transition-colors">Home</button>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 hover:text-[#F59E0B] transition-colors">The School & Heritage</button>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 hover:text-[#F59E0B] transition-colors">ICSE & ISC Curriculum</button>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 hover:text-[#F59E0B] transition-colors">45+ Acre Boarding Campus</button>
            <button onClick={() => setMenuOpen(false)} className="text-left py-1.5 hover:text-[#F59E0B] transition-colors">Sports & Leadership</button>
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onBookVisit();
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#4A0D15] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
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
