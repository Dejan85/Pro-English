import React from "react";


//components
import Editor from "../partials/Editor";
import store from "../../../../redux/store";

const AddBlog = () => {

  store.dispatch({
    type: "NEW__BLOG",
    payload: undefined
  })

  return <Editor />;
};

export default AddBlog;
