'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeCanDo from '@/components/WhatWeCanDo';
import MockTypesExplorer from '@/components/MockTypesExplorer';
import ImpactAndSuccess from '@/components/ImpactAndSuccess';
import CollegesTiedUp from '@/components/CollegesTiedUp';
import WorkflowProcess from '@/components/WorkflowProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import InstituteDashboard from '@/components/InstituteDashboard';
import RoiCalculator from '@/components/RoiCalculator';
import ConnectChannels from '@/components/ConnectChannels';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ScorecardModal from '@/components/ScorecardModal';
import BookSessionModal from '@/components/BookSessionModal';
import { Student } from '@/data/mockData';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTrack, setBookingTrack] = useState<string | undefined>(undefined);
  const [bookingRole, setBookingRole] = useState<'student' | 'college'>('student');
  const [selectedStudentForScorecard, setSelectedStudentForScorecard] = useState<Student | null>(null);

  const handleOpenBooking = () => {
    setBookingTrack(undefined);
    setBookingRole('student');
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithTrack = (trackName?: string) => {
    setBookingTrack(trackName);
    setBookingRole('student');
    setIsBookingOpen(true);
  };

  const handleOpenBookingForCollege = () => {
    setBookingTrack(undefined);
    setBookingRole('college');
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
        onNavigateToDashboard={scrollToDashboard}
      />

      {/* Hero Intro Section */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onNavigateToDashboard={scrollToDashboard}
      />

      {/* 1. Who are we */}
      <WhoWeAre onOpenBooking={handleOpenBooking} />

      {/* 2. What we can do */}
      <WhatWeCanDo
        onOpenBooking={handleOpenBooking}
        onNavigateToDashboard={scrollToDashboard}
      />

      {/* 3. What kind of mocks we can take */}
      <MockTypesExplorer
        onOpenBookingWithTrack={handleOpenBookingWithTrack}
      />

      {/* 4. How many were find helpful with our services */}
      <ImpactAndSuccess onOpenBooking={handleOpenBooking} />

      {/* 5. Which Colleges tied up with us */}
      <CollegesTiedUp onOpenBookingForCollege={handleOpenBookingForCollege} />

      {/* 6. What kind of flow we follow */}
      <WorkflowProcess onOpenBooking={handleOpenBooking} />

      {/* 7. Why should you choose us */}
      <WhyChooseUs onOpenBooking={handleOpenBooking} />

      {/* Interactive Institute Director Command Center & Live Telemetry */}
      <InstituteDashboard
        onOpenScorecard={handleOpenScorecard}
        onOpenBooking={handleOpenBookingForCollege}
      />

      {/* Cohort Investment & ROI Calculator */}
      <RoiCalculator onOpenBooking={handleOpenBookingForCollege} />

      {/* 8. Connect through these channels */}
      <ConnectChannels />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onNavigateToDashboard={scrollToDashboard}
      />

      {/* Modals */}
      <ScorecardModal
        student={selectedStudentForScorecard}
        onClose={handleCloseScorecard}
      />

      {/* 9. Book a session modal */}
      <BookSessionModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialTrack={bookingTrack}
        initialRole={bookingRole}
      />
    </main>
  );
}
