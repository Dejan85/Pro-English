import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Editor from "../partials/Editor";

// Redux
import {deleteBlog} from '../../../../redux/actions/fetchBlog';



const EditBlog = ({ blog, deleteBlog }) => {
const [showEditor, setShowEditor] = useState(false);
const [data, setData] = useState();


const showEditorHandler = (id) => {
  setShowEditor(!showEditor);
  setData(id);
}

  return (
    <div className="dashboard__editBlog" style={showEditor ? {flexDirection:"column"} : {flexDirection:"row"}}>
      {(!showEditor && 
      blog &&
        blog.map((item, index) => {
        const {_id, title, description } = item;
          return (
            <div className="dashboard__editBlog--blog" key={index}>
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
                <button className="dashboard__editBlog--btn" onClick={deleteBlog.bind(this, _id)}>Delete</button>
              </div>
            </div>
          );
        })) || (showEditor && <Editor data={data}/>)}
    </div>
  );
};

EditBlog.propTypes = {
  blog: PropTypes.array,
  deleteBlog: PropTypes.func
};

const mapStateToProps = state => {
  const { blog } = state;
  return blog;
};

export default connect(
  mapStateToProps,
  {deleteBlog}
)(EditBlog);
