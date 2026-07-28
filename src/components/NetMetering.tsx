import React from 'react';
import { Zap, Sun, ArrowRight, ShieldCheck, DollarSign, CheckCircle2, RefreshCw } from 'lucide-react';

interface NetMeteringProps {
  darkMode: boolean;
  onOpenQuoteModal: () => void;
}

export const NetMetering: React.FC<NetMeteringProps> = ({ darkMode, onOpenQuoteModal }) => {
  const netMeteringSteps = [
    {
      step: '01',
      title: 'Solar Generation',
      desc: 'Daytime sunlight strikes your rooftop Tier-1 monocrystalline panels, producing clean DC power.',
      icon: '☀️',
    },
    {
      step: '02',
      title: 'Instant Home Power',
      desc: 'Your smart hybrid inverter instantly converts DC to AC electricity, powering your ACs, lights, EV charger, and appliances.',
      icon: '🏡',
    },
    {
      step: '03',
      title: 'Grid Export Credit',
      desc: 'When solar generation exceeds home demand, excess kWh flows through your bi-directional meter back into the local power grid.',
      icon: '⚡',
    },
    {
      step: '04',
      title: 'Night Grid Draw',
      desc: 'At night or during heavy rain, your home draws electricity from the grid using accumulated daytime solar credits.',
      icon: '🌙',
    },
  ];

  return (
    <section id="net-metering" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container - Bento Style Banner */}
      <div className={`rounded-3xl border shadow-xl p-6 sm:p-10 lg:p-12 overflow-hidden relative ${
        darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-800' : 'bg-gradient-to-br from-slate-900 via-[#0A4D9B] to-slate-900 text-white border-slate-800'
      }`}>
        {/* Title */}
        <div className="max-w-3xl space-y-4 mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FFC107] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
            <Zap className="w-4 h-4 fill-current text-slate-950" />
            <span>Net Metering Interconnection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            How Net Metering Turns Your Roof Into an Energy Credit Generator
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
            Never waste a single watt of generated power. Bi-directional smart meters roll back your electric meter during peak sunny hours, building kilowatt-hour credits to offset night power usage.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {netMeteringSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between space-y-4 hover:bg-white/15 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-xs font-black bg-[#FFC107] text-slate-950 px-2.5 py-1 rounded-lg">
                    STEP {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-200 leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Automated Billing Offset</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout & Action */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-200">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white">Utility Net Metering Paperwork Included</div>
              <div className="text-slate-300 text-xs">Our team files all interconnection permits & utility agreements for PG&E, Edison, Oncor & more.</div>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto bg-[#2E8B57] hover:bg-emerald-700 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm transition-all hover:scale-105"
          >
            <span>Apply for Net Metering Approval</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
