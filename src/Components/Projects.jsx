import React, { useState } from "react";

import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard ";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      name: "MyShop",
      title: "Next.js Authentication-based Product Shop.",
      img: "/nextshop.png", // এখানে তোর প্রজেক্টের thumbnail দিবি
      tech: [
        "Next.js",
        "NextAuth.js",
        "Tailwind",
        "Express",
        "MongoDB",
        "Axios",
        "Framer Motion",
      ],
      client: "https://github.com/md-tahmid-hasan-golap/nextShop-Frontend",
      server: "https://github.com/md-tahmid-hasan-golap/nextShop-Backend",
      live: "https://next-shop-ten-ruby.vercel.app/",
      description:
        "MyShop is a modern Next.js full-stack application with secure authentication using NextAuth.js (Google + Credentials), protected routes, product CRUD system, search, and a fully responsive UI with smooth animations.",
    },
    {
      name: "Import Export Hub",
      title: "Modern web platform for global trade.",
      img: "/emportExportHub.png",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB", "Firebase"],
      client: "https://github.com/md-tahmid-hasan-golap/Import-Export-Hub",
      server:
        "https://github.com/md-tahmid-hasan-golap/Import-Export-Hub-Server",
      live: "https://import-export-2d0aa.web.app/",
      description:
        "Import Export Hub enables users to manage exports, explore products, and import items efficiently with authentication and private routes.",
    },
    {
      name: "GameHub",
      title: "Plant a Tree, Grow a Future",
      img: "/gaheHub.png",
      tech: ["React", "Tailwind", "Firebase", "Motion", "React Slick Carousel"],
      client: "https://github.com/md-tahmid-hasan-golap/game-hub",
      live: "https://gamehub-bae91.web.app/",
      description:
        "GameHub helps users discover indie games, install them, and experience a smooth animated UI.",
    },
    {
      name: "Green Earth",
      title: "An engaging online game library.",
      img: "/green.png",
      tech: ["Html", "Css", "Tailwind", "DaisyUI"],
      client: "https://github.com/md-tahmid-hasan-golap/Assignment-Six",
      live: "https://gamehub-bae91.web.app/",
      description:
        "Join our mission to plant 1 million trees and make the Earth greener for future generations",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-black min-h-screen"
    >
      <h2 className="text-3xl font-bold pt-5 pb-10 text-white">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} onOpen={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <Modal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
