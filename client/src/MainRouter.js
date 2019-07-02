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
      props.history.location.pathname === "/admin" ||
      props.history.location.pathname === "/admin/signin" ||
      props.history.location.pathname === "/admin/signup" ||
      props.history.location.pathname === "/admin/blog"
    );
  });

  return (
    <>
      {!headerAndFooter && <Header />}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/course" component={Course} />
      <Route exact path="/exams" component={Exams} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/singleBlog" component={BlogPost} />
      <Route exact path="/dogadjaji" component={Events} />
      <Route exact path="/dogadjaji/one" component={SingleEvent} />
      <Route exact path="/contact" component={Contact} />
      {!headerAndFooter && <Footer />}
    </>
  );
};

export default withRouter(MainRouter);
