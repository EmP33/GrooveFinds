import React, { useEffect, useState } from "react";

import classes from "./ItemCard.module.scss";

import { Link } from "react-router-dom";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
  IoHeart,
} from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modalSlice";

const ItemCard = ({ product }) => {
  // const dynamicLink = `/${id}`;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.products.products);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleDetailsHandler = () => {
    dispatch(modalActions.toggleShowDetails());
  };

  useEffect(() => {
    setIsFavorite();
  }, []);

  return (
    <React.Fragment>
      <div className={classes["card"]}>
        <div className={classes["card-container"]}>
          <div className={classes["card-backdrop"]}>
            <button>
              <IoCartOutline />
            </button>
            <button>{isFavorite ? <IoHeart /> : <IoHeartOutline />}</button>
            <button onClick={toggleDetailsHandler}>
              <IoEllipsisHorizontal />
            </button>
          </div>
          <img
            src={product.image.url}
            alt={product.name}
            className={classes["card-image"]}
          />
        </div>
        <div className={classes["card-content"]}>
          <span className={classes.price}>{product.price.raw} zł</span>
          {/* <div className={classes["discount-wrapper"]}>
        <span className={classes["discount-price"]}>2399,95 zł</span>{" "}
        <span className={classes["discount-badge"]}>-25%</span>
      </div> */}
          <h3 onClick={toggleDetailsHandler}>{product.name}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemCard;
