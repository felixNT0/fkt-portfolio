import { useEffect } from "react";
import { useAppContext } from "../../contexts/useAppContext";
import { modal } from "../../helpers/htmlInputElementsVariables";
import "../../styles/modal.css";
import { openModal } from "../../utils/modal";

function WelcomeModal() {
  const { toggleModal, modalState } = useAppContext();

  const closeModal = () => {
    openModal();
    toggleModal();
  };

  useEffect(() => {
    window.onclick = function (event) {
      if (event.target === modal && modal !== null) {
        modal.style.display = "none";
      }
    };
  }, []);

  return (
    <>
      {!modalState ? (
        <div id="showModal" className="modal">
          <div className="modal-content animate">
            <span onClick={closeModal} className="close" title="Close Modal">
              &times;
            </span>
            <div className="container ">
              <h1 className="text-center text-[#fca61f] dark:text-[#4db5ff] text-3xl font-bold welcome_text">
                Welcome to my Portfolio
              </h1>
              <p className="text-center text-gray-700 dark:text-black text-1xl font-bold mt-3">
                This is where you will see everything about my experience,
                works, skills and lot more...
              </p>
              <p
                style={{ fontSize: "10px" }}
                className="text-center text-gray-700 dark:text-black] font-bold mt-5"
              >
                Thanks for visiting my Portfolio Website
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default WelcomeModal;
