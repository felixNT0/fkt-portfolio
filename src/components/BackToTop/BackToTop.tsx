import { FaArrowUp } from "react-icons/fa";
import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";
import "../../styles/styles.css";

function BackToTop() {
  const { ScrollToNavBarFn } = useScrollToComponentContext();

  return (
    <div
      onClick={ScrollToNavBarFn}
      id="bottom"
      data-aos="slide-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="back_to_top bg-[#fca61f] dark:bg-[#4db5ff] duration-500"
    >
      <FaArrowUp />
    </div>
  );
}

export default BackToTop;
