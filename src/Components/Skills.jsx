import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
// icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-heading fs-1" data-aos="fade-right">
        My Skills
      </h1>
      <div className="skills-row d-flex flex-wrap justify-content-center">
        <div className="skill-box" data-aos="fade-right">
          <FaReact className="skill-icon spin" />
          <p className="sub">React</p>
        </div>
        <div className="skill-box" data-aos="fade-right">
          <FaHtml5 className="skill-icon spin" />
          <p className="sub">HTML</p>
        </div>
        <div className="skill-box" data-aos="fade-right">
          <FaCss3Alt className="skill-icon spin" />
          <p className="sub">CSS</p>
        </div>
        <div className="skill-box" data-aos="fade-right">
          <FaJs className="skill-icon spin" />
          <p className="sub">JavaScript</p>
        </div>
      </div>
      <div className="skills-row d-flex flex-wrap justify-content-center">
        <div className="skill-box" data-aos="fade-right">
          <FaBootstrap className="skill-icon spin" />
          <p className="sub">Bootstrap</p>
        </div>
        <div className="skill-box" data-aos="fade-right">
          <SiTailwindcss className="skill-icon spin" />
          <p className="sub">Tailwind</p>
        </div>
        <div className="skill-box" data-aos="fade-right">
          <FaGitAlt className="skill-icon spin" />
          <p className="sub">Git</p>
        </div>
        <div className="skill-box" data-aos="fade-right">
          <FaGithub className="skill-icon spin" />
          <p className="sub">GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
