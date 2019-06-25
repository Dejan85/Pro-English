import React from "react";
import { Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import Footer from "./components/layout/footer/Footer";
import About from "./components/layout/about/About";
import Course from "./components/layout/course/Course";
import Exams from "./components/layout/exams/Exams";
import Blog from "./components/layout/blog/Blog";
import BlogPost from "./components/layout/blog/BlogPost";

const MainRouter = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/course" component={Course} />
      <Route exact path="/exams" component={Exams} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/singleBlog" component={BlogPost} />
      <Footer />
    </>
  );
};

export default MainRouter;
