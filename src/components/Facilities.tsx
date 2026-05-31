/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { facilities } from '../data';
import { Maximize2, X, PlusCircle, Bookmark, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Facilities() {
  const [filter, setFilter] = useState<string>('Semua');
  const [selectedFacility, setSelectedFacility] = useState<typeof facilities[0] | null>(null);

  const categories = ['Semua', 'Spiritual', 'Akademik', 'Residensial', 'Olahraga'];

  const filteredFacilities = filter === 'Semua'
    ? facilities
    : facilities.filter((f) => f.category === filter);

  return (
    <section id="fasilitas" className="py-20 bg-neutral-50 dark:bg-neutral-950 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 rounded-full text-xs font-bold tracking-wider">
            FASILITAS MODERN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight font-serif">
            Sarana Penunjang Bertaraf Tinggi
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Guna mendukung fokus belajar dan kenyamanan menetap santri, sarana prasarana kami dibangun dengan standar kenyamanan dan higienitas tinggi.
          </p>
        </div>

        {/* Categories Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-emerald-900 to-emerald-800 text-white shadow-md dark:from-emerald-950 dark:to-emerald-900'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-350 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setSelectedFacility(fac)}
              className="group cursor-pointer relative bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-150 dark:border-neutral-800 hover:shadow-xl transition-all duration-300"
            >
              {/* Picture backdrop */}
              <div className="relative aspect-video overflow-hidden bg-neutral-950">
                <img
                  src={fac.imageUrl}
                  alt={fac.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-550 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
                
                {/* Maximize Icon Overlay */}
                <div className="absolute inset-0 bg-emerald-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-white/90 dark:bg-neutral-900/90 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="h-4.5 w-4.5 text-emerald-800 dark:text-amber-400" />
                  </div>
                </div>

                {/* Tag Category top right */}
                <span className="absolute top-3 right-3 bg-white/95 dark:bg-neutral-950/95 text-[9px] font-bold py-1 px-2.5 rounded-full border border-neutral-100 dark:border-neutral-800 text-emerald-800 dark:text-amber-400 font-mono tracking-wider uppercase">
                  {fac.category}
                </span>
              </div>

              {/* Descriptions body */}
              <div className="p-5 space-y-2">
                <h4 className="text-sm font-bold text-neutral-850 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-amber-400 transition-colors">
                  {fac.name}
                </h4>
                <p className="text-[11px] text-neutral-550 dark:text-neutral-400 leading-relaxed line-clamp-2">
                  {fac.description}
                </p>
                <div className="pt-2 text-[10px] font-bold text-emerald-700 dark:text-amber-400 inline-flex items-center gap-1">
                  <span>Lihat Selengkapnya</span>
                  <PlusCircle className="h-3 w-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Facility Details Lightbox Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop wrapper */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFacility(null)}
              className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm"
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 shadow-2xl"
            >
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 z-20 rounded-full bg-neutral-950/70 p-1.5 text-white hover:bg-neutral-950/90 shadow transition-colors"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="relative aspect-video w-full bg-neutral-950">
                <img
                  src={selectedFacility.imageUrl}
                  alt={selectedFacility.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-800 text-white text-[9px] font-mono tracking-widest px-2.5 py-1 rounded">
                    {selectedFacility.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white">
                    {selectedFacility.name}
                  </h3>
                  <div className="h-1 w-12 bg-amber-400 mt-1 rounded"></div>
                </div>

                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-dotted border-neutral-200 dark:border-neutral-800 pt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-emerald-700 dark:text-amber-400" />
                    <div>
                      <span className="block text-[9px] text-neutral-400 uppercase font-bold">Standardisasi</span>
                      <span className="font-semibold text-neutral-700 dark:text-neutral-200">ISO-9001 Pesantren</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="h-4 w-4 text-emerald-700 dark:text-amber-400" />
                    <div>
                      <span className="block text-[9px] text-neutral-400 uppercase font-bold">Aksesibilitas</span>
                      <span className="font-semibold text-neutral-700 dark:text-neutral-200">Terbuka 24 Jam</span>
                    </div>
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
