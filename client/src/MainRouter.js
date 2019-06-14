import React from "react";
import { Route } from "react-router-dom";

// components
import LandingOne from "./components/layout/landing/LandingOne";

const MainRouter = () => {
  return (
    <>
      {/* main page */}
      <Route exact path="/" component={LandingOne} />
    </>
  );
};

export default MainRouter;
