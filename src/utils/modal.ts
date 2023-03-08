import { modal } from "../helpers/htmlInputElementsVariables";

export const openModal = () => {
  const newModal = () => {
    if (modal !== null) {
      modal.style.display = "block";
    }
  };

  newModal();
};

export const closeModal = () => {
  const newModal = () => {
    if (modal !== null) {
      modal.style.display = "none";
    }
  };

  newModal();
};
