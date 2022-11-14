import "./Home.scss";

export default function Home(): JSX.Element {
  return (
    <>
      <div id="home">
        <h1>intro</h1>
        <div id="intro">
          <p>
            I'm Niamh Brockbank, a <i>software engineer</i>.
          </p>
          <p className="description">
            I am a full-stack developer interested in sustainability and intuitive user
            design. Currently, I am focused on making my work more accessible. I recently completed a course with{" "}
            <a href="http://www.academy.tech">Academy.</a>
          </p>
        </div>
      </div>
    </>
  );
}
