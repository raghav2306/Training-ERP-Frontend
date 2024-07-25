import React from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="w-[15%] h-[100%] bg-blue-500">
      <div>
        <NavLink to="/">Dashboard</NavLink>
      </div>
      <div>
        <NavLink to="/team">Team</NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
