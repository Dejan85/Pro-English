import React from "react";


//components
import Editor from "../partials/Editor";
import store from "../../../../redux/store";

const AddBlog = () => {
  //reset NEW__BLOG status 200
  store.dispatch({
    type: "NEW__BLOG",
    payload: undefined
  })

  return <Editor name="addBlog" />;
};

export default AddBlog;
