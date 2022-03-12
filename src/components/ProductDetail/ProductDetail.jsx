import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "./ProductDetail.module.scss";

import { IoStar, IoCartOutline, IoHeartOutline } from "react-icons/io5";

import Review from "./Review";

import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productsSlice";

import ProductSlider from "./ProductSlider";
import Backdrop from "../UI/Backdrop/Backdrop";

const ProductDetail = ({ productID }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.currentProduct);
  const showDetails = useSelector((state) => state.modal.showDetails);

  useEffect(() => {
    dispatch(productActions.getProduct(productID));
  }, [productID, dispatch]);

  console.log(product);
  return ReactDOM.createPortal(
    <React.Fragment>
      <Backdrop isActive={showDetails} />
      <div className={classes["details"]}>
        <section className={classes["details-product"]}>
          <div className={classes["details-product__images"]}>
            <ProductSlider />
          </div>
          <div className={classes["details-product__shipping"]}>
            <p>
              <strong>Wysyłka:</strong> 13.00 zł
            </p>
            <p className={classes["details-product__shipping--days"]}>4 dni</p>
          </div>
          <div className={classes["details-product__review"]}>
            <h4>Opinie klientów</h4>
            <ul className={classes["review-list"]}>
              <Review />
              <Review />
            </ul>
          </div>
          <div className={classes["details-product__desc"]}>
            <h4>Opis</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quam veritatis cupiditate a dolorum delectus quibusdam
              explicabo porro officiis saepe. Voluptatibus laborum saepe
              repudiandae sunt, ratione nam nihil obcaecati illo praesentium
              quod facere maxime eum doloribus blanditiis! Accusantium delectus
              hic illo eum velit. Earum nostrum as sumenda debitis repellat
              natus aspernatur sunt ducimus, labore voluptates? Impedit saepe
              animi, accusantium, fugiat sapiente exercitationem maxime omnis
              commodi molestiae velit totam sequi doloremque id dolorum ad, amet
              inventore tenetur! Placeat impedit quaerat dolore fugiat id vero
              ducimus necessitatibus sapiente tenetur quidem pariatur, nemo illo
              molestias quam quis iusto commodi veniam animi natus sint odit,
              laborum consequatur? Atque, nisi saepe. Accusantium ipsam
              inventore culpa minus sit officiis suscipit eligendi corrupti,
              repudiandae molestiae sint dolorum sed facilis ut voluptates
              eaque. Adipisci atque iusto eum quis voluptatum, sit unde nisi
              quam sequi doloremque voluptates animi consequuntur nemo eius
              accusantium quae? Asperiores aliquam, pariatur fuga dolores
              impedit sit!
            </p>
          </div>
        </section>
        <section className={classes["details-buy"]}>
          <h1>Mini PC Lenovo Tiny m710Q 8GB 240SSD</h1>
          <div className={classes["details-buy__rate"]}>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <h3>199,95 zł</h3>
          <div className={classes["details-buy__actions"]}>
            <button className={classes["details-buy__actions--btn-buy"]}>
              Kup
            </button>
            <button className={classes["details-buy__actions--btn-cart"]}>
              <IoCartOutline />
            </button>
          </div>
          <button className={classes["details-buy__btn-wishlist"]}>
            <IoHeartOutline className={classes["btn-wishlist__icon"]} />
            Dodaj do listy życzeń
          </button>
          <button className={classes["details-buy__report"]}>
            Zgłoś problem z produktem
          </button>
        </section>
      </div>
    </React.Fragment>,
    document.querySelector("#modals-root")
  );
};

export default ProductDetail;
