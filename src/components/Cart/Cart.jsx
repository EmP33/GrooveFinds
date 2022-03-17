import React from "react";

import classes from "./Cart.module.scss";

import CartItem from "./CartItem/CartItem";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartBackdrop from "./CartBackdrop";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.user.cart);

  return (
    <CartBackdrop>
      <div className={classes.cart}>
        <section className={classes["order-section"]}>
          <div className={classes["order-section__header"]}>
            <Link to="/home" className={classes["order-section__header-logo"]}>
              <img src={logo} alt="Logo" />
            </Link>
            <h2>Twoje zamówienia</h2>
            <span>{cart.total_items ? cart.total_items : 0} rzeczy</span>
          </div>
          <div className={classes["order-section__list"]}>
            {cart["line_items"] &&
              cart["line_items"].map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            {!cart["line_items"]?.length && <EmptyCart />}
          </div>
          <div className={classes["order-section__footer"]}>
            <button onClick={() => navigate("/home")}>
              <BsArrowLeft className={classes["backIcon"]} />
              Powrót do sklepu
            </button>
          </div>
        </section>
        <section className={classes["payments-section"]}>
          <div className={classes["payments-section__results"]}>
            <h3 className={classes["results-header"]}>Podsumowanie</h3>
            <span className={classes["results-qty"]}>
              {cart.total_items ? cart.total_items : 0} rzeczy
            </span>
            <span className={classes["results-price"]}>
              {cart.subtotal ? cart.subtotal.raw : 0} zł
            </span>
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
            <span>{cart.subtotal ? cart.subtotal.raw : 0} zł</span>
            <button>Przejdź do płatności</button>
          </div>
        </section>
      </div>
    </CartBackdrop>
  );
};

export default Cart;
