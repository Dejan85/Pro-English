import React from "react";
import { Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import HomeOne from "./components/layout/home/HomeOne";

const MainRouter = () => {
  return (
    <>
      <Header />
      {/* main page */}
      <Route exact path="/" component={HomeOne} />
    </>
  );
};

export default MainRouter;
