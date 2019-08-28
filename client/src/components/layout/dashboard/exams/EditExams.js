import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Editor from "../partials/Editor";

// Redux
import { fetchExams, deleteExams } from "../../../../redux/actions/fetchExams";

//hooks
import useLoading from "../../../hooks/global/useLoading";

const EditExams = ({ exams, deleteExams, fetchExams, editExamsStatus }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const { loading } = useLoading();
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  // prikazuje nam editor na ekranu
  const showEditorHandler = id => {
    setShowEditor(!showEditor);
    setData(id);
  };

  // brise nam editor sa ekrana
  // const deleteExamsHandler = id => {
  //   deleteExams(id).then(res => {
  //     res.json().then(response => {
  //       setMessage(response);
  //     });
  //   });
  // };

  useEffect(() => {
    fetchExams();
  }, []);

  useEffect(() => {
    // sluzi nam da bi nam sklonio editor sa ekrana kada zavrsimo edit
    setShowEditor(false);
    fetchExams();
  }, [editExamsStatus]);

  return (
    <div
      className="dashboard__editBlog"
      style={
        showEditor ? { flexDirection: "column" } : { flexDirection: "row" }
      }
    >
      {reset}
      {(!exams && loading()) ||
        (!showEditor &&
          exams &&
          exams.map((item, index) => {
            const { title, description } = item;
            return (
              <div
                className="dashboard__editBlog--blog"
                data-key={index}
                key={index}
              >
                {/* <div className="dashboard__editBlog--imgholder">
                  <img
                    className="dashboard__editBlog--img"
                    src={`/blog/image/${_id}`}
                    alt={"proenglish"}
                  />
                </div> */}
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
                  {/* <button
                    className="dashboard__editBlog--btn"
                    onClick={deleteExamsHandler.bind(this, _id)}
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            );
          })) ||
        (showEditor && (
          <Editor data={data} name="editExams" disableImageUpload={true} />
        ))}
    </div>
  );
};

EditExams.propTypes = {
  exams: PropTypes.array,
  deleteExams: PropTypes.func,
  fetchExams: PropTypes.func,
  editExamsStatus: PropTypes.number
};

const mapStateToProps = state => {
  const { exams, editExamsStatus } = state.exams;
  return { exams, editExamsStatus };
};

export default connect(
  mapStateToProps,
  { deleteExams, fetchExams }
)(EditExams);
