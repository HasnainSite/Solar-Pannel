import React, { useState } from 'react';
import { PRODUCTS } from '../data/solarData';
import { ProductItem } from '../types';
import { Search, Star, ShieldCheck, Filter, ArrowRight, X, Sparkles, Check, CheckCircle2 } from 'lucide-react';

interface ProductsProps {
  darkMode: boolean;
  onOpenQuoteWithProduct: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ darkMode, onOpenQuoteWithProduct }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'panels', label: 'Solar Panels' },
    { id: 'inverters', label: 'Smart Inverters' },
    { id: 'batteries', label: 'Lithium Batteries' },
    { id: 'mounting', label: 'Mounting & Rails' },
    { id: 'pumps', label: 'Solar Pumps' },
    { id: 'lights', label: 'Solar Street Lights' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-4 h-4 text-[#FFC107]" />
          <span>Tier-1 Equipment Catalog</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Premium Hardware & Solar Equipment
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          We partner exclusively with top Bloomberg Tier-1 solar manufacturers to supply long-lasting, high-efficiency photovoltaics, hybrid inverters, and lithium storage units.
        </p>
      </div>

      {/* Filters & Search Bar */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0A4D9B] text-white shadow-md shadow-blue-900/20'
                    : darkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search solar panels, batteries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-[#0A4D9B] transition-all ${
                darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
          <p className="text-slate-500 font-semibold text-sm">No solar products found matching "{searchQuery}".</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-3 text-xs font-bold text-[#0A4D9B] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div>
                {/* Image */}
                <div className="h-48 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {prod.popular && (
                      <span className="bg-[#FFC107] text-slate-950 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
                        ★ Popular Choice
                      </span>
                    )}
                    {prod.efficiency && (
                      <span className="bg-[#2E8B57] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                        {prod.efficiency}
                      </span>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span className="capitalize text-[#0A4D9B] font-extrabold">{prod.category}</span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {prod.rating} ({prod.reviewsCount})
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight line-clamp-1 group-hover:text-[#0A4D9B] dark:group-hover:text-blue-400 transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm">{prod.priceRange}</span>
                    <span className="text-slate-400 font-medium text-[11px]">{prod.warranty}</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-5 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  View Full Specs
                </button>
                <button
                  onClick={() => onOpenQuoteWithProduct(prod.name)}
                  className="bg-[#0A4D9B] hover:bg-[#083a75] text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1"
                >
                  <span>Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className={`max-w-2xl w-full rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="relative h-60">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-[#FFC107] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Technical Specifications
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  {selectedProduct.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Technical Specifications Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Product Specifications & Ratings
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-medium">{key}:</span>
                      <span className="font-bold text-slate-800 dark:text-white">{value}</span>
                    </div>
                  ))}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Warranty Coverage:</span>
                    <span className="font-bold text-[#2E8B57]">{selectedProduct.warranty}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Estimated Price:</span>
                    <span className="font-bold text-[#0A4D9B] dark:text-blue-400">{selectedProduct.priceRange}</span>
                  </div>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-xl border text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedProduct.name;
                    setSelectedProduct(null);
                    onOpenQuoteWithProduct(name);
                  }}
                  className="bg-[#0A4D9B] hover:bg-[#083a75] text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2"
                >
                  <span>Request Wholesale Quote</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
