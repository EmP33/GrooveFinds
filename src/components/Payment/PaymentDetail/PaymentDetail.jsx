import React, { useState, useRef, useEffect } from "react";
import CSSModules from "react-css-modules";
import styles from "./PaymentDetail.module.scss";

import { BsArrowRight, BsPaypal } from "react-icons/bs";
import { AiFillCreditCard, AiOutlineCheck } from "react-icons/ai";
import { RiLoader3Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import CardMethod from "./PaymentMethods/CardMethod";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { commerce } from "../../../lib/commerce";

const PaymentDetail = ({
  handleNext,
  handleBack,
  checkoutToken,
  shippingData,
  setCheckoutToken,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loadingGiftCode, setLoadingGiftCode] = useState(false);
  const giftRef = useRef();
  const { t } = useTranslation();

  const changePaymentMethodHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  const checkDiscountHandler = async () => {
    setLoadingGiftCode(true);
    const checkoutDiscount = await commerce.checkout.checkDiscount(
      checkoutToken.id,
      {
        code: giftRef.current.value,
      }
    );

    setLoadingGiftCode(false);
    if (checkoutDiscount.valid) {
      setCheckoutToken(checkoutDiscount);
    }
  };

  const cardLabel = (
    <>
      <AiFillCreditCard /> Credit or debit card
    </>
  );
  const paypalLabel = (
    <>
      <BsPaypal /> PayPal
    </>
  );

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.getToken(checkoutToken.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (err) {}
    };

    generateToken();
  }, []);

  return (
    <>
      <h2>Order Summary</h2>
      <div styleName="shipping-data">
        <p>
          {shippingData.name} {shippingData.surname}
        </p>
        <p>{shippingData.address}</p>
        <p>
          {shippingData.city} {shippingData.zip}
        </p>
        <p>{shippingData.email}</p>
      </div>
      <div styleName="payment-options">
        <div styleName="payment-options__gift">
          <h5>{t("gift_code")}</h5>
          <div>
            <input
              type="text"
              placeholder={t("enter_gift_code")}
              ref={giftRef}
              disabled={checkoutToken.valid}
            />
            <button
              styleName="gift-button"
              onClick={checkDiscountHandler}
              disabled={checkoutToken.valid}
            >
              {checkoutToken.valid && <AiOutlineCheck />}
              {loadingGiftCode && <RiLoader3Fill className="spinning" />}
              {!checkoutToken.valid && !loadingGiftCode && <BsArrowRight />}
            </button>
          </div>
        </div>
        <div styleName="payment-options__choice">
          <h4>CHOOSE PAYMENT METHOD</h4>
          <FormControl
            onChange={changePaymentMethodHandler}
            styleName="choice-form"
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              styleName="choice-group"
            >
              <FormControlLabel
                value="card"
                control={<Radio styleName="choice-radio" />}
                label={cardLabel}
                styleName="choice-label"
              />
              <FormControlLabel
                value="paypal"
                control={<Radio styleName="choice-radio" />}
                label={paypalLabel}
                styleName="choice-label"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          {paymentMethod === "card" && (
            <CardMethod
              handleBack={handleBack}
              checkoutToken={checkoutToken}
              shippingData={shippingData}
              handleNext={handleNext}
            />
          )}
          {paymentMethod === "paypal" && <p>Paypal</p>}
        </div>
      </div>
      {/* <button styleName="submit-button" onClick={handleBack}>
        Back
      </button>
      <button styleName="submit-button" onClick={handleNext}>
        Pay
      </button> */}
    </>
  );
};

export default CSSModules(PaymentDetail, styles);
