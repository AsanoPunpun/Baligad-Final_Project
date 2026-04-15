"use client";

import { useState } from "react";

export default function Skills() {
  const [show, setShow] = useState(false);

  return (
    <div className="card" id="skills">

      <div className="content">

        <h2>Skills</h2>

        <div className="grid">
          <div className="box">Linux</div>
          <div className="box">Java</div>
          <div className="box">Networking</div>
        </div>

        {show && (
          <div className="grid" style={{ marginTop: "10px" }}>
            <div className="box">Chess</div>
            <div className="box">Painting</div>
            <div className="box">Japanese</div>
          </div>
        )}

        <button onClick={() => setShow(!show)} className="toggle">
          {show ? "Show Less" : "View More"}
        </button>

      </div>

    </div>
  );
}