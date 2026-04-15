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

        {/* ❗ FIX: remove darkMode props */}
        <section id="about"><AboutMe /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>

      </div>

    </div>
  );
}