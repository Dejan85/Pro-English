import React, { useSate } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const EditBlog = ({ blog }) => {
  return (
    <div className="dashboard__editBlog">
      {blog &&
        blog.map((item, index) => {
          return (
            <div className="dashboard__editBlog--blog" key={index}>
              <div className="dashboard__editBlog--imgholder">
                <img
                  className="dashboard__editBlog--img"
                  src={`/blog/image/${item._id}`}
                  alt={"proenglish"}
                />
              </div>
              <div className="dashboard__editBlog--contentholder">
                <h1 className="dashboard__editBlog--h1">{item.title}</h1>
                <p className="dashboard__editBlog--p">
                  {item.description.substr(0, 300) + "..."}
                </p>
              </div>

              <div className="dashboard__editBlog--btnholder">
                <button className="dashboard__editBlog--btn">Edit</button>
                <button className="dashboard__editBlog--btn">Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

EditBlog.propTypes = {
  blog: PropTypes.array
};

const mapStateToProps = state => {
  const { blog } = state;
  return blog;
};

export default connect(
  mapStateToProps,
  null
)(EditBlog);
