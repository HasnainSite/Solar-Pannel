import React from 'react';
import { Zap, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuoteModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-r from-[#6D28D9] via-[#4C1D95] to-[#2E8B57] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-purple-900">
        <div className="max-w-2xl space-y-4 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
            <Zap className="w-4 h-4 fill-current text-slate-950" />
            <span>Lock In 30% Federal Tax Credit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Start Saving on Your Electricity Bills Today
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Get a custom 3D roof shading analysis, exact financial return model, and turnkey installation quote in under 2 minutes. Zero obligation.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-slate-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              $0 Down Solar Loans
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              25-Year Linear Power Warranty
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto z-10">
          <button
            onClick={onOpenQuoteModal}
            className="bg-[#FFC107] hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 text-sm sm:text-base"
          >
            <span>Get Free Quote Now</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>

          <a
            href="tel:18005557652"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base transition-colors"
          >
            <Phone className="w-5 h-5 text-emerald-400" />
            <span>+1 (800) 555-SOLAR</span>
          </a>
        </div>
      </div>
    </section>
  );
};
