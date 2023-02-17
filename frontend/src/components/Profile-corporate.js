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
        <div className="flex flex-col justify-start items-start w-1/2">
          <div className="p-6">
            <p>Email Address</p>
          </div>
          <div className="p-6">
            <p>Company Name</p>
          </div>
          <div className="p-6">
            <p>Company Description</p>
          </div>
          <div className="p-6">
            <p>Contact Details</p>
          </div>
          <div className="p-6">
            <p>Company Location</p>
          </div>

            



          
        </div>
      </div>
    
      
      <ContactUs />
    </div>
  );
};

export default Profile;
