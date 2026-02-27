import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { packageContent } from '../data/packageData';
import { ChevronRight } from 'lucide-react';
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
      <div className="pt-6 lg:pt-8 px-8 md:px-16 lg:px-20 border-b border-gray-300">
        <div className="max-w-[1800px] mx-auto flex items-center gap-2 para-sm font-black uppercase tracking-widest text-gray-400 pb-8">
          <Link to="/" className="hover:text-[#3E4D86] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/packages" className="hover:text-[#3E4D86] transition-colors">Packages</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#E23744]">{type}</span>
        </div>
      </div>

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

      <FAQSection setId='packages' />

      <ContactBanner />

    </div>
  );
};

export default PackageSubPage;