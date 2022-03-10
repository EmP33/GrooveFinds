import React from "react";

import "./DropdownMenu.scss";

import ReactDOM from "react-dom";

const Menu = ({ showModal, onHideModal }) => {
  const hideModalHandler = () => {
    onHideModal();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <React.Fragment>
          <div
            className={showModal ? "backdrop backdrop-active" : "backdrop"}
          ></div>
          <menu className={showModal ? "menu menu-active" : "menu"}>
            <h3>Przeglądaj kategorie</h3>
            <button onClick={hideModalHandler}>&times;</button>
            <ul>
              <li>Dom i ogród</li>
              <li>Elektronika</li>
              <li>Zabawki</li>
              <li>Zegarki</li>
              <li>On</li>
              <li>Ona</li>
              <li>Biżuteria</li>
              <li>Gry wideo</li>
            </ul>
            <h3>Pomoc i ustawienia</h3>
          </menu>
        </React.Fragment>,
        document.querySelector("#menu-root")
      )}
    </React.Fragment>
  );
};

export default Menu;
