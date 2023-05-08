import React, { useState, useRef, useEffect } from "react";
import { RiHomeFill } from "react-icons/ri";
import { Link, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import { categories } from "../utils/data";

const SideBar = ({ user, closeToggle }) => {
  console.log("user", user);
  let isNotActiveStyle =
    "flex items-center px-5 my-3 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
  let isActiveStyle =
    "flex items-center px-5 my-3 gap-3 font-extrabold border-r-4 border-black  text-black transition-all duration-200 ease-in-out capitalize";

  const handleCloseSidebar = () => {
    if (closeToggle) {
      closeToggle(false);
    }
  };
  return (
    <div className="flex  flex-col justify-between  bg-white h-full  min-w-210 overflow-y-scroll">
      <div className="flex flex-col">
        <Link
          to="/"
          onClick={handleCloseSidebar}
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
        >
          <img src={Logo} alt="logo" className="w-28" />
        </Link>
        <div className="flex flex-col gap-5 ">
          <NavLink
            to="/"
            onClick={handleCloseSidebar}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
          >
            <RiHomeFill />
            Home
          </NavLink>
        </div>
        <h3 className="mt-5 px-5 text-base 2xl:text-xl">Discover Categories</h3>

        {categories.slice(0, categories.length - 1).map((category) => (
          <NavLink
            key={category.name}
            onClick={handleCloseSidebar}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            to={`/category/${category.name}`}
          >
            <img
              alt="category"
              src={category.image}
              className="w-8 h-8 rounded-full shadow-sm"
            />
            {category.name}
          </NavLink>
        ))}
      </div>

      {user && (
        <Link
          onClick={handleCloseSidebar}
          to={`user-profile/${user?._id}`}
          className="flex my-5 mb-3 gap-6 p-2 items-center bg-white rounded-lg mx-3"
        >
          <img
            src={user.image}
            alt="user "
            className="w-10 h-10 rounded-full"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default SideBar;
