import React from "react";
import classes from "./Layout.module.scss";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
