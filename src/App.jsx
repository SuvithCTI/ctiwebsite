import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/home/Hero';
import { ServicesSection } from './components/home/ServicesSection';
import { ClientsSection } from './components/home/ClientsSection';
import { IndustriesPage } from './components/industries/IndustriesPage';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { CtaBanner } from './components/home/CtaBanner';
import { AboutPage } from './components/about/AboutPage';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { InsightsPage } from './components/insights/InsightsPage';
import { ContactPage } from './components/contact/ContactPage';
import { PrivacyPolicyPage } from './components/common/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/common/TermsOfServicePage';
import { ScheduleModal } from './components/contact/ScheduleModal';
import { CostEstimatorModal } from './components/common/CostEstimatorModal';
import { CookieConsent } from './components/common/CookieConsent';
import { ThriveBot } from './components/common/ThriveBot';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const openEstimator = () => setIsEstimatorOpen(true);
  const closeEstimator = () => setIsEstimatorOpen(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-transparent text-[#050B14] flex flex-col font-sans selection:bg-sky-600 selection:text-white">
      {/* Top Gold Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openEstimator={openEstimator}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} openEstimator={openEstimator} />
            <ServicesSection setActiveTab={setActiveTab} openEstimator={openEstimator} />
            <ClientsSection />
            <TestimonialsSection />
            <CtaBanner
              setActiveTab={setActiveTab}
              openEstimator={openEstimator}
              onBookConsultation={() => setIsScheduleOpen(true)}
            />
          </>
        )}

        {activeTab === 'about' && (
          <AboutPage setActiveTab={setActiveTab} openEstimator={openEstimator} />
        )}

        {activeTab === 'industries' && (
          <IndustriesPage setActiveTab={setActiveTab} openEstimator={openEstimator} />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage setActiveTab={setActiveTab} openEstimator={openEstimator} />
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
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} activeTab={activeTab} />

      {/* Overlays */}
      <CostEstimatorModal isOpen={isEstimatorOpen} onClose={closeEstimator} />
      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      <CookieConsent />
      <ThriveBot setActiveTab={setActiveTab} openEstimator={openEstimator} />
    </div>
  );
}
