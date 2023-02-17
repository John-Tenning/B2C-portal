import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

export const Profile = () => {
  return (
    <div className="">
      <div className="">
        <nav className="bg-green-200 flex justify-center items-center">
          <div className="flex">
            <div className="h-12 px-2 mt-1">
              <img src={logo} className="h-full w-auto" />
            </div>
            <button className="p-4">Home</button>
            <button className="p-4">Services</button>
            <button className="p-4">Explore</button>
          </div>
          <div className="flex-1 w-full"></div>
          <div className="flex">
            <button className="p-4">
              <Link to="/login">Login</Link>
            </button>
            <button className="p-4">
              <Link to="/signup">SignUp</Link>
            </button>
          </div>
        </nav>
      </div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-bold text-gray-900">Profile</p>
        </div>
      </header>
      <div className="flex w-screen overflow-hidden h-screen font-lato font-bold">
        <div className="flex flex-col justify-start items-start w-1/2">
          <div className={`w-full flex flex-col items-start`}>
            <p className="font-lato w-full mt-4 p-6">Email Address</p>
            <p className="font-lato w-full mt-4 p-6">Company Name</p>
            <p className="font-lato w-full mt-4 p-6">Company Description</p>
            <p className="font-lato w-full mt-4 p-6">Company Contact Details</p>
            <p className="font-lato w-full mt-4 p-6">Company Location</p>



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
