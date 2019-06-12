import React from "react";
import { Route } from "react-router-dom";

// components
import Landing from "./components/landing/Landing";

const MainRouter = () => {
  return (
    <>
      {/* main page */}
      <Route exact path="/" component={Landing} />
    </>
  );
};

export default MainRouter;
