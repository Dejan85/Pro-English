import React from "react";
import parse from "html-react-parser";

// hooks
import useReactQuill from "../../../hooks/dashboard/useReactQuill";

const AddBlog = () => {
  const { reactQuill, editorHtml } = useReactQuill();

  console.log(editorHtml);
  return (
    <div className="dashboard__addBlog">
      Add blog
      {editorHtml && parse(editorHtml)}
      {reactQuill()}
    </div>
  );
};

export default AddBlog;
