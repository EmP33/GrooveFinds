import React from "react";

import { useParams } from "react-router-dom";

import ProductDetail from "../components/ProductDetail/ProductDetail";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ProductDetailsPage = () => {
  const { productID } = useParams();

  return (
    <React.Fragment>
      <Navbar />
      <ProductDetail productID={productID} />
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetailsPage;
