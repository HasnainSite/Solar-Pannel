import React, { useState } from 'react';
import { Calculator, DollarSign, Sun, TrendingUp, Leaf, Shield, ArrowRight, Download, CheckCircle, HelpCircle } from 'lucide-react';
import { CalculatorState } from '../types';

interface CalculatorProps {
  darkMode: boolean;
  onOpenQuoteWithDetails: (details: string) => void;
}

export const SolarCalculator: React.FC<CalculatorProps> = ({ darkMode, onOpenQuoteWithDetails }) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    propertyType: 'residential',
    monthlyBill: 250,
    sunlightHours: 5.5,
    roofAreaSqFt: 1200,
    utilityRatePerKwh: 0.28,
  });

  // Calculations
  const monthlyKwh = calcState.monthlyBill / calcState.utilityRatePerKwh;
  const yearlyKwhNeeded = monthlyKwh * 12;
  
  // System kW size = yearlyKwhNeeded / (sunlightHours * 365 * 0.82 system efficiency)
  const calculatedSystemKw = Math.round((yearlyKwhNeeded / (calcState.sunlightHours * 365 * 0.82)) * 10) / 10;
  
  // Panel count assuming 450W panels
  const panelsCount = Math.ceil((calculatedSystemKw * 1000) / 450);
  
  // Estimated system cost before tax credit ($2.80 per watt avg)
  const grossCost = calculatedSystemKw * 2800;
  const federalTaxCredit = grossCost * 0.30;
  const netCost = grossCost - federalTaxCredit;
  
  // Annual savings (assuming 90% bill offset)
  const annualSavings = Math.round(calcState.monthlyBill * 12 * 0.90);
  
  // 25-year cumulative savings assuming 3.5% annual utility rate escalation
  let total25YrSavings = 0;
  let currentAnnualSavings = annualSavings;
  for (let yr = 1; yr <= 25; yr++) {
    total25YrSavings += currentAnnualSavings;
    currentAnnualSavings *= 1.035;
  }
  total25YrSavings = Math.round(total25YrSavings - netCost);

  // Payback period
  const paybackYears = Math.round((netCost / annualSavings) * 10) / 10;

  // Environmental impact
  const co2TonsAvoidedPerYear = Math.round((yearlyKwhNeeded * 0.85) / 2000 * 10) / 10;
  const treesPlantedEquivalent = Math.round(co2TonsAvoidedPerYear * 45);

  const handleRequestQuote = () => {
    const summary = `${calcState.propertyType.toUpperCase()} Solar Estimate: $${calcState.monthlyBill}/mo bill -> Recommended ${calculatedSystemKw}kW system (${panelsCount} panels). Est. 25-Yr Net Savings: $${total25YrSavings.toLocaleString()}. Payback: ${paybackYears} yrs.`;
    onOpenQuoteWithDetails(summary);
  };

  return (
    <section id="calculator" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#6D28D9]/10 text-[#6D28D9] dark:bg-purple-500/10 dark:text-purple-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Calculator className="w-4 h-4 text-[#FFC107]" />
          <span>Interactive Savings Estimator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Calculate Your Solar Savings & ROI
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Adjust your electricity bill and property details to calculate recommended system size, 30% tax credit savings, payback timeline, and 25-year financial yield.
        </p>
      </div>

      {/* Calculator Card Container - Bento Style */}
      <div className={`rounded-3xl border shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${
        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        {/* Left Inputs Column (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
          <h3 className="text-xl font-bold flex items-center justify-between border-b pb-4 dark:border-slate-800">
            <span>Property & Energy Parameters</span>
            <span className="text-xs font-semibold text-[#2E8B57] bg-emerald-500/10 px-3 py-1 rounded-full">
              Real-time Calculations
            </span>
          </h3>

          {/* Property Type Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Property Type</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'residential', label: 'Residential', icon: '🏡' },
                { id: 'commercial', label: 'Commercial', icon: '🏢' },
                { id: 'industrial', label: 'Industrial', icon: '🏭' },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setCalcState({ ...calcState, propertyType: type.id as any })}
                  className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all flex flex-col items-center gap-1 ${
                    calcState.propertyType === type.id
                      ? 'bg-[#6D28D9] text-white border-[#6D28D9] shadow-md'
                      : darkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-lg">{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Slider 1: Monthly Bill */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Average Monthly Electricity Bill
              </label>
              <span className="text-xl font-extrabold text-[#6D28D9] dark:text-purple-400">
                ${calcState.monthlyBill} <span className="text-xs text-slate-400">/ mo</span>
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="2500"
              step="25"
              value={calcState.monthlyBill}
              onChange={(e) => setCalcState({ ...calcState, monthlyBill: Number(e.target.value) })}
              className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#6D28D9]"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>$50</span>
              <span>$500</span>
              <span>$1,000</span>
              <span>$2,500+</span>
            </div>
          </div>

          {/* Slider 2: Average Peak Sun Hours */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-500" />
                Daily Peak Sun Hours (Location Exposure)
              </label>
              <span className="text-base font-bold text-amber-600 dark:text-amber-400">
                {calcState.sunlightHours} hrs / day
              </span>
            </div>
            <input
              type="range"
              min="3.5"
              max="7.0"
              step="0.5"
              value={calcState.sunlightHours}
              onChange={(e) => setCalcState({ ...calcState, sunlightHours: Number(e.target.value) })}
              className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>3.5 hrs (Low / North)</span>
              <span>5.5 hrs (Avg / Central)</span>
              <span>7.0 hrs (High / Southwest)</span>
            </div>
          </div>

          {/* Select: Utility Rate per kWh */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Local Electricity Utility Rate ($ / kWh)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { rate: 0.18, label: 'Low ($0.18)' },
                { rate: 0.28, label: 'Average ($0.28)' },
                { rate: 0.42, label: 'High ($0.42)' },
              ].map((item) => (
                <button
                  key={item.rate}
                  onClick={() => setCalcState({ ...calcState, utilityRatePerKwh: item.rate })}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                    calcState.utilityRatePerKwh === item.rate
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : darkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Estimated Environmental Impact */}
          <div className={`p-4 rounded-2xl border flex items-center justify-between ${
            darkMode ? 'bg-emerald-950/30 border-emerald-800/40' : 'bg-emerald-50 border-emerald-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#2E8B57] flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#2E8B57]">Annual Environmental CO2 Offset</div>
                <div className="text-sm font-black text-slate-800 dark:text-white">
                  {co2TonsAvoidedPerYear} Tons CO2 / Year
                </div>
              </div>
            </div>
            <div className="text-right text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              🌳 ~{treesPlantedEquivalent} Trees Planted
            </div>
          </div>
        </div>

        {/* Right Output Results Column (5 Cols) - High Contrast Bento Panel */}
        <div className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${
          darkMode ? 'bg-slate-950 text-white' : 'bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] text-white'
        }`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Your System Specs & Savings
              </span>
              <span className="bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                30% Tax Credit Included
              </span>
            </div>

            {/* Recommended System Size & Panel Count */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-300">Recommended Capacity</div>
                <div className="text-2xl font-black text-[#FFC107] mt-1">{calculatedSystemKw} kW</div>
                <div className="text-[11px] text-slate-300 mt-0.5">{panelsCount} UltraPro 450W Panels</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <div className="text-[10px] uppercase font-bold text-slate-300">Est. Payback Period</div>
                <div className="text-2xl font-black text-emerald-400 mt-1">{paybackYears} Yrs</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Free power after {paybackYears} yrs</div>
              </div>
            </div>

            {/* Financial Breakdown Table */}
            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Estimated Gross Turnkey Cost:</span>
                <span className="font-semibold line-through opacity-70">${grossCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-amber-300 font-medium">
                <span>- 30% Federal Tax Credit (ITC):</span>
                <span className="font-bold">-${federalTaxCredit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-white font-bold border-t border-white/10 pt-2 text-sm sm:text-base">
                <span>Net Out-of-Pocket Investment:</span>
                <span className="text-emerald-400">${netCost.toLocaleString()}</span>
              </div>
            </div>

            {/* Huge 25-Year Net Savings Highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg space-y-1">
              <div className="text-xs uppercase font-extrabold tracking-wider text-emerald-100">
                Est. Net 25-Year Cumulative Savings
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white">
                ${total25YrSavings.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-100 font-medium pt-1">
                Includes projected 3.5% annual utility inflation & net metering credits.
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 space-y-3">
            <button
              onClick={handleRequestQuote}
              className="w-full bg-[#FFC107] hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] text-sm"
            >
              <span>Get Site Survey & Lock In Tax Credit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-300">
              * Estimate for simulation only. Final engineering survey verified on site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
