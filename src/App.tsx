/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, VolumeX, Phone, Mail, MapPin } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { AtAGlance } from './components/AtAGlance';
import { AcademicJourney } from './components/AcademicJourney';
import { LifeBeyondClassroom } from './components/LifeBeyondClassroom';
import { HarvardStudentAgencies } from './components/HarvardStudentAgencies';
import { CampusLifeSection } from './components/CampusLifeSection';
import { LeadershipVision } from './components/LeadershipVision';
import { AccreditationsSection } from './components/AccreditationsSection';
import { StudentVoicesCarousel } from './components/StudentVoicesCarousel';
import { FinalCTASection } from './components/FinalCTASection';
import { VisitModal } from './components/VisitModal';
import { BrandLockup } from './components/BrandLockup';

// High-resolution architectural campus image fallback
import campusArchitecturalImage from './assets/images/amber_valley_modern_campus_1791179808818.jpg';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  // YouTube Video ID: 2me-WX-oIQk
  const videoId = '2me-WX-oIQk';

  return (
    <div className="relative min-h-screen w-full bg-[#FAF7F2] text-[#2D1418] font-dmsans selection:bg-[#E58B20] selection:text-white overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
        
        {/* Background Campus Video Container */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          
          {/* Fallback Image Poster */}
          <img
            src={campusArchitecturalImage}
            alt="Amber Valley Residential School Campus Chikmagalur"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Embedded YouTube Loop Background Video */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vh] min-w-[177.77vh] min-h-[56.25vw] pointer-events-none opacity-40">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1`}
              title="Amber Valley Residential School Background Video"
              className="w-full h-full object-cover pointer-events-none border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Light Theme Sunlit Overlay with Soft Logo-Inspired Amber & Linen Wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-[#FAF7F2]/65" />
          <div className="absolute inset-0 bg-[#FFF9EE]/30" />
        </div>

        {/* Top Header Navigation */}
        <Navbar
          onBookVisit={() => setIsVisitModalOpen(true)}
        />

        {/* Main Center-Aligned Hero Section */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-16 max-w-4xl mx-auto w-full">
          <div className="flex flex-col items-center space-y-6 sm:space-y-7 animate-in fade-in zoom-in-95 duration-700">
            
            {/* Brand Pill + Cursive 'for life' Lockup in Amber Valley Palette */}
            <BrandLockup title="AMBER VALLEY" scriptText="for life" />

            {/* Heading: Best Residential School in Chikmagalur in Kaisei Opti 700 */}
            <h1 className="font-kaisei font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[58px] tracking-tight text-[#4A0E17] max-w-3xl">
              Best Residential School <br className="hidden sm:inline" />
              <span className="text-[#B45309] font-bold">
                in Chikmagalur
              </span>
            </h1>

            {/* Description in DM Sans 500 */}
            <p className="font-dmsans text-[17px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-medium text-[#4A5568] max-w-3xl px-2">
              An ICSE residential school with a 45+ acre green campus, holistic learning, sports, leadership and real-world experiences.
            </p>

            {/* Pre-heading Badge / Tag in Soft Amber Pill */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF8EE] border border-[#E8DCCF] font-dmsans text-[13px] sm:text-[14px] font-bold tracking-[0.14em] uppercase text-[#B45309] shadow-xs">
              Admissions Open 2027–28
            </div>

            {/* Center CTA Button: [ BOOK A CAMPUS VISIT ] */}
            <div className="pt-2">
              <button
                onClick={() => setIsVisitModalOpen(true)}
                className="font-dmsans bg-gradient-to-r from-[#D97706] via-[#E58B20] to-[#B45309] hover:from-[#F59E0B] hover:to-[#92400E] active:scale-95 text-white font-bold text-[13px] sm:text-[15px] tracking-[0.18em] uppercase px-9 sm:px-12 py-4 rounded-xl shadow-xl shadow-amber-900/15 border border-[#FEF3C7]/50 hover:shadow-amber-600/25 transition-all duration-200 cursor-pointer"
              >
                BOOK A CAMPUS VISIT
              </button>
            </div>

          </div>
        </main>

        {/* Hero Bottom Bar with Video Audio Toggle & Quick Info */}
        <div className="relative z-10 py-4 px-6 max-w-7xl mx-auto w-full flex items-center justify-between text-[12px] sm:text-[14px] text-[#5A6A85] tracking-wider border-t border-[#E8DCCF]/60">
          <span className="font-medium">Amber Valley Residential School • 45+ Acre Campus, Chikmagalur</span>
          
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-neutral-300 text-[#4A0E17] text-xs font-semibold transition-all cursor-pointer pointer-events-auto backdrop-blur-md shadow-xs"
            aria-label="Toggle Video Sound"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#B45309]" /> : <Volume2 className="w-3.5 h-3.5 text-[#D97706]" />}
            <span>{isMuted ? 'Unmute Video' : 'Mute Video'}</span>
          </button>
        </div>
      </section>

      {/* SECTION: AMBER VALLEY AT A GLANCE */}
      <AtAGlance />

      {/* SECTION 2: ACADEMIC JOURNEY — THE STAGES OF LEARNING */}
      <AcademicJourney
        onSelectCurriculum={() => setIsVisitModalOpen(true)}
      />

      {/* SECTION 3: LIFE BEYOND THE CLASSROOM */}
      <LifeBeyondClassroom
        onExploreStudentLife={() => setIsVisitModalOpen(true)}
      />

      {/* SECTION 5: HARVARD STUDENT AGENCIES */}
      <HarvardStudentAgencies
        onKnowMore={() => setIsVisitModalOpen(true)}
      />

      {/* SECTION 6: CAMPUS LIFE (POLAROID & TIMBER TEXTURE) */}
      <CampusLifeSection
        onExploreCampus={() => setIsVisitModalOpen(true)}
      />

      {/* SECTION 7: LEADERSHIP & VISION */}
      <LeadershipVision />

      {/* SECTION 8: ACCREDITATIONS & RECOGNITION */}
      <AccreditationsSection />

      {/* SECTION 9: STUDENT VOICES (AMBERZINE MOVING CAROUSEL) */}
      <StudentVoicesCarousel />

      {/* SECTION: FINAL CTA */}
      <FinalCTASection
        onBookVisit={() => setIsVisitModalOpen(true)}
      />

      {/* FOOTER (Clean Light Theme with Logo Accents) */}
      <footer className="bg-[#F7F2EA] text-[#4A141E] py-14 px-6 sm:px-12 border-t border-[#E5D7C5] font-dmsans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src="https://ambervalleyschool.com/images/amber-valley-residential-school-logo.png"
              alt="Amber Valley Residential School Logo"
              className="h-14 w-auto object-contain"
            />
            <div className="text-left">
              <p className="font-kaisei text-xl font-bold text-[#4A0E17]">Amber Valley Residential School</p>
              <p className="text-xs text-[#525252] flex items-center gap-1.5 mt-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                Mugthihalli, Chikmagalur, Karnataka 577133
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#525252] font-medium">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#D97706]" /> +91 8262 225000</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#D97706]" /> admissions@ambervalleyschool.com</span>
            <button
              onClick={() => setIsVisitModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#E58B20] hover:to-[#92400E] text-white font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Book Campus Tour
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Visit Booking Modal */}
      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />
    </div>
  );
}
