import React, { useState } from "react";

import logo from "../../assets/logo.png";

import classes from "./Navbar.module.scss";

import { Link, useLocation } from "react-router-dom";

import { ImSearch } from "react-icons/im";
import {
  IoCartOutline,
  IoHeartOutline,
  IoMenu,
  IoChatboxEllipsesOutline,
} from "react-icons/io5";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modalSlice";

import UserMenu from "../Modals/UserMenu/UserMenu";

const Navbar = () => {
  const location = useLocation();
  const categories = useSelector((state) => state.products.categories);
  const cart = useSelector((state) => state.user.cart);
  const sendingStatus = useSelector((state) => state.user.sendingStatus);
  const [category, setCategory] = useState("wszystkie-kategorie");
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
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.slug}>
                  {cat.name}
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
            {cart.total_items && !sendingStatus ? (
              <span>{cart.total_items}</span>
            ) : (
              ""
            )}
            {sendingStatus && (
              <span>
                <AiOutlineLoading3Quarters className="spinning" />
              </span>
            )}

            <IoCartOutline className={classes["cartIcon"]} />
          </Link>
        </div>
        <div className={classes["chat-wrapper"]}>
          <Link to="/help/contact">
            <IoChatboxEllipsesOutline className={classes.chatIcon} />
          </Link>
        </div>
      </header>

      <nav className={classes["navigation"]}>
        <div className={classes["navigation__menu-wrapper"]}>
          <button onClick={hideModalHandler}>
            <IoMenu className={classes["menu-icon"]} /> Menu
          </button>
        </div>
        <div className={classes["navigation-actions"]}>
          <Link to={`/help`} className={classes["button-help"]}>
            Centrum Pomocy
          </Link>
          <select className={classes["country-selector"]}>
            <option value="pl">Polski / PLN</option>
          </select>
          <Link
            to={`${location.pathname}/wishlist`}
            className={classes.wishButton}
          >
            <IoHeartOutline className={classes["button-icon"]} />
            Lista życzeń
          </Link>
          {<UserMenu />}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
