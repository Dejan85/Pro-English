import { combineReducers } from 'redux';

//
// ─── COURSE REDUCERS ────────────────────────────────────────────────────────────
//

import course from './course';
import background from './background';

//
// ─── EXAMS ──────────────────────────────────────────────────────────────────────
//

import exams from './exams';

export default combineReducers({
  // course reducers
  data: course,
  background: background,
  // exams
  exams
});
