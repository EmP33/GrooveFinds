import React, { useCallback } from "react";

import classes from "./ShopBlock.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import ItemPlaceholder from "../../UI/Placeholders/ItemPlaceholder";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useSelector } from "react-redux";

const ShopBlock = ({ category }) => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  let categoryProducts = [];
  if (category.slug === "wszystkie-kategorie") {
    categoryProducts = products;
  } else {
    categoryProducts = products.filter((product) =>
      product.categories.find((cat) => cat.slug === category.slug)
    );
  }

  return (
    <div className={classes["shop-block"]}>
      <h4>{category.name}</h4>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={classes.swiper}
      >
        {categoryProducts.length ? (
          categoryProducts.map((item) => (
            <SwiperSlide key={item.id}>
              {isLoading && <ItemPlaceholder />}
              {!isLoading && <ItemCard product={item} />}
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <ItemPlaceholder />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default React.memo(ShopBlock);
