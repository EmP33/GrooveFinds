import React, { useEffect, useState } from "react";

import classes from "./ItemCard.module.scss";

import {
  IoCartOutline,
  IoHeartOutline,
  IoEllipsisHorizontal,
  IoHeart,
  IoCheckmarkOutline,
} from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addCartData } from "../../../store/userSlice";

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const cart = useSelector((state) => state.user.cart);
  const sendingStatus = useSelector((state) => state.user.sendingStatus);

  const isInCart = cart.line_items
    .map((item) => item.product_id === product.id)
    .includes(true);

  const toggleIsFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  const addCartDataHandler = () => {
    dispatch(addCartData(product.id, 1));
  };

  useEffect(() => {
    setIsFavorite();
  }, []);

  return (
    <React.Fragment>
      <div className={classes["card"]}>
        <div className={classes["card-container"]}>
          <div className={classes["card-backdrop"]}>
            <button onClick={addCartDataHandler}>
              {sendingStatus && (
                <AiOutlineLoading3Quarters className="spinning" />
              )}
              {isInCart && !sendingStatus && <IoCheckmarkOutline />}
              {!isInCart && !sendingStatus && <IoCartOutline />}
            </button>
            <button onClick={toggleIsFavorite}>
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </button>
            <Link to={`product/${product.id}`}>
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
          <Link to={`product/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(ItemCard);
