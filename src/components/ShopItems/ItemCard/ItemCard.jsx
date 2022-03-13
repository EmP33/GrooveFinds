import React, { useEffect, useState } from "react";

import classes from "./ItemCard.module.scss";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
  IoHeart,
  IoCheckmarkOutline,
} from "react-icons/io5";

import { useDispatch } from "react-redux";
import { productActions } from "../../../store/productsSlice";

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const toggleDetailsHandler = () => {
    dispatch(productActions.toggleShowDetails(product));
  };

  const toggleIsFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };
  const toggleIsInCart = () => {
    setIsInCart((prevState) => !prevState);
  };

  useEffect(() => {
    setIsFavorite();
  }, []);

  return (
    <React.Fragment>
      <div className={classes["card"]}>
        <div className={classes["card-container"]}>
          <div className={classes["card-backdrop"]}>
            <button onClick={toggleIsInCart}>
              {isInCart ? <IoCheckmarkOutline /> : <IoCartOutline />}
            </button>
            <button onClick={toggleIsFavorite}>
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </button>
            <button onClick={toggleDetailsHandler}>
              <IoEllipsisHorizontal />
            </button>
          </div>
          {
            <img
              src={product.image.url}
              alt={product.name}
              className={classes["card-image"]}
            />
          }
        </div>
        <div className={classes["card-content"]}>
          <span className={classes.price}>{product.price.raw} zł</span>
          {/* <div className={classes["discount-wrapper"]}>
            <span className={classes["discount-price"]}>
              {(product.price.raw * 1.1).toFixed(2)} zł
            </span>{" "}
            <span className={classes["discount-badge"]}>-10%</span>
          </div> */}
          <h3 onClick={toggleDetailsHandler}>{product.name}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(ItemCard);
