import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Preloader from "./Preloader";
import spinner from "./../images/25C.gif";
import { getUserSuggestion } from "./../actions/profile";

const Aside = ({ profile: { loggedProfile, profiles }, getUserSuggestion }) => {
  useEffect(() => {
    if (loggedProfile) {
      getUserSuggestion(loggedProfile._id);
    }
    //eslint-disable-next-line
  }, [loggedProfile]);
  return (
    loggedProfile !== null &&
    (profiles === null ? (
      <div className="aside padding-top  text-center">
        <div className="my-3">
          <Preloader spinner={spinner} />
        </div>
      </div>
    ) : (
      <div className="aside padding-top">
        <p style={{ margin: "0 0 1rem 1rem" }}>Friend Suggestion</p>
        <ul className="aside-list">
          {profiles.map((profile) => (
            <Link
              style={{ display: "block" }}
              key={profile._id}
              to={`/dashboard/profile/${profile._id}`}>
              <li className="list">
                <div>
                  <img
                    src={`/./../uploads/${profile.user.image}`}
                    alt="friend-suggestion"
                  />
                </div>
                <div className="my px">
                  <p className="fw-500">
                    {profile.user.name.charAt(0).toUpperCase() +
                      profile.user.name.slice(1)}
                  </p>
                  <p>{profile.status}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    ))
  );
};
const mapStatetoProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStatetoProps, { getUserSuggestion })(Aside);
