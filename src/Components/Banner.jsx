import React from "react";
import { Download, Facebook, Linkedin, Github, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import golap from "../assets/unnamed (2).jpg";
import golap2 from "../assets/workTimePhoto.png";

const socialIcons = [
  {
    icon: <Facebook size={20} />,
    color: "hover:text-blue-400",
    link: "https://www.facebook.com/g.lap.raj",
    label: "Facebook",
  },
  {
    icon: <Linkedin size={20} />,
    color: "hover:text-sky-400",
    link: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <Github size={20} />,
    color: "hover:text-white",
    link: "https://github.com/md-tahmid-hasan-golap",
    label: "GitHub",
  },
];

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Banner = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
              <motion.div
                className="hidden sm:flex flex-col gap-3"
                initial="hidden"
                animate="visible"
                aria-label="Social links"
              >
                {socialIcons.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl glass-card text-slate-400 transition-all duration-300 hover:scale-105 hover:border-cyan-400/30 ${item.color}`}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={socialVariants}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>

              <div className="flex-1 text-center sm:text-left space-y-5 md:space-y-6">
                <motion.p
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-cyan-400/90"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span
                    className="h-px w-8 bg-cyan-400/50 hidden sm:block"
                    aria-hidden="true"
                  />
                  Hi, I&apos;m{" "}
                  <span className="text-white font-semibold">
                    Tahmid Hasan Golap
                  </span>
                  <span className="text-cyan-400 font-mono">&lt;/&gt;</span>
                </motion.p>

                <motion.h1
                  className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.7 }}
                >
                  MERN Stack{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </motion.h1>

                <motion.p
                  className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto sm:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  I build clean, scalable web applications with React, Node.js,
                  and modern tooling — focused on performance and polished user
                  experience.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.6 }}
                >
                  <motion.button
                    type="button"
                    className="btn-primary w-full sm:w-auto min-h-[48px]"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/Resume_of_Tahmid_Hasan_Golap.pdf";
                      link.download = "Tahmid_Hasan_Golap_Resume.pdf";
                      link.click();
                    }}
                  >
                    Download Resume
                    <Download size={18} aria-hidden="true" />
                  </motion.button>

                  <Link
                    to="projects"
                    smooth={true}
                    duration={700}
                    offset={-80}
                    className="btn-ghost w-full sm:w-auto min-h-[48px] cursor-pointer"
                  >
                    View Projects
                  </Link>
                </motion.div>

                <div className="flex sm:hidden justify-center gap-3 pt-2">
                  {socialIcons.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl glass-card text-slate-400 transition-all ${item.color}`}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="hidden lg:flex justify-start mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Link
                to="about"
                smooth={true}
                duration={700}
                offset={-80}
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
                aria-label="Scroll to about section"
              >
                <ArrowDown
                  className="h-4 w-4 animate-bounce"
                  aria-hidden="true"
                />
                Scroll to explore
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.div
              className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-md"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-indigo-500/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/50 bg-slate-900/50 group">
                <img
                  src={golap2}
                  alt="Tahmid Hasan Golap"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={golap}
                  alt="Tahmid Hasan Golap at work"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
