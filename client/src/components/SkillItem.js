import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <span className="  mx teal">
      <span style={{ wordWrap: "break-word", fontSize: "1.3rem" }}>
        <i style={{ fontSize: "1.3rem" }} className="fas fa-angle-right"></i>
        {skill}
      </span>
    </span>
  );
};

export default SkillItem;
