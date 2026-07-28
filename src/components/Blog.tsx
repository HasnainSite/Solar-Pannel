import React, { useState } from 'react';
import { BLOGS } from '../data/solarData';
import { BlogPost } from '../types';
import { BookOpen, Clock, User, ArrowRight, X, Tag } from 'lucide-react';

interface BlogProps {
  darkMode: boolean;
}

export const BlogSection: React.FC<BlogProps> = ({ darkMode }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#2E8B57]/10 text-[#2E8B57] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-4 h-4 text-[#2E8B57]" />
          <span>Solar Insights & News</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Latest Solar News, Policies & Buyer Guides
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Stay informed on tax credit updates, net metering regulations, solar cell technology breakthroughs, and battery storage guides.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOGS.map((post) => (
          <article
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className={`rounded-3xl border overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="h-48 relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0A4D9B] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-[#2E8B57]" />
                    {post.author.split(',')[0]}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-500" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold tracking-tight line-clamp-2 group-hover:text-[#0A4D9B] dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between text-xs font-bold text-[#0A4D9B] dark:text-blue-400">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {/* Blog Full Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className={`max-w-3xl w-full rounded-3xl border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <div className="relative h-64 sm:h-72">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="bg-[#2E8B57] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b pb-4 dark:border-slate-800">
                <span>By {selectedPost.author}</span>
                <span>{selectedPost.date} • {selectedPost.readTime}</span>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Tag className="w-4 h-4 text-slate-400" />
                {selectedPost.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-[#0A4D9B] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
