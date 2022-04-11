import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import classes from "./ProductsList.module.scss";

import ItemCard from "../ShopItems/ItemCard/ItemCard";
import Nothing from "./Nothing/Nothing";

// MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const ProductsList = () => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const priceFrom = useRef();
  const priceTo = useRef();

  const [price, setPrice] = useState("");
  const category = useSelector((state) =>
    state.products.categories.find(
      (product) => product.slug === params.categoryID
    )
  );
  const products = useSelector((state) => state.products.products);

  // Get prices from query and transmission them to filter
  const queryParams = new URLSearchParams(location.search);
  const firstPrice = +queryParams.get("price_from");
  const secondPrice = +queryParams.get("price_to");

  const categoryProducts = products.filter((product) =>
    product.categories.find((category) => category.slug === params.categoryID)
  );

  // Filter logic
  let filteredProducts = [];
  if (firstPrice || secondPrice) {
    if (params.categoryID === "all-categories") {
      if (secondPrice === 0) {
        filteredProducts = products.filter(
          (product) => product.price.raw >= firstPrice
        );
      } else {
        filteredProducts = products.filter(
          (product) =>
            product.price.raw >= firstPrice && product.price.raw <= secondPrice
        );
      }
    } else {
      if (!secondPrice) {
        filteredProducts = categoryProducts.filter(
          (product) => product.price.raw >= firstPrice
        );
      } else {
        filteredProducts = categoryProducts.filter(
          (product) =>
            product.price.raw >= firstPrice && product.price.raw <= secondPrice
        );
      }
    }
  }

  // Search Input Logic
  let searchedProducts = [];
  if (params.searchInput && params.categoryID === "all-categories") {
    searchedProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(params.searchInput.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(params.searchInput.toLowerCase())
    );
    if (firstPrice || secondPrice) {
      if (secondPrice === 0) {
        searchedProducts = searchedProducts.filter(
          (product) => product.price.raw >= firstPrice
        );
      } else {
        searchedProducts = searchedProducts.filter(
          (product) =>
            product.price.raw >= firstPrice && product.price.raw <= secondPrice
        );
      }
    }
  } else if (params.searchInput) {
    searchedProducts = categoryProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(params.searchInput.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(params.searchInput.toLowerCase())
    );
    if (firstPrice || secondPrice) {
      if (secondPrice === 0) {
        searchedProducts = searchedProducts.filter(
          (product) => product.price.raw >= firstPrice
        );
      } else {
        searchedProducts = searchedProducts.filter(
          (product) =>
            product.price.raw >= firstPrice && product.price.raw <= secondPrice
        );
      }
    }
  }

  const submitPriceHandler = (e) => {
    e.preventDefault();

    if (!priceFrom.current.value && !priceTo.current.value) {
      // Error handling
      navigate(`?`);
    }
    if (!priceTo.current.value) {
      navigate(`?&price_from=${priceFrom.current.value}`);
    }
    if (!priceFrom.current.value) {
      navigate(`?price_to=${priceTo.current.value}`);
    }
    if (priceFrom.current.value && priceTo.current.value) {
      if (priceFrom.current.value > priceTo.current.value) {
        // Error handling
        return;
      }
      navigate(
        `?price_to=${priceTo.current.value}&price_from=${priceFrom.current.value}`
      );
    }
  };

  const handleChange = (event) => {
    const price = event.target.value;
    setPrice(price);

    switch (price) {
      case 0:
        navigate(`?price_to=25`);
        break;
      case 25:
        navigate(`?price_to=60&price_from=25`);
        break;
      case 60:
        navigate(`?price_to=90&price_from=60`);
        break;
      case 90:
        navigate(`?price_to=125&price_from=90`);
        break;
      case 125:
        navigate(`?price_from=125`);
        break;
      default:
        break;
    }
  };

  return (
    <main className={classes.main}>
      <Outlet />
      <article className={classes["products"]}>
        <div className={classes["products-header"]}>
          <h1>
            {params.searchInput
              ? `${t("search_results")}: ${params.searchInput}`
              : t(`${category.slug}`)}
          </h1>
          <div className={classes["products-filters"]}>
            <form onSubmit={submitPriceHandler}>
              <div className={classes["products-filters__price"]}>
                <h5>{t("price")}</h5>

                <FormControl size="small">
                  <InputLabel
                    className={classes["select-label"]}
                    id="demo-simple-select-label"
                  >
                    {t("price")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="Price"
                    onChange={handleChange}
                    className={classes["select-price"]}
                  >
                    <MenuItem value={0}>poniżej 25 zł</MenuItem>
                    <MenuItem value={25}>25 zł - 60 zł</MenuItem>
                    <MenuItem value={60}>60 zł - 90 zł</MenuItem>
                    <MenuItem value={90}>90 zł - 125 zł</MenuItem>
                    <MenuItem value={125}>powyżej 125</MenuItem>
                  </Select>
                </FormControl>
                <span className={classes.priceDivider}>{t("or")}</span>
                <section>
                  <input
                    type="number"
                    id="min"
                    min={0}
                    ref={priceFrom}
                    placeholder={t("from")}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    id="max"
                    min={0}
                    ref={priceTo}
                    placeholder={t("to")}
                  />
                </section>
              </div>
              <button>{t("filter")}</button>
            </form>
          </div>
        </div>
        <section className={classes["products-list"]}>
          {params.searchInput ? (
            searchedProducts.length ? (
              searchedProducts.map((item) => (
                <ItemCard product={item} key={item.id} />
              ))
            ) : (
              <Nothing />
            )
          ) : firstPrice || secondPrice ? (
            !filteredProducts.length ? (
              <Nothing />
            ) : (
              filteredProducts.map((item) => (
                <ItemCard product={item} key={item.id} />
              ))
            )
          ) : products.length && params.categoryID === "all-categories" ? (
            products.map((item) => <ItemCard product={item} key={item.id} />)
          ) : (
            categoryProducts.map((item) => (
              <ItemCard product={item} key={item.id} />
            ))
          )}

          {!firstPrice && !secondPrice
            ? !categoryProducts.length &&
              params.categoryID !== "all-categories" && <Nothing />
            : ""}
        </section>
      </article>
    </main>
  );
};

export default ProductsList;
