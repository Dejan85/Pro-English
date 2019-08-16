import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//redux
import { fetchNewBlog } from "../../../../redux/actions/fetchBlog";

// hooks
import useReactQuill from "../../../hooks/dashboard/useReactQuill";
import useForm from "../../../hooks/auth/useForm";

const AddBlog = ({ fetchNewBlog }) => {
  const { reactQuill, editorHtml } = useReactQuill();

  const formData = new FormData();
  const { onChange, input, fileUpload } = useForm();

  const onSubmitHandler = e => {
    e.preventDefault();
    formData.append("file", input.file);
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("body", editorHtml);

    fetchNewBlog({ formData });
  };

  return (
    <div className="dashboard__addBlog">
      <form className="dashboard__form" onSubmit={onSubmitHandler}>
        <div className="dashboard__inputHolder">
          <label className="dashboard__label">Title</label>
          <input
            className="dashboard__input"
            name="title"
            onChange={onChange}
            value={input.title}
          />
        </div>

        <div className="dashboard__inputHolder">
          <label className="dashboard__label">Description</label>
          <textarea
            className="dashboard__textarea"
            name="description"
            onChange={onChange}
            value={input.description}
            rows="4"
          />
        </div>

        {reactQuill()}
        <button className="dashboard__addBlog--btn" type="submit">
          Save
        </button>
        <input
          className="dashboard__addBlog--img"
          type="file"
          name="file"
          accept="image/*"
          onChange={fileUpload}
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
