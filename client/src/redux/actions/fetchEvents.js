import {
  NEW__EVENT,
  GET__EVENT,
  EDIT__EVENT,
  DELETE__EVENT
} from "../type/type";

//
// ─── ADD EVENT ──────────────────────────────────────────────────────────────────
//

export const addEvent = data => dispatch => {
  return fetch("api adresa", {
    method: "POST",
    aplication: "json"
  })
    .then(res => {
      res.json().then(res => {
        console.log(res);
      });
    })
    .catch(err => {
      console.log(err);
    });
};
