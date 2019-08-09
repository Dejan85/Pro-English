import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//
// ─── REDUX ──────────────────────────────────────────────────────────────────────
//

import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchCourseData, fetchGre } from './redux/actions/fetchData';

import MainRouter from './MainRouter';

//
// ─── FETCH DATA FROM API ────────────────────────────────────────────────────────
//

// course
store.dispatch(fetchCourseData());

// exams
store.dispatch(fetchGre('/data/gre', 'gre'));
store.dispatch(fetchGre('/data/ielts', 'ielts'));
store.dispatch(fetchGre('/data/gmat', 'gmat'));
store.dispatch(fetchGre('/data/bocconi', 'bocconi'));

function App () {
  return (
    <Provider store={store}>
      <Router>
        <MainRouter />
      </Router>
    </Provider>
  );
}

export default App;
