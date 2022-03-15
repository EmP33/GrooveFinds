import React from "react";

import classes from "./NotFound.module.scss";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={classes["main"]}>
      <article>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Przejdź do strony głównej poprzez przycisk poniżej:</p>
        <Link to="/home">Przejdź do strony głównej</Link>
      </article>
    </div>
  );
};

export default NotFound;
