import React, { useState } from "react";

import classes from "./SecondCarousel.module.scss";
import DiscountItem from "../ItemCard/DiscountItem";

import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

const defaultStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  gridGap: "1em",
  transition: "all 1s ease-in-out",
};

const SecondCarousel = () => {
  const [divStyle, setDivStyle] = useState({
    ...defaultStyles,
    transform: "translateX(-0%)",
  });
  const skipSlide = (id) => {
    if (window.innerWidth <= 600) {
      if (id === 1) {
        if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-80%)",
          });
        } else if (divStyle.transform === "translateX(-80%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-60%)",
          });
        } else if (divStyle.transform === "translateX(-60%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-40%)",
          });
        } else if (divStyle.transform === "translateX(-40%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-20%)",
          });
        } else if (divStyle.transform === "translateX(-20%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        }
      } else if (id === 2) {
        if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-20%)",
          });
        } else if (divStyle.transform === "translateX(-20%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-40%)",
          });
        } else if (divStyle.transform === "translateX(-40%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-60%)",
          });
        } else if (divStyle.transform === "translateX(-60%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-80%)",
          });
        } else if (divStyle.transform === "translateX(-80%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        }
      }
    } else if (window.innerWidth <= 700) {
      if (id === 1) {
        if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-90%)",
          });
        } else if (divStyle.transform === "translateX(-90%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-60%)",
          });
        } else if (divStyle.transform === "translateX(-60%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-30%)",
          });
        } else if (divStyle.transform === "translateX(-30%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        }
      } else if (id === 2) {
        if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-30%)",
          });
        } else if (divStyle.transform === "translateX(-30%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-60%)",
          });
        } else if (divStyle.transform === "translateX(-60%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-90%)",
          });
        } else if (divStyle.transform === "translateX(-90%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        }
      }
    } else if (window.innerWidth <= 900) {
      if (id === 1) {
        if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-80%)",
          });
        } else if (divStyle.transform === "translateX(-80%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-40%)",
          });
        } else if (divStyle.transform === "translateX(-40%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        }
      } else if (id === 2) {
        if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-40%)",
          });
        } else if (divStyle.transform === "translateX(-40%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-80%)",
          });
        } else if (divStyle.transform === "translateX(-80%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        }
      }
    } else {
      if (id === 1) {
        if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-50%)",
          });
        } else if (divStyle.transform === "translateX(-50%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        }
      } else if (id === 2) {
        if (divStyle.transform === "translateX(-50%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        } else if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-50%)",
          });
        }
      }
    }
  };
  return (
    <div className={classes.center}>
      <button className={classes.back} onClick={() => skipSlide(1)}>
        <IoChevronBackOutline />
      </button>
      <div className={classes.wrapper}>
        <div style={divStyle}>
          <DiscountItem number={1} />
          <DiscountItem number={2} />
          <DiscountItem number={3} />
          <DiscountItem number={4} />
          <DiscountItem number={5} />
          <DiscountItem number={6} />
          <DiscountItem number={7} />
          <DiscountItem number={8} />
          <DiscountItem number={9} />
          <DiscountItem number={10} />
        </div>
      </div>
      <button className={classes.next} onClick={() => skipSlide(2)}>
        <IoChevronForward />
      </button>
    </div>
  );
};

export default SecondCarousel;
