import { NEW__BLOG, GET__BLOG, EDIT__BLOG } from "../type/type";
// import axios from "axios";
import store from "../store";

// hooks
import useAuthenticate from "../../components/hooks/auth/useAuthenticate";

const { isAuthenticated } = useAuthenticate();

// create new blog
export const fetchNewBlog = blog => dispatch => {
  const data = blog.formData;
  return fetch(`/blog/new/${isAuthenticated().user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`
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
  store.dispatch({
    type: EDIT__BLOG,
    payload: undefined
  });
  const data = blog.formData;
  // axios
  //   .put(`/blog/edit/${id}`, data)
  //   .then(res => {
  //     dispatch({
  //       type: EDIT__BLOG,
  //       payload: res.status
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  return fetch(`/blog/edit/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`
    },
    body: data
  })
    .then(res => {
      console.log(res.status);
      dispatch({
        type: EDIT__BLOG,
        payload: res.status
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// Delete blog
export const deleteBlog = (id, e) => dispatch => {
  return fetch(`/blog/remove/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`
    }
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};
