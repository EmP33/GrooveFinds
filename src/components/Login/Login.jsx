import React from "react";
import ReactDOM from "react-dom";
import classes from "./Login.module.scss";

import { IoLogoFacebook, IoLogoGoogle, IoClose } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";

import Modal from "@mui/material/Modal";

const Login = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.user.isOpenModal);
  const formType = useSelector((state) => state.user.formType);

  const toggleFormHandler = (type) => {
    dispatch(userActions.toggleFormType(type));
  };

  console.log(formType);

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
          {" "}
          <button
            className={classes["close-button"]}
            onClick={toggleModalHandler}
          >
            <IoClose />
          </button>
          {formType === "register" ? (
            <button
              onClick={() => toggleFormHandler("register")}
              className={classes["form__register-btn--active"]}
            >
              Zarejestruj się
            </button>
          ) : (
            <button
              onClick={() => toggleFormHandler("register")}
              className={classes["form__register-btn"]}
            >
              Zarejestruj się
            </button>
          )}
          {formType === "login" ? (
            <button
              onClick={() => toggleFormHandler("login")}
              className={classes["form__login-btn--active"]}
            >
              Zaloguj się
            </button>
          ) : (
            <button
              onClick={() => toggleFormHandler("login")}
              className={classes["form__login-btn"]}
            >
              Zaloguj się
            </button>
          )}
          {formType === "login" ? (
            <React.Fragment>
              <form className={classes["form-inputs"]}>
                <input
                  type="text"
                  placeholder="Adres Email lub nazwa użytkownika"
                />
                <input type="text" placeholder="Hasło" />
              </form>
              <button className={classes["form__remind-pass"]}>
                Zapomniałeś hasła?
              </button>
              <button className={classes["form__login"]}>Zaloguj się</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form className={classes["form-inputs"]}>
                <input
                  type="text"
                  placeholder="Adres Email lub nazwa użytkownika"
                />{" "}
                <input type="password" placeholder="Hasło" />
                <input type="password" placeholder="Powtórz hasło" />
              </form>
              <button className={classes["form__remind-pass"]}>
                Zaloguj za pomoca numeru telefonu
              </button>
              <button className={classes["form__login"]}>Zarejestruj</button>
            </React.Fragment>
          )}
          <div className={classes["form-access"]}>
            <h3>Szybki dostęp</h3>
            <button>
              <IoLogoGoogle className={classes["form-access--google"]} />
            </button>
            <button>
              <IoLogoFacebook className={classes["form-access--facebook"]} />
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>,
    document.querySelector("#modals-root")
  );
};

export default React.memo(Login);
