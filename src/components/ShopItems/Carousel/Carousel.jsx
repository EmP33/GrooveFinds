import React, { useState } from "react";

import classes from "./Carousel.module.scss";
import ItemCardBig from "../ItemCard/ItemCardBig";

import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

const bestsItems = [
  {
    name: "Computer1",
    price: "129.95",
    id: "p1",
    url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
  },
  {
    name: "Zegarek2",
    price: "1229.95",
    id: "p2",
    url: "https://ustyle.pl/wp-content/uploads/2019/01/1113.jpg",
  },
  {
    name: "Garnek3",
    price: "59.95",
    id: "p3",
    url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
  },
  {
    name: "Computer4",
    price: "129.95",
    id: "p4",
    url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
  },
  {
    name: "Garnek5",
    price: "59.95",
    id: "p5",
    url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
  },
  {
    name: "Zegarek6",
    price: "1229.95",
    id: "p6",
    url: "https://ustyle.pl/wp-content/uploads/2019/01/1113.jpg",
  },
  {
    name: "Computer7",
    price: "129.95",
    id: "p7",
    url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
  },
  {
    name: "Garnek8",
    price: "59.95",
    id: "p8",
    url: "https://florina.pl/pol_pl_Garnek-emaliowany-Emalia-Polska-Pleszew-gladki-bez-pokrywki-16-cm-2-5-l-czerwony-552_1.jpg",
  },
  {
    name: "Computer9",
    price: "129.95",
    id: "p9",
    url: "https://a.allegroimg.com/original/116e82/71826d194940902a6fa56a6884bc/Komputer-do-Gier-Intel-i5-GTX-1050Ti-8GB-Win-10-Kod-producenta-GZi51050Ti",
  },
];

const defaultStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  gridGap: "1em",
  transition: "all 1s ease-in-out",
};

const Carousel = () => {
  const [divStyle, setDivStyle] = useState({
    ...defaultStyles,
    transform: "translateX(-0%)",
  });
  const skipSlide = (id) => {
    if (window.innerWidth < 600) {
      if (id === 1) {
        if (divStyle.transform === "translateX(-44.5%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-22.255555%)",
          });
        } else if (divStyle.transform === "translateX(-22.255555%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        } else if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-89%)",
          });
        } else if (divStyle.transform === "translateX(-66.75%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-44.5%)",
          });
        } else if (divStyle.transform === "translateX(-89%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-66.75%)",
          });
        }
      } else if (id === 2) {
        if (divStyle.transform === "translateX(-44.5%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-66.75%)",
          });
        } else if (divStyle.transform === "translateX(-22.255555%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-44.5%)",
          });
        } else if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-22.255555%)",
          });
        } else if (divStyle.transform === "translateX(-66.75%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-89%)",
          });
        } else if (divStyle.transform === "translateX(-89%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        }
      }
    } else {
      if (id === 1) {
        if (divStyle.transform === "translateX(-66.6666667%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-33.333333%)",
          });
        } else if (divStyle.transform === "translateX(-33.333333%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        } else if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-66.6666667%)",
          });
        }
      } else if (id === 2) {
        if (divStyle.transform === "translateX(-66.6666667%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-0%)",
          });
        } else if (divStyle.transform === "translateX(-33.333333%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-66.6666667%)",
          });
        } else if (divStyle.transform === "translateX(-0%)") {
          setDivStyle({
            ...defaultStyles,
            transform: "translateX(-33.333333%)",
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
          {bestsItems.map((item) => (
            <ItemCardBig
              name={item.name}
              price={item.price}
              url={item.url}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <button className={classes.next} onClick={() => skipSlide(2)}>
        <IoChevronForward />
      </button>
    </div>
  );
};

export default Carousel;
