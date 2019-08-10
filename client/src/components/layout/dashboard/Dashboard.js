import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo_2.jpg";

// Components
import AddBlog from "./blog/AddBlog";
import EditBlog from "./blog/EditBlog";
import DeleteBlog from "./blog/DeleteBlog";
import AddEvents from "./events/AddEvents";
import EditEvents from "./events/EditEvents";
import DeleteEvents from "./events/DeleteEvents";

// hooks
import useNavHandler from "../../hooks/dashboard/useNavHdnler";

const Dashboard = () => {
  const {
    navDropHandler,
    navHandler,
    blogRef,
    eventsRef,
    blogIconRef,
    eventsIconRef,
    ativeContent
  } = useNavHandler();

  return (
    <div className="dashboard">
      <div className="dashboard__navigation">
        <div className="dashboard__header">
          <Link>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="dashboard__nav">
          <ul className="dashboard__list">
            <li
              className="dashboard__item"
              data-name="blog"
              onClick={navDropHandler}>
              Blog
              <i className="fas fa-chevron-right" ref={blogIconRef} />
            </li>
            <ul className="dashboard__sublist" ref={blogRef}>
              <li
                className="dashboard__subitem"
                data-name="addBlog"
                onClick={navHandler}>
                Add Blog
              </li>
              <li
                className="dashboard__subitem"
                data-name="editBlog"
                onClick={navHandler}>
                Edit Blog
              </li>
              <li
                className="dashboard__subitem"
                data-name="deleteBlog"
                onClick={navHandler}>
                Delete Blog
              </li>
            </ul>
          </ul>
          <ul className="dashboard__list">
            <li
              className="dashboard__item"
              data-name="events"
              onClick={navDropHandler}>
              Events <i className="fas fa-chevron-right" ref={eventsIconRef} />
            </li>
            <ul className="dashboard__sublist" ref={eventsRef}>
              <li
                className="dashboard__subitem"
                data-name="addEvents"
                onClick={navHandler}>
                Add Event
              </li>
              <li
                className="dashboard__subitem"
                data-name="editEvents"
                onClick={navHandler}>
                Edit Event
              </li>
              <li
                className="dashboard__subitem"
                data-name="deleteEvents"
                onClick={navHandler}>
                Delete Event
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="dashboard__content">
        {ativeContent.addBlog && <AddBlog />}
        {ativeContent.editBlog && <EditBlog />}
        {ativeContent.deleteBlog && <DeleteBlog />}
        {ativeContent.addEvents && <AddEvents />}
        {ativeContent.editEvents && <EditEvents />}
        {ativeContent.deleteEvents && <DeleteEvents />}
      </div>
    </div>
  );
};

export default Dashboard;
