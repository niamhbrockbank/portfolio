interface FooterProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Footer({ setCurrentPage }: FooterProps): JSX.Element {
  return (
    <>
      <div id="footer_section">
        <hr />
        <nav id="footer">
          <ul id="footer_navigation_list">
            <li>
              <a href="#featured_title">Featured</a>
            </li>
            <li>
              <a href="#archive_title">Archive</a>
            </li>
            <li>
              <a href="#contact_title">Info</a>
            </li>
          </ul>
          <ul id="social_media_list">
            <li id="contact_title">Find me on the internet</li>
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
