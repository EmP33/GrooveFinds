import React from "react";

import ReactDOM from "react-dom";

import "./Backdrop.scss";

const Backdrop = ({ isActive, onHideModal }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div
          onClick={onHideModal}
          className={isActive ? "backdrop backdrop-active" : "backdrop"}
        ></div>,
        document.querySelector("#modals-root")
      )}
    </React.Fragment>
  );
};

export default Backdrop;
