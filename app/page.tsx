import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="vertical-layout">

      {/* NAVIGATION */}
      <div className="nav">
        <a href="#about">ABOUT ME</a>
        <a href="#education">EDUCATION</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </div>

      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Contact />

    </main>
  );
}