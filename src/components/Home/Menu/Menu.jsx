import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import "./menu.scss";

import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modalSlice";
import Backdrop from "../../UI/Backdrop/Backdrop";

import { Link } from "react-router-dom";

const Menu = ({ showModal }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  const hideModalHandler = useCallback(() => {
    dispatch(modalActions.toggleShowMenu());
  }, [dispatch]);

  const toggleShowWishlist = () => {
    dispatch(modalActions.toggleShowWishlist());
  };

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
              <li>Centrum Pomocy</li>
              <li onClick={toggleShowWishlist}>Lista życzeń</li>
            </ul>
          </menu>
        </React.Fragment>,
        document.querySelector("#menu-root")
      )}
    </React.Fragment>
  );
};

export default React.memo(Menu);
