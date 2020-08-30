import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <span className="mx teal text">
      <span
        style={{
          wordWrap: "break-word",
          lineHeight: "2rem",
        }}>
        <i style={{ fontSize: "1rem" }} className="fas fa-angle-right"></i>
        {skill}
      </span>
    </span>
  );
};

export default SkillItem;
