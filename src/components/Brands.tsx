import React from 'react';
import { PARTNER_BRANDS } from '../data/solarData';
import { Award } from 'lucide-react';

interface BrandsProps {
  darkMode: boolean;
}

export const Brands: React.FC<BrandsProps> = ({ darkMode }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className={`rounded-3xl border p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 ${
        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100/80 border-slate-200'
      }`}>
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Award className="w-5 h-5 text-amber-500" />
          <span>Tier-1 Partner Ecosystem</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75">
          {PARTNER_BRANDS.map((brand, idx) => (
            <span
              key={idx}
              className="text-xs sm:text-sm font-black tracking-wider text-slate-500 dark:text-slate-400 hover:text-[#0A4D9B] transition-colors"
            >
              {brand.logoText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
