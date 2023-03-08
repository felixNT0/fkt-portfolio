import { FaBars, FaTimes } from "react-icons/fa";
import { useAppContext } from "../../contexts/useAppContext";
import useLinksToComponents from "../../hooks/useLinksToComponents";
import { ComponentLinksType } from "../../types/ComponentLinksType";

function MobileDropDownMenu({ setNav, nav }: any) {
  const { changeActiveTab } = useAppContext();
  const { componentLinks } = useLinksToComponents();

  return (
    <>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen mt-20 bg-black z-10 text-gray-500 ">
          {componentLinks.map(({ id, link, fn }: ComponentLinksType) => (
            <li
              onClick={() => {
                changeActiveTab(link);
                fn();
              }}
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <div onClick={() => setNav(!nav)} className="duration-500">
                {link}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MobileDropDownMenu;
