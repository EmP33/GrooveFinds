import React from "react";
import classes from "./Home.module.scss";

import CategoryPlaceholder from "../UI/Placeholders/CategoryPlaceholder";
import PageWidthPlaceholder from "../UI/Placeholders/PageWidthPlaceholder";
import Slider from "../ShopItems/Slider/Slider";
import ShopBlock from "../ShopItems/ShopBlock/ShopBlock";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { outerWidth } = window;
  const category = useSelector((state) => state.products.categories);

  return (
    <main className={classes.main}>
      <Outlet />
      <PageWidthPlaceholder />
      <Slider title={"Zobacz nasze Bestsellery"} />
      <section className={classes["categories-section"]}>
        <ShopBlock
          category={category[Math.floor(Math.random() * category.length)]}
        />
        <ShopBlock
          category={category[Math.floor(Math.random() * category.length)]}
        />
        {outerWidth >= 1000 || outerWidth <= 800 ? (
          <CategoryPlaceholder />
        ) : null}
      </section>
      <Slider title={"Okazje"} />
      <section className={classes["categories-section"]}>
        <ShopBlock
          category={category[Math.floor(Math.random() * category.length)]}
        />
        {outerWidth >= 1000 || outerWidth <= 800 ? (
          <CategoryPlaceholder />
        ) : null}
        <ShopBlock
          category={category[Math.floor(Math.random() * category.length)]}
        />
      </section>
    </main>
  );
};

export default Home;
