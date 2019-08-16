import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// component
import BoxOne from "../blog/partials/BoxOne";
import BoxTwo from "../blog/partials/BoxTwo";

//Redux
import { fetchBlog } from "../../../redux/actions/fetchBlog";

const Blog = ({ blog }) => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  console.log("blog rendering");

  return (
    <div className="blog">
      {reset}
      <h3 className="blog__h3">Blog</h3>
      <div className="blog__line" />
      {blog.blog &&
        blog.blog.map((item, index) => {
          return (
            <div key={index} className="blog__content">
              {!(index & 1) ? <BoxOne blog={item} /> : <BoxTwo blog={item} />}
            </div>
          );
        })}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object
};

const mapStateToProps = state => {
  const { blog } = state;
  return { blog };
};

export default connect(
  mapStateToProps,
  { fetchBlog }
)(Blog);
