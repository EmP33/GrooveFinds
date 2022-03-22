import React from "react";
import classes from "./HelpSection.module.scss";

import { useTranslation } from "react-i18next";

import {
  IoPersonOutline,
  IoHomeOutline,
  IoClipboardOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

const HelpSection = () => {
  const { t } = useTranslation();
  const scrollToUpPageHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Outlet />
      <main className={classes["main"]}>
        <section className={classes["main-header"]}>
          <h1>{t("web_help_center")}</h1>
        </section>
        <section className={classes["main-help"]}>
          <div className={classes["main-help__block"]}>
            <IoPersonOutline className={classes["block-icon"]} />
            <div>
              <h2>{t("users")}</h2>
              <ul>
                <Link to="/help/privacy" onClick={scrollToUpPageHandler}>
                  <li>{t("cookie_preferences")}</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={classes["main-help__block"]}>
            <IoHomeOutline className={classes["block-icon"]} />
            <div>
              <h2>{t("delivery_and_payment")}</h2>
              <ul>
                <Link to="/help/payments" onClick={scrollToUpPageHandler}>
                  <li>{t("payment_methods")}</li>
                </Link>
                <Link to="/help/shipping" onClick={scrollToUpPageHandler}>
                  <li>{t("order_processing")}</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={classes["main-help__block"]}>
            <IoClipboardOutline className={classes["block-icon"]} />
            <div>
              <h2>{t("regulations_and_contact")}</h2>
              <ul>
                <Link to="/help/regulations" onClick={scrollToUpPageHandler}>
                  <li>{t("web_regulations")}</li>
                </Link>
                <Link to="/help/contact" onClick={scrollToUpPageHandler}>
                  <li>{t("contact")}</li>
                </Link>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HelpSection;
