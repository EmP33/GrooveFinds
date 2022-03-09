import React from "react";

import classes from "./ItemCardBig.module.scss";

const ItemCardBig = ({ name, price, url }) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-container"]}>
        <img src={url} alt={name} className={classes["card-image"]} />
      </div>
      <div className={classes["card-content"]}>
        <h3>{name}</h3>
        <span>{price} zł</span>
      </div>
    </div>
  );
};

export default ItemCardBig;
