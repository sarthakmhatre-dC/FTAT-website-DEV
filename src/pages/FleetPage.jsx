import React from 'react';

import FAQSection from '../components/common/FAQSection';
import RentalForm from '../components/FleetPage/RentalForm';
import MetricStrip from '../components/common/MetricStrip';
import PremiumFleetCTA from '../components/FleetPage/PremiumFleetCTA';
import ServiceNeeds from '../components/FleetPage/ServiceNeeds';
import TariffRateList from '../components/FleetPage/TariffRateList';
import ValueBentoGrid from '../components/common/ValueBentoGrid';
import BottomCTA from '../components/common/bottomCTA';

const FleetPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section occupies the top of the main area */}
      <RentalForm />
      <MetricStrip />
      <PremiumFleetCTA />
      <ServiceNeeds />
      <TariffRateList />
      <ValueBentoGrid />
      <FAQSection setId='fleet'/>

      <BottomCTA/>

    </div>
  );
};

export default FleetPage;