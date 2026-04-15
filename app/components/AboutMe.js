import React from 'react';

const AboutMe = () => {
  return (
    <div id="about" className="main-container">

      <div className="info-section">
        <div className="content-box">
          <h2>About Me</h2>
          <p><strong>Name:</strong> Jamaika Baligad</p>
          <p><strong>Age:</strong> 21 years old</p>
          <p>
            I like learning foreign languages. I know how to speak a bit of
            Japanese and Bahasa Indonesia.
          </p>

          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:jamaikabaligad@gmail.com">
              jamaikabaligad@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="image-section">
        <img src="/Images/Tootiecactuss.jpg" alt="Profile" />
      </div>

    </div>
  );
};

export default AboutMe;