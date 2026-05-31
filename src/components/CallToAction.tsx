/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, GraduationCap, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CallToActionProps {
  onOpenRegister: () => void;
  onOpenBrochure: () => void;
}

export default function CallToAction({ onOpenRegister, onOpenBrochure }: CallToActionProps) {
  return (
    <section className="relative py-24 overflow-hidden bg-neutral-950">
      {/* Absolute Decorative Golden and Green mesh filters */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-1/4 -left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-700/20 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-[400px] w-[400px] rounded-full bg-amber-600/10 blur-3xl"></div>
        {/* Subtle dot overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center text-white space-y-8">
        
        {/* Elegant top badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/20 px-3 py-1 bg-emerald-950/20 rounded-full select-none">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-[10px] md:text-xs font-bold text-amber-300 uppercase tracking-widest">
            Investasi Dunia & Akhirat Terbalik Mulia
          </span>
        </div>

        {/* Large Header Title */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight font-serif">
            Siapkan Putra-Putri Anda Menjadi <span className="text-amber-400">Generasi Qurani</span>
          </h2>
          <p className="text-xs md:text-sm text-emerald-200/80 max-w-lg mx-auto font-normal leading-relaxed">
            Menghafal Al-Qur'an mutqin sekali duduk, dihormati berkah akhlak kesantrian, mandiri mawas teknologi, dan siap memimpin masa depan umat Islam.
          </p>
        </div>

        {/* Buttons trigger panel */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-3">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-neutral-950 text-xs md:text-sm font-bold rounded-full transition-all hover:scale-[1.02] shadow-xl hover:shadow-amber-500/10 flex items-center justify-center gap-2"
          >
            <GraduationCap className="h-4 w-4" />
            Daftar Sekarang (On-line)
          </button>
          
          <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs md:text-sm border border-neutral-800 rounded-full transition-all flex items-center justify-center gap-2"
          >
            <BookOpen className="h-4 w-4 text-amber-400" />
            Lihat Brosur & Agenda
          </button>
        </div>

        {/* Footnote reassurance */}
        <div className="pt-6 border-t border-emerald-950/80 max-w-md mx-auto text-[10px] text-emerald-300/60 font-mono flex justify-center items-center gap-1.5">
          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
          <span>KUOTA BERBATAS: Maksimal 45 Santri Baru/Jenjang</span>
        </div>

      </div>
    </section>
  );
}
