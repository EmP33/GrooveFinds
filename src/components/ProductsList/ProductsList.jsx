import React, { useState, useRef } from "react";

import classes from "./ProductsList.module.scss";

import ItemCard from "./ItemCard/ItemCard";
import Nothing from "./Nothing/Nothing";

// MUI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const ProductsList = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const priceFrom = useRef();
  const priceTo = useRef();

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

  const categoryProducts = products.filter(
    (product) => product.categories[0].slug === params.categoryID
  );

  // Filter logic
  let filteredProducts = [];
  if (firstPrice || secondPrice) {
    if (params.categoryID === "wszystkie-kategorie") {
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

  const [price, setPrice] = useState("");

  const submitPriceHandler = (e) => {
    e.preventDefault();
    if (!priceFrom.current.value || !priceTo.current.value) {
      // Error handling
      return;
    }
    if (priceFrom.current.value > priceTo.current.value) {
      // Error handling
      return;
    }

    navigate(
      `?price_to=${priceTo.current.value}&price_from=${priceFrom.current.value}`
    );
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

  console.log(categoryProducts.length);

  return (
    <main className={classes.main}>
      <Outlet />
      <article className={classes["products"]}>
        <div className={classes["products-header"]}>
          <h1>{category?.name}</h1>
          <div className={classes["products-filters"]}>
            <form onSubmit={submitPriceHandler}>
              <div className={classes["products-filters__price"]}>
                <h5>Cena</h5>

                <FormControl size="small">
                  <InputLabel
                    className={classes["select-label"]}
                    id="demo-simple-select-label"
                  >
                    Cena
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
                <span className={classes.priceDivider}>lub</span>
                <section>
                  <input
                    type="number"
                    id="min"
                    min={0}
                    ref={priceFrom}
                    placeholder="OD"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    id="max"
                    min={0}
                    ref={priceTo}
                    placeholder="DO"
                  />
                </section>
              </div>
              <button>Filtruj</button>
            </form>
          </div>
        </div>
        <section className={classes["products-list"]}>
          {firstPrice || secondPrice ? (
            !filteredProducts.length ? (
              <Nothing text={"Nie ma żadnych produktów w tym przedziale"} />
            ) : (
              filteredProducts.map((item) => (
                <ItemCard product={item} key={item.id} />
              ))
            )
          ) : products.length && params.categoryID === "wszystkie-kategorie" ? (
            products.map((item) => <ItemCard product={item} key={item.id} />)
          ) : (
            categoryProducts.map((item) => (
              <ItemCard product={item} key={item.id} />
            ))
          )}
          {!firstPrice && !secondPrice
            ? !categoryProducts.length &&
              params.categoryID !== "wszystkie-kategorie" && (
                <Nothing text={"Nie ma żadnych produktów w tej kategorii"} />
              )
            : ""}
        </section>
      </article>
    </main>
  );
};

export default ProductsList;
