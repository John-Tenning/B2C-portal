import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import HomePage from "./HomePage";

export const Profile = () => {
    return (
<div class="h-screen flex flex-col">  
    <nav className="bg-grey flex justify-center items-center p-2">
        <div className="flex">
          <div className="h-12 px-2 mt-1">
            <img src={logo} className = "h-full w-auto"/>
          </div>
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
            <Link to="/">Home</Link>
          </button>
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">Services</button>
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">Explore</button>
        </div>
        <div className="flex-1 w-full"></div>
        <div className="flex">
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
            <Link to="/login">Login</Link>
          </button>
          <button className="px-4 hover:bg-slate-400 hover:rounded-lg hover:py-2">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
    </nav>

    <div class="flex justify-center py-16 flex-1">
        <div class="flex items-center    bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200 p-8">
            <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={logo} alt="Dummy image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Customer</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">20z259@psgtech.ac.in</span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <a href="./Home" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit Homepage</a>
                    <a href="" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Change Password</a>
                </div>
            </div>
        </div>
    </div>

<div className="">
        <footer className=" flex flex-col justify-center items-center font-poppins bg-black p-6">
          <p className="text-white mb-6">Site developed By</p>
          <div className="flex flex-col items-center justify-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12">
            <DeveloperItem
              name="Deepak S G "
              github_id="deepaksg0210"
              mail_id="20z213@psgtech.ac.in"
            />
            <DeveloperItem
              name="Krithik R"
              github_id="krithik2208"
              mail_id="20z229@psgtech.ac.in"
            />
            <DeveloperItem
              name="R A Sashti Amar"
              github_id="John-Tenning"
              mail_id="20z247@psgtech.ac.in"
            />
            <DeveloperItem
              name="Viraj Agarwal"
              github_id="Viraj-Agarwal"
              mail_id="20z259@psgtech.ac.in "
            />
          </div>
        </footer>
      </div>
</div>  


    );
};

export const DeveloperItem = ({ name, github_id, mail_id }) => {
    return (
      <div className="font-ubuntu flex flex-col space-y-1 text-white text-center items-center">
        <p className="font-bold">{name}</p>
        <button className="flex space-x-2 items-center group text-xs">
          <AiFillGithub />
          <p className="border-b border-black group-hover:border-white border-dashed">
            {github_id}
          </p>
        </button>
        <button className="flex space-x-2 items-center group text-xs">
          <AiOutlineMail />
          <p className="border-b border-black group-hover:border-white border-dashed">
            {mail_id}
          </p>
        </button>
      </div>
    );
  };
  
  export default Profile;