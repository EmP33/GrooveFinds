import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";

// COMMERCE
import { commerce } from "./lib/commerce";

// REDUX STORE
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./store/productsSlice";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    dispatch(productActions.setProducts(data));
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    dispatch(productActions.setCategories(data));
  };

  useEffect(() => {
    dispatch(productActions.setIsLoading(true));
    fetchProducts();
    fetchCategories();
  }, []);

  if (products.length > 0) {
    setTimeout(() => {
      dispatch(productActions.setIsLoading(false));
    }, 1000);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartPage />} />{" "}
        <Route path="/:categoryID" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
