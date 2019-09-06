import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";

// component
import BoxOne from "../blog/partials/BoxOne";
import BoxTwo from "../blog/partials/BoxTwo";

//Redux
import { fetchBlog } from "../../../redux/actions/fetchBlog";

//hooks
import useLoading from "../../hooks/global/useLoading";

const Blog = ({ blog }) => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const { loading } = useLoading();

  // sortiramo evente po satima
  blog &&
    blog.sort((a, b) => {
      return (
        parseInt(moment(a.created).format("h:mm:ss a")) -
        parseInt(moment(a.created).format("h:mm:ss a"))
      );
    });

  // sortiramo evente po datumima
  blog &&
    blog.sort((a, b) => {
      return (
        parseInt(moment(a.created).format("DD. MMMM YYYY.")) -
        parseInt(moment(a.created).format("DD. MMMM YYYY."))
      );
    });

  return (
    <div className="blog">
      {reset}
      <h3 className="blog__h3">Blog</h3>
      <div className="blog__line" />
      {(blog &&
        blog.map((item, index) => {
          return (
            <div key={index} className="blog__content">
              {!(index & 1) ? <BoxOne blog={item} /> : <BoxTwo blog={item} />}
            </div>
          );
        })) ||
        loading()}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object
};

const mapStateToProps = state => {
  const { blog } = state.blog;
  return { blog };
};

export default connect(
  mapStateToProps,
  { fetchBlog }
)(Blog);
