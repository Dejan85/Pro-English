import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


//hooks
import useReactQuill from "../../../hooks/dashboard/useReactQuill";
import useForm from "../../../hooks/auth/useForm";
import useNavHandler from '../../../hooks/dashboard/useNavHdnler';


//redux
import { fetchNewBlog, editBlog } from "../../../../redux/actions/fetchBlog";

const Editor = ({ fetchNewBlog, editBlog, data }) => {
  const { onChange, input, fileUpload, setInput } = useForm();
  const formData = new FormData();
  const { reactQuill, editorHtml } = useReactQuill(data && data.body);
  const { navHandler } = useNavHandler();
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });


  useEffect(() => {
    data &&
      setInput({
        ...input,
        title: data && data.title,
        description: data && data.description
      })
  }, [])

  const onSubmitHandler = e => {
    e.preventDefault();
    formData.append("file", input.file);
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("body", editorHtml);



    !data && fetchNewBlog({ formData });
    data && editBlog({ formData }, data._id);

  };

  const redirect = () => {
    navHandler('editBlog')
  };


  return (
    <div className="dashboard__addBlog" >
      {reset}
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
        <button className="dashboard__addBlog--btn" type="submit" onClick={redirect}>
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
    </div >
  );
};

Editor.propTypes = {
  data: PropTypes.object,
  fetchNewBlog: PropTypes.func,
  editBlog: PropTypes.func
}

export default connect(
  null,
  { fetchNewBlog, editBlog }
)(Editor);
