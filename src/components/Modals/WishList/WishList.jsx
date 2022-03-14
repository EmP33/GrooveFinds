import React from "react";
import ReactDOM from "react-dom";

import classes from "./WishList.module.scss";

import ItemCard from "./ItemCard/ItemCard";

import Modal from "@mui/material/Modal";

import { IoClose } from "react-icons/io5";

import { useSelector } from "react-redux";

import { useNavigate, Outlet } from "react-router-dom";

const WishList = () => {
  const navigate = useNavigate();

  const wishlistProducts = useSelector((state) => state.products.products);

  const toggleWishlistHandler = () => {
    navigate(-1);
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <Outlet />
      <Modal
        open={true}
        onClose={toggleWishlistHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "auto" }}
      >
        <div className={classes["wishlist"]}>
          <button
            className={classes["wishlist__close-btn"]}
            onClick={toggleWishlistHandler}
          >
            <IoClose />
          </button>
          <section className={classes["wishlist__user"]}>
            <div className={classes["wishlist__user-avatar"]}>J</div>
            <h3>Jan Kowalski</h3>
          </section>
          <section className={classes["wishlist__products"]}>
            <h1>Lista życzeń</h1>
            <ul className={classes["wishlist__products-list"]}>
              {wishlistProducts &&
                wishlistProducts.map((product) => (
                  <ItemCard product={product} />
                ))}
              {!wishlistProducts && <h5>Nic tu nie ma :(</h5>}
            </ul>
          </section>
        </div>
      </Modal>
    </React.Fragment>,
    document.querySelector("#modals-root")
  );
};

export default WishList;
