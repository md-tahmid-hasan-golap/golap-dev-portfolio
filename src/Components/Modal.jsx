import React from "react";
import { motion } from "framer-motion";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 mt-9"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 p-6 rounded-xl w-11/12 max-w-4xl border border-cyan-500"
      >
        <button className="text-white text-right w-full mb-2" onClick={onClose}>
          ✖
        </button>

        <div className="grid md:grid-cols-2 gap-4">
          <img
            src={project.img}
            alt={project.name}
            className="rounded-md w-full h-64 object-cover"
          />

          <div>
            <h2 className="text-2xl text-white font-bold">{project.name}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>

            <h3 className="text-white font-semibold mt-4">Technology</h3>
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

            {/* 🔥 Links Section (Client, Server, Live) */}

            <div className="flex items-center flex-wrap gap-5 md:gap-7 mt-5">
              <h3 className="text-white font-semibold ">Project Links</h3>
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
