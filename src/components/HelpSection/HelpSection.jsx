import React from "react";
import classes from "./HelpSection.module.scss";

import { TextField } from "@mui/material";
import { ImSearch } from "react-icons/im";
import {
  IoPersonOutline,
  IoHomeOutline,
  IoClipboardOutline,
} from "react-icons/io5";

import { Outlet } from "react-router-dom";

const HelpSection = () => {
  return (
    <>
      <Outlet />
      <main className={classes["main"]}>
        <section className={classes["main-header"]}>
          <h1>Centrum Pomocy GrooveFinds</h1>
          <div className={classes["main-header__search"]}>
            <TextField
              label={"Szukaj w centrum pomocy"}
              className={classes["search-bar"]}
              variant="outlined"
            />
            <button className={classes["search-button"]}>
              <ImSearch className={classes["search-icon"]} />
            </button>
          </div>
        </section>
        <section className={classes["main-help"]}>
          <div className={classes["main-help__block"]}>
            <IoPersonOutline className={classes["block-icon"]} />
            <div>
              <h2>Konto</h2>
              <ul>
                <li>Rejestracja i aktywacja</li>
                <li>Logowanie i hasło</li>
                <li>Dane i ustawienia konta</li>
              </ul>
            </div>
          </div>
          <div className={classes["main-help__block"]}>
            <IoHomeOutline className={classes["block-icon"]} />
            <div>
              <h2>Dostawa i płatności</h2>
              <ul>
                <li>Sposoby płatności</li>
                <li>Czas i opcje dostawy</li>
              </ul>
            </div>
          </div>
          <div className={classes["main-help__block"]}>
            <IoClipboardOutline className={classes["block-icon"]} />
            <div>
              <h2>Regulamin i kontakt</h2>
              <ul>
                <li>Regulamin strony</li>
                <li>Kontakt</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HelpSection;
