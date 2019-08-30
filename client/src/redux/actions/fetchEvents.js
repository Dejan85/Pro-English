import {
  NEW__EVENT,
  GET__EVENT,
  UPDATE__EVENT,
  DELETE__EVENT
} from "../type/type";
import axios from "axios";

//
// ─── ADD EVENT ──────────────────────────────────────────────────────────────────
//

export const addEvent = data => dispatch => {
  dispatch({
    type: NEW__EVENT,
    payload: undefined
  });
  return axios
    .post("/events/new", data)
    .then(res => {
      console.log(res.status);
      dispatch({
        type: NEW__EVENT,
        payload: res.status
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── GET ALL EVENTS ─────────────────────────────────────────────────────────────
//

export const getAllEvents = () => dispatch => {
  dispatch({
    type: GET__EVENT,
    payload: undefined
  });
  return axios
    .get("/events/get")
    .then(res => {
      dispatch({
        type: GET__EVENT,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── UPDATE EVENT ───────────────────────────────────────────────────────────────
//

export const updateEvent = (data, id) => dispatch => {
  dispatch({
    type: UPDATE__EVENT,
    payload: undefined
  });
  return axios
    .put(`/events/update/${id}`, data)
    .then(res => {
      dispatch({
        type: UPDATE__EVENT,
        payload: res.status
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── DELETE EVENT ───────────────────────────────────────────────────────────────
//

export const deleteEvent = id => dispatch => {
  dispatch({
    type: DELETE__EVENT,
    payload: undefined
  });
  return axios
    .delete(`/events/remove/${id}`)
    .then(res => {
      dispatch({
        type: DELETE__EVENT,
        payload: res.status
      });
    })
    .catch(err => {
      console.log(err);
    });
};
