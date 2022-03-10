import React, { useState } from "react";

// import Menu from "./Menu/Menu";
import DropdownMenu from "./Menu/DropdownMenu";

import Slider from "../ShopItems/Slider/Slider";

// import Carousel from "../ShopItems/Carousel/Carousel";
// import WishList from "../Modals/WishList/WishList";

import SecondCarousel from "../ShopItems/SecondCarousel/SecondCarousel";
import ShopBlock from "../ShopItems/ShopBlock/ShopBlock";

import classes from "./Home.module.scss";
// import { IoMenu } from "react-icons/io5";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const showMenuModalHangler = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <>
      {/* {!showModal && (
        <button className={classes.modalMenuButton}>
          <IoMenu />
        </button>
      )} */}

      <DropdownMenu showModal={showModal} onHideModal={showMenuModalHangler} />
      {/* <Menu /> */}
      <div className={classes.wrap}>
        <section className={classes.adverts}>
          <div className={classes.placeholder}></div>
        </section>
        <Slider />
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
      {/* <WishList /> */}
    </>
  );
};

export default Home;
