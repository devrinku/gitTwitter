import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};
const PrivateRoute = ({
  component: Component,
  auth: { isLoggedIn, loadingAuth },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === true && loadingAuth === false ? (
          renderMergedProps(Component, props, rest)
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
