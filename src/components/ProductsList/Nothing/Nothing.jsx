import React from "react";

import classes from "./Nothing.module.scss";

const Nothing = ({ text }) => {
  return <div className={classes["nothing"]}>{text}</div>;
};

export default Nothing;
