import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getGithubRepos } from "./../../actions/profile";

const Github = ({ myprofile, profile: { repos }, getGithubRepos }) => {
  useEffect(() => {
    getGithubRepos(myprofile.githubusername);
    //eslint-disable-next-line
  }, []);
  return (
    <div className="mid-container padding-top  ">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fab fa-github mx"></i>Github Repos
        </span>
      </div>
      {repos !== null &&
        repos.length > 0 &&
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
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getGithubRepos })(Github);
