import { useState } from "react";

export default function Home(): JSX.Element {
  const [photo, setPhoto] = useState("../img/IMG_7976.jpeg");

  return (
    <>
      <div className="main_page">
      <div id="intro_section">
        <h1>home</h1>
        <div id="intro">
          <img
            id="profile_photo"
            src={photo}
            alt="Niamh Brockbank generated using Stable Diffusion"
            onMouseEnter={() => setPhoto("../img/IMG_2919_Original 2.jpeg")}
            onMouseLeave={() => setPhoto("../img/IMG_7976.jpeg")}
          ></img>
          <p id="intro_words">
            My name is Niamh Brockbank, I'm a <i>software developer</i> living
            and working in the UK.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
