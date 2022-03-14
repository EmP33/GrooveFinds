import React from "react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import WishList from "../Modals/WishList/WishList";
import Login from "../Login/Login";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Login />
      <WishList />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
