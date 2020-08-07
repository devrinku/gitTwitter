import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <Route>
      <Navbar />
    </Route>
  </Router>
);
export default App;
