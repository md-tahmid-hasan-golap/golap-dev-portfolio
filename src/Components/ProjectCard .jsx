import React from "react";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <div className="bg-black/90 rounded-xl p-4 shadow-lg border border-cyan-500">
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
            rel="noopener noreferrer"
            className="text-cyan-400 underline"
          >
            Client
          </a>
        )}

        {project.server && (
          <a
            href={project.server}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline"
          >
            Server
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
