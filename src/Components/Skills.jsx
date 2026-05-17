import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJsSquare,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import SectionHeader from "./ui/SectionHeader";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 w-5 h-5 shrink-0" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 w-5 h-5 shrink-0" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 w-5 h-5 shrink-0" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-500 w-5 h-5 shrink-0" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-5 h-5 shrink-0" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white w-5 h-5 shrink-0" /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-5 h-5 shrink-0" /> },
        { name: "Express.js", icon: <SiExpress className="text-slate-300 w-5 h-5 shrink-0" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-5 h-5 shrink-0" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400 w-5 h-5 shrink-0" /> },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "Figma", icon: <FaFigma className="text-pink-500 w-5 h-5 shrink-0" /> },
        { name: "Responsive Design", icon: <FaTools className="text-blue-400 w-5 h-5 shrink-0" /> },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "VS Code", icon: <FaGitAlt className="text-blue-600 w-5 h-5 shrink-0" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400 w-5 h-5 shrink-0" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="section-padding border-t border-white/5">
      <div className="section-container">
        <SectionHeader
          label="Expertise"
          title="My Skills"
          description="Technologies and tools I use to ship production-ready applications."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.article
              key={category.title}
              className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-cyan-400/25 hover:shadow-lg hover:shadow-cyan-500/5"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className="font-display text-xl font-semibold text-white mb-5">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5" role="list">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium text-slate-200 bg-white/5 border border-white/8 hover:bg-cyan-400/10 hover:border-cyan-400/25 transition-colors duration-200">
                      {skill.icon}
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
