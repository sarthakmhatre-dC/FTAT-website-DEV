import React from 'react';

import FAQSection from '../components/common/FAQSection';
import MetricStrip from '../components/common/MetricStrip';
import ValueBentoGrid from '../components/common/ValueBentoGrid';
import ContactHub from '../components/ContactPage/ContactHub';
import BottomCTA from '../components/common/bottomCTA';

const ContactPage = () => {
  return (
    <div className="flex flex-col scrollbar-hide">
      {/* Hero Section occupies the top of the main area */}
      <ContactHub />
      <MetricStrip />
      <ValueBentoGrid />
      <FAQSection />
      <BottomCTA/>
    </div>
  );
};

export default ContactPage;