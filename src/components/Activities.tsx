/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { activities } from '../data';
import { Sparkles, X, Layers, Clock, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);

  const categories = ['Semua', 'Tahfidz', 'Kajian', 'Wisuda', 'Perlombaan', 'Kegiatan Sosial'];

  const filtered = activeCategory === 'Semua'
    ? activities
    : activities.filter((act) => act.category === activeCategory);

  return (
    <section id="kegiatan" className="py-20 bg-white dark:bg-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 rounded-full text-xs font-bold tracking-wider">
            GALERI KEGIATAN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight font-serif">
            Aktivitas Harian & Prestasi Santri
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Simak berbagai perhelatan ilmu, kompetisi, tadabur alam, kajian kitab diniyah, serta bakti sosial kemanusiaan santri kami.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-emerald-900 to-emerald-800 text-white shadow-md dark:from-emerald-950 dark:to-emerald-900'
                  : 'bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-350 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Activities Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedActivity(item)}
              className="group cursor-pointer bg-neutral-50 dark:bg-neutral-950 rounded-3xl overflow-hidden border border-neutral-150 dark:border-neutral-850 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual Category badge */}
                <div className="absolute top-3 left-3 bg-emerald-850/95 dark:bg-emerald-950/95 py-1 px-2.5 rounded-full text-[9px] font-bold text-white tracking-widest uppercase border border-amber-400/20">
                  {item.category}
                </div>

                {/* Cover Gradient overlay description */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                  <div className="text-white space-y-1 transform group-hover:translate-y-[-2px] transition-transform">
                    <h4 className="text-sm font-bold tracking-tight line-clamp-1 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-neutral-300 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox details modal and full description output */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedActivity(null)}
              className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 shadow-2xl"
            >
              <button
                onClick={() => setSelectedActivity(null)}
                className="absolute top-4 right-4 z-20 rounded-full bg-neutral-950/70 p-1.5 text-white hover:bg-neutral-950/95"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative aspect-4/3 w-full bg-neutral-950">
                <img
                  src={selectedActivity.imageUrl}
                  alt={selectedActivity.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-800 text-white text-[9px] font-mono tracking-widest px-2.5 py-1 rounded">
                    {selectedActivity.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-extrabold text-neutral-900 dark:text-white">
                    {selectedActivity.title}
                  </h3>
                  <div className="h-1 w-12 bg-amber-400 mt-1 rounded"></div>
                </div>

                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                  {selectedActivity.description}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-dotted border-neutral-200 dark:border-neutral-800 pt-4 text-[11px]">
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                    <Clock className="h-3.5 w-3.5 text-emerald-800 dark:text-amber-400" />
                    <span>Diperbarui Mei 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                    <Award className="h-3.5 w-3.5 text-emerald-800 dark:text-amber-400" />
                    <span>Divisi Kemahasiswaan</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
