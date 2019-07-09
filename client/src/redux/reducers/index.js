import { combineReducers } from 'redux';

//
// ─── COURSE REDUCERS ────────────────────────────────────────────────────────────
//

import course from './course';

export default combineReducers({
  // course reducers
  course: course
});
