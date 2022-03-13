import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import ItemCard from "../ItemCard/ItemCard";

import classes from "./Slider.module.scss";

import { useSelector } from "react-redux";

const Slider = ({ title }) => {
  const products = useSelector((state) => state.products.products);

  let slideCount = 6;
  if (window.outerWidth <= 600) {
    slideCount = 2;
  } else if (window.outerWidth <= 800) {
    slideCount = 3;
  } else if (window.outerWidth <= 1000) {
    slideCount = 4;
  }

  return (
    <section className={classes["slider"]}>
      <h3>{title}</h3>
      <Swiper
        slidesPerView={slideCount}
        spaceBetween={5}
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
    </section>
  );
};

export default Slider;
