import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../src/assets/myimage.png.png";

// Animation Variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* LEFT = Profile Image */}
      <motion.div
        className="flex-shrink-0"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-500 object-cover shadow-lg"
        />
      </motion.div>

      {/* RIGHT = Text Content */}
      <motion.div
        className="flex-1"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerText} initial="hidden" animate="visible">
          <motion.h2
            variants={textItem}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10"
          >
            About Me
          </motion.h2>

          <motion.h2
            variants={textItem}
            className="text-4xl font-bold mb-2 text-cyan-400"
          >
            &lt;I’m Tahmid Hasan Golap /&gt;
          </motion.h2>

          <motion.h3
            variants={textItem}
            className="text-xl text-white font-semibold mb-4"
          >
            MERN Stack Developer | React.js Expert
          </motion.h3>

          <motion.p variants={textItem} className="text-gray-300 mb-4">
            Hello! I’m a passionate MERN stack developer with a strong focus on
            React.js. I specialize in building clean, modern, and responsive web
            applications. I’m always exploring new technologies and adapting to
            innovative tools to enhance my skills and deliver impactful
            projects.
          </motion.p>

          <motion.p variants={textItem} className="text-gray-300 mb-4">
            I have hands-on experience in Frontend & Backend development, UI/UX
            Design, Firebase, Node.js, MongoDB, VS Code, and Figma. I am
            continuously exploring Next.js and other modern frameworks to expand
            my expertise and stay up-to-date in the web development world.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
