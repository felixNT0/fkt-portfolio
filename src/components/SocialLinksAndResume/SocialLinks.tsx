import { useAppContext } from "../../contexts/useAppContext";
import useSocialLinks from "../../hooks/useSocialLinks";
import { SocialLinksType } from "../../types/SocialLinksType";

const SocialLinks = () => {
  const { allSocialLinks } = useSocialLinks();

  const { showOtherSideBar } = useAppContext();

  return (
    <div
      data-aos={!showOtherSideBar ? "slide-down" : "slide-up"}
      data-aos-delay="50"
      className="hidden lg:flex flex-col top-[35%] left-0 fixed "
    >
      <ul>
        {allSocialLinks.map(
          ({ id, child, href, style, download }: SocialLinksType) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#0000004d] side_bar_style" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SocialLinks;
