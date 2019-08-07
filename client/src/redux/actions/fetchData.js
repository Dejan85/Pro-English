import { COURSE__DATA, EXAMS__GRE } from '../type/type';

//
// ─── COURSE DATA ────────────────────────────────────────────────────────────────
//

export const fetchCourseData = () => dispatch => {
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

//
// ─── EXAMS DATA ─────────────────────────────────────────────────────────────────
//

export const fetchGre = () => dispatch => {
  console.log('radi');
  return fetch('/data/gre', {
    method: 'GET',
    aplication: 'json'
  })
    .then(res => {
      res.json().then(res => {
        dispatch({
          type: EXAMS__GRE,
          payload: res
        });
      });
    })
    .catch(err => {
      console.log(err);
    });
};
