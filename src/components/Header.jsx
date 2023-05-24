import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import ThemeSelector from "./ThemeSelector";
import allrecipesStyleLogo from "./allrecipesStyleLogo.png"
import foodNetWorkLogo from "./foodNetWorkLogo.png"

const Header = (props) => {

  const theme = props.theme
  const setTheme = props.setTheme

  let logo = <h2>DevMountain Eatery</h2>

  if (theme === `devMountain`) {
    logo = `DevMountain Eatery`
  } else if (theme === "allrecipes") {
    logo = <img src={allrecipesStyleLogo} />
  } else {
    logo = <img src={foodNetWorkLogo} />
  }

  return (
    <header>
      <h2>{logo}</h2>
      <nav>
        <ThemeSelector theme={theme} setTheme={setTheme} />
          <Link to=""><button>Home</button></Link>
          &nbsp;
          <Link to="/newRecipeScreen"><button>Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;
