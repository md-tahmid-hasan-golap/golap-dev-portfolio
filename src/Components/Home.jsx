import React from "react";
import Banner from "./Banner";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <section id="home" className="scroll-mt-20">
        <Banner />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
