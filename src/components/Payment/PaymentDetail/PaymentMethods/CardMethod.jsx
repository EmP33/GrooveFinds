import React from "react";
import styles from "./CardMethod.module.scss";
import CSSModules from "react-css-modules";

import { Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CardMethod = ({
  handleBack,
  checkoutToken,
  handleNext,
  shippingData,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    // if (!stripe || !elements) return;

    // const cardElement = elements.getElement(CardElement);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // if (error) {
    //   console.log(error);
    // } else {
    //   const orderData = {
    //     line_items: checkoutToken.live.line_items,
    //     customer: {
    //       firstname: shippingData.firstName,
    //       lastname: shippingData.lastName,
    //       email: shippingData.email,
    //     },
    //     shipping: {
    //       name: "Primary",
    //       street: shippingData.address1,
    //       town_city: shippingData.city,
    //       county_state: shippingData.shippingSubdivision,
    //       postal_zip_code: shippingData.zip,
    //       country: shippingData.shippingCountry,
    //     },
    //     fulfillment: { shipping_method: shippingData.shippingOption },
    //     payment: {
    //       gateway: "stripe",
    //       stripe: {
    //         payment_method_id: paymentMethod.id,
    //       },
    //     },
    //   };
    //   onCaptureCheckout(checkoutToken.id, orderData);
    //   handleNext();
    // }
  };
  return (
    <div styleName="card-method">
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  styleName="checkout-button"
                  style={{
                    padding: "1rem 2rem 1rem 2rem",
                    border: "none",
                    background: "var(--color-grey-4)",
                    color: "#fff",
                    width: "15rem",
                    cursor: "pointer",
                    borderRadius: ".5rem",
                  }}
                  variant="outlined"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="submit"
                  style={{
                    padding: "1rem 2rem 1rem 2rem",
                    border: "none",
                    background: "var(--color-grey-4)",
                    color: "#fff",
                    width: "15rem",
                    cursor: "pointer",
                    borderRadius: ".5rem",
                  }}
                  disabled={!stripe}
                >
                  Pay {checkoutToken.live.total.formatted_with_code}
                </button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default CSSModules(CardMethod, styles);
