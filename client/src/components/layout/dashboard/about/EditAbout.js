import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import parse from "html-react-parser";

// Components
import Editor from "../partials/Editor";

// Redux
import { fetchAbout } from "../../../../redux/actions/fetchAbout";

//hooks
import useLoading from "../../../hooks/global/useLoading";

const EditAbout = ({ about, fetchAbout, editAboutStatus }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [data, setData] = useState();
  const { loading } = useLoading();
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });

  // prikazuje nam editor na ekranu
  const showEditorHandler = id => {
    setShowEditor(!showEditor);
    setData(id);
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  useEffect(() => {
    // sluzi nam da bi nam sklonio editor sa ekrana kada zavrsimo edit
    setShowEditor(false);
    fetchAbout();
  }, [editAboutStatus]);

  return (
    <div
      className="dashboard__editBlog"
      style={
        showEditor ? { flexDirection: "column" } : { flexDirection: "row" }
      }
    >
      {reset}
      {(!about && loading()) ||
        (!showEditor &&
          about &&
          about.map((item, index) => {
            const { title, description } = item;
            return (
              <div
                className="dashboard__editBlog--blog"
                data-key={index}
                key={index}
              >
                <div className="dashboard__editBlog--contentholder">
                  <h1 className="dashboard__editBlog--h1">{title}</h1>
                  <p className="dashboard__editBlog--p">
                    {description && description.substr(0, 300) + "..."}
                  </p>
                </div>
                <div className="dashboard__editBlog--btnholder">
                  <button
                    className="dashboard__editBlog--btn"
                    onClick={showEditorHandler.bind(this, item)}
                    style={{ marginLeft: "0px" }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })) ||
        (showEditor && (
          <Editor data={data} name="editAbout" disableImageUpload={true} />
        ))}
    </div>
  );
};

EditAbout.propTypes = {
  about: PropTypes.array,
  fetchAbout: PropTypes.func,
  editAboutStatus: PropTypes.number
};

const mapStateToProps = state => {
  const { about, editAboutStatus } = state.about;
  return { about, editAboutStatus };
};

export default connect(
  mapStateToProps,
  { fetchAbout }
)(EditAbout);
