import React from "react";
import { Link } from "react-router-dom";

const TeamHeader = () => {
  return (
    <div>
      <Link to="./employee">Employee</Link>
      <Link to="./department">Department</Link>
      <Link to="./role">Role</Link>
    </div>
  );
};

export default TeamHeader;
