export default function MenuBar(): JSX.Element {
  const menuList = ["home", "work", "about", "contact"]

  return (
    <>
      <ul id="menu_bar">
        {menuList.map((option, i) => {
          return <li key={i}><h2><a href={`/${option !== "home" ? option : ""}`}>{option.toUpperCase()}</a></h2></li>
        })}
      </ul>
    </>
  );
}
