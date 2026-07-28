import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/solarData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#0A4D9B]/10 text-[#0A4D9B] dark:bg-blue-500/10 dark:text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Star className="w-4 h-4 text-[#FFC107] fill-current" />
          <span>Real Client Experiences</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          What Our Clients Say About SolarTech
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Read verified reviews and case outcomes from real homeowners, business executives, and real estate developers.
        </p>
      </div>

      {/* Main Slider Bento Card */}
      <div className={`rounded-3xl border shadow-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden ${
        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Solar Customer
            </span>
          </div>

          <p className="text-lg sm:text-2xl font-semibold italic leading-relaxed text-slate-800 dark:text-slate-100">
            "{currentTestimonial.content}"
          </p>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-[#0A4D9B]"
              />
              <div>
                <div className="font-extrabold text-base sm:text-lg">{currentTestimonial.name}</div>
                <div className="text-xs text-slate-500">{currentTestimonial.role} • {currentTestimonial.location}</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border flex items-center gap-4 text-xs font-bold">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">System Type</span>
                <span className="text-[#0A4D9B] dark:text-blue-400">{currentTestimonial.projectType}</span>
              </div>
              <div className="border-l pl-4 border-slate-200 dark:border-slate-700">
                <span className="text-slate-400 block text-[10px] uppercase">Annual Savings</span>
                <span className="text-[#2E8B57]">{currentTestimonial.annualSavings}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
