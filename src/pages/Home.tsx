/**
 * Головна сторінка лендінгу курсу веб-розробки для дітей
 * Містить всі основні секції: герой, про курс, програму, переваги, запис та контакти
 */
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutCourse from '../components/AboutCourse';
import CourseProgram from '../components/CourseProgram';
import Benefits from '../components/Benefits';
import HowToStart from '../components/HowToStart';
import Testimonials from '../components/Testimonials';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <AboutCourse />
      <CourseProgram />
      <Benefits />
      <HowToStart />
      <Testimonials />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
