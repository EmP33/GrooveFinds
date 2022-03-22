import React from "react";
import classes from "./Loading.module.scss";

import logo from "../../../assets/logo.png";

import { RiLoader3Fill } from "react-icons/ri";

const Loading = () => {
  return (
    <div className={classes.checkoutLoading}>
      <img src={logo} alt="logo" />
      <RiLoader3Fill className="spinning" />
    </div>
  );
};

export default Loading;
