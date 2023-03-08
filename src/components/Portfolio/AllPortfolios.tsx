import { PortfolioType } from "../../types/PortfolioType";
import { allPortfolios } from "../AllPortfolioDetails/AllPortfolios";

function AllPortfolios() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
      {allPortfolios.map(({ id, src, link, name, disc }: PortfolioType) => (
        <div
          key={id}
          data-aos="zoom-in-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="cursor-pointer shadow-md shadow-gray-600 rounded-lg "
        >
          <img
            src={src}
            alt="projects"
            className="rounded-md duration-200 hover:scale-105"
          />
          <div className="flex items-center justify-center">
            <button
              className="w-1/2 px-6 py-1 m-2 duration-200 hover:scale-105 rounded bg-[#fca61f] dark:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer dark:text-white text-black"
              onClick={() => window.open(link, "_blank")}
            >
              Demo
            </button>
          </div>
          <p
            style={{ textAlign: "center" }}
            className="text-[#fca61f] dark:text-[#4db5ff]"
          >
            {name}
          </p>
          <p
            className="dark:text-white text-black"
            style={{ padding: "15px 0 5px 7px", fontSize: "12px" }}
          >
            {disc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AllPortfolios;
