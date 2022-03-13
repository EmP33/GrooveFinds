import React from "react";

import classes from "./ProductsList.module.scss";

import Menu from "../Home/Menu/Menu";
import ItemCard from "../ShopItems/ItemCard/ItemCard";
import ProductDetail from "../ProductDetail/ProductDetail";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const ProductsList = () => {
  const params = useParams();

  const categoryProducts = useSelector((state) => state.products.products);
  const showDetails = useSelector((state) => state.products.showDetails);
  const category = useSelector((state) =>
    state.products.categories.find(
      (product) => product.slug === params.categoryID
    )
  );
  const showMenu = useSelector((state) => state.modal.showMenu);

  return (
    <main className={classes.main}>
      {showDetails && <ProductDetail />}
      <Menu showModal={showMenu} />
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
