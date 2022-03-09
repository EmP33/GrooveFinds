import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Navbar from "./components/layout/Navbar";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
