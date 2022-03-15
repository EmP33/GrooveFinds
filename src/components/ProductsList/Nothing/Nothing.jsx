import React from "react";

import classes from "./Nothing.module.scss";

const Nothing = () => {
  return (
    <div className={classes["nothing"]}>
      Nie ma żadnych produktów w tej kategorii
    </div>
  );
};

export default Nothing;
