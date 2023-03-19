import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

import axios from "axios";


export const Profile = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyContact, setCompanyContact] = useState("");
  const [email, setEmail] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyImages, setCompanyImages] = useState([])
  const username = localStorage.getItem("username");
  const fetchData = async () => {
    const response = axios.get("http://localhost:3002/api/services" + username)
    console.log(response);
    setCompanyName(response.data.name);
    setCompanyDescription(response.data.description);
    setCompanyContact(response.data.phone);
    setEmail(response.data.email);
    setCompanyLocation(response.data.address);
    setCompanyImages(response.data.images);
  }
  
    useEffect(() => {
      fetchData();  
    }, []);
  return (
    
    <div className="">
      <Navbar 
        isCorporate="true"
      />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 fles">
          <p className="text-2xl font-bold text-black  px-2 py-0">Profile</p>
        </div>
      </header>
      <div className="flex w-screen overflow-hidden justify-center  mb-20 px-20">
        <div className="flex flex-col justify-center items-center w-[50%] ">
          <div class="flex  justify-center   mt-10 h-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200  w-[70%]">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
                Company Name
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {companyName}
              </span>
            </div>
          </div>
          <div class="flex  justify-center  mt-6 h-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200 w-[70%]">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
                Email
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {email}
              </span>
            </div>
          </div>
          <div class="flex  justify-center  mt-6 h-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200  w-[70%]">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
                Contact
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {companyContact}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-[50%] ">
          <div class="flex  justify-center   mt-10 h-[61%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200 w-[70%] ">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
                Company Description
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {companyDescription}
              </span>
            </div>
          </div>
          <div class="flex  justify-center  mt-6 h-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200  w-[70%]">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-l font-medium text-gray-900 dark:text-white">
                Location
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {companyLocation}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-[45%] ">
        <div class="flex  justify-center  mt-10 h-full w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200  w-full">
            <div class="flex flex-col items-center mt-8 ">
              <h5 class="mb-10 text-l font-medium text-gray-900 dark:text-white">
                Images
              </h5>
              <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={companyImages} alt="Dummy image"/>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Profile;
