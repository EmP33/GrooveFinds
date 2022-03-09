import React from "react";

import Menu from "./Menu/Menu";
import Carousel from "../ShopItems/Carousel/Carousel";
import ShopBlock from "../ShopItems/ShopBlock/ShopBlock";

import classes from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Menu />
      <div className={classes.wrap}>
        <section className={classes.bests}>
          <h3 className={classes.bestsHeader}>Zobacz nasze Bestsellery</h3>
          <Carousel />
        </section>
        <section className={classes.adverts}>
          <div className={classes.placeholder}></div>
        </section>
      </div>
      <section className={classes["categories-blocks"]}>
        <ShopBlock />
        <ShopBlock />
        <ShopBlock />
      </section>
      <section className={classes["categories"]}>
        <h4>Elektronika</h4>
        <Carousel />
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
        <div>
          <img src="../../assets/logo.png" alt="Logo" />
        </div>
        <section className={classes.footerCopy}>
          <div>
            <button>Warunki użytkowania i sprzedaży</button>
            <button>Informacje o prywatności</button>
          </div>
          <p>&copy; 2022 GrooveFinds.com</p>
        </section>
      </footer>
    </>
  );
};

export default Home;
