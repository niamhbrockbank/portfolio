import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function MenuBar(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false)
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });
  const menuOptions = ["home", "work", "about", "contact"];

  return (
    <>
      {isSmallScreen ? (
        <>
        <img
          src="./img/menu-list.svg"
          alt="menu list button"
          id="menu_button"
          onClick={() => setShowMenu(!showMenu)}
        />

        {showMenu && 
          <ul id="menu_list">
            {//TODO: Convert this to a function as it is reused here and line 37
            menuOptions.map((option, i) => {
              return (
                <li key={i}>
                  <h2>
                    <a href={`/${option !== "home" ? option : ""}`}>{option}</a>
                  </h2>
                </li>
              );
            })}
          </ul>
        }
        </>
       ) : (
        <ul id="menu_bar">
          {menuOptions.map((option, i) => {
            return (
              <li key={i}>
                <h2>
                  <a href={`/${option !== "home" ? option : ""}`}>{option}</a>
                </h2>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
