import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//
// ─── REDUX ──────────────────────────────────────────────────────────────────────
//

import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchCourseData, fetchGre } from "./redux/actions/fetchData";
import { fetchBlog } from "./redux/actions/fetchBlog";
import { fetchExams } from "./redux/actions/fetchExams";
import { getAllEvents } from "./redux/actions/fetchEvents";

import MainRouter from "./MainRouter";

//
// ─── FETCH DATA FROM API ────────────────────────────────────────────────────────
//

function App() {
  useEffect(() => {
    store.dispatch(fetchCourseData());
    store.dispatch(fetchGre("/data/gre", "gre"));
    store.dispatch(fetchGre("/data/ielts", "ielts"));
    store.dispatch(fetchGre("/data/gmat", "gmat"));
    store.dispatch(fetchGre("/data/bocconi", "bocconi"));
    store.dispatch(fetchBlog());
    store.dispatch(fetchExams());
    store.dispatch(getAllEvents());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <MainRouter />
      </Router>
    </Provider>
  );
}

export default App;
