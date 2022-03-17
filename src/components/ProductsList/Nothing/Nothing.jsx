import React from "react";
import classes from "./Nothing.module.scss";

import { IoBasketOutline } from "react-icons/io5";

const Nothing = () => {
  return (
    <div className={classes["nothing"]}>
      <IoBasketOutline />
    </div>
  );
};

export default Nothing;
