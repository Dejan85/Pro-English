import { NEW__BLOG, GET__BLOG } from "../type/type";

// hooks
import useAuthenticate from "../../components/hooks/auth/useAuthenticate";

export const fetchNewBlog = blog => dispatch => {
  const data = blog.formData;
  const { isAuthenticated } = useAuthenticate();
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
      console.log(res);
      dispatch({
        type: NEW__BLOG,
        payload: res
      });
    })
    .catch(err => {
      console.log(err);
    });
};

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
