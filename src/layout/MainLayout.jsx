import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F2]">
      {/* Fixed/Static Header at the top */}
      <Header />

      {/* Main Content Area */}
      <main className="grow">
        {/* This is where the specific page components will render */}
        <Outlet />
      </main>

      {/* Static Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;