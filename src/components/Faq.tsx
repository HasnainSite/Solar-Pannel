import React, { useState } from 'react';
import { FAQS } from '../data/solarData';
import { HelpCircle, Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqProps {
  darkMode: boolean;
}

export const FaqSection: React.FC<FaqProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'cost', label: 'Cost & Savings' },
    { id: 'installation', label: 'Installation' },
    { id: 'netmetering', label: 'Net Metering' },
    { id: 'maintenance', label: 'Maintenance' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-[#0A4D9B]/10 text-[#0A4D9B] dark:bg-blue-500/10 dark:text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-4 h-4 text-[#FFC107]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Everything You Need to Know About Going Solar
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Got questions about solar tax credits, net metering, installation timelines, or battery storage? We have answers.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="max-w-4xl mx-auto mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0A4D9B] text-white shadow-md'
                    : darkMode
                    ? 'bg-slate-800 text-slate-300'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-[#0A4D9B] ${
                darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-2xl">
            <p className="text-slate-500 text-xs">No matching questions found.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                    isOpen ? 'bg-[#0A4D9B] text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
