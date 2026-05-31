/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { faqs } from '../data';
import { HelpCircle, ChevronDown, CheckCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeTab, setActiveTab] = useState<string>('Semua');

  const categories = ['Semua', 'Pendaftaran', 'Biaya', 'Sistem Pembelajaran', 'Tahfidz'];

  const filteredFaqs = activeTab === 'Semua'
    ? faqs
    : faqs.filter((faq) => faq.category === activeTab);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-neutral-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-850 dark:text-amber-400 rounded-full text-xs font-bold tracking-wider">
            TANYA JAWAB FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight font-serif">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full"></div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
            Temukan rincian jawaban cepat mengenai pendaftaran, beasiswa, iuran SPP, kurikulum, dan halaqah tahfidz.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setOpenId(null); // Close initially when changing categories
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-emerald-900 to-emerald-800 text-white shadow-md dark:from-emerald-950 dark:to-emerald-900'
                  : 'bg-neutral-50 dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions List stack */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="group border border-neutral-200 dark:border-neutral-800 rounded-3xl bg-neutral-50 dark:bg-neutral-950 overflow-hidden hover:border-emerald-700/20 dark:hover:border-neutral-700 transition-all shadow-sm"
              >
                {/* Accordion Trigger header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between text-left p-5 text-neutral-850 dark:text-white hover:text-emerald-800 dark:hover:text-amber-400 transition-colors pointer-events-auto"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-5 w-5 text-emerald-800 dark:text-amber-400 shrink-0" />
                    <span className="text-sm md:text-base font-bold tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron indicator */}
                  <div className={`p-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-900' : ''}`}>
                    <ChevronDown className="h-4.5 w-4.5" />
                  </div>
                </button>

                {/* Collapsible Answer block (AnimatePresence for smooth fold) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-neutral-600 dark:text-neutral-350 leading-relaxed font-normal border-t border-dashed border-neutral-200 dark:border-neutral-850 space-y-3 bg-white/70 dark:bg-black/10">
                        <p>{faq.answer}</p>
                        
                        {/* Detail footnote verification label */}
                        <div className="flex items-center gap-1 text-[10px] text-emerald-750 dark:text-amber-400 font-bold uppercase tracking-wider font-mono">
                          <CheckCircle className="h-3 w-3 shrink-0" />
                          <span>Informasi Sah Terverifikasi Panitia</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
