import React from "react";

import classes from "./CartItem.module.scss";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { updateCartData, removeFromCartData } from "../../../store/userSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const sendingStatus = useSelector((state) => state.user.sendingStatus);
  const updateStatus = useSelector((state) => state.user.updateStatus);

  return (
    <div className={classes.item}>
      {<img src={item.image.url} alt="Icon" />}
      <div className={classes.itemName}>
        {/* <h5>{item.categories[0].name}</h5> */}
        <p>{item.name}</p>
      </div>
      <div className={classes.itemCounter}>
        <span>
          <button
            onClick={() => dispatch(updateCartData(item.id, item.quantity - 1))}
          >
            <HiOutlineMinusSm />
          </button>
          {!updateStatus && <span>{item.quantity}</span>}
          {updateStatus && (
            <span className={classes.slide}>{item.quantity}</span>
          )}
          <button
            onClick={() => dispatch(updateCartData(item.id, item.quantity + 1))}
          >
            <HiOutlinePlusSm />
          </button>
        </span>
      </div>
      <span className={classes.itemPrice}>{item.price.raw} zł</span>
      <div className={classes.itemRemoveDiv}>
        <button
          className={classes.itemRemoveButton}
          onClick={() => {
            dispatch(removeFromCartData(item.id));
          }}
        >
          {!sendingStatus && <IoCloseOutline />}
          {sendingStatus && <HiOutlineMinusSm className={"spinning"} />}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
