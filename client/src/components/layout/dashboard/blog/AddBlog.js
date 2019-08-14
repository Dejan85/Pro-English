import React, { useState } from "react";
import parse from "html-react-parser";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//redux
import { fetchNewBlog } from "../../../../redux/actions/fetchBlog";

// hooks
import useReactQuill from "../../../hooks/dashboard/useReactQuill";
import useForm from "../../../hooks/auth/useForm";

const AddBlog = ({ fetchNewBlog }) => {
  const { reactQuill, editorHtml } = useReactQuill();
  const [file, setFile] = useState();
  const [data, setData] = useState({
    blog: undefined,
    photo: undefined
  });
  const formData = new FormData();
  const { onChange, input } = useForm();

  const onSubmitHandler = e => {
    e.preventDefault();
    formData.append("file", input.file);
    formData.append("body", editorHtml);

    fetchNewBlog({ formData });
  };

  // const onChange = e => {
  //   setFile(e.target.files[0]);
  // };

  return (
    <div className="dashboard__addBlog">
      {/* <h1 className="dashboard__addBlog--h1">Add New Blog</h1> */}
      {/* {editorHtml && parse(editorHtml)} */}
      <form onSubmit={onSubmitHandler}>
        {reactQuill()}
        <button className="dashboard__addBlog--btn" type="submit">
          Save
        </button>
        <input
          className="dashboard__addBlog--img"
          type="file"
          name="file"
          accept="image/*"
          onChange={onChange}
        />
      </form>
    </div>
  );
};

AddBlog.propTypes = {
  fetchNewBlog: PropTypes.func
};

export default connect(
  null,
  { fetchNewBlog }
)(AddBlog);
