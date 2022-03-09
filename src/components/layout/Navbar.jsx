import React, { useState } from "react";
import classes from "./Navbar.module.scss";

import logo from "../../assets/logo.png";
import { ImSearch } from "react-icons/im";
import {
  IoCartOutline,
  IoChatbubblesOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
} from "@material-ui/core";

const names = ["Wszystkie Kategorie", "Dom", "Elektronika"];

const Navbar = () => {
  const [category, setCategory] = useState(names[0]);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <React.Fragment>
      <section className={classes.topNav}>
        <div>
          <button className={classes.helpButton}>Centrum Pomocy</button>
          <select className={classes.countrySelect}>
            <option value="pl">Polski / PLN</option>
          </select>
          <button className={classes.wishButton}>
            <IoHeartOutline className={classes.btnIcon} />
            Lista życzeń
          </button>
          <button className={classes.userButton}>
            <IoPersonOutline className={classes.btnIcon} />
            Konto
          </button>
        </div>
      </section>

      <header className={classes.header}>
        <nav className={classes.nav}>
          <div className={classes.logo}>
            <img src={logo} alt="GrooveFinds" />
          </div>
          <div className={classes.search}>
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
              className={classes.searchBar}
              variant="outlined"
            />
            <button className={classes.button}>
              <ImSearch className={classes.searchIcon} />
            </button>
          </div>
          <div className={classes.cartDiv}>
            <span>4</span>
            <IoCartOutline className={classes.cartIcon} />
          </div>
          <div className={classes.chatDiv}>
            <span>4</span>
            <IoChatbubblesOutline className={classes.chatIcon} />
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
