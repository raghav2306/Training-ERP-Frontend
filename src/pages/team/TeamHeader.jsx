import React from "react";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBuildingsFill } from "react-icons/bs";
import { FaBuildingUser } from "react-icons/fa6";

const TeamHeader = () => {
  return (
    <div className="flex  w-[100%]  bg-white items-start p-2 h-20  gap-4">
      <Link
        to="./employee"
        className="px-2 py-2 text-black rounded relative flex items-center gap-2   bg-gradient-to-r from-purple-500 to-pink-500
        
        before:content-[''] before:absolute before:inset-[1px] before:bg-white before:rounded-sm hover:before:opacity-90
        
        "
      >
        <BsFillPeopleFill className="relative " />
        <span className="relative "> Employee</span>
      </Link>
      <Link
        to="./department"
        className="px-2 py-2 text-black rounded relative flex items-center gap-2   bg-gradient-to-r from-purple-500 to-pink-500 before:content-[''] before:absolute before:inset-[1px] before:bg-white before:rounded-sm  hover:before:opacity-90 "
      >
        <BsBuildingsFill className="relative" />
        <span className="relative">Department</span>
      </Link>
      <Link
        to="./role"
        className="px-2 py-2 text-black rounded relative flex items-center gap-2   bg-gradient-to-r from-purple-500 to-pink-500 before:content-[''] before:absolute before:inset-[1px] before:bg-white before:rounded-sm  hover:before:opacity-90"
      >
        <FaBuildingUser className="relative" />
        <span className="relative">Role</span>
      </Link>
    </div>
  );
};

export default TeamHeader;
