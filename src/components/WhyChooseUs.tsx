import React from 'react';
import { Award, ShieldCheck, DollarSign, Clock, Zap, Headphones, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  darkMode: boolean;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ darkMode }) => {
  const features = [
    {
      title: 'NABCEP Certified Engineers',
      desc: 'Our electrical engineers and system architects hold master NABCEP certifications and perform every step in-house.',
      icon: <Award className="w-6 h-6 text-[#6D28D9]" />,
      badge: 'Master Electricians',
    },
    {
      title: 'Tier 1 Bloomberg Equipment',
      desc: 'We use high-efficiency N-Type TOPCon panels, hybrid inverters, and LiFePO4 batteries from top global manufacturers.',
      icon: <ShieldCheck className="w-6 h-6 text-[#2E8B57]" />,
      badge: '30-Yr Warranty',
    },
    {
      title: 'Transparent & Zero-Down Pricing',
      desc: 'No hidden fees or surprise bill add-ons. Custom payment plans, $0-down solar loans, and lease options available.',
      icon: <DollarSign className="w-6 h-6 text-amber-500" />,
      badge: 'Flexible Financing',
    },
    {
      title: '25-Year Linear Power Guarantee',
      desc: 'Guaranteed 85%+ module output performance over 25 years with free component replacement coverage.',
      icon: <Zap className="w-6 h-6 text-[#6D28D9]" />,
      badge: 'Peace of Mind',
    },
    {
      title: '48-Hour Rapid Installation',
      desc: 'Streamlined permitting and professional mounting crews install your full rooftop system in as little as 2 days.',
      icon: <Clock className="w-6 h-6 text-[#2E8B57]" />,
      badge: 'Fast Turnaround',
    },
    {
      title: '24/7 Remote App Monitoring',
      desc: 'Instant smartphone alerts, real-time power production graphs, and proactive maintenance monitoring.',
      icon: <Headphones className="w-6 h-6 text-purple-600" />,
      badge: 'Live Dashboard',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#2E8B57]/10 text-[#2E8B57] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <CheckCircle2 className="w-4 h-4 text-[#2E8B57]" />
          <span>The SolarTech Advantage</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Why Over 1,000+ Property Owners Trust Us
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          We combine cutting-edge photovoltaics with uncompromising engineering standards to deliver unmatched energy independence.
        </p>
      </div>

      {/* Bento Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, idx) => (
          <div
            key={idx}
            className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {feat.icon}
                </div>
                <span className="text-[10px] font-extrabold uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                  {feat.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold tracking-tight">{feat.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
