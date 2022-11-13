import { useState } from "react";

export default function About(): JSX.Element {
  const [photo, setPhoto] = useState("../img/IMG_7976.jpeg");
  return (
    <img
      id="profile_photo"
      src={photo}
      alt="Niamh Brockbank generated using Stable Diffusion"
      onMouseEnter={() => setPhoto("../img/IMG_2919_Original 2.jpeg")}
      onMouseLeave={() => setPhoto("../img/IMG_7976.jpeg")}
    ></img>
  );
}
