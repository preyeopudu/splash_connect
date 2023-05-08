import React from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          className="p-2 py-3 w-full bg-white outline-none"
          onFocus={() => navigate("/search")}
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img
            alt="user"
            src={user?.image}
            className="w-14 h-12 rounded-full"
          />
        </Link>
        <Link
          to={`create-pin`}
          className="bg-black  w-12 h-12 md:w-14 md:h-12  rounded-lg text-white flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
