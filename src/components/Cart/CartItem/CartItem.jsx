import React, { useState } from "react";
import classes from "./CartItem.module.scss";
import CSSModules from "react-css-modules";

import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { RiLoader3Fill } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { updateCartData, removeFromCartData } from "../../../store/userSlice";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [removeStatus, setRemoveStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  // const updateStatus = useSelector((state) => state.user.updateStatus);

  const itemClass = `${removeStatus || updateStatus ? "item-active" : "item"}`;

  console.log(item);

  const removeItemHandler = () => {
    setRemoveStatus(true);
    dispatch(removeFromCartData(item.id));
    return setTimeout(() => {
      setRemoveStatus(false);
    }, 1250);
  };
  const changeQtyHandler = (value) => {
    setUpdateStatus(true);
    dispatch(updateCartData(item.id, value));
    return setTimeout(() => {
      setUpdateStatus(false);
    }, 1250);
  };

  return (
    <div styleName={itemClass}>
      {<img src={item.image.url} alt="Icon" />}
      <div styleName={"itemName"}>
        <Link to={`/cart/${item.product_id}`}>{item.name}</Link>
        {item.selected_options.length !== 0 && (
          <p>
            {item.selected_options[0]?.group_name}:{" "}
            {item.selected_options[0]?.option_name}
          </p>
        )}
      </div>
      <div styleName={"itemCounter"}>
        <span>
          {" "}
          {/* Conditional render on button element to prevent span clicks */}
          {updateStatus ? (
            <button
              onClick={() => changeQtyHandler(item.quantity - 1)}
              disabled
            >
              <HiOutlineMinusSm />
            </button>
          ) : (
            <button onClick={() => changeQtyHandler(item.quantity - 1)}>
              <HiOutlineMinusSm />
            </button>
          )}
          {!updateStatus && <span>{item.quantity}</span>}
          {updateStatus && (
            <span>
              <RiLoader3Fill className="spinning" />
            </span>
          )}{" "}
          {/* Conditional render on button element to prevent span clicks */}
          {updateStatus ? (
            <button
              onClick={() => changeQtyHandler(item.quantity + 1)}
              disabled
            >
              <HiOutlinePlusSm />
            </button>
          ) : (
            <button onClick={() => changeQtyHandler(item.quantity + 1)}>
              <HiOutlinePlusSm />
            </button>
          )}
        </span>
      </div>
      <span styleName={"itemPrice"}>{item.price.raw} zł</span>
      <div styleName={"itemRemoveDiv"}>
        {/* Conditional render on button element to prevent span clicks */}
        {removeStatus ? (
          <button
            styleName={"itemRemoveButton"}
            onClick={removeItemHandler}
            disabled
          >
            {!removeStatus && <IoCloseOutline />}
            {removeStatus && <IoCloseOutline className={"spinning"} />}
          </button>
        ) : (
          <button styleName={"itemRemoveButton"} onClick={removeItemHandler}>
            {!removeStatus && <IoCloseOutline />}
            {removeStatus && <IoCloseOutline className={"spinning"} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default CSSModules(CartItem, classes);
