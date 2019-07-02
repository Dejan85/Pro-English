import React, { useRef } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// components
import DropMenu from "./partials/DropMenu";
import AddBlog from "./partials/blog/AddBlog";

// hooks
import usePrivateRoute from "../../hooks/auth/usePrivateRoute";
import useDropMenu from "../../hooks/auth/useDropMenu";

const Dashboard = () => {
  const { PrivateRoute } = usePrivateRoute();
  const { dropMenuHandler } = useDropMenu();
  const blogRef = useRef();
  // const dropMenuHandler = e => {
  //   blogRef.current.classList.toggle("toggle");
  // };

  return (
    <Router>
      <div className="dashboard">
        <div className="dashboard__header">
          <h1 className="dashboard__h1">ProEnglish</h1>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__nav">
            <ul
              className="dashboard__list"
              onClick={dropMenuHandler.bind(this, blogRef)}
              ref={blogRef}>
              <li className="dashboard__item">
                <div className="dashboard__icon">
                  <i className="fas fa-blog" />
                  <p>Blog</p>
                </div>
                <div className="dashboard__icon">
                  <i className="fas fa-chevron-down" />
                </div>
              </li>
              <DropMenu />
            </ul>
          </div>
          <div className="test">
            <PrivateRoute exact path="/admin/blog" component={AddBlog} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
