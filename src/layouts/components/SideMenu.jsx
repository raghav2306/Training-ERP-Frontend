import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/auth/api/auth";
import { setLogout } from "../../store/slices/authslice";
import { unSetUser } from "../../store/slices/userSlice";

const SideMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await logout();
    dispatch(setLogout());
    dispatch(unSetUser());
    navigate("/login");
  };

  return (
    <div className="w-[15%] h-[100%] bg-blue-500">
      <div>
        <NavLink to="/">Dashboard</NavLink>
      </div>
      <div>
        <NavLink to="/team">Team</NavLink>
      </div>
      <div>
        <button onClick={logoutHandler}>Log Out</button>
      </div>
    </div>
  );
};

export default SideMenu;
