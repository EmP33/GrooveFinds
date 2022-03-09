import React from "react";

import classes from "./Menu.module.scss";

import { IoMenu } from "react-icons/io5";

const Menu = () => {
  return (
    <menu className={classes.menu}>
      <h4 className={classes.menuHeader}>
        <IoMenu className={classes.menuIcon} />
        Kategorie
      </h4>
      <ul className={classes.menuList}>
        <li>Dom i ogród</li>
        <li>Elektronika</li>
        <li>Zabawki</li>
        <li>Zegarki</li>
        <li>On</li>
        <li>Ona</li>
        <li>Biżuteria</li>
        <li>Gry wideo</li>
      </ul>
    </menu>
  );
};

export default Menu;
