import React from "react";
import { Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Footer from "./components/layout/footer/Footer";
import About from "./components/layout/about/About";
import HowWeWork from "./components/layout/about/HowWeWork";
import WhoWeAre from "./components/layout/about/WhoWeAre";

const MainRouter = () => {
  return (
    <>
      <Header />
      {/* home page */}
      <Route exact path="/" component={Home} />
      {/* about pages */}
      <Route exact path="/about" component={About} />
      <Route exact path="/howwework" component={HowWeWork} />
      <Route exact path="/whoweare" component={WhoWeAre} />

      <Footer />
    </>
  );
};

export default MainRouter;
