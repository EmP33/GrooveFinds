import React from "react";
import classes from "./Home.module.scss";

import { useSelector } from "react-redux";

import CategoryPlaceholder from "../UI/Placeholders/CategoryPlaceholder";
import PageWidthPlaceholder from "../UI/Placeholders/PageWidthPlaceholder";
import Menu from "./Menu/Menu";
import Slider from "../ShopItems/Slider/Slider";
import ShopBlock from "../ShopItems/ShopBlock/ShopBlock";
import ProductDetail from "../ProductDetail/ProductDetail";
import Login from "../Login/Login";
// import WishList from "../Modals/WishList/WishList";

import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { outerWidth } = window;
  const showMenu = useSelector((state) => state.modal.showMenu);
  const showDetails = useSelector((state) => state.products.showDetails);
  const isOpenModal = useSelector((state) => state.user.isOpenModal);

  const showLoginFormHandler = () => {
    dispatch(userActions.toggleFormModal());
  };

  return (
    <main className={classes.main}>
      {showDetails && <ProductDetail />}
      {isOpenModal && <Login />}
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
    </main>
  );
};

export default Home;
