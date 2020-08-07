import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/landing/Landing";

const App = () => (
  <Router>
    <Route>
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Route>
  </Router>
);
export default App;
