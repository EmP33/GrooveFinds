import React from "react";

import { IoStar, IoPersonOutline } from "react-icons/io5";

import classes from "./Review.module.scss";

const Review = () => {
  return (
    <li className={classes["review"]}>
      <IoPersonOutline className={classes["review-avatar"]} />
      <div className={classes["review-person"]}>
        <h5>Jan</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.m! Veritatis,
          suscipit.
        </p>
      </div>
      <div className={classes["review-rating"]}>
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
      </div>
    </li>
  );
};

export default Review;
