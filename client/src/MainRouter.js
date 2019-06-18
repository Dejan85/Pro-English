import React from "react";
import { Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Footer from "./components/layout/footer/Footer";
const MainRouter = () => {
  return (
    <>
      <Header />
      {/* home page */}
      <Route exact path="/" component={Home} />
      <Footer />
    </>
  );
};

export default MainRouter;
