import React from "react";

import classes from "./PaymentBackdrop.module.scss";

const PaymentBackdrop = (props) => {
  return <div className={classes.paymentBackdrop}>{props.children}</div>;
};

export default PaymentBackdrop;
