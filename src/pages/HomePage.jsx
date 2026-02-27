import React from 'react';
import HeroSection from "../components/HomePage/HeroSection";
import TrustBar from "../components/HomePage/TrustBar";
import IndustryServing from '../components/HomePage/IndustryServing';
import CorporateSolutions from '../components/common/CorporateSolutions';
import FleetShowCase from '../components/HomePage/FleetShowCase';
import SafetyOperations from '../components/HomePage/SafetyOperations';
import Testimonials from '../components/HomePage/Testimonials';
import ContactCTA from '../components/HomePage/ContactCTA';
import FAQSection from '../components/common/FAQSection';
import ImageGallery from '../components/HomePage/ImageGallery';
import ContactBanner from '../components/common/ContactBanner';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section occupies the top of the main area */}
      <HeroSection />

      <TrustBar />

      <IndustryServing/>

      <CorporateSolutions/>

      <FleetShowCase/>

      <SafetyOperations/>

      <Testimonials/>

      <ContactCTA/>

      <ImageGallery/>

      <FAQSection setId='home'/>
      
      <ContactBanner/>
    </div>
  );
};

export default HomePage;