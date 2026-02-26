import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" reset is usually better for UX when changing pages
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render any UI
};

export default ScrollToTop;