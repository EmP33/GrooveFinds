import React from "react";

import classes from "./Footer.module.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <button className={classes.footerButton}>Powrót na górę strony</button>
      <div className={classes.footerSection}>
        <section className={classes.follow}>
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
        </section>
        <section className={classes["payments-methods"]}>
          <h5>Metody płatności</h5>
          <ul>
            <li>
              <a href="#">Metody płatności</a>
            </li>
            <li>
              <a href="#">Przelewy24</a>
            </li>
          </ul>
        </section>
      </div>
      <div className={classes.logoSection}>
        <img src={logo} alt="Logo" />
      </div>
      <section className={classes.footerCopy}>
        <div className={classes.footerActions}>
          <button>Warunki użytkowania i sprzedaży</button>
          <button>Informacje o prywatności</button>
        </div>
        <p>&copy; 2022 GrooveFinds.com</p>
      </section>
    </footer>
  );
};

export default Footer;
