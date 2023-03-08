import { useAppContext } from "../../contexts/useAppContext";
import useLinksToComponents from "../../hooks/useLinksToComponents";
import { ComponentLinksType } from "../../types/ComponentLinksType";
import MobileDropDownMenu from "./MobileDropDownMenu";

function MainNavBar({ setNav, nav }: any) {
  const { changeActiveTab, currentTab, toggleShowOtherSideBar } =
    useAppContext();
  const { componentLinks } = useLinksToComponents();

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-white dark:bg-gradient-to-r from-cyan-500 to-blue-500 nav`}
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
                currentTab === link
                  ? "nav-links px-4 cursor-pointer capitalize font-medium text-black  hover:scale-105 hover:text-white duration-200 link-underline"
                  : "nav-links px-4 cursor-pointer capitalize font-medium text-black  scale-105 text-white duration-200 link-underline"
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

      <MobileDropDownMenu setNav={setNav} nav={nav} />
    </div>
  );
}

export default MainNavBar;
