import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
const Posts = ({ myprofile, auth: { user } }) => {
  return (
    <div className="mid-container padding-top">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-blog mx"></i>Posts
        </span>
      </div>
      {myprofile.post.length > 0 &&
        myprofile.post.map((text) => (
          <div key={text._id} className="post  ">
            <div className="post-info ">
              <div className="post-img">
                <img src={`./../../uploads/${user.image}`} alt="" />
              </div>
              <div className="post-name">
                <p className="my fw-500">{user.name}</p>

                <p>
                  <Moment format="YYYY/MM/DD">{text.date}</Moment>
                </p>
              </div>
            </div>
            <div className="post-content">{text.text}</div>
            <div className="reaxn">
              <p>
                <a href="#!">
                  <i className="fas fa-thumbs-up mx"></i>
                  {text.likes.length}
                </a>
              </p>
              <p>
                <a href="#!">
                  <i className="fas fa-comment-alt mx"></i>
                  {text.comments.length}
                </a>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Posts);
