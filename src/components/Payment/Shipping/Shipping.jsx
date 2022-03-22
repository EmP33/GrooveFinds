import React, { useState, useEffect } from "react";
import CSSModules from "react-css-modules";
import styles from "./Shipping.module.scss";

import { useForm, FormProvider } from "react-hook-form";

import CustomTextField from "./TextField/CustomTextField";
import CustomSelect from "./TextField/CustomSelect";

import { commerce } from "../../../lib/commerce";

const Shipping = ({ getShippingData, checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const methods = useForm();

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

  return (
    <>
      <h2>Shipping address</h2>
      <FormProvider {...methods}>
        <form
          styleName="shipping-form"
          onSubmit={methods.handleSubmit((data) => {
            getShippingData({
              ...data,
              shippingCountry,
              shippingSubdivision,
            });
          })}
        >
          <CustomTextField name="name" label="Name" placeholder="e.g. Jake" />
          <CustomTextField
            name="surname"
            label="Surname"
            placeholder="e.g. Smith"
          />
          <CustomTextField
            name="email"
            label="Email"
            placeholder="e.g. name@gmail.com"
          />
          <CustomSelect
            shippingDestination={shippingCountry}
            shippingDestinations={shippingCountries}
            setShipping={setShippingCountry}
          />
          <CustomSelect
            shippingDestination={shippingSubdivision}
            shippingDestinations={shippingSubdivisions}
            setShipping={setShippingSubdivision}
          />
          <CustomTextField name="city" label="City" placeholder="e.g. Warsaw" />
          <CustomTextField
            name="zip"
            label="Zip Code"
            placeholder="e.g. 00-000"
          />
          <CustomTextField
            name="address"
            label="Address (street, house number)"
            placeholder="np. Przemysłowa 10/10"
          />
          <button styleName="submit-button" type="submit">
            Next
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default CSSModules(Shipping, styles);
