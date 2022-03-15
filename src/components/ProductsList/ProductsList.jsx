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

  console.log(categoryProducts.length);

  return (
    <main className={classes.main}>
      <Outlet />
      <article className={classes["products"]}>
        <h1>{category?.name}</h1>
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
