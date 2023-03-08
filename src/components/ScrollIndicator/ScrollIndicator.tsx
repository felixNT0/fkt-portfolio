import React from "react";
import { useAppContext } from "../../contexts/useAppContext";
import "../../styles/scrollIndicator.css";

function ScrollIndicator() {
  const { darkMode } = useAppContext();
  return (
    <div className="header">
      <div className="progress-container">
        <div
          style={{ background: darkMode ? "#4db5ff" : "#fca61f" }}
          className="progress-bar "
          id="scrollBar"
        ></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
