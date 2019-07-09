import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import '../src/sass/main.scss';

//
// ─── REDUX ──────────────────────────────────────────────────────────────────────
//

import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchCourseData } from './redux/actions/fetchData';

import MainRouter from './MainRouter';
import AdminRouter from './components/layout/admin/route/AdminRouter';

// fetch data from api
store.dispatch(fetchCourseData());

function App () {
  return (
    <Provider store={store}>
      <Router>
        <MainRouter />
        <AdminRouter />
      </Router>
    </Provider>
  );
}

export default App;
