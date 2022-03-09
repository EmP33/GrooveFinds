import React from "react";

import classes from "./DiscountItem.module.scss";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
} from "react-icons/io5";

const DiscountItem = ({ number }) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-container"]}>
        <div className={classes.cardBackdrop}>
          <button>
            <IoCartOutline />
          </button>
          <button>
            <IoHeartOutline />
          </button>
          <button>
            <IoEllipsisHorizontal />
          </button>
        </div>
        <div className={classes.discountBadge}>-10%</div>
        <img
          src="https://a.allegroimg.com/s512/11c001/58fd6442454984134e9e4cb3ab63/25-gier-zestaw-gry-planszowe-rodzinne-Alexander-PL"
          alt="Pudełko"
          className={classes["card-image"]}
        />
      </div>
      <div className={classes["card-content"]}>
        <h3>Pudełko {number}</h3>
        <span className={classes.price}>14.95 zł</span>
        <span className={classes.discountPrice}>
          <s>24.95 zł</s>
        </span>
      </div>
    </div>
  );
};

export default DiscountItem;
