import React from "react";
import { Download } from "lucide-react";
import golap from "../../src/assets/unnamed (2).jpg";

const Banner = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* LEFT TEXT SECTION */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
            This is <span className="text-blue-400">Tahmid Hasan Golap</span>
            <span className="text-blue-400">&lt;/&gt;</span>
          </h3>

          {/* MAIN HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight">
            JR. Frontend Developer
          </h1>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <button className="flex items-center gap-2 bg-[#0A6375] hover:bg-[#087088] transition-all px-6 py-3 rounded-xl text-lg font-semibold">
              Resume <Download size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center md:justify-end flex-1">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-96 bg-gray-800 rounded-xl overflow-hidden">
            <img
              src={golap}
              alt="Golap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
