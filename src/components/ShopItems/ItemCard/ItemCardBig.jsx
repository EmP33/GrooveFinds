import React from "react";

import classes from "./ItemCardBig.module.scss";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
} from "react-icons/io5";

const ItemCardBig = ({ name, price, url }) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-container"]}>
        <div className={classes.cardBackdrop}>
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
        <span>{price} zł</span>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ItemCardBig;
