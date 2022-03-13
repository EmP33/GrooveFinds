import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./ProductDetail.module.scss";

import {
  IoStar,
  IoCartOutline,
  IoHeartOutline,
  IoHeart,
  IoClose,
  IoCheckmarkOutline,
} from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";

import Modal from "@mui/material/Modal";

const Login = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.user.isOpenModal);

  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleModalHandler = () => {
    dispatch(userActions.toggleFormModal());
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <Modal
        open={showModal}
        onClose={toggleModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "auto" }}
      >
        <div className={classes["form"]}>
          <button>Zarejestruj się</button>
          <button>Zaloguj się</button>
        </div>
      </Modal>
    </React.Fragment>,
    document.querySelector("#modals-root")
  );
};

export default React.memo(Login);
