import React from 'react';

import FAQSection from '../components/common/FAQSection';
import MetricStrip from '../components/common/MetricStrip';
import ValueBentoGrid from '../components/common/ValueBentoGrid';
import ContactHub from '../components/ContactPage/ContactHub';

const ContactPage = () => {
  return (
    <div className="flex flex-col scrollbar-hide">
      {/* Hero Section occupies the top of the main area */}
      <ContactHub />
      <MetricStrip />
      <ValueBentoGrid />
      <FAQSection />
    </div>
  );
};

export default ContactPage;