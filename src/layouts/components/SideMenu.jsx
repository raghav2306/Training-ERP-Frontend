import React from "react";
import { NavLink } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/auth/api/auth";
import { setLogout } from "../../store/slices/authslice";
import { unSetUser } from "../../store/slices/userslice";

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
    <div className="w-[15%]  h-[99%] bg-white flex flex-col justify-between px-2 py-2">
      <div>
        <div>
          <NavLink
            to="/"
            className="hover:bg-gradient-to-r from-purple-500 to-pink-500 flex items-center   py-2 hover:text-white gap-4 px-2 rounded"
          >
            <RxDashboard />
            Dashboard
          </NavLink>
        </div>
        <div >
          <NavLink
            to="/team"
            className="hover:bg-gradient-to-r hover:text-white from-purple-500 to-pink-500 flex items-center gap-4  py-2  px-2 rounded"
          >
            <RiTeamFill />
            Team
          </NavLink>
        </div>
      </div>
      <div className="hover:bg-gradient-to-r hover:text-white from-purple-500 to-pink-500 flex items-center gap-4  py-2  px-2 rounded">
        <IoLogOutOutline className="text-lg"/>
        <button onClick={logoutHandler}>Log Out</button>
      </div>
    </div>
  );
};

export default SideMenu;
