import React from "react";

import profilePic from "../../src/assets/myimage.png.png"; // তোমার profile image path ঠিক করে বসাও

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10"
    >
      {/* LEFT = Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={profilePic}
          alt="Profile"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-500 object-cover shadow-lg"
        />
      </div>

      {/* RIGHT = Text Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-2 text-cyan-400">
          &lt;I’m Tahmid Hasan Golap /&gt;
        </h2>
        <h3 className="text-xl text-white font-semibold mb-4">
          MERN Stack Developer | React.js Expert
        </h3>

        <p className="text-gray-300 mb-4">
          Hello! I’m a passionate MERN stack developer with a strong focus on
          React.js. I specialize in building clean, modern, and responsive web
          applications. I’m always exploring new technologies and adapting to
          innovative tools to enhance my skills and deliver impactful projects.
        </p>

        <p className="text-gray-300 mb-4">
          I have hands-on experience in Frontend & Backend development, UI/UX
          Design, and working with tools and technologies like Firebase,
          Node.js, MongoDB, VS Code, and Figma. I continuously explore Next.js
          and other modern frameworks to expand my expertise and stay up-to-date
          in the web development world.
        </p>
      </div>
    </section>
  );
};

export default About;
