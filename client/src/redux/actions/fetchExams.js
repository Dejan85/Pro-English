import axios from "axios";
import store from "../store";
import { NEW__EXAMS, GET__EXAMS, EDIT__EXAMS } from "../type/type";

// hooks
import useAuthenticate from "../../components/hooks/auth/useAuthenticate";

const { isAuthenticated } = useAuthenticate();

//
// ─── CREATE NEW EXAMS ───────────────────────────────────────────────────────────
//

export const fetchNewExams = exams => dispatch => {
  console.log("radi");
  const data = exams.formData;

  return fetch(`/exams/new/${isAuthenticated().user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: data
  })
    .then(res => {
      dispatch({
        type: NEW__EXAMS,
        payload: res.status
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── GET ALL EXAMS ──────────────────────────────────────────────────────────────
//

export const fetchExams = () => dispatch => {
  return fetch("/exams/get", {
    method: "GET"
  })
    .then(res => {
      res.json().then(res => {
        dispatch({
          type: GET__EXAMS,
          payload: res
        });
      });
    })
    .catch(err => {
      dispatch({
        type: GET__EXAMS,
        payload: err
      });
    });
};

//
// ─── UPDATE BLOG ────────────────────────────────────────────────────────────────
//

export const editExams = (exams, id) => dispatch => {
  store.dispatch({
    type: EDIT__EXAMS,
    payload: undefined
  });
  const data = exams.formData;
  axios
    .put(`/exams/edit/${id}`, data)
    .then(res => {
      console.log(res);
      dispatch({
        type: EDIT__EXAMS,
        payload: res.status
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── DELETE BLOG ────────────────────────────────────────────────────────────────
//

export const deleteExams = (id, e) => dispatch => {
  // e.target.parentNode.parentNode.innerHTML = ""
  return fetch(`/exams/remove/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};
