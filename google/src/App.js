import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home (main page)*/}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
