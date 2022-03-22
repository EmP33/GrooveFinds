import React from "react";
import classes from "./Home.module.scss";

import CategoryPlaceholder from "../UI/Placeholders/CategoryPlaceholder";
import PageWidthPlaceholder from "../UI/Placeholders/PageWidthPlaceholder";
import Slider from "../ShopItems/Slider/Slider";
import ShopBlock from "../ShopItems/ShopBlock/ShopBlock";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { outerWidth } = window;
  const { t } = useTranslation();
  const category = useSelector((state) => state.products.categories);

  return (
    <main className={classes.main}>
      <Outlet />
      <PageWidthPlaceholder />
      <Slider title={t("bestsellers")} />
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
      <Slider title={t("occasions")} />
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
