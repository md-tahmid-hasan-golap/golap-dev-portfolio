import React, { useState } from "react";
import ProjectCard from "./ProjectCard ";
import Modal from "./Modal";

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      name: "TourMate",
      title: "Complete tour booking & management platform.",
      img: "../../src/assets/ture.png",
      tech: ["React", "Tailwind", "Node", "Express", "MongoDB", "Firebase"],
      client: "https://github.com/md-tahmid-hasan-golap/tour-booking-client",
      server: "https://github.com/md-tahmid-hasan-golap/tour-booking-server",
      live: "https://ture-booking.web.app/",
      description:
        "TourMate is a full-stack tour booking platform with Firebase Authentication, CRUD operations, JWT API, and responsive UI.",
    },
    {
      name: "Import Export Hub",
      title: "Modern web platform for global trade.",
      img: "../../src/assets/export.png",
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
      title: "An engaging online game library.",
      img: "../../src/assets/gaheHub.png",
      tech: ["React", "Tailwind", "Firebase", "Motion", "React Slick Carousel"],
      client: "https://github.com/md-tahmid-hasan-golap/game-hub",
      live: "https://gamehub-bae91.web.app/",
      description:
        "GameHub is an online library for discovering indie games, installing them, and interacting with a responsive, animated UI.",
    },
  ];

  return (
    <div className="p-6 bg-black min-h-screen">
      <h2 className="text-3xl font-bold pt-5 pb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} onOpen={setSelected} />
        ))}
      </div>

      <Modal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default Projects;
