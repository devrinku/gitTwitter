import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getGithubRepos } from "./../../actions/profile";
import { clearRepos } from "./../../actions/profile";
import Preloader from "./../Preloader";

import spinner from "./../../images/25C.gif";

const Github = ({
  myprofile,
  profile: { repos },
  loggedUser,
  clearRepos,
  getGithubRepos,
}) => {
  useEffect(() => {
    getGithubRepos(myprofile.githubusername);

    return () => {
      clearRepos();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className={
        "mid-container " + (loggedUser === true ? "padding-top" : " ")
      }>
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fab fa-github mx"></i>Github Repos
        </span>
      </div>
      {repos === null ? (
        <div className="container  ">
          <div className="my-1 text-center">
            <Preloader spinner={spinner} />
          </div>
        </div>
      ) : repos.length === 0 ? (
        <p className="fw-500 px">
          No github repository associated with this account
        </p>
      ) : (
        repos.map((repo) => (
          <Fragment key={repo.id}>
            <div className="github-content p">
              <div className="repo p">
                <p className="fw-500  ">
                  <a
                    href={repo.html_url}
                    style={{ color: "#1b6ca8" }}
                    traget="_blank">
                    {repo.name}
                  </a>
                </p>
                <p className="fw-500 my ">{repo.description}</p>
              </div>
              <div className="git-strazers p">
                <div className="badge bg-teal darken-4">
                  Stars : {repo.stargazers_count}
                </div>
                <div className="badge tomato">
                  Watchers : {repo.watchers_count}
                </div>
                <div className="badge orange darken-4">
                  Forks : {repo.forks_count}
                </div>
              </div>
            </div>
          </Fragment>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getGithubRepos,
  clearRepos,
})(Github);
