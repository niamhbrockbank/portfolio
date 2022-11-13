import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Menu(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });
  const menuOptions = ["home", "work", "about", "contact"];

  const menuOptionsList = menuOptions.map((option, i) => {
    return (
      <li key={i}>
        <h2>
          <Link to={`/${option !== "home" ? option : ""}`}>{option}</Link>
        </h2>
      </li>
    );
  });

  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="menu_bar">
            <img
              src="./img/menu-list.svg"
              alt="menu list button"
              id="menu_button"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>

          {showMenu && <ul id="menu_list">{menuOptionsList}</ul>}
        </>
      ) : (
        <ul className="menu_bar">
          {/*TODO: hide menu bar when rerender to large screen */}
          {menuOptionsList}
        </ul>
      )}
    </>
  );
}
