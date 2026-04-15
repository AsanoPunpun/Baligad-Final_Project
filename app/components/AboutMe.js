export default function AboutMe() {
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

      {/* IMAGES (STATIC VERSION - SAFE FOR VERCEL) */}
      <div className="image">

        {/* DARK MODE IMAGE */}
        <img
          src="/Images/dark.png"
          alt="Dark Mode Profile"
          className="dark-img"
        />

        {/* LIGHT MODE IMAGE */}
        <img
          src="/Images/light.png"
          alt="Light Mode Profile"
          className="light-img"
        />

      </div>

    </div>
  );
}