import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { showDashboardPage } from "./../actions/utils";
import { hideDashboardPage } from "./../actions/utils";
import { connect } from "react-redux";

const NotFound = ({
  utils,
  fromDashboard,
  showDashboardPage,
  hideDashboardPage,
}) => {
  useEffect(() => {
    hideDashboardPage();
    return () => {
      showDashboardPage();
    };
    //eslint-disable-next-line
  }, []);
  return (
    <div style={fromDashboard ? { marginTop: "10rem" } : {}}>
      <div className="container">
        <p
          style={fromDashboard ? { color: "teal" } : {}}
          className="large fw-500">
          404 <br /> OH! You're lost.{" "}
        </p>

        <p style={{ lineHeight: "2rem" }} className="small">
          The page you are looking for does not exist.How you got here is a
          mystery.But you can click the button below to go back to homepage.
        </p>
        <p>
          <Link to="/" className="btn my">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  utils: state.utils,
});

export default connect(mapStateToProps, {
  showDashboardPage,
  hideDashboardPage,
})(NotFound);
