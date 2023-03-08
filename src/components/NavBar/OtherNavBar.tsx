// import { Link } from "react-scroll";
import { useAppContext } from "../../contexts/useAppContext";
import useLinksToComponents from "../../hooks/useLinksToComponents";
import { ComponentLinksType } from "../../types/ComponentLinksType";
import MobileDropDownMenu from "./MobileDropDownMenu";

function OtherNavBar({ setNavBarState, navBarState }: any) {
  const { changeActiveTab, currentTab, toggleShowOtherSideBar } =
    useAppContext();

  const { componentLinks } = useLinksToComponents();

  return (
    <div
      id="navbar"
      className={`flex justify-between items-center w-full h-20 px-4 text-white navbar_bg `}
    >
      <div>
        <h1
          className="text-5xl ml-2 cursor-pointer"
          onClick={toggleShowOtherSideBar}
        >
          FKT
        </h1>
      </div>

      <ul className="hidden md:flex">
        {componentLinks.map(({ id, link, fn }: ComponentLinksType) => {
          return (
            <li
              key={id}
              className={
                link === currentTab
                  ? "nav-links px-4 cursor-pointer capitalize font-medium text-white dark:text-white scale-105 text-white duration-200 link-underline"
                  : "nav-links px-4 cursor-pointer capitalize font-medium text-white dark:text-white hover:scale-105 hover:text-white duration-200 link-underline"
              }
            >
              <div
                onClick={() => {
                  changeActiveTab(link);
                  fn();
                }}
                className="duration-500"
              >
                {link}
              </div>
            </li>
          );
        })}
      </ul>
      <MobileDropDownMenu setNav={setNavBarState} nav={navBarState} />
    </div>
  );
}

export default OtherNavBar;
