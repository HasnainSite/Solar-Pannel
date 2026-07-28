import React from 'react';
import { CheckCircle2, PhoneCall, Compass, Layers, Wrench, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';

interface ProcessProps {
  darkMode: boolean;
  onOpenQuoteModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ darkMode, onOpenQuoteModal }) => {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      desc: 'We review your 12-month electricity bills and calculate expected solar savings with zero financial commitment.',
      icon: <PhoneCall className="w-5 h-5 text-[#0A4D9B]" />,
      detail: 'Phone or video call with energy advisor',
    },
    {
      number: '02',
      title: 'Site Survey & Shading',
      desc: 'Certified technicians perform 3D drone roof mapping, structural rafter checks, and main panel capacity inspection.',
      icon: <Compass className="w-5 h-5 text-[#2E8B57]" />,
      detail: 'Precision LiDAR roof scan',
    },
    {
      number: '03',
      title: 'Custom System Design',
      desc: 'Engineers draft single-line electrical schematics, select Tier-1 equipment, and submit municipal building permits.',
      icon: <Layers className="w-5 h-5 text-[#FFC107]" />,
      detail: '3D CAD & Permit Approval',
    },
    {
      number: '04',
      title: '48-Hour Installation',
      desc: 'Our licensed master electricians mount waterproof racking, wire inverters, and mount high-efficiency panels.',
      icon: <Wrench className="w-5 h-5 text-[#0A4D9B]" />,
      detail: 'Rapid & clean execution',
    },
    {
      number: '05',
      title: 'Testing & Interconnection',
      desc: 'City inspectors and utility company engineers inspect the array, swap bi-directional meters, and turn on solar power.',
      icon: <ShieldCheck className="w-5 h-5 text-[#2E8B57]" />,
      detail: 'Grid export activation',
    },
    {
      number: '06',
      title: '24/7 Monitoring & Support',
      desc: 'Track daily kWh production, battery state of charge, and net savings live from our iOS & Android mobile dashboard.',
      icon: <Headphones className="w-5 h-5 text-purple-600" />,
      detail: '25-Year warranty backed care',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#2E8B57]/10 text-[#2E8B57] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <CheckCircle2 className="w-4 h-4 text-[#2E8B57]" />
          <span>Seamless Turnkey Execution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Our 6-Step Proven Solar Journey
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          We handle every engineering detail, permit filing, installation step, and utility approval so you can sit back and watch your electricity bills vanish.
        </p>
      </div>

      {/* Process Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs font-extrabold bg-[#0A4D9B] text-white px-3 py-1 rounded-full">
                  STEP {item.number}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#2E8B57]">
              <span>{item.detail}</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className={`mt-12 rounded-3xl p-6 sm:p-8 border flex flex-col sm:flex-row items-center justify-between gap-6 ${
        darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}>
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-lg font-bold">Ready to Begin Step 1?</h4>
          <p className="text-xs text-slate-500">Book your 100% free, no-obligation roof consultation today.</p>
        </div>
        <button
          onClick={onOpenQuoteModal}
          className="bg-[#0A4D9B] hover:bg-[#083a75] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg flex items-center gap-2"
        >
          <span>Schedule Free Consultation</span>
          <ArrowRight className="w-4 h-4 text-[#FFC107]" />
        </button>
      </div>
    </section>
  );
};
