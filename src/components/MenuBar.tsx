import { useMediaQuery } from "react-responsive";

export default function MenuBar(): JSX.Element {
  const menuOptions = ["home", "work", "about", "contact"]
  const isSmallScreen = useMediaQuery({query: '(max-width: 900px)'})

  return (
    <>
      {isSmallScreen ? 
      <img 
        src="./img/menu-list.svg" 
        alt="menu list button" 
        id="menu_button"
      /> 
      : 
      <ul id="menu_bar">
        {menuOptions.map((option, i) => {
          return <li key={i}><h2><a href={`/${option !== "home" ? option : ""}`}>{option}</a></h2></li>
        })}
      </ul>
      }
    </>
  );
}
