import {
  NEW__EVENT,
  GET__EVENT,
  EDIT__EVENT,
  DELETE__EVENT
} from "../type/type";
import axios from "axios";

//
// ─── ADD EVENT ──────────────────────────────────────────────────────────────────
//

export const addEvent = data => dispatch => {
  return axios
    .post("/events/new", data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

//
// ─── GET ALL EVENTS ─────────────────────────────────────────────────────────────
//

export const getAllEvents = () => dispatch => {
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
