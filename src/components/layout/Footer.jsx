import React from "react";

import classes from "./Footer.module.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a href="#" className={classes["footer__button"]}>
        Powrót na górę strony
      </a>
      <section className={classes["footer-content"]}>
        <div className={classes["footer-content__follow"]}>
          <h5>Obserwuj nas</h5>
          <ul>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className={classes["footer-content__payments"]}>
          <h5>Metody płatności</h5>
          <ul>
            <li>
              <a href="#">Metody płatności</a>
            </li>
            <li>
              <a href="#">Przelewy24</a>
            </li>
          </ul>
        </div>
      </section>
      <div className={classes["footer-logo"]}>
        <img src={logo} alt="Logo" />
      </div>
      <section className={classes["footer-copy"]}>
        <div className={classes["footer-copy__actions"]}>
          <button>Warunki użytkowania i sprzedaży</button>
          <button>Informacje o prywatności</button>
        </div>
        <p>&copy; 2022 GrooveFinds.com</p>
      </section>
    </footer>
  );
};

export default Footer;
