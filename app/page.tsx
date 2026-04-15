"use client";

import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Page() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* TOP NAV */}
      <div className="nav">
        <a href="#about">ABOUT</a>
        <a href="#education">EDUCATION</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>

        <button onClick={() => setDarkMode(!darkMode)} className="toggle">
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      <div className="layout">

        <section id="about"><AboutMe darkMode={darkMode} /></section>
        <section id="education"><Education darkMode={darkMode} /></section>
        <section id="experience"><Experience darkMode={darkMode} /></section>
        <section id="skills"><Skills darkMode={darkMode} /></section>
        <section id="contact"><Contact darkMode={darkMode} /></section>

      </div>

    </div>
  );
}