import React from "react";

import classes from "./Footer.module.scss";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const scrollToUpPageHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={classes.footer}>
      <button
        className={classes["footer__button"]}
        onClick={scrollToUpPageHandler}
      >
        {t("back_to_top")}
      </button>
      <section className={classes["footer-content"]}>
        <div className={classes["footer-content__follow"]}>
          <h5>{t("follow_us")}</h5>
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
          <h5>{t("help")}</h5>
          <ul>
            <li>
              <Link to="/help/payments" onClick={scrollToUpPageHandler}>
                {t("payment_methods")}
              </Link>
            </li>
            <li>
              <Link to="/help/shipping" onClick={scrollToUpPageHandler}>
                {t("delivery")}
              </Link>
            </li>
            <li>
              <Link to="/help/regulations" onClick={scrollToUpPageHandler}>
                {t("web_regulations")}
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className={classes["footer-logo"]}>
        <img src={logo} alt="Logo" />
      </div>
      <section className={classes["footer-copy"]}>
        <div className={classes["footer-copy__actions"]}>
          <Link to="/help/shipping" onClick={scrollToUpPageHandler}>
            {t("order_fulfillment")}
          </Link>
          <Link to="/help/privacy" onClick={scrollToUpPageHandler}>
            {t("cookie_preferences")}
          </Link>
        </div>
        <p>&copy; 2022 GrooveFinds.com</p>
      </section>
    </footer>
  );
};

export default Footer;
