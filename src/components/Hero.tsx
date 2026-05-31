/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Calendar, ArrowRight, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { stats } from '../data';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenBrochure: () => void;
}

export default function Hero({ onOpenRegister, onOpenBrochure }: HeroProps) {
  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-950/20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-950/10"></div>
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015] bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Status Batch */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-1.5 rounded-full"
            >
              <Sparkles className="h-4 w-4 text-emerald-700 dark:text-amber-400" />
              <span className="text-[10px] md:text-xs font-bold text-emerald-800 dark:text-amber-200 uppercase tracking-wider">
                Penerimaan Santri Baru TA 2026/2027 Dibuka
              </span>
            </motion.div>

            {/* Great Title Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 dark:text-white leading-[1.12] tracking-tight font-serif"
              >
                Membangun <span className="text-emerald-850 dark:text-amber-400">Generasi Qurani</span> untuk Masa Depan Umat
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Membentuk santri hafizh Al-Qur'an mutqin 30 Juz, cakap berbahasa Arab/Inggris aktif, menguasai ilmu sains dan sains modern, serta teguh mengamalkan akhlak salafiyah.
              </motion.p>
            </div>

            {/* CTAs buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={onOpenRegister}
                className="px-8 py-3.5 bg-gradient-to-r from-emerald-850 to-emerald-800 hover:opacity-95 font-bold text-xs md:text-sm text-white rounded-full shadow-lg shadow-emerald-900/20 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                Daftar Sekarang
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <a
                href="https://wa.me/6281234567890?text=Assalamu%27alaikum%20Pondok%20Nurul%20Huda%2C%20saya%20tertarik%20bertanya%20mengenai%20PSB"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 bg-white hover:bg-neutral-50 text-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-250 font-bold text-xs md:text-sm rounded-full border border-neutral-200 dark:border-neutral-800 active:scale-95 transition-all text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="h-4 w-4 text-emerald-800 dark:text-amber-400" />
                Hubungi Kami
              </a>
            </motion.div>

            {/* Quick stats items */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <span className="block text-2xl font-black text-emerald-800 dark:text-amber-400 font-mono tracking-tight">{stat.value}</span>
                  <span className="block text-[10px] md:text-xs font-semibold text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Floating Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            {/* Main Visual Photo Wrapper */}
            <div className="relative w-full max-w-sm md:max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-[3px] border-emerald-900/10 dark:border-neutral-800 bg-emerald-950">
              <img
                src="/src/assets/images/santri_reading_1780192957889.png"
                alt="Santri menghafal Al-Qur'an di Nurul Huda"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover select-none object-center"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/20"></div>

              {/* Float Badge Accredited */}
              <div className="absolute top-4 left-4 bg-emerald-850/90 dark:bg-emerald-950/95 text-white py-1.5 px-3 rounded-full text-[10px] font-bold border border-amber-400/40 flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                <span>AKREDITASI "A"</span>
              </div>

              {/* Floating Label bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-neutral-950/95 p-3 rounded-2xl flex items-center justify-between border border-neutral-100 dark:border-neutral-800 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-emerald-800 dark:text-amber-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#237503] dark:text-[#237503] leading-tight">Ujian Beasiswa Akademik</span>
                    <span className="block text-[8px] text-neutral-500 font-medium">Gelombang I: Juni 2026</span>
                  </div>
                </div>
                <button onClick={onOpenBrochure} className="text-amber-500 hover:text-amber-600">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Behind Background Picture (Decorative offset) */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full max-w-sm md:max-w-md aspect-square rounded-3xl border-2 border-emerald-700/20 bg-emerald-950/5 dark:bg-neutral-900/40 transform translate-x-2 translate-y-2"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
