'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeCanDo from '@/components/WhatWeCanDo';
import ImpactAndSuccess from '@/components/ImpactAndSuccess';
import WorkflowProcess from '@/components/WorkflowProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import ConnectChannels from '@/components/ConnectChannels';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import BookSessionModal from '@/components/BookSessionModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTrack, setBookingTrack] = useState<string | undefined>(undefined);
  const [bookingRole, setBookingRole] = useState<'student' | 'college'>('student');

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

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Intro Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 1. Who are we */}
      <WhoWeAre onOpenBooking={handleOpenBooking} />

      {/* 2 & 3. What we can do & What kind of mocks we can take (Unified) */}
      <WhatWeCanDo
        onOpenBooking={handleOpenBooking}
        onOpenBookingWithTrack={handleOpenBookingWithTrack}
      />

      {/* 4. How many were find helpful with our services */}
      <ImpactAndSuccess onOpenBooking={handleOpenBooking} />

      {/* 5. What kind of flow we follow */}
      <WorkflowProcess onOpenBooking={handleOpenBooking} />

      {/* 7. Why should you choose us */}
      <WhyChooseUs onOpenBooking={handleOpenBooking} />

      {/* 8. Connect through these channels */}
      <ConnectChannels />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

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
