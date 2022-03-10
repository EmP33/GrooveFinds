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
  return (
    <CartBackdrop>
      <div className={classes.cart}>
        <div className={classes.order}>
          <section className={classes["order-header"]}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <h2>Twoje zamówienia</h2>
            <span>3 rzeczy</span>
          </section>
          <section className={classes["order-list"]}>
            {bestsItems.map((item) => (
              <CartItem item={item} />
            ))}
          </section>
          <section className={classes["order-footer"]}>
            <Link to="/">
              <BsArrowLeft className={classes["backIcon"]} />
              Powrót do sklepu
            </Link>
          </section>
        </div>
        <div className={classes.payments}>
          <div className={classes["result"]}>
            <h3 className={classes["result-header"]}>Podsumowanie</h3>
            <span className={classes["result-qty"]}>3 rzeczy</span>
            <span className={classes["result-price"]}>3899,85 zł</span>
          </div>
          <div className={classes["gift"]}>
            <h5 className={classes["gift-header"]}>Kod podarunkowy</h5>
            <input
              type="text"
              className={classes["gift-input"]}
              placeholder="Wpisz kod podarunkowy"
            />
          </div>
          <div className={classes["summary"]}>
            <h6 className={classes["summary-header"]}>Cena całkowita</h6>
            <span className={classes["summary-price"]}>3899,85 zł</span>
            <button className={classes["summary-button"]}>
              Przejdź do płatności
            </button>
          </div>
        </div>
      </div>
    </CartBackdrop>
  );
};

export default Cart;
