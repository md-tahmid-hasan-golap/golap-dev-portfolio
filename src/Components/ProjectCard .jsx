import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-black/90 rounded-xl p-4 shadow-lg border border-cyan-500"
    >
      <img
        src={project.img}
        alt={project.name}
        className="rounded-md w-full h-48 object-cover"
      />

      <div className="flex items-center justify-between mt-3">
        <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
        <button
          onClick={() => onOpen(project)}
          className="text-cyan-400 hover:underline"
        >
          See Details
        </button>
      </div>

      <p className="text-gray-300 text-sm mt-1">{project.title}</p>

      <h3 className="text-white mt-3 font-semibold">Technology</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-cyan-700 text-white text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        {project.client && (
          <a
            href={project.client}
            target="_blank"
            className="text-cyan-400 underline"
          >
            Client
          </a>
        )}
        {project.server && (
          <a
            href={project.server}
            target="_blank"
            className="text-cyan-400 underline"
          >
            Server
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="text-cyan-400 underline"
          >
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
