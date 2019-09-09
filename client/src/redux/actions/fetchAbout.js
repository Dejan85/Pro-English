import store from "../store";
import { UPDATE__ABOUT, GET__ABOUT } from "../type/type";

//hooks
import useAuthenticate from "../../components/hooks/auth/useAuthenticate";
const { isAuthenticated } = useAuthenticate();

//
// ─── GET ALl ABOUT CONTENT ──────────────────────────────────────────────────────────────
//

export const fetchAbout = () => dispatch => {
  return fetch("/about/get", {
    method: "GET"
  })
    .then(res => {
      res.json().then(res => {
        dispatch({
          type: GET__ABOUT,
          payload: res
        });
      });
    })
    .catch(err => {
      dispatch({
        type: GET__ABOUT,
        payload: err
      });
    });
};

//
// ─── UPDATE ABOUT ────────────────────────────────────────────────────────────────
//

export const updateAbout = (about, id) => dispatch => {
  console.log(about.formData);
  store.dispatch({
    type: UPDATE__ABOUT,
    payload: undefined
  });
  const data = about.formData;
  return fetch(`/about/update/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`
    },
    body: data
  })
    .then(res => {
      dispatch({
        type: UPDATE__ABOUT,
        payload: res.status
      });
    })
    .catch(err => {
      console.log(err);
    });
};
