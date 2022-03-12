import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import CartPage from "./pages/CartPage";
import ModalPage from "./pages/ModalPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:productID" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
