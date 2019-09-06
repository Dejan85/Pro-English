import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";

// components
import BlogBox from "./partials/BlogBox";
import NewLetter from "./partials/NewsLetter";

//hooks
import useLoading from "../../hooks/global/useLoading";

const HomeBlog = ({ blog }) => {
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
    <div className="homeBlog">
      <h3 className="homeBlog__h3">Blog</h3>
      <div className="homeBlog__line" />
      <div className="homeBlog__content">
        {(!blog && loading()) ||
          (blog &&
            blog.map((item, index) => {
              return (
                index <= 3 && <div key={index}>{<BlogBox item={item} />}</div>
              );
            }))}
        <div className="homeBlog__newsletter">
          <NewLetter />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { blog } = state.blog;
  return { blog };
};

HomeBlog.propTypes = {
  blog: PropTypes.array
};

export default connect(
  mapStateToProps,
  null
)(HomeBlog);
