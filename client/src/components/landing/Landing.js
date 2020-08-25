import React from "react";
import Login from "./Login";
import Register from "./Register";
import Heading from "./Heading";
import NotFound from "./../NotFound";
import { connect } from "react-redux";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

const Landing = ({ auth: { isLoggedIn, loadingAuth } }) => {
  const location = useLocation();
  if (isLoggedIn === true && loadingAuth === false) {
    return <Redirect to="/dashboard/profile" />;
  }
  return (
    <header
      style={
        window.innerWidth < 768
          ? location.pathname === "/register"
            ? { height: "130vh" }
            : { height: "110vh" }
          : {}
      }>
      <div className="overlay"></div>
      <div className="content ">
        <Switch>
          <Route exact path="/" component={Heading} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Landing);
