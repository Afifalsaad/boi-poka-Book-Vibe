import React from "react";
import { Link } from "react-router";

const NavBar = () => {
    const links = <>
        <Link to='/'><li className="m-2">Home</li></Link>
        <Link to='/readList'><li className="m-2">Read List</li></Link>
        <li className="m-2">Listed Books</li>
        <li className="m-2">Pages To Read</li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 ">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#23be0a] text-white p-3 rounded-md mr-1.5 text-[13px]">Sign in</a>
        <a className="btn bg-[#59c6d2] text-white p-3 rounded-md text-[13px]">Sign up</a>
      </div>
    </div>
  );
};

export default NavBar;

