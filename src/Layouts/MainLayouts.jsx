import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import SnowfallAnimation from "../Components/SnowfallAnimation";
import ScrollToTop from "../Components/ScrollToTop";

const MainLayouts = () => {
  return (
    <div className="relative">
      <Navbar />
      <ScrollToTop />
      <div className="relative z-0">
        <SnowfallAnimation />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
