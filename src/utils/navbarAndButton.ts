import {
  bottomToTop,
  stickyNavbar,
} from "../helpers/htmlInputElementsVariables";

export const NavbarAndButtonFn = () => {
  const fn = () => {
    if (bottomToTop !== null) {
      bottomToTop.style.display = "none";
    }

    if (
      document?.body.scrollTop > 100 ||
      document?.documentElement.scrollTop > 100
    ) {
      if (stickyNavbar !== null) {
        stickyNavbar.style.top = "0";
      }
      if (bottomToTop !== null) {
        bottomToTop.style.display = "block";
      }
    } else {
      if (stickyNavbar !== null) {
        stickyNavbar.style.top = "-500px";
      }
      if (bottomToTop !== null) {
        bottomToTop.style.display = "none";
      }
    }
  };

  fn();
};
