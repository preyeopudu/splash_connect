import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { SideBar, UserProfile } from "../../component";
import { client } from "../../utils/client";
import { Pins } from "../Pins";
import Logo from "../../assets/images/logo2.png";
import { userQuery } from "../../utils/data";
import fetchUser from "../../utils/fetchUser";

const Home = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const scrollRef = useRef(null);
  const userInfo = fetchUser();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    const query = userQuery(userInfo?.id);
    client.fetch(query).then((data) => {
      setUser(data[0]);
      console.log("array info", data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height  duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <SideBar user={user && user} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className=" p-2 w-full flex flex-row justify-between items-center shadow-md ">
          <HiMenu fontSize={28} onClick={() => setToggleSideBar(true)} />
          <Link to="/">
            <img src={Logo} alt="logo" className="w-28" />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img
              src={user?.image}
              alt={`user profile`}
              className=" shadow-lg w-15 h-12 rounded-full "
            />
          </Link>
        </div>
      </div>
      <div
        className={`fixed w-4/5 h-full z-50 bg-white transition-transform duration-300   ${
          toggleSideBar ? " translate-x-0" : " -translate-x-full"
        }`}
      >
        <div className="absolute w-full flex justify-end items-center p-2 mt-8">
          <AiFillCloseCircle
            fontSize={30}
            className="cursor-pointer"
            onClick={() => setToggleSideBar(false)}
          />
        </div>
        <SideBar user={user && user} closeToggle={setToggleSideBar} />
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
