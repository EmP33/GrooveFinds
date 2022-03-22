import React from "react";

import classes from "./ItemCard.module.scss";

import {
  IoHeartOutline,
  IoEllipsisHorizontal,
  IoHeart,
  IoCheckmarkOutline,
} from "react-icons/io5";
import { RiLoader3Fill } from "react-icons/ri";
import { BsBag } from "react-icons/bs";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addCartData, userActions } from "../../../store/userSlice";

const ItemCard = ({ product }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.user.cart);
  const sendingStatus = useSelector((state) => state.user.sendingStatus);
  const wishlist = useSelector((state) => state.user.wishlist);

  const isInCart = cart.line_items
    .map((item) => item.product_id === product.id)
    .includes(true);

  const addFavoriteHandler = () => {
    if (wishlist.includes(product.id)) {
      // Removing from localstorage functionality
      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist.filter((item) => item !== product.id))
      );
      dispatch(userActions.removeItemFromWishlist(product.id));
      return;
    }
    // Add to localstorage functionality
    localStorage.setItem("wishlist", JSON.stringify([...wishlist, product.id]));
    dispatch(userActions.addItemToWishlist([product.id]));
  };

  const addCartDataHandler = () => {
    dispatch(addCartData(product.id, 1));
  };

  return (
    <React.Fragment>
      <div className={classes["card"]}>
        <div className={classes["card-container"]}>
          <div className={classes["card-backdrop"]}>
            {sendingStatus ? (
              <button onClick={addCartDataHandler} disabled>
                {sendingStatus && <RiLoader3Fill className="spinning" />}
                {isInCart && !sendingStatus && <IoCheckmarkOutline />}
                {!isInCart && !sendingStatus && <BsBag />}
              </button>
            ) : (
              <button onClick={addCartDataHandler}>
                {sendingStatus && <RiLoader3Fill className="spinning" />}
                {isInCart && !sendingStatus && <IoCheckmarkOutline />}
                {!isInCart && !sendingStatus && <BsBag />}
              </button>
            )}
            <button onClick={addFavoriteHandler}>
              {wishlist.includes(product.id) ? <IoHeart /> : <IoHeartOutline />}
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
          {/* <div className={classes["discount-wrapper"]}>
            <span className={classes["discount-price"]}>
              {(product.price.raw * 1.1).toFixed(2)} zł
            </span>{" "}
            <span className={classes["discount-badge"]}>-10%</span>
          </div> */}
          <Link to={`product/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(ItemCard);
