import "./App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";
import ErrorPage from "./components/Error";

function App() {
  const [theme, setTheme] = useState("devMountain");

  useEffect(() => {
    document.body.className = theme;
    if (theme === "foodNetwork") {
      document.documentElement.style.setProperty("--header-color", `white`);
      document.documentElement.style.setProperty(
        "--header-text-color",
        `black`
      );
      document.documentElement.style.setProperty(
        "--header-button-underline-color",
        `#CA2125`
      );
      document.documentElement.style.setProperty(
        "--header-button-highlight-color",
        `#white`
      );
      document.documentElement.style.setProperty("--social-color", `#CA2125`);

      document.documentElement.style.setProperty("--footer-color", `#3E3E3E`);
    } else if (theme === `allrecipes`) {
      document.documentElement.style.setProperty("--header-color", `white`);
      document.documentElement.style.setProperty(
        "--header-text-color",
        `black`
      );
      document.documentElement.style.setProperty(
        "--header-button-underline-color",
        `#DB7533`
      );
      document.documentElement.style.setProperty(
        "--header-button-highlight-color",
        `#white`
      );
      document.documentElement.style.setProperty("--social-color", `#DB7533`);

      document.documentElement.style.setProperty("--footer-color", `#F2F2F2`);
    } else {
      document.documentElement.style.setProperty("--header-color", `#DB7533`);
      document.documentElement.style.setProperty(
        "--header-text-color",
        `white`
      );
      document.documentElement.style.setProperty(
        "--header-button-underline-color",
        `transparent`
      );
      document.documentElement.style.setProperty(
        "--header-button-highlight-color",
        `#ffce65`
      );
      document.documentElement.style.setProperty("--social-color", `#578A8B`);
      document.documentElement.style.setProperty("--footer-color", `#3E3E3E`);
    }

    //console.log(theme);
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout theme={theme} setTheme={setTheme} />,
      errorElement: <ErrorPage theme={theme} setTheme={setTheme} />,
      children: [
        {
          path: "/",
          element: <HomeScreen theme={theme} setTheme={setTheme} />,
        },
        {
          path: "/newRecipeScreen",
          element: <NewRecipeScreen theme={theme} setTheme={setTheme} />,
        },
        {
          path: "/recipe/:id",
          element: <DetailScreen theme={theme} setTheme={setTheme} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
