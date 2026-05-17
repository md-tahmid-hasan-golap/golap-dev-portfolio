import React, { useState } from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard ";
import SectionHeader from "./ui/SectionHeader";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      name: "eTuitionBd",
      title: "MERN-Stack Tuition Management Platform.",
      img: "/Screenshot 2026-05-17 120728.png",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "JWT Token",
        "Stripe",
        "Tailwind CSS",
        "DaisyUI",
        "Framer Motion",
      ],
      client: "https://github.com/md-tahmid-hasan-golap/eTuitionBd-client",
      server: "https://github.com/md-tahmid-hasan-golap/eTuitionBd-server",
      live: "https://e-tuition-bd-client-eight.vercel.app/",
      description:
        "eTuitionBd is a comprehensive tuition management ecosystem with fully separated, role-based dashboards for Students, Tutors, and Admins. It features secure JWT authentication, advanced search/filtering, automated tutor application approval tied directly to Stripe payment integration, real-time platform transaction analytics, and smooth Framer Motion animations.",
    },
    {
      name: "MyShop",
      title: "Next.js Authentication-based Product Shop.",
      img: "/nextshop.png",
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
      client:
        "https://github.com/md-tahmid-hasan-golap/Import-Export-Hub-Client-side",
      server:
        "https://github.com/md-tahmid-hasan-golap/Import-Export-Hub-Server-side",
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
      live: "https://tangerine-profiterole-b07be1.netlify.app/",
      description:
        "Join our mission to plant 1 million trees and make the Earth greener for future generations",
    },
  ];

  return (
    <section className="section-padding border-t border-white/5">
      <div className="section-container">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="Real-world applications showcasing full-stack development, auth, and modern UI."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 auto-rows-fr">
          {projects.map((p, i) => (
            <ProjectCard key={p.name + i} project={p} onOpen={setSelected} />
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <Modal project={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
