import React from "react";

import classes from "./Cart.module.scss";

import CartItem from "./CartItem/CartItem";
import CartBackdrop from "./CartBackdrop";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const bestsItems = [
  {
    name: "Zestaw Gamingowy 16 GB 480GD 480SSD Feforce 2gb Monitor22",
    price: "129.95",
    id: "p1",
    url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
  },
  {
    name: "Mini PC Lenovo Tiny m710Q 8GB 240SSD",
    price: "1229.95",
    id: "p2",
    url: "https://ustyle.pl/wp-content/uploads/2019/01/1113.jpg",
  },
  {
    name: "ZESTAW PC Gamingowy i5 32/960gb SSD GEFORCE",
    price: "59.95",
    id: "p3",
    url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
  },
  {
    name: "Zestaw Gamingowy 16 GB 480GD 480SSD Feforce 2gb Monitor22",
    price: "129.95",
    id: "p1",
    url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
  },
  {
    name: "Mini PC Lenovo Tiny m710Q 8GB 240SSD",
    price: "1229.95",
    id: "p2",
    url: "https://ustyle.pl/wp-content/uploads/2019/01/1113.jpg",
  },
  {
    name: "ZESTAW PC Gamingowy i5 32/960gb SSD GEFORCE",
    price: "59.95",
    id: "p3",
    url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
  },
];

const Cart = () => {
  console.log("CART PAGE");

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
            {bestsItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className={classes["order-section__footer"]}>
            <Link to="/">
              <BsArrowLeft className={classes["backIcon"]} />
              Powrót do sklepu
            </Link>
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
