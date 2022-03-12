import React from "react";

import classes from "./ItemCard.module.scss";

import { Link } from "react-router-dom";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
} from "react-icons/io5";

import { useDispatch } from "react-redux";
import { modalActions } from "../../../store/modalSlice";

const ItemCardBig = ({ name, price, url, id }) => {
  const dynamicLink = `/${id}`;
  const dispatch = useDispatch();

  const toggleDetailsHandler = () => {
    dispatch(modalActions.toggleShowDetails());
  };

  return (
    <React.Fragment>
      <div className={classes["card"]}>
        <div className={classes["card-container"]}>
          <div className={classes["card-backdrop"]}>
            <button>
              <IoCartOutline />
            </button>
            <button>
              <IoHeartOutline />
            </button>
            <button onClick={toggleDetailsHandler}>
              <IoEllipsisHorizontal />
            </button>
          </div>
          <img src={url} alt={name} className={classes["card-image"]} />
        </div>
        <div className={classes["card-content"]}>
          <span className={classes.price}>{price} zł</span>
          {/* <div className={classes["discount-wrapper"]}>
        <span className={classes["discount-price"]}>2399,95 zł</span>{" "}
        <span className={classes["discount-badge"]}>-25%</span>
      </div> */}
          <h3 onClick={toggleDetailsHandler}>{name}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemCardBig;
