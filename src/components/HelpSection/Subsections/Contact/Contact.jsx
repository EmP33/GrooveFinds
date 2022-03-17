import React, { useRef, useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./Contact.module.scss";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Outlet } from "react-router-dom";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [sendingStatus, setSendingStatus] = useState("send");
  const sendEmailHandler = (e) => {
    e.preventDefault();
    setSendingStatus("sending");

    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !messageRef.current.value
    ) {
      setSendingStatus("error");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_CONTACT_SERVICE,
          process.env.REACT_APP_CONTACT_TEMPLATE,
          form.current,
          process.env.REACT_APP_CONTACT_USER_ID
        )
        .then(
          () => {
            setSendingStatus("ok");
            e.target.reset();
          },
          () => {
            setSendingStatus("error");
          }
        );
    }
  };

  return (
    <>
      <Outlet />
      <section styleName="contact">
        <h1>Kontakt</h1>
        <div>
          <form ref={form} onSubmit={sendEmailHandler}>
            <div>
              <label htmlFor="name">Imię*</label>
              {sendingStatus === "sending" ? (
                <input type="text" id="name" name="name" required disabled />
              ) : (
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Wprowadź imię"
                  ref={nameRef}
                />
              )}
            </div>
            <div>
              <label htmlFor="email">E-mail*</label>
              {sendingStatus === "sending" ? (
                <input type="email" id="email" name="email" required disabled />
              ) : (
                <input
                  type="email"
                  id="email"
                  name="email"
                  // required
                  placeholder="Wprowadź e-mail"
                  ref={emailRef}
                />
              )}
            </div>
            <div>
              <label htmlFor="message">Wiadomość*</label>
              {sendingStatus === "sending" ? (
                <textarea
                  id="message"
                  rows="10"
                  name="message"
                  required
                  disabled
                ></textarea>
              ) : (
                <textarea
                  id="message"
                  rows="10"
                  name="message"
                  required
                  placeholder="Wprowadź wiadomość"
                  ref={messageRef}
                ></textarea>
              )}
            </div>
            {sendingStatus === "send" && (
              <button styleName="sendBtn">Wyślij</button>
            )}
            {sendingStatus === "sending" && (
              <button styleName="sendingButton">
                <AiOutlineLoading3Quarters className="spinning" />
              </button>
            )}
            {sendingStatus === "ok" && (
              <button styleName="okButton">Wysłano</button>
            )}
            {sendingStatus === "error" && (
              <button styleName="errorButton">Błąd w wysyłaniu</button>
            )}
          </form>
        </div>
        <p styleName="message">
          Otrzymasz wiadomość drogą mailową w ciągu najbliższych kilku godzin
        </p>
      </section>
    </>
  );
};

export default CSSModules(Contact, styles);
