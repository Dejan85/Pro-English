import { combineReducers } from "redux";

//
// ─── COURSE REDUCERS ────────────────────────────────────────────────────────────
//

import course from "./course";
import blog from "./blog";

//
// ─── EXAMS ──────────────────────────────────────────────────────────────────────
//

import exams from "./exams";

export default combineReducers({
  // course reducers
  data: course,
  // exams
  exams,
  //BLOG
  blog
});
