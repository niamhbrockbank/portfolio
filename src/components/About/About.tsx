import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./About.scss";

export default function About(): JSX.Element {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 780px)" });
  const [photo, setPhoto] = useState("../img/IMG_7976.jpeg");

  return (
    <>
      <h1>About</h1>
      <div id="about">
        <div>
          <p className="page_description">
            Hello, my name is Niamh Brockbank. I am a recent graduate of the
            <a href="http://www.academy.tech">Academy</a> software development program. I am proficient in JavaScript,
            and a big fan of TypeScript.
            <br />
            <br />I have been numerous types of engineer and am motivated by solving real problems to improve people's lives. I am excited about the potential of new technologies to solve the world’s biggest problems, this drives my pursuit of continous personal and professional development. I am passionate about the value of diverse teams and multi-discplinary working I believe collaborative and holistic approaches to problems find the best, most elegant and most sustainable solutions.
          </p>
          <a href="./Brockbank_Niamh_CV_221104.pdf" target="_blank">
            <button>MY FULL CV</button>
          </a>
        </div>
        {!isSmallScreen && (
          <img
            id="profile_photo"
            src={photo}
            alt="Niamh Brockbank generated using Stable Diffusion"
            onMouseEnter={() => setPhoto("../img/IMG_2919_Original 2.jpeg")}
            onMouseLeave={() => setPhoto("../img/IMG_7976.jpeg")}
          ></img>
        )}
      </div>
    </>
  );
}
