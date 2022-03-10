import React from "react";

import classes from "./CartItem.module.scss";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

const CartItem = ({ item }) => {
  return (
    <div className={classes.item}>
      <img src={item.url} alt="Icon" />
      <div className={classes.itemName}>
        <h5>Komputery</h5>
        <p>{item.name}</p>
      </div>
      <div className={classes.itemCounter}>
        <button>
          <HiOutlineMinusSm />
        </button>
        <span>1</span>
        <button>
          <HiOutlinePlusSm />
        </button>
      </div>
      <span className={classes.itemPrice}>{item.price} zł</span>
      <div className={classes.itemRemoveDiv}>
        <button className={classes.itemRemoveButton}>&times;</button>
      </div>
    </div>
  );
};

export default CartItem;
