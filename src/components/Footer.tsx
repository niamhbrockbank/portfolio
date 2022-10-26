export default function Footer(): JSX.Element {
  return (
    <>
      <div id="footer_section">
        <hr />
        <nav id="footer">
          <ul id="footer_navigation_list">
            {/* <li>
              <a href="/#featured">Featured</a>
            </li> */}
            <li>
              <a href="/#archive_title">Archive</a>
            </li>
            <li>
              <a href="/#info">Info</a>
            </li>
          </ul>
          <ul id="social_media_list">
            <li id="info">Find me on the internet</li>
            <li>
              <a href="https://www.linkedin.com/in/niamh-brockbank/">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/niamhbrockbank">GitHub</a>
            </li>
            <li>
              <a href="https://openprocessing.org/user/334108?view=activity&o=2">
                OpenProcessing
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
