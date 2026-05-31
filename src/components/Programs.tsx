/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Languages, GraduationCap, Users, Tv, Scroll, Check, ArrowUpRight } from 'lucide-react';
import { programs } from '../data';

// Map string icon names from data to actual Lucide component icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Languages,
  GraduationCap,
  Users,
  Tv,
  Scroll,
};

interface ProgramsProps {
  onOpenRegister: () => void;
}

export default function Programs({ onOpenRegister }: ProgramsProps) {
  return (
    <section id="program" className="py-20 bg-neutral-50 dark:bg-neutral-950 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 rounded-full text-xs font-bold tracking-wider">
            PROGRAM UNGGULAN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight font-serif">
            Kurikulum Terbimbing Menuju Kematangan Hakiki
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Dirancang secara berjenjang guna menyeimbangkan khazanah ukhrawi dan kesiapan teknologi masa depan santri secara komprehensif.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => {
            const IconComponent = iconMap[program.iconName] || BookOpen;

            return (
              <div
                key={program.id}
                className="group relative bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-150 dark:border-neutral-800 hover:shadow-xl hover:shadow-emerald-950/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-800 to-amber-500 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Top Bar with Icon & Arabic */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 font-bold group-hover:bg-gradient-to-br group-hover:from-emerald-900 group-hover:to-emerald-800 group-hover:text-white transition-all">
                      <IconComponent className="h-5.5 w-5.5" />
                    </div>
                    {/* Arabic Caligraphy */}
                    <span className="text-sm font-semibold text-emerald-850 dark:text-amber-400/80 font-mono tracking-tight leading-none pr-1">
                      {program.arabicTitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 mb-5">
                    <h3 className="text-base font-bold text-neutral-850 dark:text-white group-hover:text-emerald-850 dark:group-hover:text-amber-400 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                      {program.description}
                    </p>
                  </div>

                  {/* Features / Bullets */}
                  <ul className="space-y-2 pt-3 border-t border-dotted border-neutral-200 dark:border-neutral-850">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="h-4 w-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center shrink-0 mt-0.5 text-emerald-805 dark:text-amber-400">
                          <Check className="h-2.5 w-2.5 font-black" />
                        </div>
                        <span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-350">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions footer */}
                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <button
                    onClick={onOpenRegister}
                    className="w-full py-2.5 px-4 rounded-full bg-neutral-50 dark:bg-neutral-950 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-bold flex items-center justify-center gap-1 hover:bg-emerald-900 hover:text-white dark:hover:text-white group-hover:bg-emerald-900 group-hover:text-white transition-all shadow-sm"
                  >
                    <span>Daftar Kelas ini</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
