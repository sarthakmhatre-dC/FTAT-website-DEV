import React from 'react';

import FAQSection from '../components/common/FAQSection';
import RentalForm from '../components/FleetPage/RentalForm';
import MetricStrip from '../components/FleetPage/MetricStrip';
import PremiumFleetCTA from '../components/FleetPage/PremiumFleetCTA';
import ServiceNeeds from '../components/FleetPage/ServiceNeeds';
import TariffRateList from '../components/FleetPage/TariffRateList';
import ValueBentoGrid from '../components/FleetPage/ValueBentoGrid';
import ContactHub from '../components/ContactPage/ContactHub';

const ContactPage = () => {
  return (
    <div className="flex flex-col scrollbar-hide">
      {/* Hero Section occupies the top of the main area */}
      <ContactHub/>
      <MetricStrip/>
      <ValueBentoGrid/>
      <FAQSection/>
    </div>
  );
};

export default ContactPage;