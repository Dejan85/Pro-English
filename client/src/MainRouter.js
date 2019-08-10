import React from "react";
import { Route, Switch } from "react-router-dom";

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//

// public
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

// admin
// import Dashboard from './components/layout/admin/Dashboard'
import Dashboard from "./components/layout/dashboard/Dashboard";
import DashboardNav from "./components/layout/dashboard/partials/DashboardNav";
import Signin from "./components/layout/admin/auth/Signin";
import Signup from "./components/layout/admin/auth/Signup";

// hooks
import usePrivateRoute from "./components/hooks/auth/usePrivateRoute";
import useAuthenticate from "./components/hooks/auth/useAuthenticate";

const MainRouter = () => {
  const { PrivateRoute } = usePrivateRoute();
  const { isAuthenticated } = useAuthenticate();

  console.log();

  const str = window.location.pathname.split(/[\\\/]/);
  let str2;

  str.forEach(item => {
    if (item === "dashboard") {
      return (str2 = item);
    }
  });

  return (
    <>
      {str2 !== "dashboard" && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/onama" component={About} />
        <Route exact path="/kursevi" component={Course} />
        <Route exact path="/ispiti" component={Exams} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/singleBlog" component={BlogPost} />
        <Route exact path="/dogadjaji" component={Events} />
        <Route exact path="/dogadjaji/one" component={SingleEvent} />
        <Route exact path="/kontakt" component={Contact} />

        {/* admin */}
        {/* {str2 === "dashboard" && isAuthenticated() && <DashboardNav />} */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/signin" component={Signin} />
        <Route exact path="/dashboard/signup" component={Signup} />
      </Switch>
      {str2 !== "dashboard" && <Footer />}
    </>
  );
};

export default MainRouter;
