import React from 'react';
import SplitHero from '../components/GalleryPage/SplitHero';
import ImageGalleryGrid from '../components/GalleryPage/ImageGalleryGrid';
import BottomCTA from '../components/common/bottomCTA';

const GalleryPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section occupies the top of the main area */}
         <SplitHero/>

        <ImageGalleryGrid/>

        <BottomCTA/>

    </div>
  );
};

export default GalleryPage;