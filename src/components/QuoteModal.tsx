import React, { useState } from 'react';
import { X, CheckCircle2, Sun, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNotes?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefilledNotes }) => {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('residential');
  const [monthlyBill, setMonthlyBill] = useState('$200 - $400 / mo');
  const [batteryNeeded, setBatteryNeeded] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState(prefilledNotes || '');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="max-w-xl w-full bg-slate-900 border border-slate-800 text-white rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Top Header Bar */}
        <div className="p-6 bg-gradient-to-r from-[#0A4D9B] to-[#083a75] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Sun className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Get Free Solar Quote</h3>
              <p className="text-[10px] text-amber-200">Lock in 30% Tax Credit • $0 Down Financing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold">Quote Proposal Request Received!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                A certified SolarTech energy designer is calculating your custom 3D roof shading model and will call you at <strong className="text-amber-400">{phone}</strong> shortly.
              </p>
              <button
                onClick={onClose}
                className="bg-[#2E8B57] text-white font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Step 1 of 2: Property & Energy Needs
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">Property Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['residential', 'commercial', 'industrial'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setPropertyType(type)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border capitalize transition-colors ${
                            propertyType === type
                              ? 'bg-[#0A4D9B] text-white border-[#0A4D9B]'
                              : 'bg-slate-800 border-slate-700 text-slate-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">Average Monthly Electric Bill</label>
                    <select
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs font-medium text-white focus:ring-2 focus:ring-[#0A4D9B]"
                    >
                      <option>$100 - $200 / mo</option>
                      <option>$200 - $400 / mo</option>
                      <option>$400 - $800 / mo</option>
                      <option>$800 - $1,500 / mo</option>
                      <option>$1,500+ / mo</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div>
                      <div className="text-xs font-bold text-white">Include Lithium Battery Backup?</div>
                      <div className="text-[10px] text-slate-400">Provides blackout power during storm outages</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setBatteryNeeded(!batteryNeeded)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors ${batteryNeeded ? 'bg-[#2E8B57]' : 'bg-slate-700'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${batteryNeeded ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-[#0A4D9B] hover:bg-[#083a75] text-white font-extrabold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <span>Next: Contact Info</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Step 2 of 2: Contact Information
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-300">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300">Specific Requests / Calculated Specs</label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Optional details or custom roof requirements..."
                      className="mt-1 w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 border border-slate-700 text-slate-300 font-bold py-3.5 rounded-xl text-xs"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-[#2E8B57] hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg text-xs flex items-center justify-center gap-2"
                    >
                      <span>Submit Quote Request</span>
                      <ShieldCheck className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
