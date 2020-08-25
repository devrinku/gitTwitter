import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import Forms from "./components/Forms/Forms";
import About from "./components/About";
import ResetPasswordform from "./components/Forms/ResetPasswordform";
import PassworResetMesg from "./components/PassworResetMesg";
import store from "./store";
import { Provider } from "react-redux";
import { toast } from "react-toastify";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

import "react-toastify/dist/ReactToastify.css";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  toast.configure();
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/create" component={Forms} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resetpassword" component={PassworResetMesg} />
          <Route
            exact
            path="/resetpassword/:salt"
            component={ResetPasswordform}
          />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
