import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/solarData';
import { ProductItem } from '../types';
import {
  Package,
  Search,
  Filter,
  Star,
  ShieldCheck,
  Zap,
  SlidersHorizontal,
  ArrowUpDown,
  CheckCircle2,
  X,
  FileText,
  ShoppingCart,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Info,
  Check
} from 'lucide-react';

interface ProductsPageProps {
  darkMode: boolean;
  onOpenQuoteWithProduct: (productName: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ darkMode, onOpenQuoteWithProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'efficiency'>('popular');
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [compareList, setCompareList] = useState<ProductItem[]>([]);
  const [isCompareDrawerOpen, setIsCompareDrawerOpen] = useState<boolean>(false);

  // Category filter list
  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'panels', label: 'Solar Panels' },
    { id: 'inverters', label: 'Smart Inverters' },
    { id: 'batteries', label: 'Battery Vaults' },
    { id: 'mounting', label: 'Mounting Racking' },
    { id: 'pumps', label: 'Solar Water Pumps' },
    { id: 'lights', label: 'Solar Street Lights' },
  ];

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        Object.values(item.specs).some((val) => val.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'efficiency') {
        const effA = parseFloat(a.efficiency || '0');
        const effB = parseFloat(b.efficiency || '0');
        return effB - effA;
      }
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  // Handle Toggle Compare
  const toggleCompare = (product: ProductItem) => {
    if (compareList.some((p) => p.id === product.id)) {
      setCompareList((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      if (compareList.length >= 3) {
        alert('You can compare up to 3 solar equipment products at a time.');
        return;
      }
      setCompareList((prev) => [...prev, product]);
    }
  };

  return (
    <div className={`pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 animate-fadeIn ${
      darkMode ? 'text-slate-100' : 'text-slate-900'
    }`}>
      {/* Page Title & Intro */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#6D28D9]/10 text-[#6D28D9] dark:bg-purple-500/10 dark:text-purple-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
          <Package className="w-4 h-4 text-[#FFC107]" />
          <span>Tier-1 Photovoltaic & Hardware Store</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Certified Solar Equipment & Microgrid Catalog
        </h1>
        <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Explore Bloomberg Tier-1 N-Type TOPCon panels, hybrid smart inverters, LiFePO4 energy storage units, and solar pumping hardware backed by 25-year warranties.
        </p>
      </div>

      {/* Filter, Search & Sort Control Bar */}
      <div className={`p-4 sm:p-6 rounded-3xl border shadow-xl space-y-4 ${
        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search 580W panels, inverters, batteries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-[#6D28D9] ${
                darkMode ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className={`p-2.5 rounded-2xl text-xs font-bold border focus:outline-none focus:ring-2 focus:ring-[#6D28D9] ${
                darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="popular">Most Popular & Featured</option>
              <option value="rating">Highest Customer Rating</option>
              <option value="efficiency">Highest Efficiency %</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#6D28D9] text-white shadow-md shadow-purple-900/20'
                  : darkMode
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-500">
        <span>Showing {filteredProducts.length} Solar Equipment Models</span>
        {compareList.length > 0 && (
          <button
            onClick={() => setIsCompareDrawerOpen(true)}
            className="text-[#6D28D9] dark:text-purple-400 underline font-black flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-amber-500" />
            Compare Selected ({compareList.length})
          </button>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const isCompared = compareList.some((p) => p.id === product.id);
          return (
            <div
              key={product.id}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between group ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div>
                {/* Image Header */}
                <div className="h-56 relative overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="bg-[#6D28D9] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {product.category}
                    </span>
                    {product.popular && (
                      <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                        Top Choice
                      </span>
                    )}
                  </div>

                  {product.efficiency && (
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-amber-400 text-[11px] font-black px-2.5 py-1 rounded-full backdrop-blur-md border border-amber-400/30 flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-amber-400" />
                      {product.efficiency}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 text-[11px]">({product.reviewsCount})</span>
                    </div>

                    <span className="text-xs font-black text-[#2E8B57]">
                      {product.priceRange}
                    </span>
                  </div>

                  <h3 className="text-base font-bold tracking-tight line-clamp-2 group-hover:text-[#6D28D9] dark:group-hover:text-purple-400 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Specs Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {Object.entries(product.specs).slice(0, 3).map(([key, val], idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg"
                      >
                        {key}: {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 space-y-3">
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold">
                  <button
                    onClick={() => toggleCompare(product)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      isCompared ? 'text-amber-500 font-bold' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      isCompared ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-400'
                    }`}>
                      {isCompared && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedProductModal(product)}
                    className="text-[#6D28D9] dark:text-purple-400 font-extrabold hover:underline flex items-center gap-1"
                  >
                    <span>View Specs</span>
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => onOpenQuoteWithProduct(product.name)}
                  className="w-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold py-3 rounded-xl shadow-md text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-purple-900/20"
                >
                  <ShoppingCart className="w-4 h-4 text-amber-400" />
                  <span>Request Product Quote</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Comparison Drawer Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white border border-slate-800 p-4 rounded-3xl shadow-2xl flex items-center gap-4 sm:gap-6 animate-fadeIn max-w-xl w-[92%]">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">{compareList.length} Items Selected</div>
              <div className="text-[10px] text-slate-400 hidden sm:block">Compare technical datasheets side-by-side</div>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setIsCompareDrawerOpen(true)}
              className="bg-[#2E8B57] hover:bg-emerald-700 text-white font-black px-4 py-2 rounded-xl text-xs whitespace-nowrap shadow-md"
            >
              Compare Now
            </button>
            <button
              onClick={() => setCompareList([])}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Side-By-Side Comparison Modal */}
      {isCompareDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className={`max-w-4xl w-full rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="p-6 bg-[#6D28D9] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <h3 className="font-extrabold text-lg">Solar Equipment Side-By-Side Comparison</h3>
              </div>
              <button onClick={() => setIsCompareDrawerOpen(false)} className="p-1.5 rounded-full hover:bg-white/10">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className={`grid grid-cols-${compareList.length + 1} gap-4 text-xs`}>
                <div className="font-bold text-slate-400 uppercase tracking-wider space-y-6 pt-12">
                  <div>Model Name</div>
                  <div>Category</div>
                  <div>Price Range</div>
                  <div>Efficiency / Output</div>
                  <div>Warranty</div>
                  <div>Action</div>
                </div>

                {compareList.map((item) => (
                  <div key={item.id} className="space-y-6 p-3 rounded-2xl bg-slate-100 dark:bg-slate-800">
                    <div className="h-10 font-bold line-clamp-2 text-[#6D28D9] dark:text-purple-400">{item.name}</div>
                    <div className="capitalize font-semibold">{item.category}</div>
                    <div className="font-extrabold text-emerald-600 dark:text-emerald-400">{item.priceRange}</div>
                    <div className="font-bold text-amber-500">{item.efficiency || 'Standard Output'}</div>
                    <div className="text-slate-500">{item.warranty}</div>
                    <div>
                      <button
                        onClick={() => {
                          setIsCompareDrawerOpen(false);
                          onOpenQuoteWithProduct(item.name);
                        }}
                        className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold px-3 py-1.5 rounded-lg text-[10px] w-full shadow-sm"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detailed Product Specs Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className={`max-w-2xl w-full rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="relative h-64 bg-slate-950">
              <img src={selectedProductModal.image} alt={selectedProductModal.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="bg-[#6D28D9] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
                  {selectedProductModal.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold">{selectedProductModal.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between text-xs border-b pb-3 dark:border-slate-800">
                <span className="text-slate-400">Estimated Price: <strong className="text-emerald-500 font-extrabold">{selectedProductModal.priceRange}</strong></span>
                <span className="text-amber-500 font-bold">{selectedProductModal.warranty}</span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technical Description</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                  {selectedProductModal.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Datasheet Engineering Specifications</h4>
                <div className="rounded-2xl border divide-y dark:border-slate-800 dark:divide-slate-800 text-xs">
                  {Object.entries(selectedProductModal.specs).map(([k, v], idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between">
                      <span className="font-bold text-slate-400">{k}</span>
                      <span className="font-extrabold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setSelectedProductModal(null)}
                  className="w-1/3 border border-slate-300 dark:border-slate-700 font-bold py-3 rounded-xl text-xs"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedProductModal.name;
                    setSelectedProductModal(null);
                    onOpenQuoteWithProduct(name);
                  }}
                  className="w-2/3 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20"
                >
                  <ShoppingCart className="w-4 h-4 text-amber-400" />
                  <span>Request Turnkey Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
