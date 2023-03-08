import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";
import AllPortfolios from "./AllPortfolios";

const Portfolio = () => {
  const { ScrollToPortfoliosRef } = useScrollToComponentContext();
  return (
    <div
      ref={ScrollToPortfoliosRef}
      className="portfolio_component w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div
            data-aos="slide-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:text-white text-black">
              Portfolio
            </p>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="30"
            data-aos-duration="700"
            className="py-6 dark:text-white text-black"
          >
            I have spent a lot of time on different projects. I love doing
            everything from scratch. Here are some of my favorite ones which sum
            up my knowledge. I have done many small projects from different
            courses and challenges to learn the basics. You can click on the
            demo to view.
          </p>
        </div>
        <AllPortfolios />
      </div>
    </div>
  );
};

export default Portfolio;
