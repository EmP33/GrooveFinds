import React from "react";

import classes from "./Cart.module.scss";

import CartItem from "./CartItem/CartItem";
import CartBackdrop from "./CartBackdrop";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.products.products);

  console.log(cartProducts);

  return (
    <CartBackdrop>
      <div className={classes.cart}>
        <section className={classes["order-section"]}>
          <div className={classes["order-section__header"]}>
            <Link to="/" className={classes["order-section__header-logo"]}>
              <img src={logo} alt="Logo" />
            </Link>
            <h2>Twoje zamówienia</h2>
            <span>3 rzeczy</span>
          </div>
          <div className={classes["order-section__list"]}>
            {cartProducts.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className={classes["order-section__footer"]}>
            <button onClick={() => navigate(-1)}>
              <BsArrowLeft className={classes["backIcon"]} />
              Powrót do sklepu
            </button>
          </div>
        </section>
        <section className={classes["payments-section"]}>
          <div className={classes["payments-section__results"]}>
            <h3 className={classes["results-header"]}>Podsumowanie</h3>
            <span className={classes["results-qty"]}>3 rzeczy</span>
            <span className={classes["results-price"]}>3899,85 zł</span>
          </div>
          <div className={classes["payments-section__gift"]}>
            <h5>Kod podarunkowy</h5>
            <input type="text" placeholder="Wpisz kod podarunkowy" />
            <button className={classes["gift-button"]}>
              <BsArrowRight />
            </button>
          </div>
          <div className={classes["payments-section__summary"]}>
            <h6>Cena całkowita</h6>
            <span>3899,85 zł</span>
            <button>Przejdź do płatności</button>
          </div>
        </section>
      </div>
    </CartBackdrop>
  );
};

export default Cart;
