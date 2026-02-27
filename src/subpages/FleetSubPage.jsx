import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fleetContent } from '../data/fleetData';
import { ChevronRight } from 'lucide-react';

// Modular Components
import ProductShowCase from '../components/FleetPage/subPage/ProductShowCase';
import ContentStrategyBlock from '../components/FleetPage/subPage/ContentStrategyBlock';
import ServiceFleetShowcase from '../components/FleetPage/subPage/ServiceFleetShowCase';
import RentalForm from '../components/FleetPage/RentalForm';
import ContactBanner from '../components/common/ContactBanner';

const CommonFleetSubPage = () => {
  const { carId } = useParams();
  // Ensure the route param matches the new Category Keys (e.g., 'premium-suvs')
  const data = fleetContent[carId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [carId]);

  if (!data) return <div className="py-20 text-center font-bold">Vehicle Profile Not Found</div>;

  return (
    <div className="bg-white">
      {/* Pass the array of cars and the category title to handle the toggle internally */}
      <div className="pt-6 lg:pt-8 px-8 md:px-16 lg:px-20 border-b border-gray-300">
        <div className="max-w-[1800px] mx-auto flex items-center gap-2 para-sm font-black uppercase tracking-widest text-gray-400 pb-8">
          <Link to="/" className="hover:text-[#3E4D86] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/fleet" className="hover:text-[#3E4D86] transition-colors">Fleet</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#E23744]">{carId}</span>
        </div>
      </div>
      <ProductShowCase
        categoryTitle={data.showcase.categoryTitle}
        cars={data.showcase.cars}
      />

      <RentalForm />

      <ContentStrategyBlock
        title={data.strategy.title}
        description={data.strategy.description}
        sectionHeading={data.strategy.sectionHeading}
        points={data.strategy.points}
        bottomTitle={data.strategy.bottomTitle}
        bottomDescription={data.strategy.bottomDescription}
      />

      {/* Static Reusable Sections */}
      <ServiceFleetShowcase currentCategoryId={carId} />

      <ContactBanner />

    </div>
  );
};

export default CommonFleetSubPage;