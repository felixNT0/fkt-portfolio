import { useState } from "react";
import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";
import "../../styles/styles.css";
import ToggleDarkModeSwitch from "../ToggleDarkModeSwitch/ToggleDarkModeSwitch";
import MainNavBar from "./MainNavBar";
import OtherNavBar from "./OtherNavBar";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [navBarState, setNavBarState] = useState(false);
  const { ScrollToNavBarRef } = useScrollToComponentContext();

  return (
    <div ref={ScrollToNavBarRef}>
      <MainNavBar nav={nav} setNav={setNav} />

      {!nav && (
        <OtherNavBar
          navBarState={navBarState}
          setNavBarState={setNavBarState}
        />
      )}

      <ToggleDarkModeSwitch />
    </div>
  );
};

export default NavBar;
