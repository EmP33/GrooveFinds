import React from "react";

import classes from "./CartBackdrop.module.scss";

const CartBackdrop = (props) => {
  return <div className={classes.cartBackdrop}>{props.children}</div>;
};

export default CartBackdrop;
