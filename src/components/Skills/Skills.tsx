import { useScrollToComponentContext } from "../../contexts/useScrollToComponentContext";
import { SkillType } from "../../types/SkillType";
import { allSkills } from "../AllSkillsDetails/AllSkills";

const Skills = () => {
  const { ScrollToSkillsRef } = useScrollToComponentContext();
  return (
    <div ref={ScrollToSkillsRef} className="w-full h-auto experience">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            data-aos="fade-up"
            className="text-4xl font-bold border-b-4 border-gray-500 p-.5 inline dark:text-white text-black"
          >
            Skills
          </p>
          <p
            className="py-6 dark:text-white text-black"
            data-aos="zoom-out"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            These are the some tools and technologies I've worked with and used
            them in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {allSkills.map(({ id, src, title, style }: SkillType) => (
            <div
              key={id}
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className={`cursor-pointer shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 dark:text-white text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
