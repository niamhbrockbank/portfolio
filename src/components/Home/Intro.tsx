import { useState } from "react";

export default function Intro(): JSX.Element {
  const [photo, setPhoto] = useState("../img/IMG_7976.jpeg");

  return (
    <>
      <div id="intro_section">
        <h1>Intro</h1>
        <div id="intro">
          <img
            id="profile_photo"
            src={photo}
            alt="Niamh Brockbank generated using Stable Diffusion"
            onMouseEnter={() => setPhoto("../img/IMG_2919_Original 2.jpeg")}
            onMouseLeave={() =>
              setTimeout(() => setPhoto("../img/IMG_7976.jpeg"), 100)
            }
          ></img>
          <p id="intro_words">
            My name is Niamh Brockbank, I'm a <i>software developer</i> living
            and working in the UK.
          </p>
        </div>
      </div>
    </>
  );
}
