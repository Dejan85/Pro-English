import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Editor from "../partials/Editor";

// Redux
import { deleteBlog, fetchBlog } from '../../../../redux/actions/fetchBlog';

//hooks
import useLoading from '../../../hooks/global/useLoading';



const EditBlog = ({ blog, deleteBlog, fetchBlog }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const { loading } = useLoading();
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });


  const showEditorHandler = (id) => {
    setShowEditor(!showEditor);
    setData(id);
  }

  const deleteBlogHandler = (id) => {
    deleteBlog(id).then((res) => {
      res.json().then((response) => {
        setMessage(response)
      })
    })
  };

  useEffect(() => {
    fetchBlog();
  }, [message])


  useEffect(() => {
    setShowEditor(false);
    fetchBlog();
  }, [blog.editBlogStatus])


  return (
    <div className="dashboard__editBlog" style={showEditor ? { flexDirection: "column" } : { flexDirection: "row" }}>
      {reset}
      {(!blog.blog && loading()) || (!showEditor &&
        blog.blog &&
        blog.blog.map((item, index) => {
          const { _id, title, description } = item;
          return (
            <div className="dashboard__editBlog--blog" data-key={index} key={index}>
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
                <button className="dashboard__editBlog--btn" onClick={showEditorHandler.bind(this, item)}>Edit</button>
                <button className="dashboard__editBlog--btn" onClick={deleteBlogHandler.bind(this, _id)}>Delete</button>
              </div>
            </div>
          );
        })) || (showEditor && <Editor data={data} />)}
    </div>
  );
};

EditBlog.propTypes = {
  blog: PropTypes.object,
  deleteBlog: PropTypes.func,
  fetchBlog: PropTypes.func,
};

const mapStateToProps = state => {
  const { blog } = state;
  return { blog };
};

export default connect(
  mapStateToProps,
  { deleteBlog, fetchBlog }
)(EditBlog);
