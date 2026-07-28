import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { QuoteFormData } from '../types';

interface ContactProps {
  darkMode: boolean;
  prefilledDetails?: string;
}

export const Contact: React.FC<ContactProps> = ({ darkMode, prefilledDetails }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    monthlyBill: '$200 - $400',
    address: '',
    message: prefilledDetails || '',
    preferredContact: 'phone',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setFormError('Please fill out your name, email, and phone number.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#6D28D9]/10 text-[#6D28D9] dark:bg-purple-500/10 dark:text-purple-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Phone className="w-4 h-4 text-[#FFC107]" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Request Your Free Solar Assessment
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Connect directly with our master energy engineers for an accurate rooftop analysis, custom quote, or phone consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form Box (7 Cols) */}
        <div className={`lg:col-span-7 rounded-3xl border p-6 sm:p-8 shadow-xl ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Assessment Request Received!</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Thank you, <strong className="text-slate-800 dark:text-white">{formData.name}</strong>. A certified SolarTech energy engineer will contact you via {formData.preferredContact} within 2 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 bg-[#0A4D9B] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold border-b pb-3 dark:border-slate-800">
                Contact & Site Info
              </h3>

              {formError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`mt-1 w-full p-3 rounded-xl text-xs font-medium border focus:ring-2 focus:ring-[#6D28D9] ${
                      darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`mt-1 w-full p-3 rounded-xl text-xs font-medium border focus:ring-2 focus:ring-[#6D28D9] ${
                      darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`mt-1 w-full p-3 rounded-xl text-xs font-medium border focus:ring-2 focus:ring-[#6D28D9] ${
                      darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className={`mt-1 w-full p-3 rounded-xl text-xs font-medium border focus:ring-2 focus:ring-[#6D28D9] ${
                      darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    <option value="residential">Residential Home</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="industrial">Industrial Facility</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Installation Address or Zip Code</label>
                <input
                  type="text"
                  placeholder="100 Solar Way, San Jose, CA 95112"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`mt-1 w-full p-3 rounded-xl text-xs font-medium border focus:ring-2 focus:ring-[#6D28D9] ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase">Project Notes / Inquiry</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your roof size, battery storage needs, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`mt-1 w-full p-3 rounded-xl text-xs font-medium border focus:ring-2 focus:ring-[#6D28D9] ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-transform hover:scale-[1.01] text-xs sm:text-sm flex items-center justify-center gap-2 shadow-purple-900/20"
              >
                <Send className="w-4 h-4 text-[#FFC107]" />
                <span>Submit Free Assessment Request</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Info & Map Box (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Contact Info Bento */}
          <div className={`rounded-3xl border p-6 space-y-4 shadow-sm ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h3 className="text-lg font-bold">Office Headquarters</h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6D28D9] dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">San Jose Headquarters</div>
                  <div className="text-slate-500">100 Clean Energy Blvd, Suite 400, San Jose, CA 95112</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2E8B57] flex-shrink-0" />
                <div>
                  <div className="font-bold">Phone Number</div>
                  <a href="tel:18005557652" className="text-[#6D28D9] dark:text-purple-400 font-extrabold hover:underline">
                    +1 (800) 555-SOLAR (7652)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <div>
                  <div className="font-bold">WhatsApp Direct Line</div>
                  <a href="https://wa.me/18005557652" target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">
                    +1 (800) 555-7652
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div>
                  <div className="font-bold">Email Inquiries</div>
                  <a href="mailto:contact@solartech-energy.com" className="text-slate-600 dark:text-slate-300 hover:underline">
                    contact@solartech-energy.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <div>
                  <div className="font-bold">Business Hours</div>
                  <div className="text-slate-500">Mon - Sat: 8:00 AM - 7:00 PM PST</div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Interactive Google Map Component */}
          <div className="rounded-3xl border overflow-hidden shadow-md relative h-64 bg-slate-200 dark:bg-slate-800">
            <iframe
              title="SolarTech Energy Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: darkMode ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
              loading="lazy"
              src="https://maps.google.com/maps?q=San%20Jose%20California%20Clean%20Energy&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
            <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-[11px] font-bold shadow-md flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#6D28D9] dark:text-purple-400" />
              <span>SolarTech Energy HQ • San Jose, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
