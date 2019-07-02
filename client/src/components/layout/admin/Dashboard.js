import React, { useRef } from "react";
import { Route } from "react-router-dom";
import usePrivateRoute from "../../hooks/auth/usePrivateRoute";

// components
import DropMenu from "./partials/DropMenu";
import AddBlog from "./partials/blog/AddBlog";

const Dashboard = () => {
  const blogRef = useRef();
  const dropMenuHandler = e => {
    blogRef.current.classList.toggle("toggle");
  };
  const { PrivateRoute } = usePrivateRoute();

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__h1">ProEnglish</h1>
      </div>
      <div className="dashboard__content">
        <div className="dashboard__nav">
          <ul
            className="dashboard__list"
            onClick={dropMenuHandler}
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
          <Route exact path="/admin/xad" component={AddBlog} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
