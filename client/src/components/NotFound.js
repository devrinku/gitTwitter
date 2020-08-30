import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { showDashboardPage } from "./../actions/utils";
import { hideDashboardPage } from "./../actions/utils";
import { connect } from "react-redux";

const NotFound = ({
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
    <div className={fromDashboard ? "not-found" : ""}>
      <div className="container">
        <p
          style={fromDashboard ? { color: "teal" } : {}}
          className="large fw-500">
          404 <br /> OH! You're lost.{" "}
        </p>

        <p style={{ lineHeight: "2rem" }} className="small">
          The page you are looking for does not exist.How you got here is a
          mystery.But you can click the button below to go back.
        </p>
        <p>
          <Link to="/" className="btn my">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default connect(null, {
  showDashboardPage,
  hideDashboardPage,
})(NotFound);
