// AboutSection.jsx
import React from "react";
import profilePic from "../../src/assets/myimage.png.png"; // তোমার profile image path ঠিক করে দাও
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 text-white">
      <div className="max-w-5xl mx-auto px-7 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left: Profile Image */}
        <motion.div
          className="flex-shrink-0 p-2 sm:p-0" // ছোট ডিভাইসে padding
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={profilePic}
            alt="Tahmid Hasan Golap"
            className="w-48 h-48 md:w-52 md:h-52 rounded-xl object-cover"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex-1 space-y-6 md:pl-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

          {/* Introduction */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Hi, I am{" "}
            <span className="text-blue-400 font-semibold">
              Tahmid Hasan Golap
            </span>
            , a MERN stack developer with experience in React, Node.js, MongoDB,
            and modern frontend & backend technologies. I love building web
            applications that are interactive, responsive, and user-friendly.
          </p>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS / Tailwind",
                "JavaScript",
                "React.js",
                "Node.js",
                "MongoDB",
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-cyan-700 rounded-full text-sm md:text-base font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Experience</h3>
            <p className="text-gray-300">
              I have worked on multiple projects using the MERN stack, creating
              dynamic and responsive web applications. I continuously learn new
              technologies and improve my skills to stay up-to-date.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Education</h3>
            <p className="text-gray-300">
              Completed web development training and have hands-on experience
              with React.js, Node.js, MongoDB, Firebase, and more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
