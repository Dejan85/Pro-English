import { combineReducers } from 'redux';

//
// ─── COURSE REDUCERS ────────────────────────────────────────────────────────────
//

import course from './course';

//
// ─── EXAMS ──────────────────────────────────────────────────────────────────────
//

import exams from './exams';

export default combineReducers({
  // course reducers
  data: course,
  // exams
  exams
});
