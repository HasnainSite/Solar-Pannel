import React from 'react';
import { X, FileText } from 'lucide-react';

interface TermsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 text-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-6 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h3 className="font-extrabold text-lg">Terms & Conditions</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>Effective Date: July 28, 2026</p>
          <h4 className="font-bold text-white text-sm">1. Solar Estimates & Quotations</h4>
          <p>Estimates provided by the online ROI calculator are for preliminary planning purposes. Final contract pricing depends on physical site inspection, structural roof engineering, and utility company interconnection standards.</p>

          <h4 className="font-bold text-white text-sm">2. Warranties & Guarantee</h4>
          <p>SolarTech Energy provides a 25-Year Linear Power Output Warranty on Tier-1 panels, 12-Year Warranty on Inverters, and 10-Year Workmanship Warranty on roof flashings and racking.</p>

          <h4 className="font-bold text-white text-sm">3. Permitting & Utility Approvals</h4>
          <p>SolarTech Energy manages municipal permits and utility Net Metering agreements on behalf of property owners.</p>
        </div>

        <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-end">
          <button onClick={onClose} className="bg-[#0A4D9B] text-white px-5 py-2 rounded-xl text-xs font-bold">
            Close Terms & Conditions
          </button>
        </div>
      </div>
    </div>
  );
};
