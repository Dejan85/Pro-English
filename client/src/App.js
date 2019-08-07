import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//
// ─── REDUX ──────────────────────────────────────────────────────────────────────
//

import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchCourseData, fetchGre } from './redux/actions/fetchData';
import { getBackground } from './redux/actions/background';

import MainRouter from './MainRouter';
// import AdminRouter from "./components/layout/admin/route/AdminRouter";

// fetch data from api
store.dispatch(fetchCourseData());
store.dispatch(getBackground());
store.dispatch(fetchGre());

function App () {
  return (
    <Provider store={store}>
      <Router>
        <MainRouter />
        {/* <AdminRouter /> */}
      </Router>
    </Provider>
  );
}

export default App;
