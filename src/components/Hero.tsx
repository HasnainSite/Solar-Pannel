import React from 'react';
import { Sun, ShieldCheck, Zap, Phone, Award, ArrowUpRight, CheckCircle2, Star, Calculator, ArrowRight } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenQuoteModal }) => {
  return (
    <section id="home" className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Tagline Pill */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#2E8B57]/10 text-[#2E8B57] border border-[#2E8B57]/20">
          <span className="w-2 h-2 rounded-full bg-[#2E8B57] animate-ping"></span>
          <span>#1 Clean Energy & Solar Provider 2026</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Award className="w-4 h-4 text-amber-500" />
          <span>NABCEP Certified & Tier-1 PV Systems</span>
        </div>
      </div>

      {/* Main Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
        {/* Main Large Hero Tile - Spans 8 Cols */}
        <div
          className={`md:col-span-8 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl border ${
            darkMode
              ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-800 text-white'
              : 'bg-gradient-to-br from-slate-900 via-[#0A4D9B] to-slate-900 border-slate-800 text-white'
          }`}
        >
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
              alt="Solar panels on luxury home"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-[#FFC107] px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-amber-400/30">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Zero Down Financing Available</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Power Your Future with <span className="text-[#FFC107]">Clean Solar</span> Energy
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed">
              Slash monthly electricity bills by up to <strong className="text-emerald-400 font-bold">90%</strong> with premier Tier-1 monocrystalline solar panels, high-capacity lithium battery backups, and seamless net metering integration.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="bg-[#2E8B57] hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-900/30 transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <a
                href="tel:18005557652"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-5 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now: +1 (800) 555-SOLAR</span>
              </a>
            </div>
          </div>

          {/* Bottom Features Banner */}
          <div className="relative z-10 pt-8 mt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="font-semibold text-slate-200">25-Yr Power Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="font-semibold text-slate-200">30% Federal Tax Credit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="font-semibold text-slate-200">48-Hr Rapid Install</span>
            </div>
          </div>
        </div>

        {/* Side Bento Tile 1: Quick ROI Calculator Preview Card (4 Cols) */}
        <div
          className={`md:col-span-4 rounded-3xl p-6 flex flex-col justify-between shadow-lg border relative overflow-hidden ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-white'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A4D9B]">
                <Calculator className="w-4 h-4 text-[#FFC107]" />
                <span>Instant ROI Preview</span>
              </div>
              <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-500/20">
                Live Estimator
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight">How Much Will You Save?</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Based on average California & Texas utility rates.
            </p>

            {/* Micro Calculator widget snippet */}
            <div className={`p-4 rounded-2xl border space-y-3 ${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-500">Avg Monthly Bill:</span>
                <span className="text-[#0A4D9B] font-bold">$300 / mo</span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 w-3/4"></div>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-end">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Est. 25-Yr Savings</div>
                  <div className="text-2xl font-black text-emerald-600">$78,400+</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Payback Period</div>
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-300">3.8 Years</div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#calculator"
            className="mt-6 w-full py-3 bg-[#0A4D9B] hover:bg-[#083a75] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
          >
            <span>Custom Roof Savings Calculator</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>

        {/* Bento Row 2: Four Highlight Metric Cards */}
        <div className="md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Metric 1 */}
          <div
            className={`rounded-3xl p-5 border shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#0A4D9B] flex items-center justify-center flex-shrink-0 font-extrabold text-xl">
              1k+
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-[#0A4D9B]">1,000+</div>
              <div className="text-xs font-medium text-slate-500">Happy Solar Clients</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div
            className={`rounded-3xl p-5 border shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#2E8B57] flex items-center justify-center flex-shrink-0 font-extrabold text-xl">
              500+
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-[#2E8B57]">500+</div>
              <div className="text-xs font-medium text-slate-500">Projects Completed</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div
            className={`rounded-3xl p-5 border shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0 font-extrabold text-xl">
              10+
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-amber-600">10+ Years</div>
              <div className="text-xs font-medium text-slate-500">Industry Excellence</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div
            className={`rounded-3xl p-5 border shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-slate-800 dark:text-white">4.9 / 5.0</div>
              <div className="text-xs font-medium text-slate-500">Customer Rating (250+ Reviews)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
