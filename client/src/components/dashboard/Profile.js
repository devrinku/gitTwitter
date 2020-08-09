import React from "react";
import user from "./../../images/1.jpg";

const Profile = () => {
  return (
    <div className="mid-container bg-teal padding-top">
      <div className="profile">
        <div className="image my-2">
          <img src={user} alt="" />
        </div>
        <div className="pro-content">
          <p>
            <i className="fas fa-user-tie"></i> John Doe
          </p>
          <p>
            <i className="fas fa-laptop"></i>Senior Developer
          </p>
          <p>
            <i className="fas fa-briefcase"></i>Web Devloper at Microsoft
          </p>
          <p>
            <i className="fas fa-graduation-cap"></i>Masters from MIT
          </p>
          <p>
            <i className="fas fa-home"></i>From Dehradoon
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>Lives in , Yamunanagar
          </p>
          <p>
            <i className="fas fa-blog"></i>Personal Website
          </p>
          <p>
            <i className="fas fa-link"></i>Web Developer at Microsoft
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
