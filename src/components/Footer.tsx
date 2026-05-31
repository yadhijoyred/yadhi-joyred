/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, MapPin, Phone, Mail, Instagram, Youtube, Facebook, ArrowUp, Send } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 border-t border-emerald-950 text-neutral-450 pt-16 pb-8 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-neutral-800">
        
        {/* Column 1: Identity & Brand */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleScrollTop}>
            <div className="h-9 w-9 rounded-full bg-emerald-850 flex items-center justify-center border border-amber-400">
              <BookOpen className="h-4 w-4 text-amber-400" />
            </div>
            <div>
              <span className="block font-black text-xs md:text-sm tracking-tight text-white uppercase leading-none">
                Nurul Huda
              </span>
              <span className="block text-[8px] font-medium tracking-wider text-neutral-500 uppercase mt-0.5">
                Pesantren Al-Qur'an Modern
              </span>
            </div>
          </div>

          <p className="text-[11px] leading-relaxed text-neutral-400 max-w-sm">
            Pesantren Al-Qur'an Modern Nurul Huda berkomitmen memadukan pemahaman Al-Qur'an yang mutqin, kemampuan sains-teknologi unggul, serta akhlak mulia guna mempersiapkan pemimpin peradaban Islam di kancah nasional maupun global.
          </p>

          {/* Social Icons row */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-neutral-800 hover:bg-emerald-800 text-neutral-400 hover:text-white rounded-full transition-colors border border-neutral-75"
              aria-label="Instagram Nurul Huda"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-neutral-800 hover:bg-red-750 text-neutral-400 hover:text-white rounded-full transition-colors border border-neutral-75"
              aria-label="YouTube Nurul Huda"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-neutral-800 hover:bg-blue-750 text-neutral-400 hover:text-white rounded-full transition-colors border border-neutral-75"
              aria-label="Facebook Nurul Huda"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-sm font-bold text-white tracking-tight uppercase">Jelajah Situs</h4>
          <ul className="space-y-2 font-medium">
            <li>
              <button onClick={() => handleLinkClick('#tentang')} className="hover:text-amber-400 transition-colors">
                Tentang Pondok
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('#program')} className="hover:text-amber-400 transition-colors">
                Program Lembaga
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('#keunggulan')} className="hover:text-amber-400 transition-colors">
                Keunggulan & Karakter
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('#fasilitas')} className="hover:text-amber-400 transition-colors">
                Fasilitas Pendidikan
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('#kegiatan')} className="hover:text-amber-400 transition-colors">
                Galeri Agenda Kerja
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('#faq')} className="hover:text-amber-400 transition-colors">
                Tanya Jawab FAQ
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Address info */}
        <div className="md:col-span-4 space-y-4 text-neutral-400">
          <h4 className="text-sm font-bold text-white tracking-tight uppercase">Sekretariat PSB</h4>
          <ul className="space-y-3 font-normal leading-relaxed">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Jl. Raya Kaliurang Km. 14.5, Harjobinangun, Pakem, Kabupaten Sleman, D.I. Yogyakarta 55582, Indonesia.
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
              <span>+62 (812) 3456-7890</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
              <span>kontak@nurulhuda-psb.sch.id</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copywrite rights & scrolls bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500">
        <div>
          <span>© 2026 Pesantren Al-Qur'an Nurul Huda Yogyakarta. Hak Cipta Dilindungi Undang-Undang.</span>
        </div>
        
        {/* Scroll up floating button */}
        <button
          onClick={handleScrollTop}
          className="flex items-center gap-1 bg-neutral-800 hover:bg-emerald-800 hover:text-white px-4 py-2 rounded-full text-[10px] text-neutral-400 transition-all border border-neutral-750 hover:scale-105 active:scale-95"
        >
          <span>Ke Atas</span>
          <ArrowUp className="h-3 w-3" />
        </button>
      </div>
    </footer>
  );
}
