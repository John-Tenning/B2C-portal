import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import TextInput from "./Input";

import axios from "axios";

export const Profile = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyContact, setCompanyContact] = useState("");
  const [email, setEmail] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [images, setImages] = useState([]);

  const [companyImages, setCompanyImages] = useState([]);
  const username = localStorage.getItem("user");

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/services/name/${username}`)
      .then((res) => {
        console.log(res.data);
        const company = res.data[0];
        setCompanyName(company.name);
        setCompanyDescription(company.description);
        setCompanyContact(company.phone);
        setEmail(company.email);
        setCompanyLocation(company.address);
        setImages(company.images);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <Navbar isCorporate="true" />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 fles">
          <p className="text-2xl font-bold text-black  px-2 py-0">Profile</p>
        </div>
      </header>
      <div className="lg:flex-row flex flex-col w-screen overflow-hidden justify-center  mb-20 px-8 lg:px-20">
        <div className="flex flex-col justify-center items-center w-full lg:w-[50%] ">
          <div class="flex  justify-center   mt-10 h-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200 w-full lg:w-[70%]">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                Company Name
              </h5>
<<<<<<< HEAD
              <span class="text-sm text-gray-500 dark:text-gray-400">
=======
              <span class="text-l text-gray-500 dark:text-gray-400">
>>>>>>> 5ae8ee84cda22ecdb7ff1c53b25893f72b1df0e8
                {companyName}
              </span>
            </div>
          </div>
          <div class="flex  justify-center  mt-6 h-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200 w-full lg:w-[70%]">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                Email
              </h5>
<<<<<<< HEAD
              <span class="text-sm text-gray-500 dark:text-gray-400">
=======
              <span class="text-l text-gray-500 dark:text-gray-400">
>>>>>>> 5ae8ee84cda22ecdb7ff1c53b25893f72b1df0e8
                {email}
              </span>
            </div>
          </div>
          <div class="flex  justify-center  mt-6 h-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200  w-full lg:w-[70%]">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                Contact
              </h5>
<<<<<<< HEAD
              <span class="text-sm text-gray-500 dark:text-gray-400">
=======
              <span class="text-l text-gray-500 dark:text-gray-400">
>>>>>>> 5ae8ee84cda22ecdb7ff1c53b25893f72b1df0e8
                {companyContact}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-full lg:w-[50%] ">
          <div class="flex  justify-center   mt-10 h-40 lg:h-[61%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200 w-full lg:w-[70%] ">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                Company Description
              </h5>
<<<<<<< HEAD
              <span class="text-sm text-gray-500 dark:text-gray-400">
=======
              <span class="text-l text-gray-500 dark:text-gray-400">
>>>>>>> 5ae8ee84cda22ecdb7ff1c53b25893f72b1df0e8
                {companyDescription}
              </span>
            </div>
          </div>
          <div class="flex  justify-center  mt-6 h-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200 w-full lg:w-[70%]">
            <div class="flex flex-col items-center justify-center ">
              <h5 class="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                Location
              </h5>
<<<<<<< HEAD
              <span class="text-sm text-gray-500 dark:text-gray-400">
=======
              <span class="text-l text-gray-500 dark:text-gray-400">
>>>>>>> 5ae8ee84cda22ecdb7ff1c53b25893f72b1df0e8
                {companyLocation}
              </span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="flex flex-col items-start w-full lg:w-[45%] ">
          <div class="flex  justify-center  mt-10 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200  w-full">
            <div class="flex flex-col items-center my-8 ">
              <h5 class="mb-10 text-l font-medium text-gray-900 dark:text-white">
=======
        <div className="flex flex-col items-start w-[45%] ">
          <div class="flex  justify-center  mt-10 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-blue-200  w-full">
            <div class="flex flex-col items-center mt-8 ">
              <h5 class="mb-10 text-lg font-medium text-gray-900 dark:text-white">
>>>>>>> 5ae8ee84cda22ecdb7ff1c53b25893f72b1df0e8
                Images
              </h5>
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
<<<<<<< HEAD
                src={images[0]}
=======
                src={companyImages}
>>>>>>> 5ae8ee84cda22ecdb7ff1c53b25893f72b1df0e8
                alt="Dummy image"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Profile;
