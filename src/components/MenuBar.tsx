export default function MenuBar(): JSX.Element {
  return (
    <>
      <ul id="menu_bar">
        <li id="menu_name">Niamh Brockbank</li>
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
        </div>
      </ul>
    </>
  );
}
