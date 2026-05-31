/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, FileText, Download, Printer, Award, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    birthPlace: '',
    birthDate: '',
    gender: 'putra',
    parentName: '',
    whatsapp: '',
    schoolOrigin: '',
    programType: 'tahfidz',
    schoolLevel: 'MA',
  });

  const [submitted, setSubmitted] = useState(false);
  const [regNo, setRegNo] = useState('');
  const [regDate, setRegDate] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const uniqueNumber = `NH-${formData.schoolLevel}-${Math.floor(100000 + Math.random() * 90000)}`;
    const currentDate = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const savedApplications = JSON.parse(localStorage.getItem('nurul_huda_registrations') || '[]');
    savedApplications.push({ ...formData, regNo: uniqueNumber, regDate: currentDate });
    localStorage.setItem('nurul_huda_registrations', JSON.stringify(savedApplications));

    setRegNo(uniqueNumber);
    setRegDate(currentDate);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      birthPlace: '',
      birthDate: '',
      gender: 'putra',
      parentName: '',
      whatsapp: '',
      schoolOrigin: '',
      programType: 'tahfidz',
      schoolLevel: 'MA',
    });
    setSubmitted(false);
  };

  const handlePrint = () => {
    window.print();
  };

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
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-all dark:bg-neutral-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-emerald-900 to-emerald-800 px-6 py-5 text-white dark:from-emerald-950 dark:to-emerald-900">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-400" />
                <h3 className="text-lg font-bold tracking-tight font-serif">Form Pendaftaran Santri Baru</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-emerald-100 hover:bg-emerald-700 hover:text-white transition-colors"
                aria-label="Tutup form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Container (Scrollable) */}
            <div className="max-h-[82vh] overflow-y-auto p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Silakan isi formulir di bawah ini dengan lengkap untuk mendaftarkan Putra/Putri Anda di Pesantren Al-Qur'an Nurul Huda.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Nama Lengkap */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Nama Lengkap Calon Santri</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Contoh: Ahmad Fawwaz Mutawakkil"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>

                    {/* Jenjang Pendidikan */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Jenjang yang Dituju</label>
                      <select
                        name="schoolLevel"
                        value={formData.schoolLevel}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      >
                        <option value="MTs">Madrasah Tsanawiyah (MTs/SMP)</option>
                        <option value="MA">Madrasah Aliyah (MA/SMA)</option>
                        <option value="Takhassus">Program Takhassus (Non-Formal)</option>
                      </select>
                    </div>

                    {/* Tempat Lahir */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Tempat Lahir</label>
                      <input
                        type="text"
                        name="birthPlace"
                        required
                        placeholder="Contoh: Jakarta"
                        value={formData.birthPlace}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>

                    {/* Tanggal Lahir */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Tanggal Lahir</label>
                      <input
                        type="date"
                        name="birthDate"
                        required
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>

                    {/* Jenis Kelamin */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Kategori Asrama</label>
                      <div className="flex gap-4 pt-1">
                        <label className="flex items-center gap-2 text-sm text-neutral-800 dark:text-neutral-300">
                          <input
                            type="radio"
                            name="gender"
                            value="putra"
                            checked={formData.gender === 'putra'}
                            onChange={handleChange}
                            className="text-emerald-700 focus:ring-emerald-600"
                          />
                          Putra (Ikhwan)
                        </label>
                        <label className="flex items-center gap-2 text-sm text-neutral-800 dark:text-neutral-300">
                          <input
                            type="radio"
                            name="gender"
                            value="putri"
                            checked={formData.gender === 'putri'}
                            onChange={handleChange}
                            className="text-emerald-700 focus:ring-emerald-600"
                          />
                          Putri (Akhwat)
                        </label>
                      </div>
                    </div>

                    {/* Program Unggulan Pilhan */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Program Unggulan Utama</label>
                      <select
                        name="programType"
                        value={formData.programType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      >
                        <option value="tahfidz">Tahfidz Al-Qur'an 30 Juz</option>
                        <option value="arabic">Penguasaan Bahasa Arab Intensif</option>
                        <option value="kitab">Kajian Kitab Kuning Mulia</option>
                        <option value="digital">Dakwah Digital & Teknologi</option>
                      </select>
                    </div>

                    {/* Nama Orang Tua/Wali */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Nama Orang Tua / Wali</label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        placeholder="Contoh: Drs. H. Hermawan"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>

                    {/* No. WhatsApp Wali */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">No. WhatsApp Orang Tua / Wali</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        placeholder="Contoh: 081234567890"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Asal Sekolah */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Asal Sekolah Sebelumnya</label>
                    <input
                      type="text"
                      name="schoolOrigin"
                      required
                      placeholder="Contoh: SD Negeri 1 Menteng / MTsN Sleman"
                      value={formData.schoolOrigin}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>

                  {/* Informational Notes */}
                  <div className="rounded-lg bg-amber-50 p-4 border border-amber-200/80 text-xs text-amber-800 dark:bg-amber-950/20 dark:border-amber-900/40 dark:text-amber-300 space-y-1">
                    <p className="font-semibold text-amber-900 dark:text-amber-100">Informasi Penting:</p>
                    <p>1. Setelah mengirimkan borang online, silakan simpan atau cetak Kartu Registrasi Sementara.</p>
                    <p>2. Hubungi Sekretariat PSB Nurul Huda via WhatsApp untuk penjadwalan ujian lisan (membaca Al-Qur'an & wawancara).</p>
                    <p>3. Uang pendaftaran Rp 250.000 dibayarkan saat pelaksanaan ujian lisan di pondok.</p>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-1/3 rounded-full border border-neutral-300 bg-white py-2.5 text-sm font-bold text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 transition-all active:scale-[0.98]"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 rounded-full bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-emerald-705/10 transition-all active:scale-[0.98]"
                    >
                      Kirim Pendaftaran
                    </button>
                  </div>
                </form>
              ) : (
                /* Success and Ticket Screen */
                <div className="space-y-6 text-center py-2">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <CheckCircle className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Pendaftaran Berhasil Terkirim!</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                      Selamat, berkas data pendaftaran Anda telah berhasil disimpan di pangkalan data Nurul Huda.
                    </p>
                  </div>

                  {/* Registration Temporary Card */}
                  <div id="print-registration-card" className="border-2 border-dashed border-emerald-600 bg-gradient-to-br from-emerald-50/50 to-amber-50/10 p-6 rounded-xl text-left dark:border-emerald-800 dark:from-emerald-950/20 dark:to-neutral-900 shadow-inner">
                    <div className="flex justify-between items-start border-b border-neutral-200 pb-3 dark:border-neutral-800">
                      <div>
                        <h5 className="font-extrabold text-emerald-800 dark:text-amber-400 text-base">PSB NURUL HUDA - 2026</h5>
                        <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">PANITIA PENERIMAAN SANTRI BARU</p>
                      </div>
                      <div className="bg-emerald-800 text-white text-[10px] font-mono px-2 py-1 rounded">
                        KARTU SEMENTARA
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 pt-4 text-xs">
                      <div>
                        <span className="block text-[10px] uppercase text-neutral-500 font-semibold">No. Registrasi</span>
                        <span className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-400">{regNo}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-neutral-500 font-semibold">Tanggal Daftar</span>
                        <span className="font-medium text-neutral-800 dark:text-neutral-200">{regDate}</span>
                      </div>
                      <div className="md:col-span-2 border-t border-neutral-100 dark:border-neutral-800/80 my-1"></div>
                      <div>
                        <span className="block text-[10px] uppercase text-neutral-500 font-semibold">Nama Calon Santri</span>
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">{formData.fullName}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-neutral-500 font-semibold">Jenjang</span>
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">{formData.schoolLevel} ({formData.gender === 'putra' ? 'Ikhwan' : 'Akhwat'})</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-neutral-500 font-semibold">Asal Sekolah</span>
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">{formData.schoolOrigin}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-neutral-500 font-semibold">Program Pilihan</span>
                        <span className="font-semibold text-neutral-850 text-emerald-750 dark:text-emerald-400 capitalize">{formData.programType}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-neutral-500 font-semibold">Wali / HP</span>
                        <span className="font-semibold text-neutral-850 dark:text-neutral-200">{formData.parentName} ({formData.whatsapp})</span>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-dashed border-neutral-200 pt-3 dark:border-neutral-800 flex justify-between items-center bg-white/40 dark:bg-black/10 p-2 rounded">
                      <div className="flex items-center gap-1.5 text-neutral-500 text-[10px]">
                        <Award className="h-4 w-4 text-amber-500" />
                        <span>Membentuk Generasi Qurani, Berakhlak Mulia</span>
                      </div>
                      <span className="text-[9px] font-mono text-neutral-400">Scan QR Code saat verifikasi</span>
                    </div>
                  </div>

                  {/* Buttons for Card */}
                  <div className="flex flex-wrap gap-3 justify-center pt-2">
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-bold text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 transition-all"
                    >
                      <Printer className="h-4 w-4" />
                      Cetak Kartu
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all"
                    >
                      Daftar Lagi
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 text-center">
                    Harap simpan No. Registrasi di atas. Panitia kami juga akan menghubungi Anda melalui WhatsApp di nomor <span className="font-bold">{formData.whatsapp}</span> dalam 1x24 jam untuk verifikasi jadwal tes masuk.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
