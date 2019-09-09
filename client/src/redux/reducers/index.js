import { combineReducers } from "redux";

//
// ─── COURSE REDUCERS ────────────────────────────────────────────────────────────
//

import course from "./course";
import blog from "./blog";
import events from "./events";
import about from "./about";

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
  blog,
  //EVENTS
  events,
  //about
  about
});
