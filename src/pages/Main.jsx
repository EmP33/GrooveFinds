import React from "react";

import Home from "../components/Home/Home";
import Layout from "../components/layout/Layout";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Layout>
        <Home />
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
