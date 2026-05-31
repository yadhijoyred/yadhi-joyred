/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Book, Download, Clock, Landmark, Gift, Calendar, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const schedule = [
    { time: '03:30 - 04:15', activity: 'Bangun Tidur, Qiyamul Lail, & Istighfar Sahur' },
    { time: '04:15 - 05:00', activity: 'Sholat Shubuh Berjamaah & Dzikir Al-Ma\'tsurat' },
    { time: '05:00 - 06:15', activity: 'Halaqah Tahfidz Al-Qur\'an I (Sabaq/Saran Baru)' },
    { time: '06:15 - 07:15', activity: 'Sari Pagi, Mandi, Persiapan Sekolah Formal' },
    { time: '07:15 - 12:00', activity: 'Kegiatan Belajar Mengajar (KBM) Formal Terpadu / Sains' },
    { time: '12:00 - 13:00', activity: 'Sholat Dzuhur Berjamaah, Makan Siang, Qailulah' },
    { time: '13:00 - 15:00', activity: 'KBM Formal Lanjutan & Pendekatan Karakter' },
    { time: '15:00 - 15:45', activity: 'Sholat Ashar Berjamaah & Al-Ma\'tsurat Sore' },
    { time: '15:45 - 17:15', activity: 'Halaqah Murojaah Al-Qur\'an II (Manzil/Sabaqi)' },
    { time: '17:15 - 18:00', activity: 'Mandi Sore, Makan Malam, & Persiapan Masjid' },
    { time: '18:00 - 20:00', activity: 'Sholat Maghrib, Halaqah Kitab Kuning/Silsilah Haq, Isya' },
    { time: '20:00 - 21:30', activity: 'Belajar Mandiri Terbimbing & Tugas IT/IT Studio' },
    { time: '21:30 - 03:30', activity: 'Istirahat Malam (Wajib Tidur)' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all dark:bg-neutral-950"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-emerald-900 to-emerald-800 px-6 py-5 text-white dark:from-emerald-950 dark:to-emerald-900">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5 text-amber-400" />
                <h3 className="text-lg font-bold tracking-tight font-serif">Brosur & Profil Akademik 2026/2027</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors"
                aria-label="Tutup brosur"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Container (Scrollable) */}
            <div className="max-h-[82vh] overflow-y-auto p-6 md:p-8 space-y-8">
              {/* Cover Banner */}
              <div className="relative text-center bg-gradient-to-br from-emerald-900 to-emerald-950 p-6 md:p-8 rounded-xl text-white overflow-hidden shadow-md">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 space-y-2">
                  <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-500/30 tracking-wider uppercase">
                    Brosur Pendidikan Resmi
                  </span>
                  <h4 className="text-2xl font-extrabold text-white">Pesantren Al-Qur'an Nurul Huda</h4>
                  <p className="text-emerald-200 text-xs max-w-xl mx-auto">
                    Menyelenggarakan Pendidikan Islam Tingkat Menengah Pertama (MTs) & Atas (MA) Terakreditasi "A" dengan integrasi Huffazh 30 Juz.
                  </p>
                </div>
              </div>

              {/* Kurikulum Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-neutral-200 pb-2 dark:border-neutral-800">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <h5 className="font-bold text-neutral-900 dark:text-white text-base">Kurikulum Terintegrasi (3 Pilar Utama)</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800">
                    <p className="font-bold text-emerald-800 dark:text-emerald-400 text-sm mb-1.5">1. Tahfidzul Qur'an Syarif</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Sistem setoran mutqin satu hari sekali sabaq, murojaah sabaqi per hari, ujian tasmi' 5, 10, 15, hingga 30 juz beruntun guna memperoleh syahadah pondok & sanad.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800">
                    <p className="font-bold text-emerald-800 dark:text-emerald-400 text-sm mb-1.5">2. Kurikulum Diniyah Salafah</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Pembacaan Kitab Kuning standar Universitas Timur Tengah: Ushul Fiqih, Tafsir Jalalain, Riyadlus-Salihin, Nahwu-Sharaf Al-Ajurumiyah - Alfiyah, Aqidatul Awam.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800">
                    <p className="font-bold text-emerald-800 dark:text-emerald-400 text-sm mb-1.5">3. Akademik Nasional & IT</p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Sains murni (Matematika, Fisika, Biologi, Kimia, Ekonomi), mempersiapkan KSN, UTBK sukses SNBT, serta bekal multimedia & programming dasar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rencana Biaya Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-neutral-200 pb-2 dark:border-neutral-800">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <h5 className="font-bold text-neutral-900 dark:text-white text-base">Prakiraan Investasi Pendidikan (SOP Transparan)</h5>
                </div>
                <div className="overflow-x-auto rounded-xl border border-neutral-205 dark:border-neutral-800">
                  <table className="w-full text-left text-xs text-neutral-600 dark:text-neutral-400 border-collapse">
                    <thead>
                      <tr className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 font-bold border-b border-neutral-200 dark:border-neutral-800">
                        <th className="p-3">Kategori Pembiayaan</th>
                        <th className="p-3 text-right">Rincian Biaya</th>
                        <th className="p-3">Frekuensi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-150 dark:divide-neutral-800">
                      <tr>
                        <td className="p-3 font-medium text-neutral-800 dark:text-neutral-200">Uang Pangkal Pangkal Utama (Gedung, Masjid, dll)</td>
                        <td className="p-3 text-right font-mono text-emerald-700 dark:text-emerald-400 font-bold">Rp 6.500.000</td>
                        <td className="p-3">1 Kali di awal pendaftaran</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-neutral-800 dark:text-neutral-200">Paket Seragam (5 Set lengkap), Buku & Kitab Diniyah</td>
                        <td className="p-3 text-right font-mono text-emerald-700 dark:text-emerald-400 font-bold">Rp 2.000.000</td>
                        <td className="p-3">1 Kali di awal tahun ajaran</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-neutral-800 dark:text-neutral-200">Kasur, Bantal, Lemari Personil, & Kebersihan Awal</td>
                        <td className="p-3 text-right font-mono text-emerald-700 dark:text-emerald-400 font-bold">Rp 1.000.000</td>
                        <td className="p-3">1 Kali di awal (aset inventaris)</td>
                      </tr>
                      <tr className="bg-emerald-50/20 dark:bg-emerald-950/10 font-medium">
                        <td className="p-3 text-emerald-800 dark:text-emerald-300 font-bold">Iuran SPP Syahriyah Bulanan (Makan 3x, Laundry, AC, Air, Asrama)</td>
                        <td className="p-3 text-right font-mono text-emerald-800 dark:text-emerald-400 font-bold">Rp 1.500.000</td>
                        <td className="p-3 text-emerald-800 dark:text-emerald-300 font-bold">Setiap Bulan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Agenda Harian Schedule */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-neutral-200 pb-2 dark:border-neutral-800">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <h5 className="font-bold text-neutral-900 dark:text-white text-base">Agenda Aktivitas Harian Santri (Kedisiplinan 24 Jam)</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 select-none">
                  {schedule.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 py-2 px-3 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-lg border-b border-neutral-100 dark:border-neutral-900 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-mono font-bold w-[110px] shrink-0 bg-amber-50 dark:bg-amber-950/20 py-0.5 px-2 rounded-md">
                        <Clock className="h-3 w-3 shrink-0" />
                        <span>{item.time}</span>
                      </div>
                      <span className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                        {item.activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

               {/* Footer Brochure */}
              <div className="rounded-3xl bg-neutral-100 dark:bg-neutral-900 p-6 flex flex-col md:flex-row items-center gap-4 justify-between border border-neutral-200 dark:border-neutral-800">
                <div className="space-y-1 text-center md:text-left">
                  <p className="text-xs font-bold text-neutral-900 dark:text-white">Butuh Brosur Versi PDF untuk Keluarga?</p>
                  <p className="text-[10px] text-neutral-500">Konfirmasi via WA untuk mendapatkan hard-copy dikirim via pos gratis.</p>
                </div>
                <a
                  href="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-full shadow transition-all hover:scale-105"
                >
                  <Download className="h-3.5 w-3.5" />
                  Unduh PDF (Curriculum-2026)
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
