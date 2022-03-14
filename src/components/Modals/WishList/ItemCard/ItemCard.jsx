import React, { useEffect, useState } from "react";

import classes from "./ItemCard.module.scss";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
  IoHeart,
  IoCheckmarkOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const ItemCard = ({ product }) => {
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

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
            <Link to={`${location.pathname}/${product.id}`}>
              <IoEllipsisHorizontal />
            </Link>
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
          <div className={classes["discount-wrapper"]}>
            <span className={classes["discount-price"]}>
              {(product.price.raw * 1.1).toFixed(2)} zł
            </span>{" "}
            <span className={classes["discount-badge"]}>-10%</span>
          </div>
          <Link to={`${location.pathname}/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(ItemCard);
