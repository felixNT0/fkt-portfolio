export type AppContextType = {
  toggleDarkMode: () => void;
  changeActiveTab: (tag: any) => void;
  toggleShowOtherSideBar: () => void;
  currentTab: string;
  darkMode: boolean;
  showOtherSideBar: boolean;
  toggleModal: () => void;
  modalState: boolean;
};
