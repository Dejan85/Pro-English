import { NEW__BLOG, GET__BLOG, EDIT__BLOG } from "../type/type";
import axios from 'axios';

// hooks
import useAuthenticate from "../../components/hooks/auth/useAuthenticate";

const { isAuthenticated } = useAuthenticate();


// create new blog
export const fetchNewBlog = blog => dispatch => {


  const data = blog.formData;
  return fetch(`/blog/new/${isAuthenticated().user._id}`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json"
      // "Content-Type": "multipart/form-data",
      Accept: "application/json"
    },
    body: data
  })
    .then(res => {
      dispatch({
        type: NEW__BLOG,
        payload: res.status
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//get all blogs
export const fetchBlog = () => dispatch => {
  return fetch(`/blog/get/`, {
    method: "GET"
  })
    .then(res => {
      res.json().then(res => {
        dispatch({
          type: GET__BLOG,
          payload: res
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Update blog
export const editBlog = (blog, id) => dispatch => {
  console.log(id);
  const data = blog.formData;
  axios
    .put(`/blog/edit/${id}`, data)
    .then(res => {
      console.log(res);
      res.json().then(res => {
        dispatch({
          type: EDIT__BLOG,
          payload: res
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Delete blog
export const deleteBlog = (id, e) => dispatch => {
  // e.target.parentNode.parentNode.innerHTML = ""
  return fetch(`/blog/remove/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};

