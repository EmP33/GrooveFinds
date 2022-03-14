import React from "react";

import classes from "./ProductsList.module.scss";

import ItemCard from "../ShopItems/ItemCard/ItemCard";

import { useParams, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const ProductsList = () => {
  const params = useParams();

  const categoryProducts = useSelector((state) => state.products.products);
  const category = useSelector((state) =>
    state.products.categories.find(
      (product) => product.slug === params.categoryID
    )
  );

  return (
    <main className={classes.main}>
      <Outlet />
      <article className={classes["products"]}>
        <h1>{category?.name}</h1>
        <section className={classes["products-list"]}>
          {categoryProducts.map((item) => (
            <ItemCard product={item} key={item.id} />
          ))}
          {categoryProducts.map((item) => (
            <ItemCard product={item} key={item.id} />
          ))}
          {categoryProducts.map((item) => (
            <ItemCard product={item} key={item.id} />
          ))}
          {categoryProducts.map((item) => (
            <ItemCard product={item} key={item.id} />
          ))}
          {categoryProducts.map((item) => (
            <ItemCard product={item} key={item.id} />
          ))}
          {categoryProducts.map((item) => (
            <ItemCard product={item} key={item.id} />
          ))}
        </section>
      </article>
    </main>
  );
};

export default ProductsList;
