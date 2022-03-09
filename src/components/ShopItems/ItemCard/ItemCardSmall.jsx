import React from "react";

import classes from "./ItemCardSmall.module.scss";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
} from "react-icons/io5";

const ItemCardSmall = () => {
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
        <img
          src="https://a.allegroimg.com/s512/11c001/58fd6442454984134e9e4cb3ab63/25-gier-zestaw-gry-planszowe-rodzinne-Alexander-PL"
          alt="Pudełko"
          className={classes["card-image"]}
        />
      </div>
      <div className={classes["card-content"]}>
        <h3>Pudełko</h3>
        <span>14.95 zł</span>
      </div>
    </div>
  );
};

export default ItemCardSmall;
