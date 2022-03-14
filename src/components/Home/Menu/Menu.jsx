import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import "./menu.scss";

import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modalSlice";
import Backdrop from "../../UI/Backdrop/Backdrop";

import { Link, useLocation } from "react-router-dom";

const Menu = ({ showModal }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const categories = useSelector((state) => state.products.categories);

  const hideModalHandler = useCallback(() => {
    dispatch(modalActions.toggleShowMenu());
  }, [dispatch]);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <React.Fragment>
          <Backdrop isActive={showModal} onHideModal={hideModalHandler} />
          <menu className={showModal ? "menu menu-active" : "menu"}>
            <h3>Przeglądaj kategorie</h3>
            <button onClick={hideModalHandler}>&times;</button>
            <ul>
              {categories.map((category) => (
                <Link to={`/${category.slug}`} key={category.id}>
                  <li onClick={hideModalHandler}>{category.name}</li>
                </Link>
              ))}
            </ul>
            <h3>Pomoc i ustawienia</h3>
            <ul>
              <li onClick={hideModalHandler}>Centrum Pomocy</li>
              <Link to={`${location.pathname}/wishlist`}>
                <li onClick={hideModalHandler}>Lista życzeń</li>
              </Link>
            </ul>
          </menu>
        </React.Fragment>,
        document.querySelector("#menu-root")
      )}
    </React.Fragment>
  );
};

export default React.memo(Menu);
