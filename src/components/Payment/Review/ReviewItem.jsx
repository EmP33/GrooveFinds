import React from "react";

import classes from "./ReviewItem.module.scss";

const ReviewItem = ({ item }) => {
  return (
    <div className={classes["review-item"]}>
      <img src={item.image.url} alt={item.name} />
      <div className={classes["review-item__description"]}>
        <h5>{item.name}</h5>
        <p>
          Quantity: {item.quantity} for {item.price.raw} zł
        </p>
        <p>{item.quantity * item.price.raw} zł</p>
      </div>
    </div>
  );
};

export default ReviewItem;
