import React from "react";

import classes from "./ProductsList.module.scss";

import ItemCard from "./ItemCard/ItemCard";
import Nothing from "./Nothing/Nothing";

import { useParams, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const ProductsList = () => {
  const params = useParams();
  const category = useSelector((state) =>
    state.products.categories.find(
      (product) => product.slug === params.categoryID
    )
  );
  const products = useSelector((state) => state.products.products);

  const categoryProducts = products.filter(
    (product) => product.categories[0].slug === params.categoryID
  );

  return (
    <main className={classes.main}>
      <Outlet />
      <article className={classes["products"]}>
        <div className={classes["products-header"]}>
          <h1>{category?.name}</h1>
          <div className={classes["products-filters"]}>
            <form>
              <div className={classes["products-filters__price"]}>
                <h5>Cena</h5>
                <section>
                  <input type="radio" id="price1" name="price" />
                  <label htmlFor="price1">poniżej 25 zł</label>
                </section>
                <section>
                  <input type="radio" id="price2" name="price" />
                  <label htmlFor="price2">25 zł - 50 zł</label>
                </section>
                <section>
                  <input type="radio" id="price3" name="price" />
                  <label htmlFor="price3">50 zł - 75 zł</label>
                </section>
                <section>
                  <input type="radio" id="price4" name="price" />
                  <label htmlFor="price4">75 zł - 125 zł</label>
                </section>
                <section>
                  <input type="radio" id="price5" name="price" />
                  <label htmlFor="price5">powyżej 125 zł</label>
                </section>
                <section>
                  <input type="number" id="min" min={0} placeholder="OD" />
                  <span>-</span>
                  <input type="number" id="max" min={0} placeholder="DO" />
                </section>
              </div>
              <button>Filtruj</button>
            </form>
          </div>
        </div>
        <section className={classes["products-list"]}>
          {products.length && params.categoryID === "wszystkie-kategorie"
            ? products.map((item) => <ItemCard product={item} key={item.id} />)
            : categoryProducts.map((item) => (
                <ItemCard product={item} key={item.id} />
              ))}
          {!categoryProducts.length &&
            params.categoryID !== "wszystkie-kategorie" && <Nothing />}
        </section>
      </article>
    </main>
  );
};

export default ProductsList;
