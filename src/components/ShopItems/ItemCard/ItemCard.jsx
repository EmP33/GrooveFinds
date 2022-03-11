import React from "react";

import classes from "./ItemCard.module.scss";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
} from "react-icons/io5";

const ItemCardBig = ({ name, price, url }) => {
  return (
    <div className={classes["card"]}>
      <div className={classes["card-container"]}>
        <div className={classes["card-backdrop"]}>
          <button>
            <IoCartOutline />
          </button>
          <button>
            <IoHeartOutline />
          </button>
          <button>
            <IoEllipsisHorizontal />
          </button>
        </div>
        <img src={url} alt={name} className={classes["card-image"]} />
      </div>
      <div className={classes["card-content"]}>
        <span className={classes.price}>{price} zł</span>
        {/* <div className={classes["discount-wrapper"]}>
          <span className={classes["discount-price"]}>2399,95 zł</span>{" "}
          <span className={classes["discount-badge"]}>-25%</span>
        </div> */}
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ItemCardBig;
