import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "../src/sass/main.scss";

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

import MainRouter from "./MainRouter";
import AdminRouter from "./components/layout/admin/route/AdminRouter";

function App() {
  return (
    <Router>
      <MainRouter />
      <AdminRouter />
    </Router>
  );
}

export default App;
