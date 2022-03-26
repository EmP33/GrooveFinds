import React from "react";

import classes from "./EmptyCart.module.scss";

import { IoBasketOutline } from "react-icons/io5";

import { useTranslation } from "react-i18next";

const EmptyCart = () => {
  const { t } = useTranslation();
  return (
    <div className={classes["empty-cart"]}>
      <IoBasketOutline />
      <h5>{t("cart-is-empty")}</h5>
    </div>
  );
};

export default EmptyCart;
