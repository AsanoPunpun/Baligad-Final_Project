"use client";
import React, { useState } from 'react';

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="skills" className="main-container">
      <div className="info-section">
        <div className="content-box">
          <h2>Highlighted Skills</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <img src="/Images/linux.jpg" />
              <h4>Linux</h4>
              <p>Basic and intermediate Linux commands</p>
            </div>

            <div className="skill-card">
              <img src="/Images/OIP (10).webp" />
              <h4>Java</h4>
              <p>Efficient Java coding</p>
            </div>

            <div className="skill-card">
              <img src="/Images/OIP (11).webp" />
              <h4>Networking</h4>
              <p>Device communication setup</p>
            </div>
          </div>

          {showMore && (
            <div className="skills-grid">
              <div className="skill-card">
                <img src="/Images/chess.webp" />
                <h4>Chess</h4>
              </div>

              <div className="skill-card">
                <img src="/Images/paint.webp" />
                <h4>Painting</h4>
              </div>

              <div className="skill-card">
                <img src="/Images/japanese language.webp" />
                <h4>Japanese</h4>
              </div>
            </div>
          )}

          <button
            className="view-more"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "View Less" : "View More"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Skills;