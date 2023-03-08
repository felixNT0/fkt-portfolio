import { createContext, useContext, useEffect, useState } from "react";
import { AppContextType } from "../types/AppContextType";

export const AppContext = createContext<AppContextType>({
  toggleDarkMode: () => {},
  changeActiveTab: () => {},
  toggleShowOtherSideBar: () => {},
  currentTab: "",
  darkMode: true,
  showOtherSideBar: false,
  toggleModal: () => {},
  modalState: false,
});

const AppContextProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentTab, setCurrentTab] = useState("");
  const [showOtherSideBar, setShowOtherSideBar] = useState(false);
  const [modalState, setModalState] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleShowOtherSideBar = () => {
    setShowOtherSideBar(!showOtherSideBar);
  };

  const changeActiveTab = (tab: any) => {
    setCurrentTab(tab);
  };

  const toggleModal = () => {
    setModalState(!modalState);
  };

  useEffect(() => {
    switch (darkMode) {
      case true:
        document.documentElement.classList.add("dark");
        break;
      case false:
        document.documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [darkMode]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        currentTab,
        modalState,
        toggleModal,
        changeActiveTab,
        showOtherSideBar,
        toggleShowOtherSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
