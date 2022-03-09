import React from "react";

import Menu from "./Menu/Menu";
import Carousel from "../ShopItems/Carousel/Carousel";
import SecondCarousel from "../ShopItems/SecondCarousel/SecondCarousel";
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
        <h4>Okazje</h4>
        <SecondCarousel />
      </section>
      <section className={classes["categories-blocks"]}>
        <ShopBlock />
        <ShopBlock />
        <ShopBlock />
      </section>
    </>
  );
};

export default Home;
