'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsRibbon from '@/components/StatsRibbon';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesGrid from '@/components/ServicesGrid';
import MockSimulator from '@/components/MockSimulator';
import InstituteDashboard from '@/components/InstituteDashboard';
import RoiCalculator from '@/components/RoiCalculator';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ScorecardModal from '@/components/ScorecardModal';
import PilotBookingModal from '@/components/PilotBookingModal';
import { Student } from '@/data/mockData';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedStudentForScorecard, setSelectedStudentForScorecard] = useState<Student | null>(null);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenScorecard = (student: Student) => {
    setSelectedStudentForScorecard(student);
  };

  const handleCloseScorecard = () => {
    setSelectedStudentForScorecard(null);
  };

  const scrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDashboard = () => {
    const el = document.getElementById('portal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onNavigateToSimulator={scrollToSimulator}
        onNavigateToDashboard={scrollToDashboard}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onNavigateToSimulator={scrollToSimulator}
        onNavigateToDashboard={scrollToDashboard}
      />

      {/* Partner Institutes & Key Value Pillars */}
      <StatsRibbon />

      {/* Problem vs CandiDev Solution */}
      <ProblemSolution />

      {/* Comprehensive Service Suite */}
      <ServicesGrid
        onOpenBooking={handleOpenBooking}
        onNavigateToSimulator={scrollToSimulator}
      />

      {/* Interactive Mock Interview Simulator Sandbox */}
      <MockSimulator onOpenScorecard={handleOpenScorecard} />

      {/* Institute Director & Placement Command Center */}
      <InstituteDashboard
        onOpenScorecard={handleOpenScorecard}
        onOpenBooking={handleOpenBooking}
      />

      {/* Cohort Batch ROI & Investment Calculator */}
      <RoiCalculator onOpenBooking={handleOpenBooking} />

      {/* Traditional Mocks vs CandiDev Corporate Standards */}
      <ComparisonTable />

      {/* Institute Success Stories & Verified Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onNavigateToSimulator={scrollToSimulator}
        onNavigateToDashboard={scrollToDashboard}
      />

      {/* Modals */}
      <ScorecardModal
        student={selectedStudentForScorecard}
        onClose={handleCloseScorecard}
      />

      <PilotBookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />
    </main>
  );
}
