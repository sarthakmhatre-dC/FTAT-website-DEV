import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { packageContent } from '../data/packageData';

// Modular Components
import BlendedPackageHero from '../components/PackagePage/subPage/BlendedPackageHero';
import PackagesGrid from '../components/PackagePage/subPage/PackagesGrid';
import MetricStrip from '../components/common/MetricStrip';
import ValueBentoGrid from '../components/common/ValueBentoGrid';
import FAQSection from '../components/common/FAQSection';
import ContactBanner from '../components/common/ContactBanner';

const PackageSubPage = () => {
  const { type } = useParams(); // URL will be /packages/vacation or /packages/corporate
  const data = packageContent[type];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [type]);

  if (!data) return <div className="py-20 text-center font-black">Package Type Not Found</div>;

  return (
    <div className="bg-white">
      {/* 1. Dynamic Hero Section */}
      <BlendedPackageHero 
        tag={data.hero.tag}
        title={data.hero.title}
        description={data.hero.description}
        image={data.hero.image}
      />

      {/* 3. Dynamic Package Grid */}
      <PackagesGrid 
        title={data.grid.title}
        subtitle={data.grid.subtitle}
        packages={data.grid.packages}
      />

      <MetricStrip />

      {/* 4. Static Brand Sections */}
      <ValueBentoGrid />

      <FAQSection setId='packages'/>

      <ContactBanner/>

    </div>
  );
};

export default PackageSubPage;