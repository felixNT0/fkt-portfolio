import { useAppContext } from "../../contexts/useAppContext";
import useSocialLinks from "../../hooks/useSocialLinks";
import { SocialLinksType } from "../../types/SocialLinksType";

const BottomSocialLinksForMobile = () => {
  const { allBottomSocialLinks } = useSocialLinks();
  const { showOtherSideBar } = useAppContext();

  return (
    <div
      data-aos={!showOtherSideBar ? "slide-down" : "zoom-in"}
      data-aos-delay="50"
      className="bottom_navbar bottom-[0.5%] fixed duration-300"
    >
      {allBottomSocialLinks.map(
        ({ id, child, href, download }: SocialLinksType) => (
          <li
            key={id}
            className={
              "flex justify-between items-center icon_spacing w-[500px] duration-300 bg-gray-700 bg-[#0000004d]  side_bar_style"
            }
          >
            <a
              href={href}
              className=" cursor-pointer w-full flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        )
      )}
    </div>
  );
};

export default BottomSocialLinksForMobile;
