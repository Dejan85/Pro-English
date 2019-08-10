import React from "react";
import logo from "../../../images/logo_2.jpg";

// hooks
import useNavHandler from '../../hooks/dashboard/useNavHdnler';


const Dashboard = () => {
  const { navHandler, blogRef, eventsRef, blogIconRef, eventsIconRef } = useNavHandler();

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <img src={logo} alt="logo" />
      </div>
      <div className="dashboard__nav">
        <ul className="dashboard__list">
          <li className="dashboard__item" data-name="blog" onClick={navHandler}>Blog<i className="fas fa-chevron-right" ref={blogIconRef}></i></li>
          <ul className="dashboard__sublist" ref={blogRef}>
            <li className="dashboard__subitem">Add Blog</li>
            <li className="dashboard__subitem">Edit Blog</li>
            <li className="dashboard__subitem">Delete Blog</li>
          </ul>
        </ul>
        <ul className="dashboard__list">
          <li className="dashboard__item" data-name="events" onClick={navHandler}>Events <i className="fas fa-chevron-right" ref={eventsIconRef}></i></li>
          <ul className="dashboard__sublist" ref={eventsRef}>
            <li className="dashboard__subitem">Add Event</li>
            <li className="dashboard__subitem">Edit Event</li>
            <li className="dashboard__subitem">Delete Event</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
