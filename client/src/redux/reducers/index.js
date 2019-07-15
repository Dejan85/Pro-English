import { combineReducers } from "redux";

//
// ─── COURSE REDUCERS ────────────────────────────────────────────────────────────
//

import course from "./course";
import background from "./background";

export default combineReducers({
  // course reducers
  data: course,
  background: background,
});
