import React from "react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import WishList from "../Modals/WishList/WishList";
import Login from "../Login/Login";
import ProductDetail from "../ProductDetail/ProductDetail";

import { Routes, Route } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/wishlist/*" element={<WishList />}>
          <Route path={`:productID`} element={<ProductDetail />} />
        </Route>
        <Route path="/registration" element={<Login />} />
      </Routes>

      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
