import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../../assets/image.jpg";
import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";

const Home = () => {
  const { ScrollToHomeRef, ScrollToPortfoliosFn } =
    useScrollToComponentContext();
  return (
    <div ref={ScrollToHomeRef} className={`h-auto w-full home`}>
      <div className="home_welcome_texts">
        <div className="flex flex-col justify-center align-center text-center h-full">
          <span className="text-black dark:text-white sm:mt-1">Hy I'm</span>
          <h2
            data-aos="slide-right"
            className={`text-4xl sm:text-5xl font-bold text-center text-[#fca61f] dark:text-[#4db5ff]`}
          >
            Tsowa Kolo Felix
          </h2>
          <p
            data-aos="slide-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-gray-500 dark:text-white max-w-md text-center mt-5 px-5"
          >
            Frontend Developer | React JS | React Native | UI/UX & Graphic |
            Figma | Wordpress or WIX Designer with producting Quality work
          </p>

          <div
            data-aos="slide-right"
            data-aos-delay="30"
            data-aos-duration="500"
            className="portfolio_btn"
          >
            <div
              onClick={ScrollToPortfoliosFn}
              className="group text-white px-6 py-3 my-5 flex justify-center align-center items-center rounded-md bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" small-screen hidden" data-aos="flip-right">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>

        <div className="big-screen" data-aos="slide-right">
          <img
            src={HeroImage}
            alt="profile"
            className="user_image rounded-3xl mx-auto w-1/2 duration-300 cursor-pointer hover:w-2/3 md:w-half mb-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
