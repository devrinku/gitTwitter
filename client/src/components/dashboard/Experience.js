import React from "react";

const Experience = () => {
  return (
    <div className="padding-top mid-container">
      <div className="my teal">
        <span className="pencil fw-500 ">
          <i className="fas fa-users-cog mx"></i>Experience Credentials
        </span>
      </div>
      <table>
        <thead className="fw-500 small ">
          <tr>
            <td>School</td>
            <td>Degree</td>
            <td>Years</td> <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>
              <a href="#!" className="btn orange">
                Delete
              </a>
            </td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>
              <a href="#!" className="btn orange">
                Delete
              </a>
            </td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>
              <a href="#!" className="btn orange">
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Experience;
