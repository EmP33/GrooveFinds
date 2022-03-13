import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "./ProductDetail.module.scss";

import {
  IoStar,
  IoCartOutline,
  IoHeartOutline,
  IoClose,
} from "react-icons/io5";

import Review from "./Review";

import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productsSlice";
import { modalActions } from "../../store/modalSlice";

import ProductSlider from "./ProductSlider";

import Modal from "@mui/material/Modal";

const ProductDetail = ({ productID }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.currentProduct);
  const showDetails = useSelector((state) => state.modal.showDetails);

  const toggleModalHandler = () => {
    dispatch(modalActions.toggleShowDetails());
  };

  useEffect(() => {
    dispatch(productActions.getProduct(productID));
  }, [productID, dispatch]);

  console.log(product);
  return ReactDOM.createPortal(
    <React.Fragment>
      <Modal
        open={showDetails}
        onClose={toggleModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "auto" }}
      >
        <div className={classes["details"]}>
          <button
            className={classes["details-close"]}
            onClick={toggleModalHandler}
          >
            <IoClose />
          </button>

          <div className={classes["details-images"]}>
            <ProductSlider />
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
            <h1> Mini PC Lenovo Tiny m710Q 8GB 240SSD</h1>
            <div className={classes["details-rate"]}>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>{" "}
            <h3>199,95 zł</h3>
          </div>

          <div className={classes["details-actions"]}>
            <button className={classes["details-actions--btn-buy"]}>Kup</button>
            <button className={classes["details-actions--btn-cart"]}>
              <IoCartOutline />
            </button>
          </div>
          <button className={classes["details-btn-wishlist"]}>
            <IoHeartOutline className={classes["btn-wishlist__icon"]} />
            Dodaj do listy życzeń
          </button>
          <div className={classes["details-desc"]}>
            <h4>Opis</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quam veritatis cupiditate a dolorum delectus quibusdam
              explicabo porro officiis saepe. Voluptatibus laborum saepe
              repudiandae sunt, ratione nam nihil obcaecati illo praesentium
              quod facere maxime eum doloribus blanditiis! impedit sit!
              lorem1000
            </p>
          </div>
          <button className={classes["details-report"]}>
            Zgłoś problem z produktem
          </button>
        </div>
      </Modal>
    </React.Fragment>,
    document.querySelector("#modals-root")
  );
};

export default ProductDetail;
