import React, { useState } from 'react';
import { Search, ArrowRight, X, Calendar, Clock, User, Newspaper } from 'lucide-react';
import { ARTICLES } from '../data/radioData.ts';
import { Article } from '../types.ts';

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  const categories = [
    'Semua',
    'Malang',
    'News',
    'Lifestyle',
    'Inspirasi',
    'Religi',
    'UMKM',
    'Kesehatan',
    'Komunitas',
  ];

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'Semua' || article.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="berita" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700">
              <Newspaper className="w-4 h-4 text-amber-500" />
              <span>BERITA & ARTIKEL TERKINI</span>
              <span aria-hidden="true">·</span>
              <span>MALANG RAYA</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Kabar Desimal
            </h2>
            <p className="text-slate-600 text-base max-w-xl">
              Rangkuman informasi aktual, kisah inspiratif UMKM, kabar komunitas, dan wawasan positif seputar Malang Raya dan sekitarnya.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari kabar atau topik..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
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
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <Newspaper className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="font-display font-bold text-lg text-slate-800">Tidak ada artikel ditemukan</h4>
            <p className="text-xs text-slate-500 mt-1">Coba kata kunci lain atau pilih kategori Semua.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Featured Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {article.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Unboxed metadata discipline */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {article.date}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2.5">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setReadingArticle(article)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-700 text-xs font-bold border border-slate-200 group-hover:border-blue-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Article Reading Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <span>{readingArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>Kabar Desimal</span>
              </div>
              <button
                onClick={() => setReadingArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup artikel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
                {readingArticle.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  {readingArticle.author}
                </span>
                <span aria-hidden="true">·</span>
                <span>{readingArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{readingArticle.readTime}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              {readingArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 italic">Radio Desimal 89,5 FM — Sahabat Inspirasimu</span>
              <button
                onClick={() => setReadingArticle(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
