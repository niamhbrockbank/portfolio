interface MenuBarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

export default function MenuBar({ setCurrentPage }: MenuBarProps): JSX.Element {
  return (
    <>
      <ul id="menu_bar">
        <li id="menu_name"
            onClick={() => setCurrentPage("homepage")}>Niamh Brockbank</li>
        <div id="menu_list">
          <li className="menu_list_option">
            <a href="#featured_title">FEATURED</a>
          </li>
          <li className="menu_list_option">
            <a href="#archive_title">ARCHIVE</a>
          </li>
          <li className="menu_list_option">
            <a href="#contact_title">INFO</a>
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
