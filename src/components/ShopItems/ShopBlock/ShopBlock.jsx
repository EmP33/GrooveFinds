import React from "react";

import classes from "./ShopBlock.module.scss";
import ItemCard from "../ItemCard/ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useSelector } from "react-redux";

const ShopBlock = ({ title }) => {
  const products = useSelector((state) => state.products.products);

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
            <ItemCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopBlock;
