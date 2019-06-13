import React from "react";
import { Route } from "react-router-dom";

// components
import Landing from "./components/landing/Landing";
import Course from "./components/courses/Course";
import Nav from "./components/landing/Nav";
const MainRouter = () => {
  return (
    <>
      <Nav />
      {/* main page */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/course" component={Course} />
    </>
  );
};

export default MainRouter;
