import React from "react";
import classes from "./HelpSection.module.scss";

import { TextField } from "@mui/material";
import { ImSearch } from "react-icons/im";
import {
  IoPersonOutline,
  IoHomeOutline,
  IoClipboardOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

const HelpSection = () => {
  const scrollToUpPageHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Outlet />
      <main className={classes["main"]}>
        <section className={classes["main-header"]}>
          <h1>Centrum Pomocy GrooveFinds</h1>
        </section>
        <section className={classes["main-help"]}>
          <div className={classes["main-help__block"]}>
            <IoPersonOutline className={classes["block-icon"]} />
            <div>
              <h2>Użytkownicy</h2>
              <ul>
                <Link to="/help/privacy" onClick={scrollToUpPageHandler}>
                  <li>Polityka prywatności</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={classes["main-help__block"]}>
            <IoHomeOutline className={classes["block-icon"]} />
            <div>
              <h2>Dostawa i płatności</h2>
              <ul>
                <Link to="/help/payments" onClick={scrollToUpPageHandler}>
                  <li>Sposoby płatności</li>
                </Link>
                <Link to="/help/shipping" onClick={scrollToUpPageHandler}>
                  <li>Realizacja zamówień i dostawa</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={classes["main-help__block"]}>
            <IoClipboardOutline className={classes["block-icon"]} />
            <div>
              <h2>Regulamin i kontakt</h2>
              <ul>
                <Link to="/help/regulations" onClick={scrollToUpPageHandler}>
                  <li>Regulamin strony</li>
                </Link>
                <Link to="/help/contact" onClick={scrollToUpPageHandler}>
                  <li>Kontakt</li>
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
