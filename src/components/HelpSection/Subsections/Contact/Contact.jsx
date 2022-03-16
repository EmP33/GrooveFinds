import React from "react";

import classes from "./Contact.module.scss";

import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Outlet />
      <section className={classes.contact}>
        <h1>Kontakt</h1>
        <div>
          <form>
            <div>
              <label htmlFor="name">Imię</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" rows="10"></textarea>
            </div>
            <button className={classes.sendBtn}>Wyślij</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
