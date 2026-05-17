import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[min(90vh,800px)] overflow-y-auto glass-card rounded-2xl shadow-2xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close project details"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
          <div className="relative aspect-video md:aspect-auto md:min-h-[280px] bg-slate-900/50">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl min-h-[200px] md:min-h-full"
            />
          </div>

          <div className="p-6 sm:p-8 space-y-5">
            <div>
              <h2
                id="modal-title"
                className="font-display text-2xl sm:text-3xl font-bold text-white pr-10"
              >
                {project.name}
              </h2>
              <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Technology
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Project Links
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.client && (
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex items-center gap-1.5"
                  >
                    Client <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
                {project.server && (
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex items-center gap-1.5"
                  >
                    Server <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2.5 !px-4 !text-sm inline-flex"
                  >
                    View Live <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
