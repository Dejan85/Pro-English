import React from "react";
import { Route } from "react-router-dom";

// components
import HomeOne from "./components/layout/home/HomeOne";

const MainRouter = () => {
  return (
    <>
      {/* main page */}
      <Route exact path="/" component={HomeOne} />
    </>
  );
};

export default MainRouter;
