import React from "react";
import user from "./../images/1.jpg";
import { connect } from "react-redux";
const Aside = ({ profile: { loggedProfile } }) => {
  return (
    loggedProfile !== null && (
      <div className="aside padding-top">
        <p style={{ margin: "0 0 1rem 1rem" }}>Friend Suggestion</p>
        <ul>
          <li className="list">
            <div>
              <img src={user} alt="friend-suggestion" />
            </div>
            <div className="my">
              <p>Rajesh</p>
              <p>Senior Developer</p>
            </div>
          </li>

          <li className="list">
            <div>
              <img src={user} alt="friend-suggestion" />
            </div>
            <div className="my">
              <p>Rajesh</p>
              <p>Senior Developer</p>
            </div>
          </li>
          <li className="list">
            <div>
              <img src={user} alt="friend-suggestion" />
            </div>
            <div className="my">
              <p>Rajesh</p>
              <p>Senior Developer</p>
            </div>
          </li>
          <li className="list">
            <div>
              <img src={user} alt="friend-suggestion" />
            </div>
            <div className="my">
              <p>Rajesh</p>
              <p>Senior Developer</p>
            </div>
          </li>
          <li className="list">
            <div>
              <img src={user} alt="friend-suggestion" />
            </div>
            <div className="my">
              <p>Rajesh</p>
              <p>Senior Developer</p>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};
const mapStatetoProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStatetoProps)(Aside);
