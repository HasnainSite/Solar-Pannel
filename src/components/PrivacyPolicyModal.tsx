import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 text-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-6 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#2E8B57]" />
            <h3 className="font-extrabold text-lg">SolarTech Privacy Policy</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-300 leading-relaxed">
          <p>Effective Date: July 28, 2026</p>
          <h4 className="font-bold text-white text-sm">1. Data Collection</h4>
          <p>SolarTech Energy collects personal information such as name, phone number, email address, property location, and electricity bill details provided voluntarily via our free solar quote forms.</p>
          
          <h4 className="font-bold text-white text-sm">2. Use of Information</h4>
          <p>Your details are strictly used to model rooftop 3D shading analysis, prepare turnkey solar proposals, process utility net metering permits, and schedule site surveys.</p>

          <h4 className="font-bold text-white text-sm">3. Data Protection</h4>
          <p>We do not sell, rent, or lease customer records to third-party telemarketers. All stored data is encrypted using SSL/TLS 256-bit security standards.</p>
        </div>

        <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-end">
          <button onClick={onClose} className="bg-[#0A4D9B] text-white px-5 py-2 rounded-xl text-xs font-bold">
            Close Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};
