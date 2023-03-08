import { showScrollBar } from "../helpers/htmlInputElementsVariables";

export const scrollBarIndicatorFn = () => {
  const newScrollBar = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    if (showScrollBar !== null) {
      showScrollBar.style.width = scrolled + "%";
    }
  };

  newScrollBar();
};
