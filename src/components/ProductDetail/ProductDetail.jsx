import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import classes from "./ProductDetail.module.scss";

import {
  IoStar,
  IoCartOutline,
  IoHeartOutline,
  IoHeart,
  IoClose,
  IoCheckmarkOutline,
} from "react-icons/io5";

import { useSelector } from "react-redux";

import Review from "./Review";
import ProductSlider from "./ProductSlider";

import Modal from "@mui/material/Modal";

const ProductDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state?.products?.products.find((product) => product.id === params.productID)
  );
  const [isInCart, setIsInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleModalHandler = () => {
    navigate(-1);
  };

  const setIsInCartHandler = () => {
    setIsInCart((prevState) => !prevState);
  };
  const toggleIsFavoriteHandler = () => {
    setIsFavorite((prevState) => !prevState);
  };

  if (product) {
    return (
      <React.Fragment>
        <Modal
          open={true}
          onClose={toggleModalHandler}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ overflow: "auto", outline: "none" }}
        >
          <div className={classes["details"]}>
            <button
              className={classes["details-close"]}
              onClick={toggleModalHandler}
            >
              <IoClose />
            </button>

            <div className={classes["details-images"]}>
              <ProductSlider images={product.assets} />
            </div>
            <div className={classes["details-shipping"]}>
              <p>
                <strong>Wysyłka:</strong> 13.00 zł
              </p>
              <p className={classes["details-shipping--days"]}>4 dni</p>
            </div>
            <div className={classes["details-review"]}>
              <h4>Opinie klientów</h4>
              <ul className={classes["review-list"]}>
                <Review />
                <Review />
              </ul>
            </div>

            <div className={classes["details-header"]}>
              <h1>{product.name}</h1>
              <div className={classes["details-rate"]}>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>{" "}
              <h3>{product.price.raw} zł</h3>
            </div>

            <div className={classes["details-actions"]}>
              <button className={classes["details-actions--btn-buy"]}>
                Kup
              </button>
              <button
                className={classes["details-actions--btn-cart"]}
                onClick={setIsInCartHandler}
              >
                {!isInCart ? <IoCartOutline /> : <IoCheckmarkOutline />}
              </button>
            </div>
            <button
              className={classes["details-btn-wishlist"]}
              onClick={toggleIsFavoriteHandler}
            >
              {!isFavorite ? (
                <IoHeartOutline className={classes["btn-wishlist__icon"]} />
              ) : (
                <IoHeart className={classes["btn-wishlist__icon"]} />
              )}
              Dodaj do listy życzeń
            </button>
            <div className={classes["details-desc"]}>
              <h4>Opis</h4>
              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </div>
            <button className={classes["details-report"]}>
              Zgłoś problem z produktem
            </button>
          </div>
        </Modal>
      </React.Fragment>
    );
  } else {
    return "";
  }
};

export default React.memo(ProductDetail);
