/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, Sparkles, BookOpen, Star, BookKey, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'sejarah' | 'visi' | 'misi'>('sejarah');

  const pillars = [
    {
      title: 'Mulia Akhlak',
      arabic: 'مكارم الأخلاق',
      description: 'Menanamkan adab kesantrian di atas ilmu, menghormati guru, berempati sosial, dan mandiri berkarakter salaf.',
      icon: Shield,
      bg: 'from-emerald-50 to-emerald-100/50 dark:from-emerald-950/20 dark:to-emerald-900/10',
      iconColor: 'text-emerald-700 dark:text-emerald-400',
    },
    {
      title: 'Mutqin Tahfidz',
      arabic: 'إتقان الحفظ',
      description: 'Menghafal Al-Qur\'an secara tartil, teratur, didampingi sanad rujukan mutawatir hingga Rasulullah SAW.',
      icon: BookOpen,
      bg: 'from-amber-50 to-amber-100/50 dark:from-amber-950/20 dark:to-amber-900/10',
      iconColor: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: 'Unggul Keilmuan',
      arabic: 'ريادة العلم',
      description: 'Menguasai integrasi sains modern, logika Matematika, dan keunggulan teknologi di samping kearifan kitab kuning.',
      icon: Star,
      bg: 'from-blue-50 to-blue-100/50 dark:from-sky-950/20 dark:to-sky-900/10',
      iconColor: 'text-blue-700 dark:text-sky-400',
    },
    {
      title: 'Tangguh Kepemimpinan',
      arabic: 'القيادة الرشيدة',
      description: 'Melatih kemampuan berorganisasi, kemandirian pemecahan masalah, public speaking, dan tanggung jawab dakwah.',
      icon: BookKey,
      bg: 'from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10',
      iconColor: 'text-purple-700 dark:text-purple-400',
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-white dark:bg-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 rounded-full text-xs font-bold tracking-wider">
            TENTANG NURUL HUDA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight font-serif">
            Membentuk Ulama-Intelek Berwawasan Global
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          
          {/* Left Column: Switcher Tabs (Sejarah, Visi, Misi) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tabs List */}
            <div className="flex border border-neutral-200/60 dark:border-neutral-800 p-1 bg-neutral-50 dark:bg-neutral-950 rounded-full space-x-1">
              {(['sejarah', 'visi', 'misi'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-1/3 py-2.5 text-xs font-bold capitalize rounded-full transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-emerald-900 to-emerald-800 text-white shadow-md dark:from-emerald-950 dark:to-emerald-900'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900/50'
                  }`}
                >
                  {tab === 'misi' ? 'Misi Strategis' : tab === 'visi' ? 'Visi Utama' : 'Sejarah Singkat'}
                </button>
              ))}
            </div>

            {/* Content Display (With Animation) */}
            <div className="bg-neutral-50 dark:bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-150 dark:border-neutral-850 min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'sejarah' && (
                  <motion.div
                    key="sejarah"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-bold text-emerald-800 dark:text-amber-400">Titik Awal Pengabdian Sejak 2001</h4>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed font-normal">
                      Pesantren Al-Qur'an Modern Nurul Huda didirikan pada tanggal 17 Sya'ban 1422 H (November 2001 M) oleh K.H. Musthofa Kamal, Lc., M.A., bermula dari sebuah halaqah tahfidz kecil berpaving mushola sederhana dengan 12 santri dhuafa.
                    </p>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed font-normal">
                      Berkat keistiqomahan pengabdian, kini Nurul Huda berkembang menjadi salah satu Boarding School Islam Modern terdepan di Indonesia, melahirkan ribuan alumni yang melanjutkan studi di universitas dalam negeri maupun mancanegara (Timur Tengah & Eropa).
                    </p>
                  </motion.div>
                )}

                {activeTab === 'visi' && (
                  <motion.div
                    key="visi"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-bold text-emerald-800 dark:text-amber-400">Visi Luhur Pesantren</h4>
                    <div className="border-l-4 border-amber-400 pl-4 py-1 italic text-neutral-750 dark:text-neutral-200 font-medium text-sm md:text-base">
                      “Mewujudkan pondok pesantren Al-Qur\'an rujukan internasional yang unggul melahirkan generasi penghafal Al-Qur\'an multitalenta secara intelektual, luhur beradab salafiyah, kokoh kepemimpinan, dan peduli peradaban digital.”
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      Visi ini menjadi motor penggerak adaptasi kurikulum pesantren salafiyah agar tetap relevan di era modern abad 21 tanpa menanggalkan kemurnian aqidah.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'misi' && (
                  <motion.div
                    key="misi"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-350"
                  >
                    <h4 className="text-lg font-bold text-emerald-800 dark:text-amber-400">Misi Mewujudkan Keunggulan</h4>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-bold">1</span>
                        <span>Menyelenggarakan sistem pengajaran Al-Qur'an bersanad mutqin yang membiasakan santri bertindak sesuai nilai Al-Qur'an.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-bold">2</span>
                        <span>Menerapkan model kurikulum integratif berstandardisasi nasional Kemenag serta pembiasaan berkomunikasi dwi-bahasa (Arab-Inggris).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[10px] font-bold">3</span>
                        <span>Menumbuhkembangkan inovasi IPTEK melalui fasilitas laboratorium digital, media siber kreatif, robotika, dan kepemimpinan berdakwah sosial.</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Subscript Creds */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-500 font-mono flex items-center justify-between mt-4">
                <span>SEKRETARIAT UTAMA PSB NURUL HUDA</span>
                <span>TA 2026/2027</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Pillars of Values */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`relative p-5 rounded-2xl bg-gradient-to-br ${pillar.bg} border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between h-48 hover:shadow-lg hover:shadow-emerald-950/5 group transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex justify-between items-start">
                    <div className={`p-2.5 rounded-xl bg-white dark:bg-neutral-800 shadow ${pillar.iconColor}`}>
                      <IconComp className="h-5 w-5" />
                    </div>
                    {/* Arabic Caligraphy subtitle placeholder */}
                    <span className="text-[10px] tracking-wide font-mono text-neutral-400 bg-neutral-150/40 dark:bg-black/20 px-2 py-0.5 rounded font-black">
                      {pillar.title === 'Mulia Akhlak' || pillar.title === 'Mutqin Tahfidz' || pillar.title === 'Unggul Keilmuan' || pillar.title === 'Tangguh Kepemimpinan' ? 'TERUJI' : 'DINIYAH'}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="font-bold text-xs md:text-sm text-neutral-850 dark:text-white">{pillar.title}</span>
                      <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 font-mono">{pillar.arabic}</span>
                    </div>
                    <p className="text-[11px] text-neutral-550 dark:text-neutral-400 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
