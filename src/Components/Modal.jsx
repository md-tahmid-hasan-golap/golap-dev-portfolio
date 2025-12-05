import React from "react";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-11/12 max-w-4xl border border-cyan-500">
        <button className="text-white text-right w-full mb-2" onClick={onClose}>
          ✖
        </button>

        <div className="grid md:grid-cols-2 gap-4">
          {/* LEFT: Image */}
          <img
            src={project.img}
            alt={project.name}
            className="rounded-md w-full h-64 object-cover"
          />

          {/* RIGHT: Details */}
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

            {/* Links Removed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
