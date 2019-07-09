import { COURSE__DATA } from '../type/type';

//
// ─── COURSE DATA ────────────────────────────────────────────────────────────────
//

export const fetchCourseData = () => dispatch => {
  console.log('radi');
  return fetch('/data', {
    method: 'GET',
    aplication: 'json'
  })
    .then(res => {
      res.json().then(res => {
        dispatch({
          type: COURSE__DATA,
          payload: res
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};
