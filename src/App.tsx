/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Advantages from './components/Advantages';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Activities from './components/Activities';
import Blog from './components/Blog';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import BrochureModal from './components/BrochureModal';

export default function App() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 font-sans transition-colors duration-300">
      
      {/* 1. STICKY HEADER HERO BAR */}
      <Navbar
        onOpenRegister={() => setRegisterOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
      />

      <main className="relative">
        {/* 2. HERO SLIDES & COUNTERS */}
        <Hero
          onOpenRegister={() => setRegisterOpen(true)}
          onOpenBrochure={() => setBrochureOpen(true)}
        />

        {/* 3. TENTANG PESANTREN & VISI/MISI TABS */}
        <About />

        {/* 4. PROGRAM UNGGULAN CARDS */}
        <Programs
          onOpenRegister={() => setRegisterOpen(true)}
        />

        {/* 5. KEUNGGULAN PESANTREN */}
        <Advantages />

        {/* 6. FASILITAS CAROUSEL / GALLERY & LIGHTBOX */}
        <Facilities />

        {/* 7. TESTIMONI INTEGRATED SLIDER */}
        <Testimonials />

        {/* 8. GALERI KEGIATAN BRIGADE */}
        <Activities />

        {/* 9. BLOG ARTICLES CARDS & READING MODAL */}
        <Blog />

        {/* 10. FAQ SYSTEM COLLAPSIBLES */}
        <Faq />

        {/* 11. END OF CALL TO ACTION BANNER */}
        <CallToAction
          onOpenRegister={() => setRegisterOpen(true)}
          onOpenBrochure={() => setBrochureOpen(true)}
        />
      </main>

      {/* 12. COMPLEX OUTLINE FOOTER */}
      <Footer />

      {/* INTERACTIVE COMPANION MODALS */}
      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />

      <BrochureModal
        isOpen={brochureOpen}
        onClose={() => setBrochureOpen(false)}
      />

    </div>
  );
}
