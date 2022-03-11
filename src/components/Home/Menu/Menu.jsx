import React, { useCallback } from "react";
import ReactDOM from "react-dom";

import "./menu.scss";

import { useDispatch } from "react-redux";
import { modalActions } from "../../../store/modalSlice";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Menu = ({ showModal }) => {
  const dispatch = useDispatch();

  const hideModalHandler = useCallback(() => {
    dispatch(modalActions.toggleShowMenu());
  }, [dispatch]);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <React.Fragment>
          <Backdrop isActive={showModal} />
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

export default React.memo(Menu);
