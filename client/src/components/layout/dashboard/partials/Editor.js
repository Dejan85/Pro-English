import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


//hooks
import useReactQuill from "../../../hooks/dashboard/useReactQuill";
import useForm from "../../../hooks/auth/useForm";
import useNavHandler from '../../../hooks/dashboard/useNavHdnler';


//redux
import { fetchNewBlog, editBlog } from "../../../../redux/actions/fetchBlog";
import { fetchNewExams } from '../../../../redux/actions/fetchExams';


const Editor = ({ fetchNewBlog, editBlog, data, disableDescription, fetchNewExams, name }) => {
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
    input.file && formData.append("file", input.file);
    input.title && formData.append("title", input.title);
    input.description && formData.append("description", input.description);
    editorHtml && formData.append("body", editorHtml);

    (name === "addBlog") && !data && fetchNewBlog({ formData });
    (editBlog === "editBlog") && data && editBlog({ formData }, data._id);
    (name === "addExams") && fetchNewExams({ formData });
  };

  const redirect = () => {
    navHandler('editBlog');
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

        {!disableDescription && <div className="dashboard__inputHolder">
          <label className="dashboard__label">Description</label>
          <textarea
            className="dashboard__textarea"
            name="description"
            onChange={onChange}
            value={input.description}
            rows="4"
          />
        </div>}

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

const mapStateToProps = (state) => {
  const { editBlogStatus } = state.blog;
  return { editBlogStatus };
};


Editor.propTypes = {
  data: PropTypes.object,
  fetchNewBlog: PropTypes.func,
  editBlog: PropTypes.func,
  show: PropTypes.func,
  editBlogStatus: PropTypes.number,
  fetchNewExams: PropTypes.func,
  name: PropTypes.string,
  disableDescription: PropTypes.bool
}





export default connect(
  mapStateToProps,
  { fetchNewBlog, editBlog, fetchNewExams }
)(Editor);
