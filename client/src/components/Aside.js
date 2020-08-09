import React from "react";
import user from "./../images/1.jpg";
const Aside = () => {
  return (
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
  );
};

export default Aside;
