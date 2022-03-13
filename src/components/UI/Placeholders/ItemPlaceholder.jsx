import React from "react";

import classes from "./ItemPlaceholder.module.scss";

export default function ItemPlaceholder() {
  return (
    <div className={classes["card"]}>
      <div className={classes["card-container"]}></div>
      <div className={classes["card-content"]}></div>
    </div>
  );
}
