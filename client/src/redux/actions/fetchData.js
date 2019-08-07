import {
  COURSE__DATA,
  EXAMS__GRE,
  EXAMS__IELTS,
  EXAMS__GMAT,
  EXAMS__BOCCONI
} from '../type/type';

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

export const fetchGre = (url, exams) => dispatch => {
  return fetch(url, {
    method: 'GET',
    aplication: 'json'
  })
    .then(res => {
      res.json().then(res => {
        if (exams === 'gre') {
          dispatch({
            type: EXAMS__GRE,
            payload: res
          });
        } else if (exams === 'ielts') {
          dispatch({
            type: EXAMS__IELTS,
            payload: res
          });
        } else if (exams === 'gmat') {
          dispatch({
            type: EXAMS__GMAT,
            payload: res
          });
        } else if (exams === 'bocconi') {
          dispatch({
            type: EXAMS__BOCCONI,
            payload: res
          });
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
};
