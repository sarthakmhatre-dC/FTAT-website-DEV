import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import FleetPage from "./pages/FleetPage";
import "./index.css";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

// Example of additional pages for your nav links
// import SolutionsPage from "./pages/SolutionsPage"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes inside this parent Route will use the MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;