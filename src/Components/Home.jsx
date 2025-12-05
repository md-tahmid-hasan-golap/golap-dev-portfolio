import React from "react";
import Banner from "./Banner";
import AboutSection from "./AboutSection ";
import SkillsCarousel from "./SkillsCarousel ";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <SkillsCarousel></SkillsCarousel>
      <Projects></Projects>
    </div>
  );
};

export default Home;
