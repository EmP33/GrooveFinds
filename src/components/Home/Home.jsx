import React from "react";

import Menu from "./Menu/Menu";

import classes from "./Home.module.scss";

const Home = () => {
  return (
    <React.Fragment>
      <Menu />
      <section className={classes.bests}></section>
      <section className={classes.deals}></section>
      <section className={classes["categories-blocks"]}>
        <div className={classes["categories-blocks__element"]}>
          <h4>Zabawki</h4>
        </div>
        <div className={classes["categories-blocks__element"]}>
          <h4>Dom</h4>
        </div>
        <div className={classes["categories-blocks__element"]}>
          <h4>Elektronika</h4>
        </div>
      </section>
      <section className={classes["categories"]}>
        <h4>Elektronika</h4>
      </section>
      <section className={classes["categories-blocks"]}>
        <div className={classes["categories-blocks__element"]}>
          <h4>Zabawki</h4>
        </div>
        <div className={classes["categories-blocks__element"]}>
          <h4>Dom</h4>
        </div>
        <div className={classes["categories-blocks__element"]}>
          <h4>Elektronika</h4>
        </div>
      </section>
      <footer>
        <button>Powrót na górę strony</button>
        <div>
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
        <div>
          <img src="../../assets/logo.png" alt="Logo" />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Home;
