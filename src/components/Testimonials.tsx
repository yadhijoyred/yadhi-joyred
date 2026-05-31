/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Automatic slide rotation
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 8000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const current = testimonials[currentIdx];

  return (
    <section id="testimoni" className="py-20 bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 rounded-full text-xs font-bold tracking-wider">
            TESTIMONI WALI SANTRI
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight font-serif">
            Kisah Sukses & Kesaksian Berkah
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Ungkapan syukur dan penilaian tulus dari para orang tua/wali santri serta alumni yang telah meniti perjalanan kesholehan di pondok kami.
          </p>
        </div>

        {/* Carousel Slider Block */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-neutral-50 dark:bg-neutral-950 p-6 md:p-10 rounded-3xl border border-neutral-150 dark:border-neutral-850 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Absolute Decorative Giant Quote Marks */}
          <div className="absolute right-8 top-6 text-neutral-200 dark:text-neutral-900 opacity-40 select-none z-0">
            <Quote className="h-28 w-28 stroke-[1.5]" />
          </div>

          <div className="relative z-10 w-full flex flex-col justify-between min-h-[220px]">
            {/* Animating Card Item inside */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Body Quote */}
                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 italic leading-relaxed font-normal">
                  "{current.quote}"
                </p>

                {/* Sub-identity footer profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-dashed border-neutral-200 dark:border-neutral-800">
                  <img
                    src={current.avatarUrl}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="h-12 w-12 rounded-full object-cover border-2 border-emerald-950/10"
                  />
                  <div>
                    <span className="block font-bold text-xs md:text-sm text-neutral-850 dark:text-white leading-tight font-serif">
                      {current.name}
                    </span>
                    <span className="block text-[10px] md:text-xs text-neutral-500 font-semibold mt-0.5">
                      {current.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls Bottom Row */}
            <div className="flex items-center justify-between mt-8 pt-4">
              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5 select-none">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIdx === idx ? 'w-6 bg-emerald-800 dark:bg-amber-400' : 'w-1.5 bg-neutral-300 dark:bg-neutral-800'
                    }`}
                    aria-label={`Lihat testimoni ke-${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev/Next Navigation buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-205 dark:border-neutral-800 text-neutral-600 hover:text-emerald-805 dark:text-neutral-400 dark:hover:text-amber-400 transition-colors shadow-sm active:scale-95"
                  aria-label="Testimoni sebelumnya"
                >
                  <ChevronLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-205 dark:border-neutral-800 text-neutral-600 hover:text-emerald-805 dark:text-neutral-400 dark:hover:text-amber-400 transition-colors shadow-sm active:scale-95"
                  aria-label="Testimoni selanjutnya"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
