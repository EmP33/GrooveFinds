import React, { useEffect, useState } from "react";
import styles from "./Payment.module.scss";
import CSSModules from "react-css-modules";

import logo from "../../assets/logo.png";

import PaymentBackdrop from "./PaymentBackdrop";
import Review from "./Review/Review";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Shipping from "./Shipping/Shipping";
import PaymentDetail from "./PaymentDetail/PaymentDetail";
import Loading from "../UI/Loading/Loading";

import { BsBag } from "react-icons/bs";

import { commerce } from "../../lib/commerce";

import { Link, useNavigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const steps = ["Shipping address", "Payment details"];

const Cart = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cart = useSelector((state) => state.user.cart);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [loadingNextStep, setLoadingNextStep] = useState(false);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (err) {}
    };

    generateToken();
  }, [cart]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getShippingDataHandler = async (data) => {
    setLoadingNextStep(true);
    await commerce.checkout.checkShippingOption(checkoutToken.id, {
      shipping_option_id: checkoutToken.shipping_methods[0].id,
      country: data.shippingCountry,
      region: data.shippingSubdivision,
    });

    setShippingData(data);
    handleNext();
    setLoadingNextStep(false);
  };

  if (loadingNextStep || !checkoutToken) {
    return <Loading />;
  }

  return (
    <PaymentBackdrop>
      <Outlet />
      <div styleName="payment-navbar">
        <Link to="/home" styleName="payment-navbar__header-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div styleName="cart-wrapper">
          <Link to="/cart">
            <span>{cart.total_items}</span>
            <BsBag styleName="cartIcon" />
          </Link>
        </div>
      </div>
      <h1 styleName="payment-header">Checkout</h1>
      <div styleName="payment">
        <section styleName="content-section">
          <div styleName="content-section__form-wrapper">
            <Stepper activeStep={activeStep} styleName="stepper">
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel styleName="step-label">{step}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && checkoutToken && !loadingNextStep && (
              <Shipping
                checkoutToken={checkoutToken}
                getShippingData={getShippingDataHandler}
              />
            )}
            {activeStep === 1 && !loadingNextStep && (
              <PaymentDetail
                setCheckoutToken={setCheckoutToken}
                shippingData={shippingData}
                checkoutToken={checkoutToken}
                handleBack={handleBack}
                handleNext={handleNext}
              />
            )}
          </div>
        </section>
        <section styleName="review-section">
          <Review checkoutToken={checkoutToken} />
        </section>
      </div>
    </PaymentBackdrop>
  );
};

export default CSSModules(Cart, styles);
