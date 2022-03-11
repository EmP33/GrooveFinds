import React from "react";

import { useSelector } from "react-redux";

import classes from "./Home.module.scss";

import CategoryPlaceholder from "../UI/Placeholders/CategoryPlaceholder";
import PageWidthPlaceholder from "../UI/Placeholders/PageWidthPlaceholder";
import Menu from "./Menu/Menu";
import Slider from "../ShopItems/Slider/Slider";
import ShopBlock from "../ShopItems/ShopBlock/ShopBlock";

// import WishList from "../Modals/WishList/WishList";

const Home = () => {
  const { outerWidth } = window;
  const showMenu = useSelector((state) => state.modal.showMenu);

  return (
    <>
      <Menu showModal={showMenu} />
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
      {/* <WishList /> */}
    </>
  );
};

export default Home;
