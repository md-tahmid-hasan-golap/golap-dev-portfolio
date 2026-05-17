import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SnowfallAnimation from "../Components/SnowfallAnimation";
import Home from "../Components/Home";

const MainLayouts = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-[#07070d]">
      <div
        className="pointer-events-none fixed inset-0 z-0 gradient-mesh"
        aria-hidden="true"
      />
      <Navbar />
      <main className="relative z-10 flex-1">
        <SnowfallAnimation />
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayouts;
