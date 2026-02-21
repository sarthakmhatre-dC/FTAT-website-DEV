import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import FleetPage from "./pages/FleetPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import PackagesPage from "./pages/PackagesPage";
import ClientsPage from "./pages/ClientsPage";
import FleetSubPage from "./subpages/FleetSubPage";
import BlogsPage from "./pages/BlogsPage";
import TermsPage from "./pages/TermsPage";
import "./index.css";
import TariffPage from "./pages/TariffPage";
import PackageSubPage from "./subpages/PackageSubPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes inside this parent Route will use the MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/fleet" element={<FleetPage />} />
          
          {/* Dynamic Subpage Route */}
          {/* The ':carId' parameter allows this one route to handle multiple car pages */}
          <Route path="/fleet/:carId" element={<FleetSubPage />} />
          <Route path="/packages/:type" element={<PackageSubPage />} />
          
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/packages" element={<PackagesPage/>} />
          <Route path="/clients" element={<ClientsPage/>} />
          <Route path="/resources/blogs" element={<BlogsPage />} />
          <Route path="/resources/terms" element={<TermsPage />} />
          <Route path="/resources/tariff" element={<TariffPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;