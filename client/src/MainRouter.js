import React from "react";
import { Route } from "react-router-dom";

// components
import Landing from "./components/landing/Landing";
import Course from "./components/courses/Course";

const MainRouter = () => {
  return (
    <>
      {/* main page */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/" component={Course} />
    </>
  );
};

export default MainRouter;
