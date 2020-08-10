import React from "react";

const Github = () => {
  return (
    <div className="mid-container padding-top  ">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fab fa-github mx"></i>Github Repos
        </span>
      </div>
      <div className="github-content p">
        <div className="repo p">
          <span className="fw-500  ">Repo One : </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem eligendi porro quibusdam magni animi incidunt
            laboriosam illo nemo asperiores quam, non illum expedita fugit
            dolor.
          </span>
        </div>
        <div className="git-strazers p">
          <div className="badge bg-teal darken-4">Stars : 4s4</div>
          <div className="badge tomato">Watchers : w21</div>
          <div className="badge orange darken-4">Forks : s25</div>
        </div>
      </div>
    </div>
  );
};

export default Github;
