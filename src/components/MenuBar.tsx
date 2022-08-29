export default function MenuBar(): JSX.Element {
  return (
    <>
      <ul id="menu_bar">
        <li id="menu_name">Niamh Brockbank</li>
        <div id="menu_list">
          <li className="menu_list_option">FEATURED</li>
          <li className="menu_list_option">ARCHIVE</li>
          <li className="menu_list_option">INFO</li>
        </div>
      </ul>
    </>
  );
}
