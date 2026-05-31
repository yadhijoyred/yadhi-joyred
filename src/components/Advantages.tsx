/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Heart, Home, Compass, ShieldCheck, Layers } from 'lucide-react';
import { advantages } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Heart,
  Home,
  Compass,
  ShieldCheck,
  Layers,
};

export default function Advantages() {
  return (
    <section id="keunggulan" className="py-20 bg-white dark:bg-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 rounded-full text-xs font-bold tracking-wider">
            KEUNGGULAN UTAMA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight font-serif">
            Alasan Memilih Nurul Huda
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Sinergi ekosistem terbaik demi memastikan bekal kompetensi keilmuan dan keluhuran perangai santri terbentuk seimbang.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((adv) => {
            const IconComponent = iconMap[adv.iconName] || Award;

            return (
              <div
                key={adv.id}
                className="group relative p-6 bg-neutral-50 dark:bg-neutral-950 border border-neutral-150 dark:border-neutral-850 rounded-3xl hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Decorative Icon Circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-850 dark:bg-emerald-950 dark:text-amber-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-emerald-900 group-hover:to-emerald-800 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="h-5.5 w-5.5" />
                  </div>

                  {/* Advantage Title and Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-neutral-850 dark:text-white group-hover:text-emerald-850 dark:group-hover:text-amber-400 transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                      {adv.description}
                    </p>
                  </div>
                </div>

                {/* Sub-decorative detail lines inside each card */}
                <div className="mt-4 pt-4 border-t border-neutral-200/50 dark:border-neutral-850/50 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider">Garansi Mutu</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
