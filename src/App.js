import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import CartPage from "./pages/CartPage";

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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
