import React from "react";

import classes from "./CartItem.module.scss";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

const CartItem = ({ item }) => {
  return (
    <div className={classes.item}>
      {<img src={item.assets[0].url} alt="Icon" />}
      <div className={classes.itemName}>
        <h5>{item.categories[0].name}</h5>
        <p>{item.name}</p>
      </div>
      <div className={classes.itemCounter}>
        <span>
          <button>
            <HiOutlineMinusSm />
          </button>
          <span>1</span>
          <button>
            <HiOutlinePlusSm />
          </button>
        </span>
      </div>
      <span className={classes.itemPrice}>{item.price.raw} zł</span>
      <div className={classes.itemRemoveDiv}>
        <button className={classes.itemRemoveButton}>&times;</button>
      </div>
    </div>
  );
};

export default CartItem;
