import { Link } from "react-router-dom";

export default function MenuBar(): JSX.Element {
  return (
    <>
      <ul id="menu_bar">
        <Link to="/">
          <li id="menu_name">Niamh Brockbank</li>
        </Link>
        <div id="menu_list">
          <li className="menu_list_option">
            <a href="/#featured">FEATURED</a>
          </li>
          <li className="menu_list_option">
            <a href="/#archive_title">ARCHIVE</a>
          </li>
          <li className="menu_list_option">
            <a href="#info">INFO</a>
          </li>
          <li className="menu_list_option">
            <a href="./Brockbank_Niamh_CV_220824.pdf" target="_blank">
              CV
            </a>
          </li>
        </div>
      </ul>
    </>
  );
}
