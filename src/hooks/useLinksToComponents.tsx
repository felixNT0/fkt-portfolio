import { useScrollToComponentContext } from "../contexts/useScrollToComponentContext";
import { ComponentLinksType } from "../types/ComponentLinksType";

function useLinksToComponents() {
  const {
    ScrollToAboutFn,
    ScrollToContactFn,
    ScrollToHomeFn,
    ScrollToSkillsFn,
    ScrollToPortfoliosFn,
  } = useScrollToComponentContext();
  const componentLinks: ComponentLinksType[] = [
    {
      id: 1,
      link: "home",
      fn: ScrollToHomeFn,
    },
    {
      id: 2,
      link: "about",
      fn: ScrollToAboutFn,
    },
    {
      id: 3,
      link: "portfolio",
      fn: ScrollToPortfoliosFn,
    },
    {
      id: 4,
      link: "skills",
      fn: ScrollToSkillsFn,
    },
    {
      id: 5,
      link: "contact",
      fn: ScrollToContactFn,
    },
  ];

  return { componentLinks };
}

export default useLinksToComponents;
