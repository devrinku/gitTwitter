import React from "react";
import user from "./../../images/1.jpg";
const Posts = () => {
  return (
    <div className="mid-container padding-top">
      <div className="post">
        <div className="post-info">
          <div className="post-img">
            <img src={user} alt="" />
          </div>
          <div className="post-name">
            <p className="my fw-500">Rajesh Kumar</p>

            <p>Posted on 1/3/2014</p>
          </div>
        </div>
        <div className="post-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          numquam optio velit, culpa porro eligendi odit officia placeat tenetur
          labore perferendis debitis nihil molestiae modi molestias impedit
          reiciendis beatae vel doloremque atque illum id. Cupiditate sit,
          eveniet similique quia corrupti earum ullam ducimus! Beatae
          perferendis obcaecati error harum ab accusantium?
        </div>
        <div className="reaxn">
          <p>
            <a href="#!">
              <i className="fas fa-thumbs-up mx"></i>4
            </a>
          </p>
          <p>
            <a href="#!">
              <i className="fas fa-comment-alt mx"></i>5
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
