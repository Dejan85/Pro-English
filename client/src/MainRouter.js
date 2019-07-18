import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Footer from "./components/layout/footer/Footer";
import About from "./components/layout/about/About";
import Course from "./components/layout/course/Course";
import Exams from "./components/layout/exams/Exams";
import Blog from "./components/layout/blog/Blog";
import BlogPost from "./components/layout/blog/BlogPost";
import Events from "./components/layout/events/Events";
import SingleEvent from "./components/layout/events/SingleEvent";
import Contact from "./components/layout/contact/Contact";

const MainRouter = props => {
  const [headerAndFooter] = useState(() => {
    return (
      props.history.location.pathname === "/" ||
      props.history.location.pathname === "/onama" ||
      props.history.location.pathname === "/kursevi" ||
      props.history.location.pathname === "/ispiti" ||
      props.history.location.pathname === "/singleBlog" ||
      props.history.location.pathname === "/dogadjaji" ||
      props.history.location.pathname === "/dogadjaji/one" ||
      props.history.location.pathname === "/kontakt" 

    );
  });

  return (
    <>
      {headerAndFooter && <Header />}
      <Route exact path="/" component={Home} />
      <Route exact path="/onama" component={About} />
      <Route exact path="/kursevi" component={Course} />
      <Route exact path="/ispiti" component={Exams} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/singleBlog" component={BlogPost} />
      <Route exact path="/dogadjaji" component={Events} />
      <Route exact path="/dogadjaji/one" component={SingleEvent} />
      <Route exact path="/kontakt" component={Contact} />
      {headerAndFooter && <Footer />}
    </>
  );
};

export default withRouter(MainRouter);
