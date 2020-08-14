import React, { useEffect } from "react";
import { getAllPosts } from "./../../actions/post";
import Moment from "react-moment";
import { connect } from "react-redux";
const Home = ({ getAllPosts, post: { posts } }) => {
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    posts !== null &&
    posts.length > 0 && (
      <div className="mid-container padding-top">
        {posts.map((text) => (
          <div key={text._id} className="post  ">
            <div className="post-info ">
              <div className="post-img">
                <img src={`./../../uploads/${text.user.image}`} alt="" />
              </div>
              <div className="post-name">
                <p className="my fw-500">{text.user.name}</p>

                <p>
                  <Moment format="YYYY/MM/DD">{text.text.date}</Moment>
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
    )
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getAllPosts })(Home);
