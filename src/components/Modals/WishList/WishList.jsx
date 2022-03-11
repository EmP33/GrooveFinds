import React from "react";
import ReactDOM from "react-dom";

import CartItem from "../../Cart/CartItem/CartItem";

import classes from "./WishList.module.scss";

import { IoPersonOutline } from "react-icons/io5";

const bestsItems = [
  {
    name: "Computer1",
    price: "129.95",
    id: "p1",
    url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
  },
  {
    name: "Zegarek2",
    price: "1229.95",
    id: "p2",
    url: "https://ustyle.pl/wp-content/uploads/2019/01/1113.jpg",
  },
  {
    name: "Garnek3",
    price: "59.95",
    id: "p3",
    url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
  },
];

const WishList = () => {
  console.log("WISH COMPONENT");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.wishList}>
          <h2>Lista życzeń</h2>
          <section className={classes.userSection}>
            <div className={classes.userIconDiv}>
              <IoPersonOutline className={classes.userIcon} />
            </div>
            <h3>Jan Kowalski</h3>
          </section>
          <section className={classes.itemsSection}>
            {bestsItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </section>
        </div>,
        document.querySelector("#modals-root")
      )}
    </React.Fragment>
  );
};

export default WishList;
