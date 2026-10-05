import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Mail, Phone, GraduationCap, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentGrade: 'Grade 6 (ICSE Boarding)',
    visitDate: '2027-02-15',
    visitSlot: '10:30 AM - Campus Guided Tour',
    hostelVisitRequired: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 text-white rounded-3xl border border-amber-500/30 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-rose-500 to-amber-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-2">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Admissions 2027–28
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-hero font-bold text-white tracking-tight">
                Schedule a Campus Visit
              </h2>
              <p className="text-sm text-neutral-400 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Amber Valley 45+ Acre Campus, Mugthihalli, Chikmagalur
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                    Parent / Guardian Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <input
                      required
                      type="text"
                      placeholder="Mr. & Mrs. Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 pl-9 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                    Contact Phone
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 pl-9 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <input
                      required
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 pl-9 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                    Target Grade
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <select
                      value={formData.studentGrade}
                      onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 pl-9 text-sm text-white outline-none transition-all"
                    >
                      <option value="Grade 4-5 (Junior Boarding)">Grade 4-5 (Junior Boarding)</option>
                      <option value="Grade 6 (ICSE Boarding)">Grade 6 (ICSE Boarding)</option>
                      <option value="Grade 7-8 (ICSE Middle School)">Grade 7-8 (ICSE Middle School)</option>
                      <option value="Grade 9-10 (ICSE Senior)">Grade 9-10 (ICSE Senior)</option>
                      <option value="Grade 11-12 (ISC Science/Commerce/Humanities)">Grade 11-12 (ISC Streams)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 pl-9 text-sm text-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                    Tour Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                    <select
                      value={formData.visitSlot}
                      onChange={(e) => setFormData({ ...formData, visitSlot: e.target.value })}
                      className="w-full bg-neutral-800 border border-white/15 focus:border-amber-400 rounded-xl px-3.5 py-2.5 pl-9 text-sm text-white outline-none transition-all"
                    >
                      <option value="10:00 AM - Morning Campus Walk & Principal Interaction">10:00 AM - Morning Campus Tour</option>
                      <option value="02:00 PM - Afternoon Boarding & Sports Complex Walk">02:00 PM - Boarding Facilities Tour</option>
                      <option value="04:00 PM - Sunset Campus & Horse Riding Arena Walk">04:00 PM - Sunset Campus Walk</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs text-neutral-300">
                <input
                  type="checkbox"
                  id="hostel"
                  checked={formData.hostelVisitRequired}
                  onChange={(e) => setFormData({ ...formData, hostelVisitRequired: e.target.checked })}
                  className="rounded border-white/20 text-amber-500 focus:ring-amber-400"
                />
                <label htmlFor="hostel" className="cursor-pointer">
                  Include residential boarding dorms & dining hall walkthrough
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-neutral-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-950/50 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Campus Visit Appointment</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Admissions Office will send a confirmation pass via SMS & WhatsApp</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Appointment Reserved
              </span>
              <h3 className="text-2xl font-serif-hero font-bold text-white mt-1">
                We Look Forward to Welcoming You!
              </h3>
              <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.parentName || 'Parent'}</strong>. Your personalized 45+ acre campus tour at Amber Valley Residential School has been scheduled.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-neutral-300">
                <span>Date & Slot:</span>
                <strong className="text-white">{formData.visitDate} ({formData.visitSlot.split(' - ')[0]})</strong>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Location:</span>
                <strong className="text-amber-300">Amber Valley, Chikmagalur, KA</strong>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Student Grade:</span>
                <strong className="text-white">{formData.studentGrade}</strong>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Campus Concierge:</span>
                <strong className="text-emerald-400">+91 8262 225000</strong>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
