import React from "react";
import { Download, Facebook, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import golap from "../../src/assets/unnamed (2).jpg";

const socialIcons = [
  { icon: <Facebook />, color: "text-blue-600", link: "https://facebook.com" },
  { icon: <Linkedin />, color: "text-blue-400", link: "https://linkedin.com" },
  { icon: <Github />, color: "text-white", link: "https://github.com" },
];

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* LEFT TEXT + SOCIAL ICONS */}
        <motion.div
          className="flex-1 flex items-center md:items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Social Icons vertical */}
          <motion.div
            className="hidden md:flex flex-col space-y-6 text-2xl mt-6"
            initial="hidden"
            animate="visible"
          >
            {socialIcons.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition-transform duration-300 ${item.color}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={socialVariants}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* TEXT SECTION */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-center md:text-left">
            {/* Name */}
            <motion.h3
              className="text-lg md:text-xl lg:text-2xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              This is <span className="text-blue-400">Tahmid Hasan Golap</span>
              <span className="text-blue-400">&lt;/&gt;</span>
            </motion.h3>

            {/* MAIN HEADING */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold leading-snug md:leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              MERN stack developer
            </motion.h1>

            {/* Resume Button */}
            <div className="flex justify-center md:justify-start">
              <motion.button
                className="flex items-center gap-2 bg-[#0A6375] hover:bg-[#087088] transition-all px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(10,99,117,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/public/Rusumi Tahmid Hasan Golap.pdf";
                  link.download = "Tahmid_Hasan_Golap_Resume.pdf";
                  link.click();
                }}
              >
                Resume <Download size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-96 bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src={golap}
              alt="Golap"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
