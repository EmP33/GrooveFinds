import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Main from "./pages/Main";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoadingPage from "./pages/LoadingPage";
import RegulationsPage from "./pages/RegulationsPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentsPage from "./pages/PaymentsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import SearchingPage from "./pages/SearchingPage";

import ProductDetail from "./components/ProductDetail/ProductDetail";

// COMMERCE
import { commerce } from "./lib/commerce";

// REDUX STORE
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./store/productsSlice";
import { userActions } from "./store/userSlice";

let isLoadingApp = true;

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  // const cart = useSelector((state) => state.user.cart);
  // const wishlist = useSelector((state) => state.user.wishlist);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    dispatch(productActions.setProducts(data));
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();
    dispatch(productActions.setCategories(data));
  };

  const fetchCart = async () => {
    dispatch(userActions.setCart(await commerce.cart.retrieve()));
  };

  const fetchWishlist = () => {
    const products = JSON.parse(localStorage.getItem("wishlist"));
    if (products) {
      dispatch(userActions.addItemToWishlist(products));
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchCart();
    fetchWishlist();
  }, []);

  if (products.length > 0) {
    dispatch(productActions.setIsLoading(false));
    isLoadingApp = false;
  }

  if (isLoadingApp) {
    return <LoadingPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<Main />}>
          <Route path={`product/:productID`} element={<ProductDetail />} />
        </Route>
        <Route path="/cart/*" element={<CartPage />}>
          <Route path={`:productID`} element={<ProductDetail />} />
        </Route>
        <Route path="/category/:categoryID/*" element={<ProductsPage />}>
          <Route path={`product/:productID`} element={<ProductDetail />} />
        </Route>
        <Route
          path="/search/:categoryID/:searchInput/*"
          element={<SearchingPage />}
        >
          <Route path={`product/:productID`} element={<ProductDetail />} />
        </Route>
        <Route
          path="/search/:categoryID"
          element={<Navigate to="/category/wszystkie-kategorie" />}
        ></Route>
        <Route path="/help/*" element={<HelpPage />}>
          <Route path={`privacy`} element={<PrivacyPage />} />
          <Route path={`shipping`} element={<ShippingPage />} />
          <Route path={`payments`} element={<PaymentsPage />} />
          <Route path={`regulations`} element={<RegulationsPage />} />
          <Route path={`contact`} element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
