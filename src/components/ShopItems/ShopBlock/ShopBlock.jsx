import React, { useCallback } from "react";

import classes from "./ShopBlock.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import ItemPlaceholder from "../../UI/Placeholders/ItemPlaceholder";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useSelector } from "react-redux";

const ShopBlock = ({ title }) => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  return (
    <div className={classes["shop-block"]}>
      <h4>{title}</h4>
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
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            {isLoading && <ItemPlaceholder />}
            {!isLoading && <ItemCard product={item} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopBlock;
