import React from "react";
import Marquee from "react-fast-marquee"; // auto scroll
import { motion } from "framer-motion";

const SkillsCarousel = () => {
  const skills = [
    { name: "HTML", img: "/imges/download.png" },
    { name: "CSS", img: "/imges/css.png" },
    { name: "Tailwind", img: "/imges/tailwind.png" },
    { name: "JavaScript", img: "/imges/javaScripts.png" },
    { name: "React.js", img: "/imges/react.png" },
    { name: "Node.js", img: "/imges/node.png" },
    { name: "MongoDB", img: "/imges/mongodb.png" },
  ];

  return (
    <section id="skills" className="py-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <Marquee gradient={false} speed={50} className="py-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8 shrink-0"
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2"
              />
              <span className="text-sm sm:text-base md:text-lg font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default SkillsCarousel;
