import React from "react";
import classes from "./Loading.module.scss";

import logo from "../../../assets/logo.png";

const Loading = () => {
  return (
    <div className={classes["wrapper"]}>
      <img src={logo} alt="logo" />
      <div className={classes["spinner-block"]}>
        <div className={classes["spinner"]}></div>
      </div>
    </div>
  );
};

export default Loading;
