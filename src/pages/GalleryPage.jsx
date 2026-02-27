import React from 'react';
import SplitHero from '../components/GalleryPage/SplitHero';
import ImageGalleryGrid from '../components/GalleryPage/ImageGalleryGrid';
import ContactBanner from '../components/common/ContactBanner';

const GalleryPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section occupies the top of the main area */}
         <SplitHero/>

        <ImageGalleryGrid/>

        <ContactBanner/>

    </div>
  );
};

export default GalleryPage;