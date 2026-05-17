import React from "react";
import { motion } from "framer-motion";
import profilePic from "../../src/assets/myimage.png.png";
import SectionHeader from "./ui/SectionHeader";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerText = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const textItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="Who I Am"
          description="Passionate about building meaningful digital products with modern web technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-500/20 blur-xl"
                aria-hidden="true"
              />
              <img
                src={profilePic}
                alt="Tahmid Hasan Golap profile"
                className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-2xl object-cover ring-2 ring-cyan-400/40 shadow-2xl shadow-cyan-500/10"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={staggerText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-center lg:text-left"
            >
              <motion.p
                variants={textItem}
                className="font-display text-2xl sm:text-3xl font-bold text-cyan-400"
              >
                &lt;I&apos;m Tahmid Hasan Golap /&gt;
              </motion.p>

              <motion.h3
                variants={textItem}
                className="text-lg sm:text-xl text-white font-semibold"
              >
                MERN Stack Developer | React.js Expert
              </motion.h3>

              <motion.p
                variants={textItem}
                className="text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Hello! I&apos;m a passionate MERN stack developer with a strong focus on
                React.js. I specialize in building clean, modern, and responsive web
                applications. I&apos;m always exploring new technologies and adapting to
                innovative tools to enhance my skills and deliver impactful projects.
              </motion.p>

              <motion.p
                variants={textItem}
                className="text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                I have hands-on experience in Frontend &amp; Backend development, UI/UX
                Design, Firebase, Node.js, MongoDB, VS Code, and Figma. I am continuously
                exploring Next.js and other modern frameworks to expand my expertise and
                stay up-to-date in the web development world.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
