import React, { useRef } from "react";

// components
import DropMenu from "./partials/DropMenu";

const Dashboard = () => {
  const blogRef = useRef();
  const dropMenuHandler = e => {
    blogRef.current.classList.toggle("toggle");
  };
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
      </div>
    </div>
  );
};

export default Dashboard;
