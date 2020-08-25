import React, { Fragment } from "react";
import SkillItem from "./SkillItem";
import { v4 as uuidv4 } from "uuid";

const Skills = ({ skills, bio }) => {
  skills = skills.split(",");

  return (
    <Fragment>
      <p className={`small fw-600 teal text-center ` + (bio ? " " : "my-1")}>
        Skill Set
      </p>{" "}
      {skills.map((skill) => (
        <SkillItem key={uuidv4()} skill={skill} />
      ))}
    </Fragment>
  );
};

export default Skills;
