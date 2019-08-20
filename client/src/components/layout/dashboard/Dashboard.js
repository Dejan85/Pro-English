import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from "../../../images/logo_2.jpg";

// Components
import AddBlog from "./blog/AddBlog";
import EditBlog from "./blog/EditBlog";
import AddEvents from "./events/AddEvents";
import EditEvents from "./events/EditEvents";
import DeleteEvents from "./events/DeleteEvents";

// hooks
import useNavHandler from "../../hooks/dashboard/useNavHdnler";

const Dashboard = ({ blogStatus }) => {
  const {
    navDropHandler,
    navHandler,
    blogRef,
    eventsRef,
    blogIconRef,
    eventsIconRef,
    ativeContent,
    setActiveContent
  } = useNavHandler();
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  useEffect(() => {
    if (blogStatus === 200) {
      setActiveContent({
        editBlog: true
      })
    }
  }, [blogStatus])


  return (
    <div className="dashboard">
      {reset}
      <div className="dashboard__navigation">
        <div className="dashboard__header">
          <Link to="/">
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
        {ativeContent.addEvents && <AddEvents />}
        {ativeContent.editEvents && <EditEvents />}
        {ativeContent.deleteEvents && <DeleteEvents />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  blogStatus: state.blog.blogStatus
})

export default connect(mapStateToProps, null)(Dashboard);
