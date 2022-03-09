import React from "react";

import classes from "./ItemCardBig.module.scss";

const ItemCardBig = ({ number }) => {
  return <div className={classes.card}>ItemCardBig {number}</div>;
};

export default ItemCardBig;
