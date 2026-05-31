/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, BookOpen, GraduationCap, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenBrochure: () => void;
}

export default function Navbar({ onOpenRegister, onOpenBrochure }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler to make navbar glassmorphic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme initializer
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-nurul-huda');
    const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkTheme(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const updated = !darkTheme;
    setDarkTheme(updated);
    if (updated) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-nurul-huda', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-nurul-huda', 'light');
    }
  };

  const navLinks = [
    { name: 'Tentang Kami', id: '#tentang' },
    { name: 'Program Unggulan', id: '#program' },
    { name: 'Keunggulan', id: '#keunggulan' },
    { name: 'Fasilitas', id: '#fasilitas' },
    { name: 'Kegiatan', id: '#kegiatan' },
    { name: 'Artikel', id: '#artikel' },
    { name: 'FAQ', id: '#faq' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-md border-b border-emerald-800/10 dark:border-neutral-800/50 py-3 glass-card'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 md:h-11 md:w-11 rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-800 dark:from-emerald-950 dark:to-emerald-900 flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
              <BookOpen className="h-5 w-5 md:h-5.5 md:w-5.5 text-white" />
            </div>
            <div>
              <span className="block font-bold text-sm md:text-base leading-none tracking-tight uppercase text-emerald-900 dark:text-amber-400 font-serif">
                Nurul Huda
              </span>
              <span className="block text-[8px] md:text-[9px] font-semibold tracking-widest text-amber-600 dark:text-amber-500 uppercase mt-0.5">
                Pesantren Al-Qur'an Modern
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-xs font-semibold text-neutral-600 dark:text-neutral-350 hover:text-emerald-800 dark:hover:text-amber-400 transition-colors pointer-events-auto"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Utilities & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-emerald-800 dark:hover:text-amber-400 transition-colors border border-neutral-200/50 dark:border-neutral-800"
              aria-label="Ubah tema"
            >
              {darkTheme ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Brosur Button */}
            <button
              onClick={onOpenBrochure}
              className="px-5 py-2.5 text-xs font-bold text-emerald-850 dark:text-emerald-300 border border-emerald-850/20 dark:border-emerald-500/20 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 rounded-full transition-colors"
            >
              Brosur
            </button>

            {/* Register CTA */}
            <button
              onClick={onOpenRegister}
              className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-900 to-emerald-800 dark:from-emerald-850 dark:to-emerald-800 hover:opacity-95 rounded-full shadow-lg shadow-emerald-900/20 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <GraduationCap className="h-4 w-4" />
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-emerald-700 dark:hover:text-amber-400"
              aria-label="Ubah tema"
            >
              {darkTheme ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Burger Open */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-emerald-700 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              aria-label="Buka menu navigasi"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-neutral-900/50 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-neutral-950 p-6 shadow-2xl flex flex-col justify-between border-l border-neutral-150 dark:border-neutral-800"
            >
              <div>
                {/* Drawer close header */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-900">
                  <span className="font-extrabold text-sm text-emerald-800 dark:text-amber-400 uppercase tracking-tight">MENU UTAMA</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-full text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-4 pt-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className="text-left text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-emerald-700 dark:hover:text-amber-400 py-1 transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Drawer bottoms */}
              <div className="flex flex-col gap-3 pt-6 border-t border-neutral-100 dark:border-neutral-900 text-center">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochure();
                  }}
                  className="w-full py-2.5 text-xs font-bold text-center text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900"
                >
                  Lihat Brosur & Agenda
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-2.5 text-xs font-extrabold text-center text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg shadow-md flex items-center justify-center gap-1.5"
                >
                  <GraduationCap className="h-4 w-4" />
                  Daftar Sekarang
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
