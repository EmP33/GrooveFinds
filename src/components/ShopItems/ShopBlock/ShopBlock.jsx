import React from "react";

import classes from "./ShopBlock.module.scss";
import ItemCardSmall from "../ItemCard/ItemCardSmall";

const ShopBlock = () => {
  return (
    <div className={classes["categories-blocks__element"]}>
      <h4>Zabawki</h4>
      <div className={classes.itemElements}>
        <ItemCardSmall />
        <ItemCardSmall />
        <ItemCardSmall />
        <ItemCardSmall />
      </div>
    </div>
  );
};

export default ShopBlock;
