import React from "react";

import ReactDOM from "react-dom";

import "./Backdrop.scss";

const Backdrop = ({ isActive }) => {
  console.log(isActive);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div
          className={isActive ? "backdrop backdrop-active" : "backdrop"}
        ></div>,
        document.querySelector("#modals-root")
      )}
    </React.Fragment>
  );
};

export default Backdrop;
