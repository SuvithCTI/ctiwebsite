import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/home/Hero';
import { ServicesSection } from './components/home/ServicesSection';
import { ClientsSection } from './components/home/ClientsSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { CtaBanner } from './components/home/CtaBanner';
import { CookieConsent } from './components/common/CookieConsent';
import { ThriveBot } from './components/common/ThriveBot';

// Direct pre-cached dynamic imports
const loadAbout = () => import('./components/about/AboutPage');
const loadIndustries = () => import('./components/industries/IndustriesPage');
const loadProjects = () => import('./components/projects/ProjectsPage');
const loadGallery = () => import('./components/gallery/GalleryPage');
const loadInsights = () => import('./components/insights/InsightsPage');
const loadContact = () => import('./components/contact/ContactPage');
const loadPrivacy = () => import('./components/common/PrivacyPolicyPage');
const loadTerms = () => import('./components/common/TermsOfServicePage');
const loadSchedule = () => import('./components/contact/ScheduleModal');

const AboutPage = lazy(() => loadAbout().then(m => ({ default: m.AboutPage })));
const IndustriesPage = lazy(() => loadIndustries().then(m => ({ default: m.IndustriesPage })));
const ProjectsPage = lazy(() => loadProjects().then(m => ({ default: m.ProjectsPage })));
const GalleryPage = lazy(() => loadGallery().then(m => ({ default: m.GalleryPage })));
const InsightsPage = lazy(() => loadInsights().then(m => ({ default: m.InsightsPage })));
const ContactPage = lazy(() => loadContact().then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => loadPrivacy().then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => loadTerms().then(m => ({ default: m.TermsOfServicePage })));
const ScheduleModal = lazy(() => loadSchedule().then(m => ({ default: m.ScheduleModal })));

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  useEffect(() => {
    // Silently pre-load all subpages immediately in memory so every tab switch opens in 0.00ms
    const prefetch = () => {
      loadAbout();
      loadIndustries();
      loadProjects();
      loadGallery();
      loadInsights();
      loadContact();
      loadPrivacy();
      loadTerms();
      loadSchedule();
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 50);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-transparent text-[#050B14] flex flex-col font-sans selection:bg-sky-600 selection:text-white overflow-x-hidden w-full">
      {/* Top Gold Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full overflow-x-hidden">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <ServicesSection setActiveTab={setActiveTab} />
            <ClientsSection />
            <TestimonialsSection />
            <CtaBanner
              setActiveTab={setActiveTab}
              onBookConsultation={() => setIsScheduleOpen(true)}
            />
          </>
        )}

        <Suspense fallback={<div className="min-h-[40vh]" />}>
          {activeTab === 'about' && (
            <AboutPage setActiveTab={setActiveTab} />
          )}

          {activeTab === 'industries' && (
            <IndustriesPage setActiveTab={setActiveTab} />
          )}

          {activeTab === 'projects' && (
            <ProjectsPage setActiveTab={setActiveTab} />
          )}

          {activeTab === 'gallery' && (
            <GalleryPage setActiveTab={setActiveTab} />
          )}

          {activeTab === 'insights' && (
            <InsightsPage setActiveTab={setActiveTab} />
          )}

          {activeTab === 'contact' && (
            <ContactPage setActiveTab={setActiveTab} />
          )}

          {activeTab === 'privacy' && (
            <PrivacyPolicyPage setActiveTab={setActiveTab} />
          )}

          {activeTab === 'terms' && (
            <TermsOfServicePage setActiveTab={setActiveTab} />
          )}

          {isScheduleOpen && (
            <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} activeTab={activeTab} />

      {/* Overlays */}
      <CookieConsent />
      <ThriveBot setActiveTab={setActiveTab} />
    </div>
  );
}
