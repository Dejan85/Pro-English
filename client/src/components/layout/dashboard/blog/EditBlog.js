import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Editor from "../partials/Editor";

// Redux
import { deleteBlog, fetchBlog } from "../../../../redux/actions/fetchBlog";

//hooks
import useLoading from "../../../hooks/global/useLoading";

const EditBlog = ({ blog, deleteBlog, fetchBlog }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [confrim, setConfirm] = useState(false);
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const { loading } = useLoading();
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const [blogId, setBlogId] = useState();

  const showEditorHandler = id => {
    setShowEditor(!showEditor);
    setData(id);
  };

  const deleteBlogHandler = id => {
    deleteBlog(id).then(res => {
      res.json().then(response => {
        setMessage(response);
      });
    });
  };

  useEffect(() => {
    fetchBlog();
  }, [message]);

  useEffect(() => {
    setShowEditor(false);
    fetchBlog();
  }, [blog.editBlogStatus]);

  const deleteEventHandler = id => {
    setBlogId(id);
    setConfirm(true);
  };

  return (
    <div
      className="dashboard__editBlog"
      style={
        showEditor ? { flexDirection: "column" } : { flexDirection: "row" }
      }
    >
      {confrim && (
        <div className="confirmBox">
          <p className="confirmBox__p">
            Da li ste sigurni da zelite da obrisete?
          </p>
          <div className="confirmBox__icon">
            <i
              className="fas fa-check"
              style={{ color: "#80C702" }}
              onClick={() => {
                setConfirm(false);
                deleteBlogHandler(blogId);
              }}
            />
            <i
              className="fas fa-times"
              style={{ color: "#EB1B1B" }}
              onClick={() => {
                setConfirm(false);
              }}
            />
          </div>
        </div>
      )}
      {reset}
      {(!blog.blog && loading()) ||
        (!showEditor &&
          blog.blog &&
          blog.blog.map((item, index) => {
            const { _id, title, description } = item;
            return (
              <div
                className="dashboard__editBlog--blog"
                data-key={index}
                key={index}
              >
                <div className="dashboard__editBlog--imgholder">
                  <img
                    className="dashboard__editBlog--img"
                    src={`/blog/image/${_id}`}
                    alt={"proenglish"}
                  />
                </div>
                <div className="dashboard__editBlog--contentholder">
                  <h1 className="dashboard__editBlog--h1">{title}</h1>
                  <p className="dashboard__editBlog--p">
                    {description.substr(0, 300) + "..."}
                  </p>
                </div>
                <div className="dashboard__editBlog--btnholder">
                  <button
                    className="dashboard__editBlog--btn"
                    onClick={showEditorHandler.bind(this, item)}
                  >
                    Edit
                  </button>
                  <button
                    className="dashboard__editBlog--btn"
                    // onClick={deleteBlogHandler.bind(this, _id)}
                    onClick={deleteEventHandler.bind(this, _id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })) ||
        (showEditor && <Editor data={data} name="editBlog" />)}
    </div>
  );
};

EditBlog.propTypes = {
  blog: PropTypes.object,
  deleteBlog: PropTypes.func,
  fetchBlog: PropTypes.func
};

const mapStateToProps = state => {
  const { blog } = state;
  return { blog };
};

export default connect(
  mapStateToProps,
  { deleteBlog, fetchBlog }
)(EditBlog);
