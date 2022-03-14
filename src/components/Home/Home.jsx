import React from "react";
import classes from "./Home.module.scss";

import CategoryPlaceholder from "../UI/Placeholders/CategoryPlaceholder";
import PageWidthPlaceholder from "../UI/Placeholders/PageWidthPlaceholder";
import Slider from "../ShopItems/Slider/Slider";
import ShopBlock from "../ShopItems/ShopBlock/ShopBlock";

import { Outlet } from "react-router-dom";

const Home = () => {
  const { outerWidth } = window;

  return (
    <main className={classes.main}>
      <Outlet />
      <PageWidthPlaceholder />
      <Slider title={"Zobacz nasze Bestsellery"} />
      <section className={classes["categories-section"]}>
        <ShopBlock title={"Zabawki"} />
        <ShopBlock title={"Zabawki"} />
        {outerWidth >= 1000 || outerWidth <= 800 ? (
          <CategoryPlaceholder />
        ) : null}
      </section>
      <Slider title={"Okazje"} />
      <section className={classes["categories-section"]}>
        <ShopBlock title={"Zabawki"} />
        {outerWidth >= 1000 || outerWidth <= 800 ? (
          <CategoryPlaceholder />
        ) : null}
        <ShopBlock title={"Zabawki"} />
      </section>
    </main>
  );
};

export default Home;
