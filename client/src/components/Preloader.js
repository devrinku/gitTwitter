import React from "react";

const Preloader = ({ spinner }) => {
  return (
    <div>
      <img src={spinner} style={{ width: "60px" }} alt="loading" />
    </div>
  );
};

export default Preloader;
