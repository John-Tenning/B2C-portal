import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

export const Profile = () => {
  return (
    <div className="">
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-xl font-bold text-gray-900">Profile</p>
        </div>
      </header>
      <div className="flex w-screen overflow-hidden h-screen font-lato font-bold">
        <div className="flex flex-col justify-center items-center w-[70%] mt-4">
          <div className="flex-col justify-center items-center">
            <div className="flex w-full">
              <div className="">
                <p className="font-lato">Email address</p>
              </div>
              <div className="">
                <input
                  type="text"
                  className="appearance-none outline-none border-b w-full border-b-fog py-4"
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="">
                <p className="font-lato">Name</p>
              </div>
              <div className="">
                <input
                  type="text"
                  className="appearance-none outline-none border-b w-full border-b-fog py-4"
                />
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <div className="flex">
              <div className="">
                <p className="font-lato">Phone number</p>
              </div>
              <div className="">
                <input
                  type="text"
                  className="appearance-none outline-none border-b w-full border-b-fog py-4"
                />
              </div>
            </div>
            <div className="flex">
              <div className="">
                <p className="font-lato">Password</p>
              </div>
              <div className="">
                <input
                  type="text"
                  className="appearance-none outline-none border-b w-full border-b-fog py-4"
                />
              </div>
            </div>
          </div>
          <div className="w-[30%]"></div>
        </div>
        <div className="w-[30%]"></div>
        <ContactUs />
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
