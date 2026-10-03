/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { StatsBar } from './components/StatsBar';
import { ArchiveSection } from './components/ArchiveSection';
import { BrandTicker } from './components/BrandTicker';
import { ProjectsCarousel } from './components/ProjectsCarousel';
import { ContactSection } from './components/ContactSection';
import { WorkPage } from './components/WorkPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'work'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      if (hash === '#work' || params.get('view') === 'work') {
        return 'work';
      }
    }
    return 'home';
  });
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#work') {
        setCurrentView('work');
      } else if (hash === '#home' || hash === '' || hash === '#') {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToWork = () => {
    setCurrentView('work');
    try {
      window.location.hash = 'work';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const navigateToHome = () => {
    setCurrentView('home');
    try {
      if (window.location.hash === '#work') {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const handleScrollToContact = () => {
    if (currentView === 'work') {
      setCurrentView('home');
      setTimeout(() => {
        try {
          const contactElem = document.getElementById('contact-section');
          if (contactElem) {
            contactElem.scrollIntoView({ behavior: 'smooth' });
          }
        } catch {
          // fallback
        }
      }, 100);
      return;
    }

    try {
      const contactElem = document.getElementById('contact-section');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    } catch {
      // fallback
    }
  };

  if (currentView === 'work') {
    return (
      <WorkPage
        onNavigateHome={navigateToHome}
        onNavigateContact={handleScrollToContact}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-courier selection:bg-[#FF0000] selection:text-white flex flex-col">
      {/* 1. Top Static Navigation Bar */}
      <Header
        onOpenWork={navigateToWork}
        onScrollToContact={handleScrollToContact}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* 2. Top 3 Services Hero Banners Carousel (Pages 1, 2, 3) */}
        <HeroCarousel
          currentSlide={currentHeroSlide}
          onSlideChange={setCurrentHeroSlide}
          onExploreWork={navigateToWork}
        />

        {/* 3. Static Stats Bar with Transparent Black Background */}
        <StatsBar
          currentSlide={currentHeroSlide}
          onSelectSlide={setCurrentHeroSlide}
        />

        {/* 4. Archive Section: Rolling Credits List + Dynamic Moodboard Grid (Page 4) */}
        <ArchiveSection onOpenWork={navigateToWork} />

        {/* 5. Ticker Tape of All Brand Logos (Pages 5, 6, 7, 8) */}
        <BrandTicker />

        {/* 6. Projects Section: 5 Case Studies Carousel with Media Wireframes (Pages 9, 10, 11, 12, 13) */}
        <ProjectsCarousel onOpenWork={navigateToWork} />

        {/* 7. Brutalist Contact & Commission Footer Section */}
        <ContactSection />
      </main>
    </div>
  );
}

