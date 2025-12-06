import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SnowfallAnimation from "../Components/SnowfallAnimation";
import Home from "../Components/Home";

const MainLayouts = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative z-0">
        <SnowfallAnimation />

        <Home></Home>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
