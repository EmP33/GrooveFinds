import React, { useState } from "react";
import CSSModules from "react-css-modules";
import styles from "./Review.module.scss";

import { IoChevronDownOutline } from "react-icons/io5";

import ReviewItem from "./ReviewItem";

const Review = ({ checkoutToken }) => {
  const [showReview, setShowReview] = useState(false);

  const showReviewHandler = () => {
    setShowReview((prevState) => !prevState);
  };

  return (
    checkoutToken && (
      <section styleName="review">
        <div styleName="review-header">
          <h3>In your basket</h3>
          <button onClick={showReviewHandler}>
            <IoChevronDownOutline
              styleName={showReview && `review-header__icon`}
            />
          </button>
        </div>
        <div styleName={!showReview && `review-total`}>
          <div styleName="result">
            <p>
              Products' price:
              <span>{checkoutToken.live.subtotal.formatted_with_code}</span>
            </p>
            {checkoutToken.amount_saved && (
              <p styleName="result-discount">
                Discount:
                <span>{checkoutToken.amount_saved.formatted_with_code}</span>
              </p>
            )}
            {!!checkoutToken.shipping.price.raw && (
              <p>
                Estimated shipping costs:
                <span>{checkoutToken.shipping.price.formatted_with_code}</span>
              </p>
            )}
            <p styleName="result-total">
              Total:
              <span>{checkoutToken.live.total.formatted_with_code}</span>
            </p>
          </div>
          <div styleName="products">
            {checkoutToken &&
              checkoutToken.line_items.map((item) => (
                <ReviewItem key={item.id} item={item} />
              ))}
          </div>
        </div>
      </section>
    )
  );
};

export default CSSModules(Review, styles);
