import React, { useState } from "react";

import logo from "../../assets/logo.png";

import classes from "./Navbar.module.scss";

import { Link } from "react-router-dom";

import { ImSearch } from "react-icons/im";
import {
  IoCartOutline,
  IoChatbubblesOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoMenu,
} from "react-icons/io5";

import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalSlice";

const names = ["Wszystkie Kategorie", "Dom", "Elektronika"];

const Navbar = () => {
  const [category, setCategory] = useState(names[0]);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const hideModalHandler = () => {
    dispatch(modalActions.toggleShowMenu());
  };
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes["header-logo"]}>
          <Link to="/">
            <img src={logo} alt="GrooveFinds" />
          </Link>
        </div>
        <section className={classes["header-search"]}>
          <FormControl size="small" className={classes.select}>
            <Select
              displayEmpty
              value={category}
              onChange={handleChange}
              input={<OutlinedInput />}
              inputProps={{ "aria-label": "Without label" }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            size="small"
            className={classes["search-bar"]}
            variant="outlined"
          />
          <button className={classes.button}>
            <ImSearch className={classes.searchIcon} />
          </button>
        </section>
        <div className={classes["cart-wrapper"]}>
          <Link to="/cart">
            <span>4</span>
            <IoCartOutline className={classes.cartIcon} />
          </Link>
        </div>
        <div className={classes["chat-wrapper"]}>
          <span>4</span>
          <IoChatbubblesOutline className={classes.chatIcon} />
        </div>
      </header>

      <nav className={classes["navigation"]}>
        <div className={classes["navigation__menu-wrapper"]}>
          <button onClick={hideModalHandler}>
            <IoMenu className={classes["menu-icon"]} /> Menu
          </button>
        </div>
        <div className={classes["navigation-actions"]}>
          <button>Centrum Pomocy</button>

          <select className={classes["country-selector"]}>
            <option value="pl">Polski / PLN</option>
          </select>

          <button className={classes.wishButton}>
            <IoHeartOutline className={classes["button-icon"]} />
            Lista życzeń
          </button>
          <button className={classes.userButton}>
            <IoPersonOutline className={classes["button-icon"]} />
            Konto
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
