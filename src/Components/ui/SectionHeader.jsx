import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ label, title, description, align = "left" }) => {
  const isCenter = align === "center";

  return (
    <motion.header
      className={`mb-10 md:mb-14 ${isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {label && (
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400/90 mb-3">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg text-slate-400 leading-relaxed ${isCenter ? "" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </motion.header>
  );
};

export default SectionHeader;
