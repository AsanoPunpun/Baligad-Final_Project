export default function AboutMe({ darkMode }) {
  return (
    <div className="card" id="about">

      <div className="content">

        <h2>About Me</h2>
        <p><b>Name:</b> Jamaika Baligad</p>
        <p><b>Age:</b> 21</p>

        <p>
          I like learning languages like Japanese and Bahasa Indonesia.
        </p>

      </div>

      <div className="image">
        <img
          src={
            darkMode
              ? "/Images/Untitled design (14).png"
              : "/Images/Untitled design (15).png"
          }
        />
      </div>

    </div>
  );
}