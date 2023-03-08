import { useAppContext } from "../../contexts/useAppContext";
import BottomSocialLinksForMobile from "./BottomSocialLinksForMobile";
import SocialLinks from "./SocialLinks";

function AllSocialLinks() {
  const { showOtherSideBar } = useAppContext();
  return (
    <>
      {!showOtherSideBar ? (
        <>
          <SocialLinks />
          <BottomSocialLinksForMobile />
        </>
      ) : null}
    </>
  );
}

export default AllSocialLinks;
