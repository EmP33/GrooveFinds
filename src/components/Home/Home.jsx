import React, { useState } from "react";

import Menu from "./Menu/Menu";
import ItemCardBig from "./ItemCard/ItemCardBig";

import classes from "./Home.module.scss";

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
    name: "Zegarek2",
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

const Home = () => {
  const [divStyle, setDivStyle] = useState({
    display: "flex",
    gridGap: "1em",
    transition: "all 1s ease-in-out",
    transform: "translateX(-0%)",
  });
  const skipSlide = (id) => {
    if (id === 1) {
      if (divStyle.transform === "translateX(-66.6666667%)") {
        setDivStyle({
          display: "flex",
          gridGap: "1em",
          transition: "all 1s ease-in-out",
          transform: "translateX(-33.333333%)",
        });
      } else if (divStyle.transform === "translateX(-33.333333%)") {
        setDivStyle({
          display: "flex",
          gridGap: "1em",
          transition: "all 1s ease-in-out",
          transform: "translateX(-0%)",
        });
      } else if (divStyle.transform === "translateX(-0%)") {
        setDivStyle({
          display: "flex",
          gridGap: "1em",
          transition: "all 1s ease-in-out",
          transform: "translateX(-66.6666667%)",
        });
      }
    } else if (id === 2) {
      if (divStyle.transform === "translateX(-66.6666667%)") {
        setDivStyle({
          display: "flex",
          gridGap: "1em",
          transition: "all 1s ease-in-out",
          transform: "translateX(-0%)",
        });
      } else if (divStyle.transform === "translateX(-33.333333%)") {
        setDivStyle({
          display: "flex",
          gridGap: "1em",
          transition: "all 1s ease-in-out",
          transform: "translateX(-66.6666667%)",
        });
      } else if (divStyle.transform === "translateX(-0%)") {
        setDivStyle({
          display: "flex",
          gridGap: "1em",
          transition: "all 1s ease-in-out",
          transform: "translateX(-33.333333%)",
        });
      }
    }
  };

  return (
    <>
      <Menu />
      <div className={classes.wrap}>
        <section className={classes.bests}>
          <h3 className={classes.bestsHeader}>Zobacz nasze Bestsellery</h3>
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
        </section>
        <section className={classes.deals}>
          <h3 className={classes.dealsHeader}>Mega Okazje</h3>
          <div className={classes.itemList}>
            <IoChevronBackOutline className={classes.skipIcon} />
            <ItemCardBig number={Math.floor(Math.random() * 10)} />
            <ItemCardBig number={Math.floor(Math.random() * 10)} />
            <ItemCardBig number={Math.floor(Math.random() * 10)} />
            <ItemCardBig number={Math.floor(Math.random() * 10)} />
            <ItemCardBig number={Math.floor(Math.random() * 10)} />
            <ItemCardBig number={Math.floor(Math.random() * 10)} />
            <IoChevronForward className={classes.skipIcon} />
          </div>
        </section>
      </div>
      <section className={classes["categories-blocks"]}>
        <div className={classes["categories-blocks__element"]}>
          <h4>Zabawki</h4>
        </div>
        <div className={classes["categories-blocks__element"]}>
          <h4>Dom</h4>
        </div>
        <div className={classes["categories-blocks__element"]}>
          <h4>Elektronika</h4>
        </div>
      </section>
      <section className={classes["categories"]}>
        <h4>Elektronika</h4>
      </section>
      <section className={classes["categories-blocks"]}>
        <div className={classes["categories-blocks__element"]}>
          <h4>Zabawki</h4>
        </div>
        <div className={classes["categories-blocks__element"]}>
          <h4>Dom</h4>
        </div>
        <div className={classes["categories-blocks__element"]}>
          <h4>Elektronika</h4>
        </div>
      </section>
      <footer className={classes.footer}>
        <button className={classes.footerButton}>Powrót na górę strony</button>
        <div className={classes.footerSection}>
          <section className={classes.follow}>
            <h5>Obserwuj nas</h5>
            <ul>
              <li>
                <a href="#">YouTube</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </section>
          <section className={classes["payments-methods"]}>
            <h5>Metody płatności</h5>
            <ul>
              <li>
                <a href="#">Metody płatności</a>
              </li>
              <li>
                <a href="#">Przelewy24</a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <img src="../../assets/logo.png" alt="Logo" />
        </div>
        <section className={classes.footerCopy}>
          <div>
            <button>Warunki użytkowania i sprzedaży</button>
            <button>Informacje o prywatności</button>
          </div>
          <p>&copy; 2022 GrooveFinds.com</p>
        </section>
      </footer>
    </>
  );
};

export default Home;
