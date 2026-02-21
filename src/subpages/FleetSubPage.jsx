import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fleetContent } from '../data/fleetData';

// Modular Components
import ProductShowCase from '../components/FleetPage/subPage/ProductShowCase';
import ContentStrategyBlock from '../components/FleetPage/subPage/ContentStrategyBlock';
import ServiceFleetShowcase from '../components/FleetPage/subPage/ServiceFleetShowCase';
import RentalForm from '../components/FleetPage/RentalForm';

const CommonFleetSubPage = () => {
  const { carId } = useParams();
  const data = fleetContent[carId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [carId]);

  if (!data) return <div className="py-20 text-center font-bold">Vehicle Profile Not Found</div>;

  return (
    <div className="bg-white">
      {/* Dynamic Data injection for each section */}
      <ProductShowCase 
        title={data.showcase.title}
        images={data.showcase.images}
        rating={data.showcase.rating}
        reviews={data.showcase.reviews}
      />

      <RentalForm />
      
      <ContentStrategyBlock 
        title={data.strategy.title}
        description={data.strategy.description}
        sectionHeading={data.strategy.sectionHeading}
        footerHeading={data.strategy.footerHeading}
        footerPara={data.strategy.footerPara}
      />

      {/* Static Reusable Sections */}
      <ServiceFleetShowcase />
      
    </div>
  );
};

export default CommonFleetSubPage;