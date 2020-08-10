import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import Forms from "./components/Forms/Forms";
import store from "./store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={Forms} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  </Provider>
);
export default App;
