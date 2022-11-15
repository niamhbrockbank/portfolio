import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";

export default function Menu(): JSX.Element {
  const page = useLocation().pathname.slice(1)
  console.log(page)

  const [showMenu, setShowMenu] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });
  const menuOptions = ["home", "work", "about", "contact"];

  const menuOptionsList = menuOptions.map((option, i) => {
    return (
      <li key={i}>
        <h2>
          {page === option ? 
          <p style={{borderBottom: '0.1rem solid #41423e'}}>{option}</p>
          :
          <Link to={`/${option !== "home" ? option : ""}`}>{option}</Link>
          }
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
              //TODO: control show menu with CSS so can add transition
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
