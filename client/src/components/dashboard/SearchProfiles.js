import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchProfiles } from "./../../actions/profile";
import { unsetProgress } from "./../../actions/profile";

import { connect } from "react-redux";
import Preloader from "./../Preloader";
import spinner from "./../../images/25C.gif";

const SearchProfiles = ({ profile: { search, progress }, searchProfiles }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    return () => {
      unsetProgress();
    };
    //eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
    if (text !== "") {
      searchProfiles(text);
    }
  };
  return (
    <div className="padding-top mid-container">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users mx"></i>
          Search
        </span>
        <p className="px">
          <input
            id="searching"
            value={text}
            onChange={(e) => onChange(e)}
            style={{
              border: "1px solid black",
              color: "black",
            }}
            type="text"
            placeholder="Enter a name"
            className="search"
          />
        </p>
        {progress && (
          <div>
            <div className="my-1 text-center">
              <Preloader spinner={spinner} />
            </div>
          </div>
        )}
      </div>
      {search.length > 0 && (
        <ul>
          {search.map((elem) => (
            <Link
              to={`/dashboard/profile/${elem._id}`}
              key={elem._id}
              style={{ display: "block" }}>
              <li className="follower border-div ">
                <div>
                  <img src={`/./../../uploads/${elem.user.image}`} alt="" />
                </div>
                <div className="info">
                  <p>{elem.user.name}</p>
                  <p>{elem.status}</p>
                  <p>{elem.hometown}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
const mapStateToprops = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToprops, {
  searchProfiles,
  unsetProgress,
})(SearchProfiles);
