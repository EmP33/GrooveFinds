import React, { useState, useEffect, useRef } from "react";
import CSSModules from "react-css-modules";
import styles from "./Shipping.module.scss";

// COMPONENTS
import CustomTextField from "./TextField/CustomTextField";
import CustomSelect from "./TextField/CustomSelect";

// OTHER
import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
import { commerce } from "../../../lib/commerce";
import { useTranslation } from "react-i18next";

const Shipping = ({ getShippingData }) => {
  const { t } = useTranslation();
  const checkoutToken = useSelector((state) => state.user.checkout);
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const methods = useForm();

  // FORM VALIDATION
  const [isNameInValid, setIsNameInValid] = useState(true);
  const [isSurnameInValid, setIsSurnameInValid] = useState(true);
  const [isEmailInValid, setIsEmailInValid] = useState(true);
  const [isCityInValid, setIsCityInValid] = useState(true);
  const [isZipInValid, setIsZipInValid] = useState(true);
  const [isAddressInValid, setIsAddressInValid] = useState(true);

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const addressRef = useRef();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  const formSubmitHandler = methods.handleSubmit((data) => {
    if (nameRef.current.value.trim().length === 0) {
      setIsNameInValid(false);
      return;
    } else {
      setIsNameInValid(true);
    }
    if (surnameRef.current.value.trim().length === 0) {
      setIsSurnameInValid(false);
      return;
    } else {
      setIsSurnameInValid(true);
    }
    if (!emailRef.current.value.trim().includes("@")) {
      setIsEmailInValid(false);
      return;
    } else {
      setIsEmailInValid(true);
    }
    if (cityRef.current.value.trim().length === 0) {
      setIsCityInValid(false);
      return;
    } else {
      setIsCityInValid(true);
    }
    if (
      zipRef.current.value.trim().length !== 5 &&
      zipRef.current.value.trim().length !== 6
    ) {
      setIsZipInValid(false);
      return;
    } else {
      setIsZipInValid(true);
    }
    if (
      zipRef.current.value.trim().length === 5 &&
      zipRef.current.value.trim().includes("-")
    ) {
      setIsZipInValid(false);
      return;
    } else {
      setIsZipInValid(true);
    }
    if (addressRef.current.value.trim().length === 0) {
      setIsAddressInValid(false);
      return;
    } else {
      setIsAddressInValid(true);
    }

    if (
      zipRef.current.value.trim().length >= 5 &&
      zipRef.current.value.trim().length <= 6 &&
      nameRef.current.value.trim().length !== 0 &&
      surnameRef.current.value.trim().length !== 0 &&
      addressRef.current.value.trim().length !== 0 &&
      cityRef.current.value.trim().length !== 0 &&
      emailRef.current.value.trim().includes("@")
    ) {
      getShippingData({
        ...data,
        shippingCountry,
        shippingSubdivision,
      });
    }
  });

  return (
    <>
      <h2>{t("shipping-address")}</h2>
      <FormProvider {...methods}>
        <form styleName="shipping-form" onSubmit={formSubmitHandler}>
          <CustomTextField
            name="name"
            label={t("name")}
            placeholder="e.g. Jake"
            inputRef={nameRef}
            isInValid={isNameInValid}
          />
          <CustomTextField
            name="surname"
            label={t("surname")}
            placeholder="e.g. Smith"
            inputRef={surnameRef}
            isInValid={isSurnameInValid}
          />
          <CustomTextField
            name="email"
            label="Email"
            placeholder="e.g. name@gmail.com"
            inputRef={emailRef}
            isInValid={isEmailInValid}
          />
          <CustomSelect
            shippingDestination={shippingCountry}
            shippingDestinations={shippingCountries}
            setShipping={setShippingCountry}
            label={t("shipping-country")}
          />
          <CustomSelect
            shippingDestination={shippingSubdivision}
            shippingDestinations={shippingSubdivisions}
            setShipping={setShippingSubdivision}
            label={t("shipping-destination")}
          />
          <CustomTextField
            name="city"
            label={t("city")}
            placeholder="e.g. Warsaw"
            inputRef={cityRef}
            isInValid={isCityInValid}
          />
          <CustomTextField
            name="zip"
            label={t("zip-code")}
            placeholder="e.g. 19300"
            inputRef={zipRef}
            isInValid={isZipInValid}
          />
          <CustomTextField
            name="address"
            label={t("address")}
            placeholder="e.g. Kingsway 10/10"
            inputRef={addressRef}
            isInValid={isAddressInValid}
          />
          <button styleName="submit-button" type="submit">
            {t("next")}
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default CSSModules(Shipping, styles);
