import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillPeopleFill, BsHouse, BsHouseFill } from "react-icons/bs";
import { MdOutlineContacts } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className=" flex justify-between  h-16 p-2 bg-base-100 border-b">
      <h1 className=" text-2xl font-bold">
        TechTrends Ltd <span>⚙️</span>
      </h1>
      <div className=" flex space-x-4">
        <NavLink to={"/"} className={" btn btn-ghost btn-sm"}>
          <BsHouseFill /> Home
        </NavLink>
        <NavLink to={"/"} className={" btn btn-ghost btn-sm"}>
          <BsFillPeopleFill  /> Home
        </NavLink>
        <NavLink to={"/"} className={" btn btn-ghost btn-sm"}>
          <MdOutlineContacts /> Home
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
