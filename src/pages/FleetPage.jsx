import React from 'react';

import FAQSection from '../components/common/FAQSection';
import RentalForm from '../components/FleetPage/RentalForm';
import MetricStrip from '../components/FleetPage/MetricStrip';
import PremiumFleetCTA from '../components/FleetPage/PremiumFleetCTA';
import ServiceNeeds from '../components/FleetPage/ServiceNeeds';
import TariffRateList from '../components/FleetPage/TariffRateList';
import ValueBentoGrid from '../components/FleetPage/ValueBentoGrid';

const FleetPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section occupies the top of the main area */}
      <RentalForm />
      <MetricStrip/>
      <PremiumFleetCTA/>
      <ServiceNeeds/>
      <TariffRateList/>
      <ValueBentoGrid/>
      <FAQSection/>



    </div>
  );
};

export default FleetPage;