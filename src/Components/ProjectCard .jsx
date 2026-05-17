import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-40px" }}
      className="group flex flex-col h-full glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-400/25 hover:shadow-xl hover:shadow-cyan-500/5"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-900/80">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#07070d]/80 via-transparent to-transparent opacity-60"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-xl font-semibold text-white truncate">
              {project.name}
            </h3>
            <p className="text-slate-400 text-sm mt-1 line-clamp-2">{project.title}</p>
          </div>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="shrink-0 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors min-h-[44px] px-2"
          >
            Details
          </button>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="tag-pill text-slate-400">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-auto pt-2 border-t border-white/5">
          {project.client && (
            <a
              href={project.client}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm inline-flex items-center gap-1"
            >
              Client <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm inline-flex items-center gap-1"
            >
              Server <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm inline-flex items-center gap-1 font-semibold"
            >
              Live <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
