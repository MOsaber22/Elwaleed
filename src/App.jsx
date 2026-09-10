import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Brands from "./pages/Brands";
import OurFarms from "./pages/OurFarms";
import Leaderships from "./pages/Leaderships";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/our-farms" element={<OurFarms />} />
        <Route path="/leaderships" element={<Leaderships />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

// about us
// brands
// our farms
// leaderships
//------------------------------
// page leaderships after office
