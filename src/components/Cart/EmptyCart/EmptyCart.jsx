import React from "react";

import classes from "./EmptyCart.module.scss";

import { IoBasketOutline } from "react-icons/io5";

const EmptyCart = () => {
  return (
    <div className={classes["empty-cart"]}>
      <IoBasketOutline />
      <h5>Nie ma tu żadnych zamówień</h5>
    </div>
  );
};

export default EmptyCart;
