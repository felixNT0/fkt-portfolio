import { createContext, useContext, useRef } from "react";
import { ScrollToComponentContextType } from "../types/ScrollToComponentContextType";

export const ScrollToComponentContext =
  createContext<ScrollToComponentContextType>({
    ScrollToNavBarRef: null,
    ScrollToNavBarFn: () => {},
    ScrollToHomeRef: null,
    ScrollToHomeFn: () => {},
    ScrollToAboutRef: null,
    ScrollToAboutFn: () => {},
    ScrollToPortfoliosRef: null,
    ScrollToPortfoliosFn: () => {},
    ScrollToSkillsRef: null,
    ScrollToSkillsFn: () => {},
    ScrollToContactRef: null,
    ScrollToContactFn: () => {},
  });

const ScrollToComponentProvider = ({ children }: any) => {
  const ScrollToNavBarRef = useRef<any>(null);
  const ScrollToHomeRef = useRef<any>(null);
  const ScrollToAboutRef = useRef<any>(null);
  const ScrollToPortfoliosRef = useRef<any>(null);
  const ScrollToSkillsRef = useRef<any>(null);
  const ScrollToContactRef = useRef<any>(null);

  const ScrollToNavBarFn = () => {
    ScrollToNavBarRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToHomeFn = () => {
    ScrollToHomeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToAboutFn = () => {
    ScrollToAboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToPortfoliosFn = () => {
    ScrollToPortfoliosRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToSkillsFn = () => {
    ScrollToSkillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToContactFn = () => {
    ScrollToContactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollToComponentContext.Provider
      value={{
        ScrollToNavBarRef,
        ScrollToNavBarFn,
        ScrollToHomeRef,
        ScrollToHomeFn,
        ScrollToAboutRef,
        ScrollToAboutFn,
        ScrollToPortfoliosRef,
        ScrollToPortfoliosFn,
        ScrollToSkillsRef,
        ScrollToSkillsFn,
        ScrollToContactRef,
        ScrollToContactFn,
      }}
    >
      {children}
    </ScrollToComponentContext.Provider>
  );
};

export default ScrollToComponentProvider;

export const useScrollToComponentContext = () =>
  useContext(ScrollToComponentContext);
