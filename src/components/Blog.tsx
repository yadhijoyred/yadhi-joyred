/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { articles } from '../data';
import { Clock, User, ArrowRight, X, Calendar, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  return (
    <section id="artikel" className="py-20 bg-neutral-50 dark:bg-neutral-950 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 rounded-full text-xs font-bold tracking-wider">
            ARTIKEL TERBARU
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight font-serif">
            Kabar Pesantren & Opini Ilmiah
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Ikuti kupasan materi keislaman, tips menghafal Al-Qur'an, wawasan metode kitab diniyah, serta berita prestasi santri ter-aktual.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="group cursor-pointer bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-150 dark:border-neutral-800 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail card */}
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category tag bubble overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-neutral-950/95 py-1 px-2.5 rounded-full text-[10px] font-bold text-emerald-800 dark:text-amber-400 border border-neutral-100 dark:border-neutral-800 uppercase font-mono tracking-wider">
                    {item.category}
                  </div>
                </div>

                {/* Card Content body */}
                <div className="p-6 space-y-3">
                  {/* Date & Time info row */}
                  <div className="flex items-center gap-4 text-[10px] md:text-xs text-neutral-550 dark:text-neutral-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-emerald-700 dark:text-amber-400" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-emerald-700 dark:text-amber-400" />
                      {item.readTime} Baca
                    </span>
                  </div>

                  {/* Title and short summary excerpt */}
                  <h3 className="text-sm md:text-base font-bold text-neutral-850 dark:text-white leading-snug group-hover:text-emerald-805 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] md:text-xs text-neutral-550 dark:text-neutral-400 leading-relaxed font-normal line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Card read CTA row */}
              <div className="p-6 pt-0 mt-2 border-t border-dotted border-neutral-150 dark:border-neutral-850/50 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-bold truncate max-w-[70%]">
                  Oleh {item.author.split(',')[0]}
                </span>
                <span className="text-[11px] font-bold text-emerald-805 dark:text-amber-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-transform shrink-0">
                  <span>Selengkapnya</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Blog Detail Article Lightbox Reader View */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 shadow-2xl"
            >
              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 rounded-full bg-neutral-950/70 p-1.5 text-white hover:bg-neutral-950 shadow transition-colors"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Heading Picture Banner */}
              <div className="relative aspect-16/8 w-full bg-neutral-950">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-emerald-800 text-white text-[9px] font-mono tracking-widest px-2.5 py-1 rounded uppercase">
                    {selectedArticle.category}
                  </span>
                </div>
              </div>

              {/* Article content (scrollable) */}
              <div className="max-h-[58vh] overflow-y-auto p-6 md:p-8 space-y-6">
                
                {/* Meta details */}
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-extrabold text-neutral-900 dark:text-white leading-snug">
                    {selectedArticle.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-emerald-800 dark:text-amber-400" />
                      {selectedArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-emerald-800 dark:text-amber-400" />
                      {selectedArticle.readTime} Bacaan
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-4 w-4 text-emerald-800 dark:text-amber-400" />
                      {selectedArticle.author}
                    </span>
                  </div>
                </div>

                {/* Article Body Essay text */}
                <div className="border-t border-neutral-100 dark:border-neutral-900 pt-5 text-xs md:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4 font-normal tracking-wide whitespace-pre-line">
                  {selectedArticle.content}
                </div>

                {/* Disclaimer/Ref credits */}
                <div className="border-t border-dotted border-neutral-200 dark:border-neutral-800 pt-4 flex items-center gap-2.5 text-[10px] text-neutral-450 font-mono">
                  <BookOpen className="h-4 w-4 text-amber-500" />
                  <span>Kajian Diniyah & Dakwah Siber Al-Qur'an Nurul Huda © 2026.</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
